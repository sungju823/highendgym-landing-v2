"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex items-center justify-between w-full p-5 text-left bg-navy-light border border-white/5 rounded-xl hover:border-gold/20 transition-colors">
        <span className="text-cream font-medium text-sm md:text-base pr-4">
          Q. {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-5 pb-5 pt-2 bg-navy-light border border-t-0 border-white/5 rounded-b-xl -mt-2">
          <p className="text-cream/60 text-sm leading-relaxed">{answer}</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default function UrgencySection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              혹시 이런 생각이 드시나요?
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              &ldquo;지금 당장 시작하긴 좀...&rdquo; &ldquo;PT는 아직 자신 없어서...&rdquo;
              <br />
              그 망설임, 저희가 가장 많이 들어본 말입니다.
              <br />
              아래에서 확인해보세요.
            </p>
          </div>
        </ScrollReveal>

        {/* Remaining slots alert */}
        <ScrollReveal>
          <div className="mb-12">
            <Alert className="bg-navy-light border-gold/20 max-w-sm mx-auto">
              <AlertDescription className="text-center">
                <span className="text-cream/60 text-sm block mb-2">
                  이번 달 신규 모집
                </span>
                <Progress value={70} className="h-2 mb-2 [&>div]:bg-gold" />
                <span className="text-gold font-bold text-sm">
                  7자리 남았습니다
                </span>
              </AlertDescription>
            </Alert>
          </div>
        </ScrollReveal>

        {/* Pricing Table */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="font-[family-name:var(--font-heading)] text-center text-cream font-bold text-xl md:text-2xl mb-2">
              시설 이용권 금액
            </h3>
            <p className="text-center text-cream/40 text-xs mb-8">
              하이엔드짐 왕십리점
            </p>

            <div className="space-y-3 max-w-2xl mx-auto">
              {/* 12개월 */}
              <div className="bg-navy-light border border-gold/30 rounded-xl p-5">
                <p className="text-cream/80 text-sm mb-1">
                  꾸준히 운동 습관 만들고 싶은 분
                </p>
                <div className="flex items-end justify-between">
                  <span className="text-cream font-bold text-2xl md:text-3xl">
                    12개월
                  </span>
                  <div className="text-right flex items-end gap-2">
                    <span className="text-cream/40 text-base line-through">
                      530,000원
                    </span>
                    <span className="text-gold font-bold text-2xl md:text-3xl">
                      450,000
                    </span>
                    <span className="text-cream/60 text-sm">원</span>
                  </div>
                </div>
                <p className="text-cream text-xs mt-2">
                  휴회 최대 60일, 2회
                </p>
              </div>

              {/* 8개월 */}
              <div className="bg-navy-light border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-cream/80 text-sm">
                    두 계절동안 운동 습관 만들기
                  </p>
                  <span className="bg-gold text-navy text-[10px] font-bold px-2 py-0.5 rounded">
                    최다판매상품
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-cream font-bold text-2xl md:text-3xl">
                    8개월
                  </span>
                  <div className="text-right flex items-end gap-2">
                    <span className="text-cream/40 text-base line-through">
                      420,000원
                    </span>
                    <span className="text-gold font-bold text-2xl md:text-3xl">
                      352,000
                    </span>
                    <span className="text-cream/60 text-sm">원</span>
                  </div>
                </div>
                <p className="text-cream text-xs mt-2">
                  휴회 최대 45일, 2회
                </p>
              </div>

              {/* 5+1개월 (6월 한정 이벤트) */}
              <div className="bg-navy-light border border-gold/30 rounded-xl p-5">
                <span className="inline-block bg-gold/15 text-gold text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                  6월 한정 이벤트 · 5+1개월 진행중!
                </span>
                <p className="text-cream/80 text-sm mb-1">
                  한 학기동안 열심히 해볼 대학생에게 추천!
                </p>
                <div className="flex items-end justify-between">
                  <span className="text-cream font-bold text-2xl md:text-3xl">
                    5+1개월
                  </span>
                  <div className="text-right flex items-end gap-2">
                    <span className="text-cream/40 text-base line-through">
                      300,000원
                    </span>
                    <span className="text-gold font-bold text-2xl md:text-3xl">
                      270,000
                    </span>
                    <span className="text-cream/60 text-sm">원</span>
                  </div>
                </div>
                <p className="text-cream text-xs mt-2">
                  휴회 최대 30일, 1회
                </p>
              </div>

              {/* 3개월 */}
              <div className="bg-navy-light border border-white/5 rounded-xl p-5">
                <p className="text-cream/80 text-sm mb-1">
                  헬스장이 처음이라 경험해보고 싶은 분
                </p>
                <div className="flex items-end justify-between">
                  <span className="text-cream font-bold text-2xl md:text-3xl">
                    3개월
                  </span>
                  <div className="text-right flex items-end gap-2">
                    <span className="text-cream/40 text-base line-through">
                      210,000원
                    </span>
                    <span className="text-gold font-bold text-2xl md:text-3xl">
                      180,000
                    </span>
                    <span className="text-cream/60 text-sm">원</span>
                  </div>
                </div>
                <p className="text-cream text-xs mt-2">
                  휴회 최대 15일, 1회
                </p>
              </div>

              {/* 한양대 할인 안내 */}
              <p className="text-white text-base mt-3 text-center">
                <span className="text-red-500">☑️</span> 한양대학교 재학생&임직원 대상 추가 할인 제공
              </p>
            </div>

            {/* 부가 서비스 */}
            <div className="max-w-2xl mx-auto mt-4 bg-navy-light border border-white/5 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-cream/70 text-base">
                  하이엔드짐 회원 운동복
                </span>
                <div>
                  <span className="text-cream font-bold text-lg">
                    월 11,000
                  </span>
                  <span className="text-cream/60 text-sm ml-1">원</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-cream/70 text-base">개인 물품 보관함</span>
                <div>
                  <span className="text-cream font-bold text-lg">
                    월 11,000
                  </span>
                  <span className="text-cream/60 text-sm ml-1">원</span>
                </div>
              </div>
              <p className="text-gold text-sm mt-3">
                ** 12개월 등록 시, 50% 할인 혜택
              </p>
            </div>

            {/* 안내 문구 */}
            <p className="text-center text-white text-base mt-4">
              1인 1회 한정 혜택이며, 모든 항목은 VAT 포함입니다.
            </p>          </div>
        </ScrollReveal>

        {/* FAQ */}
        <ScrollReveal>
          <h3 className="text-center text-cream font-semibold text-xl mb-8">
            자주 묻는 질문
          </h3>
        </ScrollReveal>
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FaqItem {...item} />
            </ScrollReveal>
          ))}
        </div>

        {/* 네이버 지도 */}
        <ScrollReveal>
          <div className="mt-16">
            <h3 className="text-center text-cream font-semibold text-xl mb-3">
              오시는 길(서울특별시 성동구 왕십리로 257, 칠성빌딩)
            </h3>
            <p className="text-center text-cream/70 text-base mb-8">
              행당1동 주민센터 버스정류장 도보 10초 거리
              <br />
              왕십리역 6-1번 출구에서 도보 3분 거리
            </p>
            <a
              href="https://naver.me/FN7s4KXl"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.1!2d127.0368!3d37.5614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMzJzQxLjAiTiAxMjfCsDAyJzEyLjUiRQ!5e0!3m2!1sko!2skr"
                width="100%"
                height="300"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen={false}
                loading="lazy"
              />
              <div className="bg-navy-light p-4 flex items-center justify-between">
                <div>
                  <p className="text-cream font-semibold text-sm">하이엔드짐 헬스&PT 왕십리점</p>
                  <p className="text-cream/60 text-xs mt-1">서울특별시 성동구 왕십리로 257, 칠성빌딩</p>
                </div>
                <span className="text-gold text-sm font-medium whitespace-nowrap ml-4">네이버 지도 →</span>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
