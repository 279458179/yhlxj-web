import Image from 'next/image';
import { Container } from '@/components/container';

const visualContent = [
  { src: "https://cloudflare-r2-oss-d7p.pages.dev/raw/%E5%A6%88%E8%80%B6%E2%9D%97%EF%B8%8F%E6%92%AD%E4%BA%86%E6%92%AD%E4%BA%86%E2%9D%97%EF%B8%8FNetflix%20%E4%B8%80%E6%AC%A1%E6%80%A7%E6%94%BE%E5%87%BA%E2%9D%97%EF%B8%8F_12_%E5%98%9F%E5%98%9F%E6%8E%A8%E5%89%A7_%E6%9D%A5%E8%87%AA%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%BD%91%E9%A1%B5%E7%89%88.jpg", alt: "动作电影场景", dataAiHint: "动作片" },
  { src: "https://cloudflare-r2-oss-d7p.pages.dev/raw/%E5%A6%88%E8%80%B6%E2%9D%97%EF%B8%8F%E6%92%AD%E4%BA%86%E6%92%AD%E4%BA%86%E2%9D%97%EF%B8%8FNetflix%20%E4%B8%80%E6%AC%A1%E6%80%A7%E6%94%BE%E5%87%BA%E2%9D%97%EF%B8%8F_10_%E5%98%9F%E5%98%9F%E6%8E%A8%E5%89%A7_%E6%9D%A5%E8%87%AA%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%BD%91%E9%A1%B5%E7%89%88.jpg", alt: "喜剧电视节目剧照", dataAiHint: "喜剧节目" },
  { src: "https://cloudflare-r2-oss-d7p.pages.dev/raw/%E6%97%A0%E8%84%91%E7%96%AF%E6%89%B9%E9%9F%A9%E5%89%A7%EF%BC%8C%E7%9C%8B%E4%BA%86%E5%8F%AA%E6%83%B3%E8%AF%B4%F0%9F%86%98%E2%80%A6_7_%E5%A5%87%E8%91%A9%E5%B0%8F%E4%BB%99%E5%A5%B3_%E6%9D%A5%E8%87%AA%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%BD%91%E9%A1%B5%E7%89%88%20(1).jpg", alt: "动画系列角色", dataAiHint: "动画剧集" },
  { src: "https://cloudflare-r2-oss-d7p.pages.dev/raw/%E6%9D%A5%E8%87%AA%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%BD%91%E9%A1%B5%E7%89%88.jpg", alt: "纪录片风景", dataAiHint: "自然纪录片" },
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
