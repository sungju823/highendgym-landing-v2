"use client";

import { STATS, REVIEWS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";
import StatCounter from "@/components/common/StatCounter";
import ReviewCard from "@/components/common/ReviewCard";

export default function AuthoritySection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-navy-light/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              숫자가 말합니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              HIGHENDGYM의 결과는
              <br />
              광고가 아니라, 회원의 몸이 증명합니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat, i) => (
            <StatCounter
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              decimal={"decimal" in stat && stat.decimal === true}
              label={stat.label}
            />
          ))}
        </div>

        <Separator className="bg-gold/10 mb-20" />

        {/* Founder section */}
        <ScrollReveal>
          <div className="bg-navy border-2 border-gold/30 rounded-xl p-6 md:p-10 mb-16 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center text-gold text-3xl font-bold font-[family-name:var(--font-display)] flex-shrink-0">
                A
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-cream font-bold text-xl mb-1">
                  안성주 대표
                </h3>
                <p className="text-gold text-sm mb-3 font-[family-name:var(--font-maru)]">
                  유일무이한, 책 쓰는 운동 사업가
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  <span className="bg-gold/10 text-gold text-xs px-3 py-1 rounded-full border border-gold/20">
                    팔로워 1만+
                  </span>
                  <span className="bg-gold/10 text-gold text-xs px-3 py-1 rounded-full border border-gold/20">
                    저서 출간
                  </span>
                  <span className="bg-gold/10 text-gold text-xs px-3 py-1 rounded-full border border-gold/20">
                    비즈니스 컨설팅
                  </span>
                </div>
                <p className="text-cream/60 text-sm leading-relaxed">
                  동일점·수유점 2개 지점을 운영하며, 피트니스와 비즈니스 컨설팅을
                  병행하는 전문가입니다.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Reviews */}
        <ScrollReveal>
          <h3 className="text-center text-cream font-semibold text-xl mb-8">
            회원 후기
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} {...review} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
