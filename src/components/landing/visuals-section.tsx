import Image from 'next/image';
import { Container } from '@/components/container';

const visualContent = [
  { src: "/images/netflix-logo.jpg", alt: "Netflix 标志性红标", dataAiHint: "品牌标志" },
  { src: "/images/netflix-mobile.jpg", alt: "手机上的 Netflix 界面", dataAiHint: "移动端体验" },
  { src: "/images/netflix-watching.jpg", alt: "正在观看 Netflix", dataAiHint: "家庭娱乐" },
  { src: "/images/netflix-popcorn.jpg", alt: "爆米花与电影之夜", dataAiHint: "观影氛围" },
  { src: "/images/netflix-theater.jpg", alt: "家庭影院氛围", dataAiHint: "大屏体验" },
  { src: "/images/netflix-relax.jpg", alt: "享受流媒体时光", dataAiHint: "休闲时刻" },
];

export function VisualsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <Container>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          一个充满精彩故事的世界
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          从备受好评的剧情片到令人捧腹的喜剧和引人入胜的纪录片，总有新的发现等待着您。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visualContent.map((item, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                data-ai-hint={item.dataAiHint}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
