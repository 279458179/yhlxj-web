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
  personalizedContent: z.string().describe('个性化的中文推广内容。'),
});
export type PersonalizeContentOutput = z.infer<typeof PersonalizeContentOutputSchema>;

export async function personalizeContent(input: PersonalizeContentInput): Promise<PersonalizeContentOutput> {
  return personalizeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeContentPrompt',
  input: {schema: PersonalizeContentInputSchema},
  output: {schema: PersonalizeContentOutputSchema},
  prompt: `你是一个人工智能助手，旨在为 Netflix 创建个性化的推广内容。

  根据用户的地理位置、热门节目和其所在地区的流行内容，生成引人注目的推广内容，以鼓励他们订阅 Netflix。
  回应必须是中文。
  地点：{{{location}}}
  热门节目：{{#each trendingShows}}{{{this}}}{{#unless @last}}、 {{/unless}}{{/each}}
  流行内容：{{#each popularContent}}{{{this}}}{{#unless @last}}、 {{/unless}}{{/each}}

  创建突出相关节目和电影的内容，并吸引用户订阅。重点关注在其所在地区既热门又流行的特定节目。
  不要包含任何用户的个人信息，也不要对用户的种族、宗教、信仰、肤色、国籍、血统、残疾、婚姻状况、性别、性别认同或表达、性取向或军人或退伍军人身份进行假设。
  请注意，Gemini 内置了安全过滤器，可能会阻止某些内容的生成，因此您可能需要尝试几次。
  不要提及内容是个性化的。力求自然。
  力求简洁。内容应少于 100 个汉字。
  不要包含任何话题标签。
  不要包含任何表情符号。
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
