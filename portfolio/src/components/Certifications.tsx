// certifications.tsx
"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";

function CertCard({ cert }: { cert: Certification }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className={`group relative rounded-2xl border bg-white/70 backdrop-blur-sm transition-shadow duration-300 ${
        cert.featured
          ? "border-[#ED254E]/40 shadow-[0_0_0_1px_rgba(237,37,78,0.08),0_12px_32px_-12px_rgba(237,37,78,0.25)] lg:col-span-2"
          : "border-[rgba(1,25,54,0.08)] shadow-[0_4px_16px_-8px_rgba(1,25,54,0.15)]"
      }`}
    >
      {cert.featured && (
        <span className="absolute -top-2.5 left-5 rounded-full bg-[#ED254E] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
          Featured
        </span>
      )}

      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-4 rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ED254E]/50"
      >
        {/* "wax seal" badge */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#ED254E]/40 bg-white p-2 shadow-sm transition-transform duration-300 group-hover:rotate-0"
          style={{ transform: "rotate(-6deg)" }}
        >
          <div className="relative h-8 w-8">
            <Image
              src={cert.logo}
              alt={`${cert.issuer} logo`}
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-wide text-[#94a3b8]">
            {cert.issuer} &middot; {cert.issueDate}
          </p>
          <h3 className="mt-1 text-base font-semibold leading-snug text-[#011936] sm:text-lg">
            {cert.title}
          </h3>
          {!open && (
            <p className="mt-1 truncate text-sm text-[#4b5563]">
              {cert.courseDescription}
            </p>
          )}
        </div>

        <ChevronDown
          className={`mt-1 h-4 w-4 shrink-0 text-[#94a3b8] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* expand/collapse without a JS animation library */}
      <div
        id={panelId}
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 px-5 pb-5 pl-[4.75rem]">
            <p className="text-sm leading-relaxed text-[#4b5563]">
              {cert.courseDescription}
            </p>

            {cert.certificateUrl ? (
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#ED254E]/30 px-3 py-1.5 text-xs font-medium text-[#ED254E] transition-colors duration-300 hover:bg-[#ED254E] hover:text-white"
              >
                View Certificate
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[rgba(1,25,54,.1)] px-3 py-1.5 text-xs font-medium text-[#94a3b8] cursor-not-allowed">
                Certificate coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="grid-background relative overflow-hidden py-20"
    >
      <div className="container-custom px-4 sm:px-6 lg:px-0">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#ED254E]/25 bg-[#ED254E]/5 px-3 py-1 text-xs font-medium text-[#ED254E]">
            {certifications.length} certifications earned
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#011936] sm:text-4xl">
            Certifications
          </h2>
          <p className="mt-3 text-muted">
            As an aspiring AI engineer, I am deeply passionate about
            exploring the latest advancements in artificial intelligence
            and machine learning. I actively pursue industry-recognized
            certifications to strengthen my skills, stay ahead of emerging
            technologies, and ensure I can contribute meaningfully to
            innovative AI solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}