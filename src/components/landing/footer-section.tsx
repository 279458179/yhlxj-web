import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';

const PROMO_URL = 'https://nf.video/NNv1V';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">准备好选择订阅服务了吗？</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              点击进入银河录像局推广页，查看当前可购买的流媒体、音乐和 AI 工具服务。具体商品、价格、库存和售后说明以目标页实时展示为准。
            </p>
          </div>
          <Link href={PROMO_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="w-full px-8 md:w-auto">
              进入银河录像局
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs leading-6 text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>&copy; {currentYear} 银河录像局优惠入口。本站为推广导购页面。</p>
          <p>Netflix、Spotify、YouTube、Disney+、OpenAI 等名称归各自权利方所有。</p>
        </div>
      </Container>
    </footer>
  );
}
