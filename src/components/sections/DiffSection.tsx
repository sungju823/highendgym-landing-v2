"use client";

import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";
import ComparisonTable from "@/components/common/ComparisonTable";

const DIFF_POINTS = [
  {
    category: "시설",
    items: [
      "회원 수 제한으로 쾌적한 환경 보장",
      "깔끔하고 정돈된 공간, 매일 정기 청소·관리",
      "처음 오시는 분도 편하게 이용할 수 있는 안내 시스템",
    ],
  },
  {
    category: "트레이닝",
    items: [
      "트레이너가 직접 기구 사용법 안내",
      "1:1 맞춤 프로그램 (강요 없이, 원할 때)",
      "시설 회원도 언제든 질문 가능",
    ],
  },
  {
    category: "분위기",
    items: [
      "마음껏 연습하기, 눈치 보지 않아도 되는 곳",
      "초보자와 경험자가 함께 어울리는 공간",
      "성별 구분 없이 모두 편안하게",
    ],
  },
];

export default function DiffSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-section-light">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold/30 mb-6 text-xs tracking-wider">
              당신이 경험하게 될 하이엔드 공간
            </Badge>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              <span className="font-[family-name:var(--font-heading)] italic text-gold">
                HIGHENDGYM
              </span>
              은
              <br />
              처음 오는 분도 편안한 곳입니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              전문적이고 친절한 분위기는 하이엔드만의 문화입니다.
              <br />
              여기선 눈치 보지 않아도 됩니다.
              <br />
              모르면 물어보면 되고, 천천히 해도 됩니다.
            </p>
          </div>
        </ScrollReveal>

        {/* 모바일: 가로 스와이프 캐러셀 */}
        <div className="md:hidden -mx-4 mb-16">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4">
            {DIFF_POINTS.map((point, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[85%] snap-center bg-navy border border-gold/20 rounded-xl p-6"
              >
                <h3 className="text-gold font-bold text-lg mb-4 tracking-wider">
                  {point.category}
                </h3>
                <ul className="space-y-3">
                  {point.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-cream/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-gold mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-gold font-medium text-sm mt-3 animate-swipe-hint flex items-center justify-center gap-1">
            <span>←</span>
            <span>좌우로 스와이프</span>
            <span>→</span>
          </p>
        </div>

        {/* 데스크탑: 3열 그리드 */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
          {DIFF_POINTS.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-navy border border-gold/20 rounded-xl p-6 h-full hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(180,154,109,0.1)] transition-all duration-300">
                <h3 className="text-gold font-bold text-lg mb-4 tracking-wider">
                  {point.category}
                </h3>
                <ul className="space-y-3">
                  {point.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-cream/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-gold mt-0.5">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
