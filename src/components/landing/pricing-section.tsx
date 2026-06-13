import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';

const PROMO_URL = 'https://nf.video/NNv1V';

const plans = [
  {
    name: '影音娱乐优先',
    bestFor: '适合追剧、看电影、听歌、看 YouTube 的用户',
    services: ['Netflix / Disney+', 'Spotify Premium', 'YouTube Premium'],
    points: ['看重片源、画质和设备支持', '希望减少广告打扰', '适合家庭、情侣或长期追剧用户'],
    cta: '查看影音订阅优惠',
  },
  {
    name: 'AI 效率工具优先',
    bestFor: '适合写作、设计、学习、办公和内容创作',
    services: ['GPT Plus', 'Midjourney', 'Gemini Pro'],
    points: ['关注开通流程和账号可用性', '需要稳定用于工作或学习', '适合高频使用者优先选择'],
    cta: '查看 AI 工具优惠',
    highlighted: true,
  },
  {
    name: '全家桶组合',
    bestFor: '适合影音和 AI 都有需求，希望集中管理的人',
    services: ['影音服务', 'AI 工具', '增值服务'],
    points: ['减少分散购买和续费麻烦', '适合长期复购用户', '优先关注售后和使用说明'],
    cta: '进入组合选择',
  },
];

export function PricingSection() {
  return (
    <section id="plans" className="bg-card py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">How To Choose</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            不直接堆价格，先帮用户选对服务
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Google 搜索来的用户往往目标明确，但仍会犹豫。用“场景”组织套餐，比单纯罗列服务更容易让用户继续点击。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col border-border bg-background shadow-xl ${
                plan.highlighted ? 'border-primary shadow-primary/15' : ''
              }`}
            >
              {plan.highlighted ? (
                <div className="rounded-t-md bg-primary px-4 py-2 text-center text-sm font-semibold text-primary-foreground">
                  高频用户推荐
                </div>
              ) : null}
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <p className="pt-2 text-sm leading-6 text-muted-foreground">{plan.bestFor}</p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6">
                <div>
                  <p className="mb-3 text-sm font-semibold text-primary">常见服务</p>
                  <div className="flex flex-wrap gap-2">
                    {plan.services.map((service) => (
                      <span key={service} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="space-y-3">
                  {plan.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href={PROMO_URL} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full" size="lg" variant={plan.highlighted ? 'default' : 'secondary'}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-primary/30 bg-primary/10 p-6 text-center md:p-8">
          <h3 className="text-2xl font-bold text-foreground">目标不变：把用户送到购买决策页</h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            本页负责承接搜索流量、解释价值、降低疑虑；最终按钮统一跳转到银河录像局推广链接，避免用户在站内迷路。
          </p>
          <Link href={PROMO_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-6 px-8">
              现在进入优惠入口
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
