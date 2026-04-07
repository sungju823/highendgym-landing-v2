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
              당신은 지금 이 순간에도
              <br />
              몸이 변하고 있습니다.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              좋은 방향으로? 혹은 나쁜 방향으로?
              <br />
              결정하지 않는 것도 하나의 선택입니다.
              <br />
              그리고 그 선택에는 결과가 따릅니다.
            </p>
          </div>
        </ScrollReveal>

        {/* Urgency block */}
        <ScrollReveal>
          <div className="bg-navy-light border border-gold/30 rounded-xl p-8 mb-12 text-center">
            <p className="text-cream/80 text-base md:text-lg font-[family-name:var(--font-gmarket)] mb-6 leading-relaxed">
              운동을 시작하기에 가장 좋은 날은{" "}
              <span className="text-gold font-bold">어제</span>였습니다.
              <br />
              두 번째로 좋은 날은{" "}
              <span className="text-gold font-bold">오늘</span>입니다.
            </p>

            <Alert className="bg-navy border-gold/20 max-w-sm mx-auto mb-4">
              <AlertDescription className="text-center">
                <span className="text-cream/60 text-sm block mb-2">
                  이번 달 신규 모집
                </span>
                <Progress value={70} className="h-2 mb-2 [&>div]:bg-gold" />
                <span className="text-gold font-bold text-sm">
                  7자리 남음
                </span>
              </AlertDescription>
            </Alert>
          </div>
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
      </div>
    </section>
  );
}
