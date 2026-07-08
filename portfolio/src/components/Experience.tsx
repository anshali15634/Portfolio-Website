"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      // use a named easing function to satisfy framer-motion TypeScript types
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: -420,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experience"
      className="section bg-[#05070A] text-white overflow-hidden"
    >
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-5 flex items-center gap-3 font-[var(--font-doodle)] text-3xl text-[#ED254E]">
              <span className="h-[2px] w-8 bg-[#ED254E]" />
              experience
            </p>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
              My journey in AI research
              <br />
              and industry.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              From academic research to enterprise AI engineering, each role
              has strengthened my expertise in building practical, scalable,
              and impactful AI solutions.
            </p>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden gap-4 lg:flex">

            <button
              onClick={scrollLeft}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#ED254E] hover:bg-[#ED254E]"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={scrollRight}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#ED254E] hover:bg-[#ED254E]"
            >
              <ChevronRight size={24} />
            </button>

          </div>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Timeline Line */}

          <div className="absolute left-0 right-0 top-6 hidden h-[3px] bg-white/10 lg:block" />

          {/* Cards */}

          <div
            ref={scrollRef}
            className="
              flex
              gap-10
              overflow-x-auto
              pb-8
              pt-10
              snap-x
              snap-mandatory
              scrollbar-hide
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

        {/* Mobile Buttons */}

        <div className="mt-10 flex justify-center gap-4 lg:hidden">

          <button
            onClick={scrollLeft}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#ED254E] hover:bg-[#ED254E]"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={scrollRight}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-[#ED254E] hover:bg-[#ED254E]"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* Bottom Summary */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.2,
          }}
          className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
        >
          <div className="grid gap-8 md:grid-cols-4">

            <div>
              <h3 className="text-5xl font-bold text-[#ED254E]">
                6
              </h3>

              <p className="mt-3 text-white/70">
                AI Research & Industry Roles
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#ED254E]">
                2
              </h3>

              <p className="mt-3 text-white/70">
                Research Publications
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#ED254E]">
                20+
              </h3>

              <p className="mt-3 text-white/70">
                AI Technologies Used
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-[#ED254E]">
                2024–
              </h3>

              <p className="mt-3 text-white/70">
                Research & Professional Experience
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}