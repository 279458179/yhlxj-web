import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';
import { Film, Smartphone, Tv2, DownloadCloud, Users, Smile } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Film,
    title: '无尽娱乐',
    description: '访问海量电影、电视剧、纪录片和屡获殊荣的 Netflix 原创作品。',
  },
  {
    icon: Smartphone,
    title: '随时随地观看',
    description: '在您的手机、平板电脑、笔记本电脑或电视上流畅播放。您的节目与您同行。',
  },
  {
    icon: DownloadCloud,
    title: '下载即走',
    description: '保存您喜爱的内容，以便在没有互联网连接的情况下离线观看。',
  },
  {
    icon: Users,
    title: '家庭友好账户',
    description: '最多可创建五个用户账户，让家庭中的每个人都能拥有自己的个性化 Netflix。',
  },
  {
    icon: Tv2,
    title: '无广告，无干扰',
    description: '完全无广告，尽情享受您的观看体验。纯粹的娱乐。',
  },
  {
    icon: Smile,
    title: '灵活套餐',
    description: '选择适合您需求的套餐。无合约，随时取消。',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          为什么选择 Netflix？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card border-border shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl text-foreground text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
