import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';
import { PlayIcon } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-transparent overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="https://cloudflare-r2-oss-d7p.pages.dev/raw/Netflix%20TV%E7%89%88%E7%95%8C%E9%9D%A2%E7%BB%88%E4%BA%8E%E6%9B%B4%E6%96%B0%E4%BA%86_1_S%E4%B8%A8R%E7%81%AC%E5%85%88%E7%9F%A5_%E6%9D%A5%E8%87%AA%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%BD%91%E9%A1%B5%E7%89%88.jpg"
          alt="电影场景背景拼贴画"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="电影拼贴"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <Container className="relative z-10 text-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 animate-fade-in-down">
          《银河录像局》
        </h1>
        <p className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          解锁娱乐宇宙
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          沉浸于数以千计的电影、电视剧和独家原创内容。您的下一个挚爱故事正等待着您。
        </p>
        <Link href="https://nf.video/NNv1V" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <PlayIcon className="mr-2 h-6 w-6" />
            立即开始观看
          </Button>
        </Link>
      </Container>
    </section>
  );
}
