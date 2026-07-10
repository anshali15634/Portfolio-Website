"use client";

import { motion } from "framer-motion";
import { awards } from "@/data/awards";

export default function Awards() {
  const duplicatedAwards = [...awards, ...awards];

  return (
    <section id="awards" className="grid-background-dark bg-[#011936] py-28 text-white">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 font-[var(--font-doodle)] text-3xl text-[#ED254E]">
            <span className="h-[2px] w-8 bg-[#ED254E]" />
            accolades
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Awards, recognitions and milestones.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            A timeline of honours that reflects the research, leadership and impact
            behind my work across academia and innovation.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 34,
              ease: "linear",
            }}
            className="flex w-max gap-5"
          >
            {duplicatedAwards.map((award, index) => (
              <motion.div
                key={`${award.id}-${index}`}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex h-full w-[360px] flex-shrink-0 flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[#ED254E]/40 bg-[#ED254E]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#ff9fb2]">
                    {award.date}
                  </span>
                  <span className="text-sm text-white/50">#{award.id}</span>
                </div>

                <h3 className="text-xl font-semibold leading-snug text-white">
                  {award.title}
                </h3>

                <div className="mt-4 space-y-1 text-sm text-white/70">
                  <p className="font-medium text-white/90">{award.issuer}</p>
                  {award.associatedWith ? (
                    <p>Associated with {award.associatedWith}</p>
                  ) : null}
                </div>

                <p className="mt-6 text-sm leading-7 text-white/70">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
