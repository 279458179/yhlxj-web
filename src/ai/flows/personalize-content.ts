// src/ai/flows/personalize-content.ts
'use server';
/**
 * @fileOverview A content personalization AI agent.
 *
 * - personalizeContent - A function that handles the content personalization process.
 * - PersonalizeContentInput - The input type for the personalizeContent function.
 * - PersonalizeContentOutput - The return type for the personalizeContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeContentInputSchema = z.object({
  location: z.string().describe('The geographical location of the user.'),
  trendingShows: z.array(z.string()).describe('A list of trending shows.'),
  popularContent: z.array(z.string()).describe('A list of popular content in the user\'s region.'),
});
export type PersonalizeContentInput = z.infer<typeof PersonalizeContentInputSchema>;

const PersonalizeContentOutputSchema = z.object({
  personalizedContent: z.string().describe('The personalized promotional content.'),
});
export type PersonalizeContentOutput = z.infer<typeof PersonalizeContentOutputSchema>;

export async function personalizeContent(input: PersonalizeContentInput): Promise<PersonalizeContentOutput> {
  return personalizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeContentPrompt',
  input: {schema: PersonalizeContentInputSchema},
  output: {schema: PersonalizeContentOutputSchema},
  prompt: `You are an AI assistant designed to create personalized promotional content for Netflix.

  Given the user's geographical location, trending shows, and popular content in their region, generate compelling promotional content to encourage them to subscribe to Netflix.
  Location: {{{location}}}
  Trending Shows: {{#each trendingShows}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Popular Content: {{#each popularContent}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Create content that highlights relevant shows and movies, and entices the user to subscribe. Focus on specific shows that are both trending and popular in their region.
  DO NOT include any personal information about the user, or make assumptions of the user's race, religion, creed, color, national origin, ancestry, disability, marital status, sex, gender identity or expression, sexual orientation, or military or veteran status.
  Be aware that Gemini has built-in safety filters which might block certain content generation, so you may need to try a few times.
  Do not mention that the content is personalized. Be natural.
  Be concise. The content should be less than 200 characters.
  Do not include any hashtags.
  Do not include any emojis.
  `,
});

const personalizeContentFlow = ai.defineFlow(
  {
    name: 'personalizeContentFlow',
    inputSchema: PersonalizeContentInputSchema,
    outputSchema: PersonalizeContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
