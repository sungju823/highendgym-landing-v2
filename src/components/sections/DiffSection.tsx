"use client";

import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";
import ComparisonTable from "@/components/common/ComparisonTable";

const DIFF_POINTS = [
  {
    category: "시설",
    items: [
      "프리미엄 수입 장비 독점 도입",
      "PT존 / 자유운동존 / 리커버리존 완전 분리",
      "주간 장비 점검 의무화",
    ],
  },
  {
    category: "트레이닝",
    items: [
      "의무 고급 자격 + 정기 심사 통과 트레이너",
      "1:1 맞춤 분석 기반 프로그램",
      "월간 리포트 제공",
    ],
  },
  {
    category: "케어",
    items: [
      "회원 수 제한으로 쾌적한 환경 보장",
      "첫 2주 오리엔테이션 PT 무료 제공",
      "매주 개인별 피드백 세션",
    ],
  },
];

export default function DiffSection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-navy-light/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold/30 mb-6 text-xs tracking-wider">
              회원 수 제한 운영
            </Badge>
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              <span className="font-[family-name:var(--font-display)] italic text-gold">
                HIGHENDGYM
              </span>
              은
              <br />
              헬스장이 아닙니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              운동하는 공간이 아니라,
              <br />
              당신이 변화하는 환경을 설계합니다.
              <br />
              프리미엄은 가격이 아니라, 경험으로 증명됩니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Differentiation categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {DIFF_POINTS.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-navy border border-gold/20 rounded-xl p-6 h-full hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(184,154,94,0.1)] transition-all duration-300">
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

        {/* Comparison table */}
        <ScrollReveal>
          <div className="bg-navy border border-gold/20 rounded-xl p-4 md:p-8">
            <h3 className="text-center text-cream font-semibold text-lg mb-6">
              일반 헬스장 vs{" "}
              <span className="text-gold font-[family-name:var(--font-display)] italic">
                HIGHENDGYM
              </span>
            </h3>
            <ComparisonTable />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
