import type { LucideIcon } from 'lucide-react';
import { Bot, CircleDollarSign, Headphones, MonitorPlay, RefreshCcw, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: CircleDollarSign,
    title: '降低试错成本',
    description: '把高频订阅集中比较，先看适用场景和购买建议，再决定是否进入优惠页。',
  },
  {
    icon: MonitorPlay,
    title: '覆盖主流影音需求',
    description: '适合追 Netflix、Disney+、YouTube Premium、Spotify 的用户，重点解决观看、听歌和跨设备使用。',
  },
  {
    icon: Bot,
    title: '兼顾 AI 工具用户',
    description: '关注 GPT Plus、Midjourney、Gemini Pro 等工具订阅，适合创作者、学生和效率办公人群。',
  },
  {
    icon: ShieldCheck,
    title: '购买前先讲清风险',
    description: '明确提醒账号类型、地区、使用规则和售后边界，减少冲动下单后的误解。',
  },
  {
    icon: Headphones,
    title: '强调售后与指引',
    description: '用户不是只想便宜，还想知道开通后怎么用、遇到问题找谁、是否有教程。',
  },
  {
    icon: RefreshCcw,
    title: '适合长期复购',
    description: '流媒体和 AI 工具都是持续使用型服务，页面重点引导用户建立稳定购买路径。',
  },
];

export function BenefitsSection() {
  return (
    <section id="audience" className="bg-background py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Audience Insight</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            这个站点的核心受众，不是随便逛逛的人
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            他们通常已经在搜索某个订阅服务，关心“价格是否划算、服务是否稳定、开通是否麻烦、出了问题有没有人处理”。页面应该围绕这些顾虑组织内容。
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="border-border bg-card shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-primary/10">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
