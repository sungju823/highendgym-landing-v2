import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = "https://highendgym-landing-260406.vercel.app";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HIGHENDGYM | 프리미엄 피트니스 센터 — 동일점·수유점",
    template: "%s | HIGHENDGYM",
  },
  description:
    "유일무이한, 책 쓰는 운동 사업가 안성주 대표의 프리미엄 피트니스. 1:1 맞춤 PT, 회원 수 제한 운영, 월간 리포트 제공. 동일점·수유점에서 당신의 변화를 시작하세요.",
  alternates: {
    canonical: siteUrl,
    languages: { ko: `${siteUrl}/` },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "HIGHENDGYM | 프리미엄 피트니스 센터",
    description:
      "당신이 운동을 포기한 건, 의지가 약해서가 아닙니다. 환경이 당신의 수준에 맞지 않았던 것입니다. 지금껏 경험해보지 못한 방식으로 운동이 시작됩니다.",
    siteName: "HIGHENDGYM",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "HIGHENDGYM 프리미엄 피트니스 센터",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIGHENDGYM | 프리미엄 피트니스 센터",
    description:
      "1:1 맞춤 PT · 회원 수 제한 운영 · 데이터 기반 월간 리포트. 하이엔드짐에서 시작하세요.",
    images: [`${siteUrl}/og-image.png`],
  },
  keywords: [
    "하이엔드짐",
    "HIGHENDGYM",
    "프리미엄 헬스장",
    "프리미엄 피트니스",
    "1:1 PT",
    "맞춤 트레이닝",
    "동일 헬스장",
    "수유 헬스장",
    "안성주 트레이너",
    "회원 수 제한 헬스장",
    "피트니스 센터 추천",
    "체지방 감량",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "fitness",
  verification: {
    // google: "구글서치콘솔 인증코드",
    other: {
      "naver-site-verification": "367fe267a7da06cec509dae0d43dc73384169ab2",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${notoSerifKR.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-cream">
        {children}
      </body>
    </html>
  );
}
