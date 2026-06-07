"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface ReviewCardProps {
  reviewer: string;
  badge: string;
  quote: string;
  highlight?: string;
  image?: string;
  delay?: number;
}

export default function ReviewCard({
  reviewer,
  badge,
  quote,
  highlight,
  image,
  delay = 0,
}: ReviewCardProps) {
  const renderQuote = () => {
    if (!highlight) {
      return <>&ldquo;{quote}&rdquo;</>;
    }

    const idx = quote.indexOf(highlight);
    if (idx === -1) {
      return <>&ldquo;{quote}&rdquo;</>;
    }

    const before = quote.slice(0, idx);
    const after = quote.slice(idx + highlight.length);

    return (
      <>
        &ldquo;{before}
        <span className="text-white font-medium">{highlight}</span>
        {after}&rdquo;
      </>
    );
  };

  return (
    <ScrollReveal delay={delay}>
      <div className="bg-navy border border-gold/20 rounded-xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(180,154,109,0.1)] transition-all duration-300 h-full flex flex-col">
        {/* 리뷰 사진 */}
        {image && (
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={image}
              alt={`${reviewer} 네이버 리뷰`}
              fill
              className="object-cover object-top scale-[1.05]"
            />
          </div>
        )}

        {/* 리뷰 텍스트 */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-gold/10 text-gold text-[10px] font-bold px-2 py-1 rounded">
              {badge}
            </span>
            <span className="text-white text-xs">{reviewer}</span>
          </div>
          <p className="text-cream/50 text-sm leading-relaxed flex-1 min-h-[280px] md:min-h-[300px]">
            {renderQuote()}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
