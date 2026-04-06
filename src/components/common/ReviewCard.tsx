"use client";

import { Badge } from "@/components/ui/badge";
import ScrollReveal from "./ScrollReveal";

interface ReviewCardProps {
  name: string;
  age: number;
  job: string;
  badge: string;
  quote: string;
  result: string;
  delay?: number;
}

export default function ReviewCard({
  name,
  age,
  job,
  badge,
  quote,
  result,
  delay = 0,
}: ReviewCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="bg-navy-light border border-gold/20 rounded-xl p-6 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(184,154,94,0.1)] transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <div className="text-cream font-medium text-sm">
              {name}, {age}세, {job}
            </div>
            <Badge
              variant="outline"
              className="border-gold/30 text-gold text-xs mt-1"
            >
              {badge}
            </Badge>
          </div>
        </div>
        <p className="text-cream/80 text-sm leading-relaxed mb-4 font-[family-name:var(--font-maru)]">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="border-t border-gold/10 pt-3">
          <span className="text-gold text-xs font-bold">{result}</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
