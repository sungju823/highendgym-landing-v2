"use client";

import { track } from "@/lib/track";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-gold text-lg font-bold italic mb-3">
              HIGHENDGYM
            </h3>
            <p className="text-white text-sm leading-relaxed">
              하이엔드짐 헬스&PT 왕십리점
              <br />
              당신이 경험하게 될 하이엔드 트레이닝 서비스
            </p>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm mb-3">안내</h4>
            <div className="space-y-2 text-white text-sm">
              <p>서울특별시 성동구 왕십리로 257, 칠성빌딩</p>
              <p>평일 06:00 ~ 24:00</p>
              <p>주말 &amp; 공휴일 10:00 ~ 20:00</p>
              <p>매월 둘째주 일요일 공식 휴무일</p>
            </div>
          </div>

          <div>
            <h4 className="text-gold font-semibold text-sm mb-3">
              하이엔드짐 오피셜 SNS
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.instagram.com/highendgym_wang/"
                onClick={() => track("click_instagram", null)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors block"
              >
                Instagram @highendgym_wang
              </a>
              <a
                href="https://blog.naver.com/highend_fit/"
                onClick={() => track("click_blog", null)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors block"
              >
                네이버 블로그 blog.naver.com/highend_fit
              </a>
              <a
                href="tel:02-3395-9777"
                onClick={() => track("click_call", "Contact")}
                className="text-white hover:text-gold transition-colors block"
              >
                문의 전화: 02-3395-9777
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-cream/30 text-xs">
          &copy; {new Date().getFullYear()} HIGHENDGYM. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
