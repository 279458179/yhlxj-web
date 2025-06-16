import { HeroSection } from '@/components/landing/hero-section';
import { BenefitsSection } from '@/components/landing/benefits-section';
import { VisualsSection } from '@/components/landing/visuals-section';
import { PersonalizationForm } from '@/components/landing/personalization-form';
import { PricingSection } from '@/components/landing/pricing-section';
import { FooterSection } from '@/components/landing/footer-section';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <VisualsSection />
      <PersonalizationForm />
      <PricingSection />
      <FooterSection />
    </main>
  );
}
