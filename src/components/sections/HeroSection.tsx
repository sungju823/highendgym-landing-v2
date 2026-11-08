"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { track } from "@/lib/track";

export default function HeroSection() {
  const scrollToContact = () => {
    track("click_consult_cta", null, { position: "hero" });
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="HIGHENDGYM 프리미엄 피트니스"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlays — Navy 반투명 60% */}
      <div className="absolute inset-0 bg-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge className="bg-gold/10 text-gold border-gold/30 mb-8 text-[14.4px] tracking-wider px-4 py-1.5 backdrop-blur-sm">
            왕십리 유일 — 운동 초보자를 위한 피트니스 센터
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        >
          헬스장이 불편했던 건
          <br />
          <span className="relative inline-block">
            당신 탓이 아닙니다.
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute bottom-0 left-0 h-[3px] bg-gold-gradient"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-cream/80 text-sm md:text-lg leading-relaxed max-w-xl mx-auto mb-10 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          처음 다니는 헬스장에서 눈치 보인 적 있으신가요?
          <br />
          <br className="md:hidden" />
          어떤 기구를 써야 할지 몰라서
          <br className="md:hidden" />
          그냥 집에 돌아온 날이 있으신가요?
          <br />
          <br className="md:hidden" />
          그건 의지의 문제가 아닙니다.
          <br className="md:hidden" />
          — 공간이 맞지 않았던 겁니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <button
            onClick={scrollToContact}
            className="relative bg-gold text-navy font-bold text-base md:text-lg px-10 py-4 rounded-md hover:bg-gold-light transition-all duration-300 hover:scale-[1.02] w-full md:w-auto overflow-hidden"
          >
            <span className="relative z-10">방문상담 신청하기</span>
            <div className="absolute inset-0 bg-shimmer-gold animate-shimmer" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-cream/50"
        >
          <span>내 페이스대로, 눈치 없이 운동할 수 있는 곳</span>
          <span className="text-gold/30">|</span>
          <span>처음 PT가 부담스럽다면, 여기서 시작해도 됩니다</span>
          <span className="text-gold/30">|</span>
          <span>운동을 좋아해야만 오는 곳이 아닙니다</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-cream/30 text-xs tracking-widest">더 보기</span>
          <ChevronDown className="w-5 h-5 text-gold/50 animate-bounce-arrow" />
        </motion.div>
      </div>
    </section>
  );
}
