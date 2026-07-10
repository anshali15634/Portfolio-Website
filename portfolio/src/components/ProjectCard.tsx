"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="mx-auto w-full max-w-3xl overflow-hidden rounded-[36px] border border-[#011936]/10 bg-white shadow-[0_20px_60px_rgba(1,25,54,0.08)]"
    >
      <div className="grid lg:grid-cols-[45%_55%]">
        {/* Image */}

        <div className="relative overflow-hidden bg-[#f8fafc]">
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
            }}
          >
            <Image
              src={project.image}
              alt={project.project_name}
              width={1200}
              height={900}
              className="aspect-video h-full w-full object-cover lg:min-h-[520px]"
            />
          </motion.div>
        </div>

        {/* Content */}

        <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
          <div>
            <span className="font-[var(--font-handwriting)] text-xl text-[#ED254E]">
              {project.startDate} — {project.endDate}
            </span>

            <h3 className="mt-3 text-3xl font-bold text-[#011936]">
              {project.project_name}
            </h3>

            <p className="mt-6 leading-8 text-muted">
              {project.summary}
            </p>
          </div>

          <div className="mt-12">
            {project.project_link ? (
              <a
                href={project.project_link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#011936] px-6 py-3 font-medium text-white no-underline transition-all duration-300 hover:bg-[#ED254E] hover:text-white"
              >
                <span className="text-white transition-colors duration-300 group-hover:text-white">
                  View Project
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full border border-[#011936]/10 bg-[#f8fafc] px-6 py-3 text-sm text-[#64748b]">
                <Lock size={16} />

                Source code unavailable • Proprietary
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}