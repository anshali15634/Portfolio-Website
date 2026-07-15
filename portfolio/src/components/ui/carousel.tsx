"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  id: number;
  title: string;
  description: ReactNode;
  icon?: ReactNode;
}

interface CarouselProps {
  items: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  className?: string;
}

const SPRING = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

export default function Carousel({
  items,
  baseWidth = 560,
  autoplay = false,
  autoplayDelay = 4000,
  pauseOnHover = true,
  loop = true,
  className,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const total = items.length;

  const goTo = (i: number) => {
    if (loop) {
      setIndex(((i % total) + total) % total);
    } else {
      setIndex(Math.min(Math.max(i, 0), total - 1));
    }
  };

  useEffect(() => {
    if (!autoplay || (pauseOnHover && isHovered) || total <= 1) return;

    const timer = setInterval(() => {
      goTo(index + 1);
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [
    autoplay,
    autoplayDelay,
    pauseOnHover,
    isHovered,
    index,
    total,
  ]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = baseWidth / 4;

    if (info.offset.x < -threshold) {
      goTo(index + 1);
    } else if (info.offset.x > threshold) {
      goTo(index - 1);
    }
  };

  return (
    <div
      className={cn("relative w-full max-w-[560px] px-1 sm:px-2 md:px-4", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-2xl">
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${index * 100}%` }}
          transition={SPRING}
        >
          {items.map((it) => (
            <div
              key={it.id}
              className="w-full shrink-0 px-1"
            >
              <div className="h-full rounded-2xl border border-[rgba(1,25,54,.1)] bg-white p-6 shadow-sm">
                {it.icon}

                <h3 className="mt-3 font-bold text-[#011936]">
                  {it.title}
                </h3>

                <div className="mt-2 text-sm">
                  {it.description}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous certification"
            onClick={() => goTo(index - 1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[rgba(1,25,54,.1)] bg-white p-2 shadow transition-colors duration-300 hover:border-[#ED254E] hover:bg-[#ED254E] hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            aria-label="Next certification"
            onClick={() => goTo(index + 1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[rgba(1,25,54,.1)] bg-white p-2 shadow transition-colors duration-300 hover:border-[#ED254E] hover:bg-[#ED254E] hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === index
                    ? "w-6 bg-[#ED254E]"
                    : "w-2 bg-[rgba(1,25,54,.15)]"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}