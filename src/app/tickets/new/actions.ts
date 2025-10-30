'use server';

import { z } from 'zod';
import { addTicket } from '@/lib/data';
import { autoTagSupportTicket } from '@/ai/flows/auto-tag-support-tickets';
import { redirect } from 'next/navigation';

const ticketFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitTicket(prevState: any, formData: FormData) {
  const validatedFields = ticketFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check the fields.',
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const autoTags = await autoTagSupportTicket({
        ticketSubject: subject,
        ticketMessage: message,
    });

    await addTicket({
        name,
        email,
        subject,
        message,
        ...autoTags,
    });
    
  } catch (error) {
    console.error('Error submitting ticket:', error);
    return {
      message: 'An unexpected error occurred while submitting the ticket.',
      errors: { _form: 'Server error' },
    };
  }

  redirect('/tickets');
}
