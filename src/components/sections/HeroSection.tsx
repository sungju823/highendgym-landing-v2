"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const scrollToContact = () => {
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-navy/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge className="bg-gold/10 text-gold border-gold/30 mb-8 text-xs tracking-wider px-4 py-1.5 backdrop-blur-sm">
            PREMIUM FITNESS CENTER
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        >
          당신이 운동을 포기한 건,
          <br />
          <span className="relative inline-block">
            의지가 약해서가 아닙니다.
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
          className="text-cream/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
        >
          환경이 당신의 수준에 맞지 않았던 것입니다.
          <br />
          지금껏 경험해보지 못한 방식으로 운동이 시작됩니다.
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
            <span className="relative z-10">무료 체험 신청하기</span>
            <div className="absolute inset-0 bg-shimmer-gold animate-shimmer" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-cream/50"
        >
          <span>장비 하나가 몸의 방향을 바꿉니다</span>
          <span className="text-gold/30">|</span>
          <span>트레이너가 아닌, 파트너를 찾는 것</span>
          <span className="text-gold/30">|</span>
          <span>결과가 없었던 건 루틴의 문제</span>
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
          <span className="text-cream/30 text-xs tracking-widest">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-gold/50 animate-bounce-arrow" />
        </motion.div>
      </div>
    </section>
  );
}
