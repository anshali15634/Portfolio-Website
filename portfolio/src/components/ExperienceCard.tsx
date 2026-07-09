"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  const [open, setOpen] = useState(false);

  // Prevent page scrolling while modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Timeline Card */}

      <motion.article
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
        }}
        whileHover={{
          y: -8,
        }}
        className={`
          relative
          flex
          h-[330px]
          w-[360px]
          flex-col
          rounded-3xl
          border
          p-7
          transition-all
          duration-300

          ${
            experience.featured
              ? "border-[#ED254E]/50 bg-[#ED254E]/5"
              : "border-white/10 bg-white/5"
          }

          backdrop-blur-md
          hover:border-[#ED254E]
          hover:shadow-[0_18px_45px_rgba(237,37,78,.15)]
        `}
      >
        {/* Timeline Dot */}

        <div className="absolute -top-[17px] left-8">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#011936] bg-[#ED254E]">
            <div className="h-2.5 w-2.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Latest Badge */}

        {experience.featured && (
          <div className="absolute right-5 top-5 rounded-full bg-[#ED254E] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
            Latest
          </div>
        )}

        {/* Logo */}

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-md">
          <Image
            src={experience.logo}
            alt={experience.company}
            width={54}
            height={54}
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Dates */}

        <div className="mt-6 flex items-center gap-2 text-sm text-[#ED254E]">
          <Calendar size={16} />
          <span>
            {experience.startDate} – {experience.endDate}
          </span>
        </div>

        {/* Role */}

        <h3 className="mt-4 font-[var(--font-display)] text-2xl font-bold leading-tight text-white">
          {experience.role}
        </h3>

        {/* Company */}

        <p className="mt-4 text-base font-medium text-white/80">
          {experience.company}
        </p>

        {/* Location */}

        <div className="mt-2 flex items-center gap-2 text-sm text-white/50">
          <MapPin size={15} />
          {experience.location}
        </div>

        {/* Duration */}

        <p className="mt-2 text-sm text-white/40">
          {experience.duration}
        </p>

        {/* Summary */}

        <p className="mt-6 line-clamp-2 text-sm leading-7 text-white/65">
          {experience.summary}
        </p>

        {/* Button */}

        <button
          onClick={() => setOpen(true)}
          className="mt-auto flex items-center gap-2 font-medium text-[#ED254E] transition hover:translate-x-1"
        >
          More information

          <ArrowRight size={16} />
        </button>
      </motion.article>

      {/* ==================================================== */}
      {/* MODAL */}
      {/* ==================================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-3xl
                overflow-y-auto
                rounded-3xl
                border
                border-[#ED254E]/30
                bg-[#011936]
                p-10
                shadow-2xl
              "
            >
              {/* Close */}

              <button
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-[#ED254E]"
              >
                <X size={18} />
              </button>

              {/* Header */}

              <div className="flex items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white p-4">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <div>
                  <p className="font-[var(--font-doodle)] text-2xl text-[#ED254E]">
                    {experience.company}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-white">
                    {experience.role}
                  </h2>

                  <p className="mt-3 text-white/60">
                    {experience.startDate} – {experience.endDate} •{" "}
                    {experience.location}
                  </p>
                </div>
              </div>

              {/* Overview */}

              <section className="mt-10">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Overview
                </h3>

                <p className="leading-8 text-white/75">
                  {experience.details.overview}
                </p>
              </section>

              {/* Achievements */}

              <section className="mt-10">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Key Contributions
                </h3>

                <ul className="space-y-4">
                  {experience.details.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-4"
                    >
                      <span className="mt-3 h-2 w-2 rounded-full bg-[#ED254E]" />

                      <p className="leading-7 text-white/75">
                        {achievement}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Technologies */}

              <section className="mt-10">
                <h3 className="mb-5 text-xl font-semibold text-white">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-3">
                  {experience.details.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-[#ED254E]/40
                        bg-[#ED254E]/10
                        px-4
                        py-2
                        text-sm
                        text-white
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}