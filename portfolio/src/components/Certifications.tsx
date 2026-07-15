"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Carousel, { CarouselItem } from "@/components/ui/carousel";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const items: CarouselItem[] = certifications.map((cert) => ({
    id: cert.id,
    title: cert.title,
    icon: (
      <div className="relative w-10 h-10">
        <Image
          src={cert.logo}
          alt={`${cert.issuer} logo`}
          fill
          sizes="40px"
          className="object-contain object-left"
        />
      </div>
    ),
    description: (
      <div className="flex flex-col gap-3">
        <p className="text-[#4b5563]">
          {cert.courseDescription}
        </p>

        <span className="text-xs text-[#4b5563]">
          {cert.issuer} &middot; {cert.issueDate}
        </span>

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
    ),
  }));

  return (
    <section
      id="certifications"
      className="grid-background relative overflow-hidden py-20"
    >
      <div className="container-custom">
        <div className="grid items-center gap-16 px-2 sm:px-4 lg:grid-cols-2 lg:px-0">
          <div className="pr-1 sm:pr-2">
            <h2 className="text-3xl font-bold tracking-tight text-[#011936] sm:text-4xl">
              Certifications
            </h2>

            <p className="mt-3 max-w-xl text-muted">
              As an aspiring AI engineer, I am deeply passionate about
              exploring the latest advancements in artificial intelligence
              and machine learning. I actively pursue industry-recognized
              certifications to strengthen my skills, stay ahead of emerging
              technologies, and ensure I can contribute meaningfully to
              innovative AI solutions.
            </p>
          </div>

          <div className="flex justify-center px-2 sm:px-4">
            <Carousel
              className="w-full max-w-[560px]"
              items={items}
              baseWidth={560}
              autoplay
              autoplayDelay={4500}
              pauseOnHover
              loop
            />
          </div>
        </div>
      </div>
    </section>
  );
}