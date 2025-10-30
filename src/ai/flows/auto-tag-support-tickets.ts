'use server';

/**
 * @fileOverview This file defines a Genkit flow to automatically tag support tickets with relevant keywords and urgency levels using an LLM.
 *
 * - autoTagSupportTicket - A function that handles the auto-tagging of support tickets.
 * - AutoTagSupportTicketInput - The input type for the autoTagSupportTicket function.
 * - AutoTagSupportTicketOutput - The return type for the autoTagSupportTicket function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoTagSupportTicketInputSchema = z.object({
  ticketSubject: z.string().describe('The subject line of the support ticket.'),
  ticketMessage: z.string().describe('The full text description of the support ticket.'),
});
export type AutoTagSupportTicketInput = z.infer<
  typeof AutoTagSupportTicketInputSchema
>;

const AutoTagSupportTicketOutputSchema = z.object({
  keywords: z
    .array(z.string())
    .describe(
      'A list of keywords extracted from the ticket, suitable for categorization.'
    ),
  urgency: z
    .enum(['high', 'medium', 'low'])
    .describe(
      'The urgency level of the ticket, based on the content and subject.'
    ),
});
export type AutoTagSupportTicketOutput = z.infer<
  typeof AutoTagSupportTicketOutputSchema
>;

export async function autoTagSupportTicket(
  input: AutoTagSupportTicketInput
): Promise<AutoTagSupportTicketOutput> {
  return autoTagSupportTicketFlow(input);
}

const autoTagSupportTicketPrompt = ai.definePrompt({
  name: 'autoTagSupportTicketPrompt',
  input: {schema: AutoTagSupportTicketInputSchema},
  output: {schema: AutoTagSupportTicketOutputSchema},
  prompt: `You are an AI assistant helping to triage support tickets. Analyze the subject and message of the ticket to identify relevant keywords and determine the urgency level.

Subject: {{{ticketSubject}}}
Message: {{{ticketMessage}}}

Provide the keywords as a list of strings and the urgency as one of "high", "medium", or "low".  High urgency should be reserved for issues that are blocking a user or system from functioning.
Ensure that the output is valid JSON conforming to the schema.`, 
});

const autoTagSupportTicketFlow = ai.defineFlow(
  {
    name: 'autoTagSupportTicketFlow',
    inputSchema: AutoTagSupportTicketInputSchema,
    outputSchema: AutoTagSupportTicketOutputSchema,
  },
  async input => {
    const {output} = await autoTagSupportTicketPrompt(input);
    return output!;
  }
);
