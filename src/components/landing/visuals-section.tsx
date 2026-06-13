import Image from 'next/image';
import { Container } from '@/components/container';

const visualContent = [
  {
    src: '/images/netflix-watching.jpg',
    alt: '家庭使用大屏观看流媒体内容',
    title: '客厅大屏追剧',
    description: '适合 Netflix、Disney+ 等高清内容消费。',
  },
  {
    src: '/images/netflix-mobile.jpg',
    alt: '手机端观看流媒体内容',
    title: '手机和平板随时看',
    description: '移动端用户关心登录、设备数量和观看稳定性。',
  },
  {
    src: '/images/netflix-popcorn.jpg',
    alt: '电影零食和家庭观影场景',
    title: '周末电影和家庭娱乐',
    description: '家庭、情侣和朋友共享场景更容易形成长期订阅。',
  },
];

const decisionSteps = [
  '先确认主要需求：影音、音乐、AI 工具，还是组合订阅。',
  '再查看服务说明：账号类型、使用限制、售后规则和适用地区。',
  '最后进入优惠入口，根据当前页面展示的实际商品下单。',
];

export function VisualsSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Content Strategy</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              页面内容要让用户感觉“我来对地方了”
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              推广站的关键不是写得多，而是在每一屏回答用户的下一句疑问。用户从 Google 进来后，应该立刻看到服务范围、适用场景、购买入口和必要提醒。
            </p>
            <ol className="mt-8 space-y-4">
              {decisionSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-md border border-border bg-card p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-7 text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {visualContent.map((item) => (
              <article key={item.title} className="grid gap-4 rounded-lg border border-border bg-card p-4 shadow-lg sm:block lg:grid lg:grid-cols-[180px_1fr]">
                <div className="relative aspect-video overflow-hidden rounded-md lg:aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 33vw, 180px"
                  />
                </div>
                <div className="mt-4 sm:mt-4 lg:mt-0">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
