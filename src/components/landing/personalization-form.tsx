'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { getPersonalizedPromoContentAction, type GetPersonalizedPromoContentInput } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from 'lucide-react';
import { Container } from '@/components/container';

const FormSchema = z.object({
  location: z.string().min(2, { message: "Please enter your city or region." }),
});

type FormData = z.infer<typeof FormSchema>;

export function PersonalizationForm() {
  const [personalizedContent, setPersonalizedContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      location: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setPersonalizedContent(null);

    const actionInput: GetPersonalizedPromoContentInput = { location: data.location };
    const result = await getPersonalizedPromoContentAction(actionInput);

    setIsLoading(false);
    if (result.success && result.data) {
      setPersonalizedContent(result.data.personalizedContent);
    } else {
      toast({
        variant: "destructive",
        title: "Personalization Failed",
        description: result.message || "Could not generate personalized content.",
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <Card className="max-w-2xl mx-auto bg-card border-border shadow-xl">
          <CardHeader className="text-center">
            <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="font-headline text-3xl md:text-4xl text-foreground">Get Your Personalized Netflix Teaser!</CardTitle>
            <CardDescription className="text-muted-foreground">
              Tell us where you are, and we&apos;ll craft a special sneak peek just for you.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-6">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="location" className="text-lg">Your Location (e.g., London, Tokyo)</FormLabel>
                      <FormControl>
                        <Input 
                          id="location" 
                          placeholder="Enter your city or region" 
                          {...field} 
                          className="text-base py-3"
                          aria-describedby="location-error"
                        />
                      </FormControl>
                      <FormMessage id="location-error" />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button type="submit" disabled={isLoading} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Get My Teaser
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Form>
          {personalizedContent && (
            <div className="p-6 mt-6 border-t border-border">
              <h3 className="font-headline text-2xl text-primary mb-3 text-center">Your Personalized Netflix Welcome:</h3>
              <p className="text-lg text-foreground bg-secondary p-4 rounded-md shadow text-center">{personalizedContent}</p>
            </div>
          )}
        </Card>
      </Container>
    </section>
  );
}
