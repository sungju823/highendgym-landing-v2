"use client";

import ScrollReveal from "./ScrollReveal";

interface ProcessStepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ProcessStep({
  number,
  icon,
  title,
  description,
  delay = 0,
}: ProcessStepProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <div className="text-gold text-xs font-bold mb-1 tracking-wider">
            STEP {number}
          </div>
          <h4 className="text-cream font-semibold mb-1">{title}</h4>
          <p className="text-cream/60 text-sm">{description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
