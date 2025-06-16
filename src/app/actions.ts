'use server';
import { personalizeContent, type PersonalizeContentInput, type PersonalizeContentOutput } from '@/ai/flows/personalize-content';
import { z } from 'zod';

const GetPersonalizedPromoContentInputSchema = z.object({
  location: z.string().min(1, "Location is required."),
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
  const dummyTrendingShows = ["Stranger Things", "Bridgerton", "The Witcher"];
  const dummyPopularContent = ["Squid Game", "Money Heist", "Extraction 2"];

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
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
    return { success: false, message: `Failed to personalize content: ${errorMessage}` };
  }
}
