"use client";

import { motion } from "framer-motion";

interface GoldDividerProps {
  className?: string;
}

export default function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[2px] bg-gold-gradient"
      />
    </div>
  );
}
