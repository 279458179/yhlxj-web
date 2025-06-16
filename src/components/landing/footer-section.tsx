import { Container } from '@/components/container';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayIcon } from 'lucide-react';


export function FooterSection() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 bg-background border-t border-border">
      <Container className="text-center">
        <h3 className="font-headline text-3xl text-primary mb-6">
          Ready to Dive In?
        </h3>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          Join millions of subscribers and start your cinematic journey today. Unforgettable stories are just a click away.
        </p>
        <Link href="https://nf.video/NNv1V" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
             <PlayIcon className="mr-2 h-6 w-6" />
            Subscribe to Netflix
          </Button>
        </Link>
        <p className="text-sm text-muted-foreground mt-10">
          &copy; {currentYear} StreamVerse. All rights reserved. This is a promotional website for Netflix.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          Netflix is a registered trademark of Netflix, Inc. StreamVerse is an independent promotional service.
        </p>
      </Container>
    </footer>
  );
}
