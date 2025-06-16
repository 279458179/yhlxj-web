import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';
import { CheckCircle2, TrendingUp } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  priceDetails: string;
  features: PlanFeature[];
  ctaText: string;
  highlight?: boolean;
  promotion?: string;
}

const plans: PricingPlan[] = [
  {
    name: '基础版',
    price: '¥68', // Placeholder price, adjust as needed
    priceDetails: '/月',
    features: [
      { text: '良好画质 (720p)', included: true },
      { text: '可同时在 1 台受支持设备上观看', included: true },
      { text: '无限量电影、电视剧和手机游戏', included: true },
      { text: '可同时在 1 台受支持设备上下载', included: true },
    ],
    ctaText: '选择基础版',
  },
  {
    name: '标准版',
    price: '¥98', // Placeholder price
    priceDetails: '/月',
    features: [
      { text: '优质画质 (1080p)', included: true },
      { text: '可同时在 2 台受支持设备上观看', included: true },
      { text: '无限量电影、电视剧和手机游戏', included: true },
      { text: '可同时在 2 台受支持设备上下载', included: true },
      { text: '可添加 1 位与您不同住的额外会员', included: false }, 
    ],
    ctaText: '选择标准版',
    highlight: true,
    promotion: '最受欢迎！',
  },
  {
    name: '高级版',
    price: '¥128', // Placeholder price
    priceDetails: '/月',
    features: [
      { text: '最佳画质 (4K+HDR)', included: true },
      { text: '可同时在 4 台受支持设备上观看', included: true },
      { text: '无限量电影、电视剧和手机游戏', included: true },
      { text: '可同时在 6 台受支持设备上下载', included: true },
      { text: 'Netflix 空间音频', included: true },
      { text: '可添加最多 2 位与您不同住的额外会员', included: false },
    ],
    ctaText: '选择高级版',
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            灵活套餐，满足所有需求
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            选择最适合您娱乐需求的完美套餐。随时取消，无隐藏费用。
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`flex flex-col ${plan.highlight ? 'border-primary border-2 shadow-2xl transform scale-105' : 'border-border shadow-xl'} hover:shadow-2xl transition-all duration-300 bg-background`}
            >
              {plan.promotion && (
                <div className="bg-primary text-primary-foreground text-sm font-semibold py-1 px-4 rounded-t-md text-center">
                  {plan.promotion}
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className={`font-headline text-3xl ${plan.highlight ? 'text-primary' : 'text-foreground'}`}>{plan.name}</CardTitle>
                <CardDescription className="text-4xl font-bold text-foreground mt-2">
                  {plan.price}<span className="text-base font-normal text-muted-foreground">{plan.priceDetails}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-center ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                      <CheckCircle2 className={`mr-3 h-5 w-5 ${feature.included ? 'text-primary' : 'text-muted'}`} />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href="https://nf.video/NNv1V" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button 
                    size="lg" 
                    className={`w-full text-lg py-3 ${plan.highlight ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'}`}
                  >
                    {plan.ctaText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            <TrendingUp className="inline-block mr-2 h-5 w-5 text-primary" />
            限时优惠：立即注册，首月即享特价！（推广文本，如有特定优惠链接可添加）
          </p>
        </div>
      </Container>
    </section>
  );
}
