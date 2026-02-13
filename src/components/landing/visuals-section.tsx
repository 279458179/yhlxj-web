import Image from 'next/image';
import { Container } from '@/components/container';

const visualContent = [
  { src: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=800&auto=format&fit=crop", alt: "动作电影场景", dataAiHint: "动作片" },
  { src: "https://images.unsplash.com/photo-1586105251261-72a75664b8c1?q=80&w=800&auto=format&fit=crop", alt: "喜剧电视节目剧照", dataAiHint: "喜剧节目" },
  { src: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=800&auto=format&fit=crop", alt: "动画系列角色", dataAiHint: "动画剧集" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", alt: "纪录片风景", dataAiHint: "自然纪录片" },
];

export function VisualsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <Container>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          一个充满故事的世界
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          从备受好评的剧情片到令人捧腹的喜剧和引人入胜的纪录片，总有新的发现等待着您。
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
