import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';

const PROMO_URL = 'https://nf.video/NNv1V';

const checks = [
  '确认你要购买的是影音、音乐、AI 工具还是组合服务。',
  '进入购买页后，以目标站展示的实时商品、价格和说明为准。',
  '下单前阅读账号类型、售后规则、可用地区和使用限制。',
  '长期使用优先选择有明确说明和售后渠道的服务。',
];

const faqs = [
  {
    question: '这个页面适合投 Google 吗？',
    answer:
      '适合做搜索承接页。它围绕用户真实搜索意图组织内容，包括服务范围、适用人群、购买前注意事项和清晰 CTA，比单纯品牌介绍更容易承接购买需求。',
  },
  {
    question: '为什么不只写 Netflix？',
    answer:
      '目标站覆盖影音、AI、路由器和增值服务等类别。页面如果只讲 Netflix，会浪费 Spotify、YouTube Premium、GPT Plus、Midjourney 等搜索流量。',
  },
  {
    question: '页面里的价格要不要固定写死？',
    answer:
      '不建议把具体价格写死在站内，除非你能长期维护。更稳的方式是讲清选择逻辑，并提示最终价格以推广目标页实时展示为准。',
  },
  {
    question: '推广按钮应该放几次？',
    answer:
      '首屏、中段选择区、FAQ 后和页脚都应该有入口。用户的决策时机不同，重复 CTA 可以减少回滚寻找按钮的成本。',
  },
];

export function PersonalizationForm() {
  return (
    <section id="faq" className="bg-card py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border border-border bg-background p-6 shadow-xl md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Before Buying</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground">
              进入购买页前，先确认这几件事
            </h2>
            <ul className="mt-7 space-y-4">
              {checks.map((check) => (
                <li key={check} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{check}</span>
                </li>
              ))}
            </ul>
            <Link href={PROMO_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="mt-8 w-full">
                我已了解，进入优惠入口
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <HelpCircle className="h-7 w-7 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground">常见问题</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-lg border border-border bg-background p-5">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
