"use client";

import { FAQ_ITEMS } from "@/lib/constants";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/common/ScrollReveal";

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
        {/* 7월 한정 이벤트 */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-block bg-[#EBC15E] text-navy text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-[0_0_20px_rgba(235,193,94,0.4)]">
                7월에만 진행하는 이벤트
              </span>
              <h3 className="font-[family-name:var(--font-heading)] text-cream font-bold text-2xl md:text-3xl">
                여름, 지금 시작하세요
              </h3>
            </div>

            <div className="space-y-4 max-w-2xl mx-auto">
              {/* 7개월 시설이용권 */}
              <div className="bg-navy-light border-2 border-[#EBC15E] rounded-2xl p-6 shadow-[0_0_40px_rgba(235,193,94,0.25)]">
                <p className="text-[#EBC15E] text-xl md:text-2xl font-bold mb-1">
                  내년 2월까지 이용하자!
                </p>
                <p className="text-cream text-base md:text-lg font-medium mb-3">
                  7월에는 7개월 시설이용권
                </p>
                <div className="flex items-end justify-end gap-2">
                  <span className="text-[#EBC15E] font-bold text-3xl md:text-4xl drop-shadow-[0_0_12px_rgba(235,193,94,0.35)]">
                    300,000
                  </span>
                  <span className="text-cream/70 text-sm">원</span>
                </div>
              </div>

              {/* 여름시작 2개월 패키지 */}
              <div className="bg-navy-light border-2 border-[#EBC15E] rounded-2xl p-6 shadow-[0_0_40px_rgba(235,193,94,0.25)]">
                <p className="text-[#EBC15E] text-xl md:text-2xl font-bold mb-1">
                  여름시작 2개월 패키지
                </p>
                <p className="text-cream text-base md:text-lg font-medium mb-3">
                  PT 15회 + 시설이용권 2개월 (락카&운동복 포함)
                </p>
                <div className="flex items-end justify-end gap-2">
                  <span className="text-[#EBC15E] font-bold text-3xl md:text-4xl drop-shadow-[0_0_12px_rgba(235,193,94,0.35)]">
                    990,000
                  </span>
                  <span className="text-cream/70 text-sm">원</span>
                </div>
                <p className="text-cream/50 text-xs mt-3 text-right">
                  * 하이엔드짐에 처음 등록하는 신규 회원 한정 상품입니다.
                </p>
              </div>
            </div>
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

              {/* 5개월 */}
              <div className="bg-navy-light border border-gold/30 rounded-xl p-5">
                <span className="inline-block bg-gold/15 text-gold text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                  하루 이용료 1,000원대
                </span>
                <p className="text-cream/80 text-sm mb-1">
                  한 학기동안 열심히 해볼 대학생에게 추천!
                </p>
                <div className="flex items-end justify-between">
                  <span className="text-cream font-bold text-2xl md:text-3xl">
                    5개월
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
