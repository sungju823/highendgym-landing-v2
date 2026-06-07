"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ZoomRevealProps {
  children: ReactNode;
  className?: string;
}

export default function ZoomReveal({ children, className = "" }: ZoomRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${className}`}
    >
      <div
        className="w-full h-full transition-transform duration-[1200ms] ease-out"
        style={{
          transform: visible ? "scale(1)" : "scale(1.15)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
