"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Lock, RotateCcw } from "lucide-react";
import { projects, Project } from "@/data/projects";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Alternating tilt so the strip reads like pinned photographs, not a grid.
const TILTS = [-3, 2, -1.5, 3, -2, 1];

function dateLabel(p: Project) {
  if (!p.startDate && !p.endDate) return null;
  if (p.startDate === p.endDate) return p.startDate;
  return `${p.startDate} – ${p.endDate}`;
}

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ down: false, startX: 0, startScroll: 0 });
  const shouldReduceMotion = useReducedMotion();

  // `shouldReduceMotion` reads matchMedia synchronously on the client but
  // defaults to false on the server, so it can't be trusted for anything
  // that affects the very first paint (that's what caused the hydration
  // mismatch). Instead, render everyone flat until after mount, then let
  // the cards settle into their tilt — client-only, so server and the
  // client's first paint always agree.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position for the progress bar + arrow disabled states
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const pct = max > 0 ? (el.scrollLeft / max) * 100 : 0;
      setProgress(pct);
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft >= max - 4);
      setActiveIndex(Math.round((pct / 100) * (projects.length - 1)) || 0);
    };

    // Capture wheel scroll and redirect it horizontally, but only while
    // there's still room to move — otherwise let the page scroll normally.
    const onWheel = (e: WheelEvent) => {
      const max = el.scrollWidth - el.clientWidth;
      const goingRight = e.deltaY > 0;
      const goingLeft = e.deltaY < 0;
      if (
        (goingRight && el.scrollLeft < max - 1) ||
        (goingLeft && el.scrollLeft > 1)
      ) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  const scrollByPage = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;

    // Don't start drag if clicking on a button or interactive element
    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }

    dragState.current = {
      down: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el || !dragState.current.down) return;
    const dx = e.clientX - dragState.current.startX;
    el.scrollLeft = dragState.current.startScroll - dx;
  };

  const endDrag = () => {
    dragState.current.down = false;
  };

  return (
    <section id="Projects" className="grid-background relative overflow-hidden py-24">
      <div className="absolute -bottom-48 left-0 h-[500px] w-[500px] rounded-full bg-[#ED254E]/10 blur-3xl" />

      <div className="container-custom">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ED254E]"
          >
            Selected Work
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 text-[2.6rem] font-bold leading-none tracking-tight text-[#011936] sm:text-5xl"
          >
            Things I&apos;ve{" "}
            <span className="relative inline-block">
              built
              <svg
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 220 24"
                fill="none"
              >
                <motion.path
                  d="M5 16 Q40 2 75 14 T150 14 T215 10"
                  stroke="#ED254E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </svg>
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-8 text-muted font-[var(--font-handwriting)]"
          >
            A field notebook of projects I've built over the years. Drag, scroll, or use the arrows to browse —
            click a card to flip it.
          </motion.p>
        </motion.div>

        {/* Nav row: arrows + progress */}
        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={atStart}
            aria-label="Scroll to previous projects"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(1,25,54,.15)] bg-white shadow-sm transition-opacity hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowLeft size={18} className="text-[#011936]" />
          </button>

          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={atEnd}
            aria-label="Scroll to next projects"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(1,25,54,.15)] bg-white shadow-sm transition-opacity hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-30"
          >
            <ArrowRight size={18} className="text-[#011936]" />
          </button>

          <div className="relative ml-2 h-1.5 flex-1 overflow-hidden rounded-full bg-[rgba(1,25,54,.08)]">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-[#ED254E]"
              style={{ width: `${Math.max(progress, 6)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </div>

          <span className="shrink-0 text-sm font-medium tabular-nums text-muted">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Horizontal film strip */}
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="mt-8 flex cursor-grab gap-8 overflow-x-auto px-2 pb-6 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              restRotate={
                mounted && !shouldReduceMotion ? TILTS[i % TILTS.length] : 0
              }
              dates={dateLabel(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project: p,
  restRotate,
  dates,
}: {
  project: Project;
  restRotate: number;
  dates: string | null;
}) {
  const [flipped, setFlipped] = useState(false);
  const hasLink = Boolean(p.project_link && p.project_link.trim());

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: flipped ? 0 : restRotate }}
      whileHover={{ rotate: 0, y: -10 }}
      whileFocus={{ rotate: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      style={{ perspective: 1400 }}
      className="group relative h-[440px] w-[240px] shrink-0 snap-start sm:h-[480px] sm:w-[270px]"
    >
      {/* washi-tape accent, sits above the flipping card */}
      <span className="absolute -top-3 left-6 z-10 h-6 w-14 -rotate-6 rounded-sm bg-[#ED254E]/20" />

      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 26 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        {/* FRONT */}
        <button
          type="button"
          onClick={() => setFlipped(true)}
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 flex h-full w-full flex-col rounded-2xl border border-[rgba(1,25,54,.1)] bg-white p-3 text-left shadow-md"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-[#011936]/5">
            <Image
              src={p.image}
              alt={p.project_name}
              fill
              sizes="(max-width: 640px) 240px, 270px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#011936]/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex items-center gap-1 text-sm font-semibold text-white">
                View details
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </div>

          <h3 className="mt-4 line-clamp-2 text-base font-bold leading-snug text-[#011936]">
            {p.project_name}
          </h3>
          {dates && (
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
              {dates}
            </p>
          )}
        </button>

        {/* BACK */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 flex h-full w-full flex-col rounded-2xl border border-[rgba(1,25,54,.1)] bg-white p-5 shadow-md"
        >
          <button
            type="button"
            onClick={() => setFlipped(false)}
            aria-label="Flip back"
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(1,25,54,.15)] bg-white shadow-sm hover:-translate-y-0.5"
          >
            <RotateCcw size={14} className="text-[#011936]" />
          </button>

          {dates && (
            <p className="pr-8 text-xs font-semibold uppercase tracking-wide text-[#ED254E]">
              {dates}
            </p>
          )}
          <h3 className="mt-2 pr-8 text-lg font-bold leading-tight text-[#011936]">
            {p.project_name}
          </h3>

          <p className="mt-3 flex-1 overflow-y-auto text-[13px] leading-6 text-muted [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {p.summary}
          </p>

          {hasLink ? (
            <a
              href={p.project_link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-primary mt-4 flex w-fit items-center gap-2 text-sm"
            >
              View Project
              <ExternalLink size={14} />
            </a>
          ) : (
            <p className="mt-4 flex items-center gap-2 text-xs font-medium italic text-muted">
              <Lock size={13} />
              Proprietary code — source code unavailable
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}