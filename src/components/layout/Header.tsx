"use client";

import { useState, useEffect } from "react";
import { track } from "@/lib/track";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    track("click_consult_cta", null, { position: "header" });
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-[family-name:var(--font-heading)] text-xl font-bold text-gold italic tracking-wide"
        >
          HIGHENDGYM
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "차별화", id: "diff" },
            { label: "시작하기", id: "solution" },
            { label: "후기", id: "authority" },
            { label: "FAQ", id: "urgency" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() =>
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-cream/60 hover:text-gold text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* 인스타그램 */}
          <a
            href="https://www.instagram.com/highendgym_wang/"
            onClick={() => track("click_instagram", null)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          {/* 네이버 블로그 */}
          <a
            href="https://blog.naver.com/highend_fit"
            onClick={() => track("click_blog", null)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold transition-colors font-bold text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 2h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm5.5 14.5h2.3l2.4-4.8V16.5H15.5V7.5h-2.3l-2.4 4.8V7.5H8.5v9z" />
            </svg>
          </a>

          <button
            onClick={scrollToContact}
            className="bg-gold/10 text-gold border border-gold/30 text-sm font-medium px-5 py-2 rounded-md hover:bg-gold/20 transition-colors"
          >
            방문상담 신청하기
          </button>
        </div>
      </div>
    </header>
  );
}
