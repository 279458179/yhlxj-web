import { BenefitsSection } from '@/components/landing/benefits-section';
import { FooterSection } from '@/components/landing/footer-section';
import { HeroSection } from '@/components/landing/hero-section';
import { PersonalizationForm } from '@/components/landing/personalization-form';
import { PricingSection } from '@/components/landing/pricing-section';
import { VisualsSection } from '@/components/landing/visuals-section';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '银河录像局优惠入口',
  description: '流媒体、音乐和 AI 工具订阅服务导购页面，帮助用户了解适用场景并进入银河录像局推广页。',
  inLanguage: 'zh-CN',
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '这个页面适合投 Google 吗？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '适合做搜索承接页。页面围绕用户真实搜索意图组织内容，包括服务范围、适用人群、购买前注意事项和清晰 CTA。',
        },
      },
      {
        '@type': 'Question',
        name: '为什么不只写 Netflix？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '目标服务覆盖影音、音乐和 AI 工具。页面同时覆盖 Spotify、YouTube Premium、GPT Plus、Midjourney 等搜索需求。',
        },
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <BenefitsSection />
        <PricingSection />
        <VisualsSection />
        <PersonalizationForm />
        <FooterSection />
      </main>
    </>
  );
}
