import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const siteUrl = "https://highendgym-landing-260406.vercel.app";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "HIGHENDGYM | 하이엔드짐 헬스&PT 왕십리점",
    template: "%s | HIGHENDGYM",
  },
  description:
    "당신이 경험하게 될 하이엔드 트레이닝 서비스. 운동 초보자도 편안하게 시작할 수 있는 회원 수 제한 운영 프리미엄 피트니스 센터. 왕십리역 인근.",
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
    title: "HIGHENDGYM | 하이엔드짐 헬스&PT 왕십리점",
    description:
      "헬스장이 불편했던 건 당신 탓이 아닙니다. 처음 오는 분도 편안한 곳, HIGHENDGYM에서 시작하세요.",
    siteName: "HIGHENDGYM",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "HIGHENDGYM 하이엔드짐 헬스&PT 왕십리점",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIGHENDGYM | 하이엔드짐 헬스&PT 왕십리점",
    description:
      "운동 초보자도 편안하게. 회원 수 제한 운영 · 1:1 퍼스널 트레이닝. 1분 설문 작성으로 시작하세요.",
    images: [`${siteUrl}/og-image.png`],
  },
  keywords: [
    "하이엔드짐",
    "HIGHENDGYM",
    "왕십리 헬스장",
    "왕십리 PT",
    "프리미엄 피트니스",
    "1:1 PT",
    "운동 초보자 헬스장",
    "회원 수 제한 헬스장",
    "퍼스널 트레이닝",
    "왕십리역 헬스장",
    "헬스장 추천",
    "초보자 PT",
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
    google: "google7bc0f65c04230bf7",
    other: {
      "naver-site-verification": "14485671694f9f1323f3cc338e5e09052c2fbc5f",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <head>
        <meta name="naver-site-verification" content="14485671694f9f1323f3cc338e5e09052c2fbc5f" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FJKKLHKGJ7" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FJKKLHKGJ7');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2329797224487944');
              fbq('track', 'PageView');
            `,
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/wanteddev/paperlogy@latest/paperlogy.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy text-cream overflow-x-hidden">
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src="https://www.facebook.com/tr?id=2329797224487944&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
