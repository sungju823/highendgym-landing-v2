"use client";

import { PROBLEMS } from "@/lib/constants";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";

export default function ProblemSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              대부분의 헬스장은
              <br />
              당신이 오래 머물길 원하지 않습니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              등록 후 2주 — 그게 평균 방문 지속 기간입니다.
              <br />
              넓은 공간, 저렴한 가격, 그러나 아무도 당신의 이름을 기억하지 않는
              곳.
              <br />
              그 곳에서 결과가 나오지 않는 건 우연이 아닙니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Stat alert */}
        <ScrollReveal>
          <Alert className="bg-navy-light border-gold/20 mb-12 max-w-md mx-auto">
            <AlertDescription className="text-center">
              <span className="text-gold text-4xl md:text-5xl font-bold block mb-2">
                76%
              </span>
              <span className="text-cream/60 text-sm">
                한국인 헬스장 평균 이탈률
              </span>
            </AlertDescription>
          </Alert>
        </ScrollReveal>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PROBLEMS.map((problem, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-navy-light border border-white/5 rounded-xl p-6 border-l-[3px] border-l-gold/60 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(184,154,94,0.1)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{problem.icon}</span>
                  <div>
                    <h3 className="text-cream font-semibold text-lg mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-cream/60 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
