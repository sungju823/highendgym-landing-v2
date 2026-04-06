"use client";

import { COMPARISON } from "@/lib/constants";
import { Check, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ComparisonTable() {
  return (
    <ScrollReveal>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left p-4 text-cream/60 text-sm font-medium border-b border-gold/20">
                항목
              </th>
              <th className="text-center p-4 text-cream/60 text-sm font-medium border-b border-gold/20">
                일반 헬스장
              </th>
              <th className="text-center p-4 text-gold text-sm font-bold border-b border-gold/40 bg-gold/5">
                HIGHENDGYM
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="p-4 text-cream/80 text-sm">{row.category}</td>
                <td className="p-4 text-center text-cream/50 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <X className="w-4 h-4 text-red-400/60" />
                    {row.general}
                  </div>
                </td>
                <td className="p-4 text-center text-gold text-sm font-medium bg-gold/5">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="w-4 h-4 text-gold" />
                    {row.highend}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ScrollReveal>
  );
}
