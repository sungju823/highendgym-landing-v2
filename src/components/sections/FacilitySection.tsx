"use client";

import Image from "next/image";
import ScrollReveal from "@/components/common/ScrollReveal";
import ZoomReveal from "@/components/common/ZoomReveal";
import GoldDivider from "@/components/common/GoldDivider";
import { Badge } from "@/components/ui/badge";

const FACILITIES = [
  {
    src: "/images/6.png",
    alt: "프리 웨이트존 & 머신존 (플레이트)",
    label: "프리 웨이트존 & 머신존 (플레이트)",
  },
  {
    src: "/images/7.png",
    alt: "머신존 (핀)",
    label: "머신존 (핀)",
  },
  {
    src: "/images/8.png",
    alt: "스트레칭존 (다양한 소도구 보유)",
    label: "스트레칭존",
  },
  {
    src: "/images/9.png",
    alt: "유산소 존 (천국의 계단, 마이마운틴, 트레드밀, 사이클)",
    label: "유산소 존",
  },
  {
    src: "/images/10.png",
    alt: "파우더룸 & 개별 샤워실 (샴푸, 린스, 바디워시 구비)",
    label: "파우더룸 & 개별 샤워실",
  },
];

export default function FacilitySection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/30 mb-6 text-xs tracking-wider">
              시설 안내
            </Badge>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              헬스&PT 시설 소개
            </h2>
            <GoldDivider className="mb-6" />
          </div>
        </ScrollReveal>

        {(() => {
          const allFacilities = [
            {
              src: "/images/5.png",
              alt: "하이엔드짐 왕십리점 헬스&PT 시설 소개",
              label: "하이엔드짐 왕십리점",
            },
            ...FACILITIES,
          ];
          return (
            <>
              {/* 모바일: 가로 스와이프 캐러셀 */}
              <div className="md:hidden -mx-4">
                <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 px-4 pb-4">
                  {allFacilities.map((facility, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-[85%] snap-center"
                    >
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                        <Image
                          src={facility.src}
                          alt={facility.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-center text-cream/80 text-sm mt-3">
                        {facility.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-gold font-medium text-sm mt-2 animate-swipe-hint flex items-center justify-center gap-1">
                  <span>←</span>
                  <span>좌우로 스와이프</span>
                  <span>→</span>
                </p>
              </div>

              {/* 데스크탑: 그리드 */}
              <div className="hidden md:grid md:grid-cols-2 gap-4">
                {allFacilities.map((facility, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <ZoomReveal className="relative w-full aspect-square rounded-xl group">
                      <Image
                        src={facility.src}
                        alt={facility.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </ZoomReveal>
                  </ScrollReveal>
                ))}
              </div>
            </>
          );
        })()}
      </div>
    </section>
  );
}
