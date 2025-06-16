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
          准备好沉浸其中了吗？
        </h3>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
          加入数百万订阅用户的行列，即刻开启您的电影之旅。难忘的故事仅一步之遥。
        </p>
        <Link href="https://nf.video/NNv1V" target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
             <PlayIcon className="mr-2 h-6 w-6" />
            订阅 Netflix
          </Button>
        </Link>
        <p className="text-sm text-muted-foreground mt-10">
          &copy; {currentYear} StreamVerse. 版权所有。这是一个 Netflix 推广网站。
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          Netflix 是 Netflix, Inc. 的注册商标。StreamVerse 是一项独立的推广服务。
        </p>
      </Container>
    </footer>
  );
}
