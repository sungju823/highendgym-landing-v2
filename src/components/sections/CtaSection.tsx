"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Loader2 } from "lucide-react";
import ScrollReveal from "@/components/common/ScrollReveal";
import GoldDivider from "@/components/common/GoldDivider";

// ⚠️ Apps Script 배포 후 여기에 URL을 붙여넣으세요
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzSaR8qcSpdLP8USwKs0fdWdYJujRizw6Z2zu-bcDO-xSQj5k8VOmImbPe8HZFc6SuDng/exec";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !goal || !agreed) return;

    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, goal }),
      });

      // no-cors 모드에서는 응답을 읽을 수 없으므로 전송 자체가 성공이면 완료 처리
      setSubmitted(true);
    } catch {
      setError("전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="cta"
      className="py-20 md:py-32 px-4 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,154,94,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-serif)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              오늘, 단 한 가지만
              <br />
              결정하세요.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              무료 체험 상담 예약.
              <br />
              15분이면 충분합니다.
              <br />
              당신의 목표를 듣고, 가장 적합한 방법을 알려드립니다.
              <br />
              부담 없이, 조건 없이.
            </p>
          </div>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="bg-navy-light border border-gold/30 rounded-xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-cream font-bold text-xl mb-2">
                상담 예약이 완료되었습니다
              </h3>
              <p className="text-cream/60 text-sm">
                확인 문자가 발송됩니다. 24시간 내 연락드리겠습니다.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <form
              onSubmit={handleSubmit}
              className="bg-navy-light border border-gold/20 rounded-xl p-6 md:p-8 space-y-5"
            >
              <div>
                <label className="text-cream/80 text-sm font-medium block mb-2">
                  이름
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                  className="bg-white/5 border-gold/20 text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 h-12"
                />
              </div>

              <div>
                <label className="text-cream/80 text-sm font-medium block mb-2">
                  연락처
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000"
                  type="tel"
                  className="bg-white/5 border-gold/20 text-cream placeholder:text-cream/30 focus:border-gold focus:ring-gold/20 h-12"
                />
              </div>

              <div>
                <label className="text-cream/80 text-sm font-medium block mb-2">
                  관심 프로그램
                </label>
                <Select value={goal} onValueChange={(v) => setGoal(v ?? "")}>
                  <SelectTrigger className="bg-white/5 border-gold/20 text-cream h-12 [&>span]:text-cream/50">
                    <SelectValue placeholder="선택해주세요" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-light border-gold/20">
                    <SelectItem
                      value="facility"
                      className="text-cream focus:bg-gold/10 focus:text-cream"
                    >
                      시설 이용 (자유운동)
                    </SelectItem>
                    <SelectItem
                      value="pt"
                      className="text-cream focus:bg-gold/10 focus:text-cream"
                    >
                      PT 프로그램
                    </SelectItem>
                    <SelectItem
                      value="combo"
                      className="text-cream focus:bg-gold/10 focus:text-cream"
                    >
                      통합 (시설 + PT)
                    </SelectItem>
                    <SelectItem
                      value="consulting"
                      className="text-cream focus:bg-gold/10 focus:text-cream"
                    >
                      비즈니스 컨설팅
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="privacy"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold mt-0.5"
                />
                <label
                  htmlFor="privacy"
                  className="text-cream/50 text-xs leading-relaxed cursor-pointer"
                >
                  개인정보 수집 및 이용에 동의합니다. (이름, 연락처 — 상담 목적)
                </label>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={!name || !phone || !goal || !agreed || submitting}
                className="relative w-full bg-gold text-navy font-bold text-base py-4 rounded-md hover:bg-gold-light transition-all duration-300 hover:scale-[1.01] disabled:opacity-40 disabled:hover:scale-100 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
                  {submitting ? "전송 중..." : "무료 체험 상담 예약하기"}
                </span>
                <div className="absolute inset-0 bg-shimmer-gold animate-shimmer" />
              </button>

              {/* Microcopy */}
              <div className="flex flex-wrap justify-center gap-4 text-xs text-cream/40 pt-2">
                <span>✓ 예약 후 취소 가능</span>
                <span>✓ 구매 강요 없음</span>
                <span>✓ 전문 트레이너 1:1 상담</span>
              </div>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
