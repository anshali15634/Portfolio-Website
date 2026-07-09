"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!timelineRef.current) return;

    timelineRef.current.scrollBy({
      left: direction === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experience"
      className="grid-background-dark overflow-hidden bg-[#011936] py-28"
    >
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-[var(--font-doodle)] text-3xl text-[#ED254E]">
              Work Experience
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
              Research and industry experience across Artificial Intelligence,
              Machine Learning, Computer Vision and Backend Engineering.
            </p>
          </div>

          {/* Navigation */}

          <div className="flex items-center gap-4">

            <button
              onClick={() => scroll("left")}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                transition-all
                duration-300
                hover:border-[#ED254E]
                hover:bg-[#ED254E]
              "
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-white
                transition-all
                duration-300
                hover:border-[#ED254E]
                hover:bg-[#ED254E]
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-16">

          {/* Timeline Line */}

          <div className="absolute left-0 right-0 top-5 hidden h-[3px] bg-white/10 lg:block" />

          {/* Cards */}

          <div
            ref={timelineRef}
            className="
              scrollbar-hide
              flex
              snap-x
              snap-mandatory
              gap-8
              overflow-x-auto
              scroll-smooth
              px-1
              pb-10
              pt-10
            "
          >
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className="snap-start"
              >
                <ExperienceCard
                  experience={experience}
                  index={index}
                />
              </div>
            ))}
          </div>

        </div>

        {/* Scroll Hint */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.4,
          }}
          className="mt-2 flex items-center justify-center gap-2 text-sm text-white/50"
        >
          <MoveHorizontal
            size={16}
            className="text-[#ED254E]"
          />

          <span>Drag or use the arrows to explore the timeline</span>

        </motion.div>

      </div>
    </section>
  );
}