"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { certifications } from "@/data/certifications";
import { cn } from "@/lib/utils";

const CertificateHeader = ({
  logo,
  issuer,
  courseDescription,
}: {
  logo: string;
  issuer: string;
  courseDescription: string;
}) => (
  <div className="flex flex-col w-full rounded-xl bg-[#ED254E]/[0.06] p-4">
    <div className="relative w-10 h-10 shrink-0 transition-transform duration-300 group-hover/bento:scale-110">
      <Image
        src={logo}
        alt={`${issuer} logo`}
        fill
        sizes="40px"
        className="object-contain object-left"
      />
    </div>

    <p className="mt-3 text-xs leading-relaxed text-[#334155]">
      {courseDescription}
    </p>
  </div>
);

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="grid-background relative overflow-hidden py-20"
    >
      <div className="container-custom">
        <h2 className="text-3xl font-bold tracking-tight text-[#011936] sm:text-4xl">
          Certifications
        </h2>
        <p className="mt-3 max-w-xl text-[#4b5563]">
          Credentials I&apos;ve earned along the way
        </p>

        <div className="mt-12">
          <BentoGrid>
            {certifications.map((cert) => (
              <BentoGridItem
                key={cert.id}
                className={cn(cert.featured && "md:col-span-2")}
                header={
                  <CertificateHeader
                    logo={cert.logo}
                    issuer={cert.issuer}
                    courseDescription={cert.courseDescription}
                  />
                }
                title={cert.title}
                description={
                  <div className="flex flex-col gap-3">
                    <span className="text-[#4b5563]">
                      {cert.issuer} &middot; {cert.issueDate}
                    </span>

                    {cert.certificateUrl ? (
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 w-fit rounded-full border border-[#ED254E]/30 px-3 py-1.5 text-xs font-medium text-[#ED254E] hover:bg-[#ED254E] hover:text-white transition-colors duration-300"
                      >
                        View Certificate
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 w-fit rounded-full border border-[rgba(1,25,54,.1)] px-3 py-1.5 text-xs font-medium text-[#94a3b8] cursor-not-allowed">
                        Certificate coming soon
                      </span>
                    )}
                  </div>
                }
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}