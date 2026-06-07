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
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              대부분의 헬스장은
              <br />
              초보자를 위해 설계되지 않았습니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              등록하고 2주 — 평균적으로 그 이후엔 발길이 끊깁니다.
              <br />
              기구 사용법도 모르는데 아무도 알려주지 않는 곳,
              <br />
              피크타임엔 어디 앉을 자리도 없는 곳.
              <br />
              익숙해지기도 전에 지쳐버리는 게 당연합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Stat alert */}
        <ScrollReveal>
          <Alert className="bg-navy-light border-gold/20 mb-12 max-w-md mx-auto">
            <AlertDescription className="text-center">
              <span className="text-gold text-4xl md:text-5xl font-bold block mb-2">
                68%
              </span>
              <span className="text-cream/60 text-sm">
                헬스장 등록 후 한 달 내 이탈률
              </span>
            </AlertDescription>
          </Alert>
        </ScrollReveal>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {PROBLEMS.map((problem, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-[#0a1535] border border-white/5 rounded-xl p-6 border-l-[3px] border-l-gold/60 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(180,154,109,0.1)] transition-all duration-300">
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
