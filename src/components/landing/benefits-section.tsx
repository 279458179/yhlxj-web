import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';
import { Film, Smartphone, Tv2, DownloadCloud, Users, Smile } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Film,
    title: 'Endless Entertainment',
    description: 'Access a vast library of movies, TV shows, documentaries, and award-winning Netflix originals.',
  },
  {
    icon: Smartphone,
    title: 'Watch Anywhere, Anytime',
    description: 'Stream on your phone, tablet, laptop, or TV. Your shows travel with you.',
  },
  {
    icon: DownloadCloud,
    title: 'Download & Go',
    description: 'Save your favorites to watch offline on the go, without an internet connection.',
  },
  {
    icon: Users,
    title: 'Family Friendly Profiles',
    description: 'Create up to five profiles, so everyone in your family can have their own personalized Netflix.',
  },
  {
    icon: Tv2,
    title: 'No Ads, No Interruptions',
    description: 'Enjoy your viewing experience completely ad-free. Pure entertainment.',
  },
  {
    icon: Smile,
    title: 'Flexible Plans',
    description: 'Choose a plan that fits your needs. No commitments, cancel anytime.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Why Choose Netflix?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl text-foreground text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
