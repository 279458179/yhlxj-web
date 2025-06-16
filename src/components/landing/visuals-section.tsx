import Image from 'next/image';
import { Container } from '@/components/container';

const visualContent = [
  { src: "https://placehold.co/600x400.png", alt: "Action movie scene", dataAiHint: "action movie" },
  { src: "https://placehold.co/600x400.png", alt: "Comedy TV show still", dataAiHint: "comedy show" },
  { src: "https://placehold.co/600x400.png", alt: "Animated series character", dataAiHint: "animated series" },
  { src: "https://placehold.co/600x400.png", alt: "Documentary landscape", dataAiHint: "documentary nature" },
];

export function VisualsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <Container>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          A World of Stories
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          From critically acclaimed dramas to laugh-out-loud comedies and captivating documentaries, there's always something new to discover.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visualContent.map((item, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint={item.dataAiHint}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
