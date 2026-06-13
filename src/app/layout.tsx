import type { Metadata } from 'next';
import { Inter, Noto_Sans_SC } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansSc = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nf.myg2ray.top';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default: '银河录像局优惠入口 | Netflix、Spotify、YouTube Premium 与 AI 工具订阅',
    template: '%s | 银河录像局优惠入口',
  },
  description:
    '面向想要省心订阅流媒体和 AI 工具的用户，整理银河录像局 Netflix、Disney+、Spotify、YouTube Premium、GPT Plus、Midjourney 等服务入口、适用人群、购买建议与常见问题。',
  keywords: [
    '银河录像局',
    'Netflix 合租',
    'Spotify Premium',
    'YouTube Premium',
    'Disney+',
    'GPT Plus',
    'Midjourney',
    'AI 工具订阅',
    '流媒体订阅',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    title: '银河录像局优惠入口',
    description: '一页看懂流媒体与 AI 工具订阅怎么选，快速进入银河录像局优惠购买页。',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: '家庭客厅观看流媒体内容',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${notoSansSc.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
