"use client";

import Image from "next/image";
import { STATS, REVIEWS } from "@/lib/constants";
import { Separator } from "@/components/ui/separator";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";
import StatCounter from "@/components/common/StatCounter";
import ReviewCard from "@/components/common/ReviewCard";

const BEFORE_AFTER = [
  {
    images: ["/images/bf1.jpeg", "/images/bf8.jpeg", "/images/bf9.jpeg"],
    title: "힙 비포&애프터(PT 50분)",
    description: "체형에 맞는 힙운동만 배웠을 뿐인데, 바로 보이는 변화",
  },
  {
    images: ["/images/bf2.jpeg", "/images/bf12.jpeg"],
    title: "체형 개선 비포&애프터(PT 20회)",
    description: "틀어져 있던 골반, 스쿼트 하나로 바로잡았습니다.",
  },
  {
    images: ["/images/bf3.jpeg"],
    title: "체형 개선 비포&애프터(PT 12회)",
    description: "비대칭 어깨 라인, 다시 올바르게 맞춥니다.",
  },
  {
    images: ["/images/bf4.jpeg"],
    title: "힙 비포&애프터(PT 15회)",
    description: "힙은 \"느낌\"이 아니라 \"라인\"으로 바뀝니다.",
  },
  {
    images: ["/images/bf5.jpeg", "/images/bf6.jpeg"],
    title: "웨딩 다이어트 -15kg 감량(PT 30회)",
    description: "웨딩 다이어트, 4개월이면 충분합니다.",
  },
  {
    images: ["/images/bf7.jpeg"],
    title: "체형 개선 비포&애프터(PT 30회)",
    description: "PT 30회로 -12kg + 자세까지 바로잡았습니다.",
  },
  {
    images: ["/images/bf10a.jpeg", "/images/bf11.jpeg"],
    title: "체형 개선 비포&애프터(PT 20회)",
    description: "방치했던 골반 틀어짐, 운동으로 바로잡았습니다.",
  },
  {
    images: ["/images/bf13.jpeg"],
    title: "다이어트 비포&애프터(PT 30회)ㅣ체지방 12kg 감량",
    description: "근육량도 유지하면서, 정석으로 건강하게 뺐습니다.",
  },
  {
    images: ["/images/bf14.png"],
    title: "다이어트 비포&애프터(PT 30회)ㅣ바디프로필 촬영",
    description: "체중이 감량하면서, 바디프로필까지 도전했습니다!",
  },
];

export default function AuthoritySection() {
  return (
    <section className="py-20 md:py-32 px-4 bg-section-light">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
              처음엔 다들 비슷한 마음으로 오셨습니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
              &ldquo;운동 경험이 없어서요&rdquo;,
              <br />
              &ldquo;헬스장이 너무 무서워서요&rdquo;,
              <br />
              &ldquo;PT는 부담스러워서요&rdquo;
            </p>
            <p className="text-cream/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              하지만 하이엔드를 경험하고 진솔하게 남긴 후기를 읽어주세요.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 mb-20">
          {STATS.map((stat, i) => (
            <StatCounter
              key={i}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>

        <Separator className="bg-gold/10 mb-20" />

        {/* Reviews */}
        <ScrollReveal>
          <h3 className="text-center text-cream font-semibold text-2xl md:text-3xl mb-8">
            하이엔드짐 실제 회원 리뷰
          </h3>
        </ScrollReveal>
        {/* 모바일: 가로 스와이프 캐러셀 */}
        <div className="md:hidden -mx-4">
          <div className="flex items-stretch overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[85%] snap-center"
              >
                <ReviewCard {...review} delay={0} />
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
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} {...review} delay={i * 0.15} />
          ))}
        </div>

        <Separator className="bg-gold/10 my-20" />

        {/* Before & After */}
        <ScrollReveal>
          <h3 className="text-center text-cream font-semibold text-2xl md:text-3xl mb-4">
            하이엔드짐 회원 비포&애프터
          </h3>
          <p className="text-center text-cream/60 text-base md:text-lg mb-12">
            실제 회원님들의 변화입니다.
          </p>
        </ScrollReveal>

        {/* 모바일: 가로 스와이프 캐러셀 / 데스크탑: 세로 스택 */}
        <div className="md:hidden -mx-4">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 px-4 pb-4">
            {BEFORE_AFTER.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[85%] snap-center bg-navy border border-gold/20 rounded-xl overflow-hidden"
              >
                <div className={`grid ${item.images.length > 1 ? (item.images.length === 3 ? "grid-cols-3" : "grid-cols-2") : "grid-cols-1"} gap-1`}>
                  {item.images.map((src, j) => (
                    <div key={j} className={`relative overflow-hidden ${item.images.length > 1 ? "aspect-square" : ""}`}>
                      <Image
                        src={src}
                        alt={`${item.title} ${j + 1}`}
                        {...(item.images.length > 1
                          ? { fill: true, className: "object-cover" }
                          : { width: 800, height: 1000, className: "w-full h-auto" }
                        )}
                      />
                    </div>
                  ))}
                </div>
                <div className="p-5">
                  <h4 className="text-white font-bold text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white text-base">
                    → {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gold font-medium text-sm mt-3 animate-swipe-hint flex items-center justify-center gap-1">
            <span>←</span>
            <span>좌우로 스와이프</span>
            <span>→</span>
          </p>
        </div>

        <div className="hidden md:block space-y-10">
          {BEFORE_AFTER.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-navy border border-gold/20 rounded-xl overflow-hidden">
                <div className={`grid ${item.images.length > 1 ? (item.images.length === 3 ? "grid-cols-3" : "grid-cols-2") : "grid-cols-1"} gap-1`}>
                  {item.images.map((src, j) => (
                    <div key={j} className={`relative overflow-hidden ${item.images.length > 1 ? "aspect-square" : ""}`}>
                      <Image
                        src={src}
                        alt={`${item.title} ${j + 1}`}
                        {...(item.images.length > 1
                          ? { fill: true, className: "object-cover" }
                          : { width: 800, height: 1000, className: "w-full h-auto" }
                        )}
                      />
                    </div>
                  ))}
                </div>
                <div className="p-5">
                  <h4 className="text-white font-bold text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white text-base">
                    → {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
