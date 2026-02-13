import Image from 'next/image';
import { Container } from '@/components/container';

const visualContent = [
  { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop", alt: "动作电影场景", dataAiHint: "动作片" },
  { src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop", alt: "Netflix 标志性画面", dataAiHint: "品牌标志" },
  { src: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=800&auto=format&fit=crop", alt: "动画系列角色", dataAiHint: "动画剧集" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", alt: "纪录片风景", dataAiHint: "自然纪录片" },
  { src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop", alt: "经典电影剧照", dataAiHint: "经典电影" },
  { src: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop", alt: "悬疑剧集氛围", dataAiHint: "悬疑剧" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
