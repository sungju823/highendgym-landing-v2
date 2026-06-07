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

// Apps Script URL
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyftbTd65ugxt2lcHSrOw443uEN8siqzCKhG7Tiw2liqO0nLOwirbWPEopnubXTSJJK7A/exec";

export default function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);

  const isValid = name && phone && purpose && experience && agreed;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setSubmitting(true);
    setError("");

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, purpose, experience, message }),
      });

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
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,154,109,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight mb-6">
              딱 1분만 투자해 주세요.
            </h2>
            <GoldDivider className="mb-6" />
            <p className="text-cream/60 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              설문지 작성 후, 저희가 먼저 연락드립니다.
              <br />
              운동이 낯설더라도, 접근하기 쉽게 만들어드립니다.
              <br />
              하이엔드짐이 어떤 곳인지 궁금하신 분도 환영합니다.
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
                감사합니다!
              </h3>
              <p className="text-cream/60 text-sm">
                24시간 내로 트레이너가 직접 연락드리겠습니다.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal>
            <form
              onSubmit={handleSubmit}
              className="bg-navy-light/60 border border-gold/40 rounded-xl p-6 md:p-8 space-y-5"
            >
              <p className="text-center text-gold text-sm font-medium mb-2">
                방문 상담 신청하기
              </p>

              {/* 이름 */}
              <div>
                <label className="text-cream text-sm font-medium block mb-2">
                  이름 <span className="text-gold">*</span>
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="홍길동"
                  className="bg-white/15 border-gold/40 text-white placeholder:text-cream/70 focus:border-gold focus:ring-gold/40 h-12"
                />
              </div>

              {/* 연락처 */}
              <div>
                <label className="text-cream text-sm font-medium block mb-2">
                  연락처 <span className="text-gold">*</span>
                </label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000"
                  type="tel"
                  className="bg-white/15 border-gold/40 text-white placeholder:text-cream/70 focus:border-gold focus:ring-gold/40 h-12"
                />
              </div>

              {/* 방문 목적 — RadioGroup style via buttons */}
              <div>
                <label className="text-cream text-sm font-medium block mb-2">
                  방문 목적 <span className="text-gold">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { value: "facility", label: "시설만 이용" },
                    { value: "pt", label: "PT도 고려" },
                    { value: "undecided", label: "아직 모름" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setPurpose(option.value)}
                      className={`px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                        purpose === option.value
                          ? "bg-gold text-navy border border-gold"
                          : "bg-white/15 text-cream border border-gold/40 hover:border-gold/60"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 운동 경험 */}
              <div>
                <label className="text-cream text-sm font-medium block mb-2">
                  운동 경험 <span className="text-gold">*</span>
                </label>
                <Select
                  value={experience}
                  onValueChange={(v) => setExperience(v ?? "")}
                >
                  <SelectTrigger className="bg-white/15 border-gold/40 text-white h-12 [&>span]:text-cream/80">
                    <SelectValue placeholder="선택해주세요" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-light border-gold/20">
                    <SelectItem
                      value="없음"
                      className="text-cream focus:bg-gold/10 focus:text-cream"
                    >
                      없음
                    </SelectItem>
                    <SelectItem
                      value="1년 미만"
                      className="text-cream focus:bg-gold/10 focus:text-cream"
                    >
                      1년 미만
                    </SelectItem>
                    <SelectItem
                      value="1년 이상"
                      className="text-cream focus:bg-gold/10 focus:text-cream"
                    >
                      1년 이상
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* 하고 싶은 말 (선택) */}
              <div>
                <label className="text-cream text-sm font-medium block mb-2">
                  문의&요청사항 <span className="text-cream/40">(선택)</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="궁금한 점이나 원하시는 것이 있다면 자유롭게 적어주세요"
                  rows={3}
                  className="w-full bg-white/15 border border-gold/40 text-white placeholder:text-cream/70 focus:border-gold focus:ring-1 focus:ring-gold/40 rounded-md px-3 py-2 text-sm resize-none outline-none"
                />
              </div>

              {/* 개인정보 동의 */}
              <div className="flex items-start gap-2">
                <Checkbox
                  id="privacy"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked === true)}
                  className="border-gold/30 data-[state=checked]:bg-gold data-[state=checked]:border-gold mt-0.5"
                />
                <label
                  htmlFor="privacy"
                  className="text-cream/90 text-xs leading-relaxed cursor-pointer"
                >
                  개인정보 수집 및 이용에 동의합니다. (이름, 연락처 — 설문 및 상담 목적)
                </label>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={!isValid || submitting}
                className="relative w-full bg-gold text-navy font-bold text-base py-4 rounded-md hover:bg-gold-light transition-all duration-300 hover:scale-[1.01] disabled:opacity-40 disabled:hover:scale-100 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitting && <Loader2 className="w-5 h-5 animate-spin" />}
                  {submitting ? "전송 중..." : "방문상담 신청하기"}
                </span>
                <div className="absolute inset-0 bg-shimmer-gold animate-shimmer" />
              </button>

              {/* Microcopy */}
              <div className="flex flex-wrap justify-center gap-4 text-xs text-cream/80 pt-2">
                <span>✓ 작성 후 취소 가능</span>
                <span>✓ 등록 강요 없음</span>
                <span>✓ 24시간 내 직접 연락</span>
              </div>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
