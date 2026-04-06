"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";

const TOTAL_FRAMES = 60;
const FRAME_PATH = (i: number) =>
  `/frames/frame-${String(i).padStart(3, "0")}.webp`;

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);

  // Scroll progress mapped to this section (5x viewport height for smooth control)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Map scroll progress to frame index (1-60)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Text fade out as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -60]);

  // Preload all frames
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        loaded++;
        if (loaded === TOTAL_FRAMES) {
          setImagesLoaded(true);
        }
      };
      images[i] = img;
    }
    imagesRef.current = images;
  }, []);

  // Draw frame on canvas (cover mode - like object-fit: cover)
  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      const img = imagesRef.current[index];
      if (!canvas || !ctx || !img) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const scale = Math.max(cw / iw, ch / ih);
      const sw = iw * scale;
      const sh = ih * scale;
      const sx = (cw - sw) / 2;
      const sy = (ch - sh) / 2;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, sx, sy, sw, sh);
    },
    []
  );

  // Resize canvas to fill viewport
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
  }, []);

  useEffect(() => {
    resizeCanvas();
    const handleResize = () => {
      resizeCanvas();
      drawFrame(currentFrame);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [resizeCanvas, drawFrame, currentFrame]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const frame = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(latest)));
    if (frame !== currentFrame) {
      setCurrentFrame(frame);
      drawFrame(frame);
    }
  });

  // Draw first frame once loaded
  useEffect(() => {
    if (imagesLoaded) {
      drawFrame(1);
    }
  }, [imagesLoaded, drawFrame]);

  const scrollToContact = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "500vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Canvas - fullscreen background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />

        {/* Loading state */}
        {!imagesLoaded && (
          <div className="absolute inset-0 bg-navy flex items-center justify-center z-30">
            <div className="text-center">
              <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin mx-auto mb-4" />
              <p className="text-cream/40 text-sm">Loading...</p>
            </div>
          </div>
        )}

        {/* Text overlay - fades out on scroll */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: imagesLoaded ? 1 : 0, y: imagesLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="bg-gold/10 text-gold border-gold/30 mb-8 text-xs tracking-wider px-4 py-1.5 backdrop-blur-sm">
              PREMIUM FITNESS CENTER
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: imagesLoaded ? 1 : 0, y: imagesLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
          >
            당신이 운동을 포기한 건,
            <br />
            <span className="relative inline-block">
              의지가 약해서가 아닙니다.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: imagesLoaded ? "100%" : 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-0 left-0 h-[3px] bg-gold-gradient"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: imagesLoaded ? 1 : 0, y: imagesLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-cream/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]"
          >
            환경이 당신의 수준에 맞지 않았던 것입니다.
            <br />
            지금껏 경험해보지 못한 방식으로 운동��� 시작됩니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: imagesLoaded ? 1 : 0, y: imagesLoaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <button
              onClick={scrollToContact}
              className="relative bg-gold text-navy font-bold text-base md:text-lg px-10 py-4 rounded-md hover:bg-gold-light transition-all duration-300 hover:scale-[1.02] w-full md:w-auto overflow-hidden"
            >
              <span className="relative z-10">무료 체험 신청하기</span>
              <div className="absolute inset-0 bg-shimmer-gold animate-shimmer" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: imagesLoaded ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-cream/50"
          >
            <span>장비 하나가 몸의 방향을 바꿉니다</span>
            <span className="text-gold/30">|</span>
            <span>트레이너가 아닌, 파트너를 찾는 것</span>
            <span className="text-gold/30">|</span>
            <span>결과가 없었던 건 루틴의 문제</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-cream/30 text-xs tracking-widest">SCROLL</span>
            <ChevronDown className="w-5 h-5 text-gold/50 animate-bounce-arrow" />
          </div>
        </motion.div>

        {/* Scroll progress bar */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
          <div className="w-[2px] h-24 bg-cream/10 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gold rounded-full origin-top"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
