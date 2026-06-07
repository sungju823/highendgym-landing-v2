"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  decimal?: boolean;
  label: string;
  placeholder?: boolean;
}

export default function StatCounter({
  value,
  suffix = "",
  decimal = false,
  label,
  placeholder = false,
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (placeholder) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated, placeholder]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-gold mb-2">
        {placeholder ? (
          <span className="text-gold/40">—</span>
        ) : (
          <>
            {decimal ? count.toFixed(1) : Math.floor(count)}
            <span className="text-3xl md:text-4xl">{suffix}</span>
          </>
        )}
      </div>
      <div className="text-cream/70 text-sm md:text-base">{label}</div>
    </div>
  );
}
