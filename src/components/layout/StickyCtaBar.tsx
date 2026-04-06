"use client";

import { useEffect, useState } from "react";

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
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy/95 backdrop-blur-md border-t border-gold/20 p-3 safe-area-inset-bottom">
      <button
        onClick={scrollToContact}
        className="relative w-full bg-gold text-navy font-bold text-base py-3.5 rounded-md overflow-hidden"
      >
        <span className="relative z-10">무료 체험 예약하기</span>
        <div className="absolute inset-0 bg-shimmer-gold animate-shimmer" />
      </button>
    </div>
  );
}
