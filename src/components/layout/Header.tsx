"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
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
          className="font-[family-name:var(--font-display)] text-xl font-bold text-gold italic tracking-wide"
        >
          HIGHENDGYM
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "차별화", id: "diff" },
            { label: "프로그램", id: "solution" },
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

        <button
          onClick={scrollToContact}
          className="bg-gold/10 text-gold border border-gold/30 text-sm font-medium px-5 py-2 rounded-md hover:bg-gold/20 transition-colors"
        >
          상담 예약
        </button>
      </div>
    </header>
  );
}
