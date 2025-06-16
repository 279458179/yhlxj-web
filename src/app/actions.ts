'use server';
import { personalizeContent, type PersonalizeContentInput, type PersonalizeContentOutput } from '@/ai/flows/personalize-content';
import { z } from 'zod';

const GetPersonalizedPromoContentInputSchema = z.object({
  location: z.string().min(1, "位置是必填项。"),
  // For simplicity, we'll use fixed trending/popular shows, but this could be dynamic
});

export type GetPersonalizedPromoContentInput = z.infer<typeof GetPersonalizedPromoContentInputSchema>;

interface ActionResult {
  success: boolean;
  message?: string;
  data?: PersonalizeContentOutput;
}

export async function getPersonalizedPromoContentAction(
  input: GetPersonalizedPromoContentInput
): Promise<ActionResult> {
  const validationResult = GetPersonalizedPromoContentInputSchema.safeParse(input);
  if (!validationResult.success) {
    return { success: false, message: validationResult.error.errors.map(e => e.message).join(', ') };
  }

  // Placeholder data for trending and popular shows
  // In a real app, this might come from an API or be more dynamic
  const dummyTrendingShows = ["怪奇物语", "布里奇顿", "猎魔人"]; // Example: Stranger Things, Bridgerton, The Witcher
  const dummyPopularContent = ["鱿鱼游戏", "纸钞屋", "惊天营救2"]; // Example: Squid Game, Money Heist, Extraction 2

  const aiInput: PersonalizeContentInput = {
    location: validationResult.data.location,
    trendingShows: dummyTrendingShows,
    popularContent: dummyPopularContent,
  };

  try {
    const result = await personalizeContent(aiInput);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error personalizing content:", error);
    // Check if error is an instance of Error to safely access message property
    const errorMessage = error instanceof Error ? error.message : "发生意外错误。";
    return { success: false, message: `个性化内容失败： ${errorMessage}` };
  }
}
