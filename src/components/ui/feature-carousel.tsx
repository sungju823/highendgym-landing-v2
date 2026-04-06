"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- TYPES ---
interface FeatureCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: { src: string; alt: string }[];
}

// --- FEATURE CAROUSEL COMPONENT ---
export const FeatureCarousel = React.forwardRef<
  HTMLDivElement,
  FeatureCarouselProps
>(({ images, className, ...props }, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(
    Math.floor(images.length / 2)
  );

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div
      ref={ref}
      className={cn("relative w-full", className)}
      {...props}
    >
      {/* Main Showcase */}
      <div className="relative w-full h-[280px] md:h-[400px] flex items-center justify-center">
        {/* Carousel Wrapper */}
        <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
          {images.map((image, index) => {
            const offset = index - currentIndex;
            const total = images.length;
            let pos = (offset + total) % total;
            if (pos > Math.floor(total / 2)) {
              pos = pos - total;
            }

            const isCenter = pos === 0;
            const isAdjacent = Math.abs(pos) === 1;

            return (
              <div
                key={index}
                className={cn(
                  "absolute w-52 h-72 md:w-72 md:h-[400px] transition-all duration-500 ease-in-out",
                  "flex items-center justify-center"
                )}
                style={{
                  transform: `
                    translateX(${pos * 50}%)
                    scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                    rotateY(${pos * -10}deg)
                  `,
                  zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                  opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                  filter: isCenter ? "blur(0px)" : "blur(4px)",
                  visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
                }}
              >
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                  {/* Gold border overlay for center item */}
                  {isCenter && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-gold/40 shadow-[0_0_40px_rgba(184,154,94,0.2)]" />
                  )}
                  {!isCenter && (
                    <div className="absolute inset-0 rounded-2xl border border-white/10" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-navy/60 backdrop-blur-sm border-gold/20 text-gold hover:bg-gold/10 hover:text-gold"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-navy/60 backdrop-blur-sm border-gold/20 text-gold hover:bg-gold/10 hover:text-gold"
          onClick={handleNext}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-gold w-6"
                : "bg-cream/20 hover:bg-cream/40"
            )}
          />
        ))}
      </div>
    </div>
  );
});

FeatureCarousel.displayName = "FeatureCarousel";
