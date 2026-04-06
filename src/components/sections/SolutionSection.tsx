"use client";

import { PROCESS_STEPS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";
import ProcessStep from "@/components/common/ProcessStep";

const SERVICE_CARDS = [
  {
    title: "시설권",
    price: "월 9만원~",
    features: ["자유운동 무제한", "리커버리존 이용", "첫 2주 PT 무료"],
    popular: false,
  },
  {
    title: "PT 패키지",
    price: "월 29만원~",
    features: [
      "1:1 맞춤 트레이닝",
      "월간 리포트 제공",
      "식단 가이드 포함",
      "자유운동 무제한",
    ],
    popular: true,
  },
  {
    title: "통합권",
    price: "월 39만원~",
    features: [
      "PT + 자유운동 통합",
      "우선 예약권",
      "리커버리 프로그램",
      "분기별 체성분 정밀분석",
    ],
    popular: false,
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              운동을 시작하기 전,
              <br />
              우리가 먼저 당신을 분석합니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              첫 방문부터 마지막 세션까지.
              <br />
              모든 과정은 당신의 데이터를 기반으로 설계됩니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-20">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={i} {...step} delay={i * 0.1} />
          ))}
        </div>

        {/* Remaining slots */}
        <ScrollReveal>
          <div className="bg-navy-light border border-gold/20 rounded-xl p-6 max-w-md mx-auto mb-16 text-center">
            <p className="text-cream/60 text-sm mb-3">
              이번 달 잔여 회원 슬롯
            </p>
            <Progress value={75} className="h-2 mb-2 [&>div]:bg-gold" />
            <p className="text-gold font-bold text-sm">7자리 남음</p>
          </div>
        </ScrollReveal>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_CARDS.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div
                className={`relative bg-navy-light rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-1.5 ${
                  card.popular
                    ? "border-2 border-gold shadow-[0_0_30px_rgba(184,154,94,0.15)]"
                    : "border border-white/10"
                }`}
              >
                {card.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy font-bold text-xs px-4">
                    MOST POPULAR
                  </Badge>
                )}
                <h3 className="text-cream font-bold text-xl mb-2">
                  {card.title}
                </h3>
                <p className="text-gold font-bold text-2xl mb-6">
                  {card.price}
                </p>
                <ul className="space-y-3">
                  {card.features.map((feature, j) => (
                    <li
                      key={j}
                      className="text-cream/70 text-sm flex items-start gap-2"
                    >
                      <span className="text-gold">✓</span>
                      {feature}
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
