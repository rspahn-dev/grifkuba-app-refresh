'use server';

import { z } from 'zod';
import { addMessage } from '@/lib/data';

const messageFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitMessage(prevState: any, formData: FormData) {
  const validatedFields = messageFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the fields.',
      success: false,
    };
  }

  try {
    await addMessage(validatedFields.data);
    return {
      message: 'Your message has been sent successfully! We will get back to you soon.',
      errors: {},
      success: true,
    };
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      message: 'An unexpected error occurred.',
      errors: {},
      success: false,
    };
  }
}
