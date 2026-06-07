"use client";

import Image from "next/image";
import { PROCESS_STEPS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";
import ProcessStep from "@/components/common/ProcessStep";

const PT_SEQUENCE = [
  {
    step: "STEP 1",
    image: "/images/sequence1.png",
    title: "완벽한 맞춤형 체형평가",
    description: "체형분석 및 솔루션&방향제시 포함",
  },
  {
    step: "STEP 2",
    image: "/images/sequence3.png",
    title: "Conditioning Care",
    description: "짧아지고 뭉친 근육, 먼저 풀어주는 작업",
  },
  {
    step: "STEP 3",
    image: "/images/sequence2.png",
    title: "Activation Training",
    description: "약한 근육을 집중 타겟",
  },
  {
    step: "STEP 4",
    image: "/images/sequence4.png",
    title: "Custom Training",
    description: "원하는 목적과 컨디션에 따른 메인 트레이닝",
  },
];

const SERVICE_CARDS = [
  {
    icon: "🏋️",
    title: "헬스장 시설 이용",
    description: "깔끔한 공간에서 내 페이스대로",
    features: [
      "자유운동 무제한 이용",
      "깨끗한 환경, 쾌적한 공간",
      "기구 사용법 안내 포함",
    ],
  },
  {
    icon: "🤝",
    title: "1:1 퍼스널 트레이닝",
    description: "전담 트레이너와 함께, 처음부터 제대로",
    features: [
      "1:1 맞춤 프로그램 설계",
      "트레이너 직접 지도",
      "시설 이용 포함",
    ],
    recommended: true,
  },
];

export default function SolutionSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              처음이라도 괜찮습니다.
              <br />
              하이엔드가 처음부터 끝까지 함께합니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              복잡한 준비 없이, 몸 하나만 가지고 오시면 됩니다.
              <br />
              나머지는 저희가 안내해드립니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Process steps — 4 steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessStep key={i} {...step} delay={i * 0.1} />
          ))}
        </div>

        {/* Service cards — 2 cards, no pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {SERVICE_CARDS.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div
                className={`relative bg-navy-light rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-1.5 ${
                  card.recommended
                    ? "border-2 border-gold shadow-[0_0_30px_rgba(180,154,109,0.15)]"
                    : "border border-white/10"
                }`}
              >
                {card.recommended && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy font-bold text-xs px-4">
                    RECOMMENDED
                  </Badge>
                )}
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-cream font-bold text-xl mb-2">
                  {card.title}
                </h3>
                <p className="text-cream/60 text-sm mb-6">
                  {card.description}
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
        {/* PT 시퀀스 */}
        <ScrollReveal>
          <div className="mt-20 mb-12 text-center">
            <GoldDivider className="mb-8" />
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold text-cream italic mb-4">
              PT 시퀀스
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PT_SEQUENCE.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-gold font-semibold text-sm mb-3 tracking-wider">
                  {item.step}
                </p>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-white font-bold text-sm md:text-base mb-1">
                  {item.title}
                </h4>
                <p className="text-cream/60 text-xs md:text-sm">
                  ({item.description})
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
