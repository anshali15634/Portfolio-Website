"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { Experience } from "@/data/experience";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative min-w-[360px] max-w-[360px] rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#ED254E]/60 hover:bg-white/10"
    >
      {/* Timeline Dot */}

      <div className="absolute -top-[14px] left-8 h-6 w-6 rounded-full border-4 border-[#05070A] bg-[#ED254E]" />

      {/* Logo */}

      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-lg">
          <Image
            src={experience.logo}
            alt={experience.company}
            width={52}
            height={52}
            className="h-auto w-full object-contain"
          />
        </div>

        {experience.website && (
          <a
            href={experience.website}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 p-2 transition hover:border-[#ED254E] hover:text-[#ED254E]"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      {/* Date */}

      <div className="mb-3 flex items-center gap-2 font-[var(--font-doodle)] text-xl text-[#ED254E]">
        <Calendar size={18} />
        {experience.period}
      </div>

      {/* Role */}

      <h3 className="font-[var(--font-display)] text-2xl font-bold text-white">
        {experience.role}
      </h3>

      {/* Company */}

      <div className="mt-2 flex items-center gap-2 text-white/70">
        <MapPin size={16} />

        <span className="text-sm">
          {experience.company} • {experience.location}
        </span>
      </div>

      {/* Description */}

      <ul className="mt-6 space-y-3">
        {experience.description.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-7 text-white/75"
          >
            <span className="mt-[10px] h-2 w-2 flex-shrink-0 rounded-full bg-[#ED254E]" />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Tech Stack */}

      <div className="mt-8 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <motion.span
            key={tech}
            whileHover={{
              scale: 1.05,
              rotate: -2,
            }}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:border-[#ED254E] hover:bg-[#ED254E]"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Decorative Gradient */}

      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ED254E]/0 via-transparent to-[#ED254E]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}