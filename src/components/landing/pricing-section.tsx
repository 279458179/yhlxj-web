import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';
import { CheckCircle2, TrendingUp } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  priceDetails: string;
  features: PlanFeature[];
  ctaText: string;
  highlight?: boolean;
  promotion?: string;
}

const plans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '$9.99',
    priceDetails: '/month',
    features: [
      { text: 'Good video quality (720p)', included: true },
      { text: 'Watch on 1 supported device at a time', included: true },
      { text: 'Unlimited movies, TV shows, and mobile games', included: true },
      { text: 'Download on 1 supported device at a time', included: true },
    ],
    ctaText: 'Choose Basic',
  },
  {
    name: 'Standard',
    price: '$15.49',
    priceDetails: '/month',
    features: [
      { text: 'Great video quality (1080p)', included: true },
      { text: 'Watch on 2 supported devices at a time', included: true },
      { text: 'Unlimited movies, TV shows, and mobile games', included: true },
      { text: 'Download on 2 supported devices at a time', included: true },
      { text: 'Option to add 1 extra member who doesn\'t live with you', included: false }, // Example of a feature not included/upgrade
    ],
    ctaText: 'Choose Standard',
    highlight: true,
    promotion: 'Most Popular!',
  },
  {
    name: 'Premium',
    price: '$22.99',
    priceDetails: '/month',
    features: [
      { text: 'Our best video quality (4K+HDR)', included: true },
      { text: 'Watch on 4 supported devices at a time', included: true },
      { text: 'Unlimited movies, TV shows, and mobile games', included: true },
      { text: 'Download on 6 supported devices at a time', included: true },
      { text: 'Netflix spatial audio', included: true },
      { text: 'Option to add up to 2 extra members who don\'t live with you', included: false }, // Example
    ],
    ctaText: 'Choose Premium',
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Flexible Plans for Everyone
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan that fits your entertainment needs. Cancel anytime, no hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col ${plan.highlight ? 'border-primary border-2 shadow-2xl transform scale-105' : 'border-border shadow-xl'} hover:shadow-2xl transition-all duration-300 bg-background`}
            >
              {plan.promotion && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold py-1 px-4 rounded-t-md text-center">
                  {plan.promotion}
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className={`font-headline text-3xl ${plan.highlight ? 'text-primary' : 'text-foreground'}`}>{plan.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-foreground mt-2">
                  {plan.price}<span className="text-base font-normal text-muted-foreground">{plan.priceDetails}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                      <CheckCircle2 className={`mr-3 h-5 w-5 ${feature.included ? 'text-primary' : 'text-muted'}`} />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href="https://nf.video/NNv1V" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    size="lg" 
                    className={`w-full text-lg py-3 ${plan.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            <TrendingUp className="inline-block mr-2 h-5 w-5 text-primary" />
            Limited-time offer: Sign up today and get your first month at a special price! (Promotional text, link to specific offer if available)
          </p>
        </div>
      </Container>
    </section>
  );
}
