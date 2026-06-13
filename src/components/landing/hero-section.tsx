import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';

const PROMO_URL = 'https://nf.video/NNv1V';

const highlights = [
  { icon: BadgeCheck, text: '官方入口跳转' },
  { icon: ShieldCheck, text: '售后与使用指引' },
  { icon: Clock, text: '适合长期订阅用户' },
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="在客厅大屏观看流媒体内容"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/88 to-background" />
      </div>

      <Container className="min-h-[720px] py-10 md:py-16">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-foreground">
            银河录像局优惠入口
          </Link>
          <Link href={PROMO_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="hidden sm:inline-flex">
              进入购买页
            </Button>
          </Link>
        </header>

        <div className="grid min-h-[600px] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              Netflix、Spotify、YouTube Premium、GPT Plus 等订阅服务聚合入口
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              想省心开通流媒体和 AI 工具？先看这份银河录像局订阅指南
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              面向经常追剧、听歌、看 YouTube、使用 ChatGPT 或 Midjourney 的用户，整理常见订阅选择、适合人群、购买前注意事项，并引导你快速进入银河录像局优惠页。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={PROMO_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full px-8 py-6 text-base sm:w-auto">
                  立即领取优惠入口
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#plans">
                <Button size="lg" variant="secondary" className="w-full px-8 py-6 text-base sm:w-auto">
                  先看怎么选
                </Button>
              </Link>
            </div>

            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-center gap-3 rounded-md border border-border bg-card/80 px-4 py-3">
                  <item.icon className="h-5 w-5 text-primary" />
                  <dt className="text-sm text-foreground">{item.text}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-lg border border-border bg-card/90 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-medium text-primary">适合这些搜索用户</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <li>
                <strong className="text-foreground">影音用户：</strong>
                想看 Netflix、Disney+、YouTube Premium，关注价格、清晰度、设备支持和稳定性。
              </li>
              <li>
                <strong className="text-foreground">音乐用户：</strong>
                需要 Spotify Premium 或家庭订阅，想减少广告和跨设备使用。
              </li>
              <li>
                <strong className="text-foreground">AI 工具用户：</strong>
                想开通 GPT Plus、Midjourney、Gemini Pro 等工具，希望流程更清楚、售后更省心。
              </li>
            </ul>
            <div className="mt-6 rounded-md bg-primary/10 p-4 text-sm leading-7 text-foreground">
              推广重点：用户已经有明确购买意图，页面要做的是帮他快速确认“买什么、怎么买、是否靠谱”，再给出清晰跳转入口。
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
