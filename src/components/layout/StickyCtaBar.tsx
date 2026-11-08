"use client";

import { useEffect, useState } from "react";
import { track } from "@/lib/track";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    track("click_consult_cta", null, { position: "sticky_bar" });
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy/95 backdrop-blur-md border-t border-gold/20 p-3 safe-area-inset-bottom">
      <div className="flex gap-2">
        {/* 카카오톡 문의하기 */}
        <a
          href="http://pf.kakao.com/_YFXhX/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#FEE500] text-[#191919] font-bold text-base py-3.5 rounded-md text-center"
        >
          카카오톡 문의하기
        </a>

        {/* 1분 설문 작성하기 */}
        <button
          onClick={scrollToContact}
          className="relative flex-1 bg-gold text-navy font-bold text-base py-3.5 rounded-md overflow-hidden"
        >
          <span className="relative z-10">방문상담 신청하기 →</span>
          <div className="absolute inset-0 bg-shimmer-gold animate-shimmer" />
        </button>
      </div>
    </div>
  );
}
