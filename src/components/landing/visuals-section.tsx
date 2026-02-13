import Image from 'next/image';
import { Container } from '@/components/container';

const visualContent = [
  { src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop", alt: "Netflix 标志性红标", dataAiHint: "品牌标志" },
  { src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop", alt: "手机上的 Netflix 界面", dataAiHint: "移动端体验" },
  { src: "https://images.unsplash.com/photo-1512070800540-0d4192faa057?q=80&w=800&auto=format&fit=crop", alt: "正在观看 Netflix", dataAiHint: "家庭娱乐" },
  { src: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=800&auto=format&fit=crop", alt: "爆米花与电影之夜", dataAiHint: "观影氛围" },
  { src: "https://images.unsplash.com/photo-1522869635100-8f47562584a5?q=80&w=800&auto=format&fit=crop", alt: "Netflix 电视界面", dataAiHint: "大屏体验" },
  { src: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&w=800&auto=format&fit=crop", alt: "享受流媒体时光", dataAiHint: "休闲时刻" },
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
