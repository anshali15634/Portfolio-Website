"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const skills = [
  "Natural Language Processing",
  "Machine Learning",
  "Computer Vision",
  "Agentic AI",
  "RAG Systems",
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid-background relative overflow-hidden pt-40 pb-20"
    >
      {/* Background Glow */}

      <div className="absolute -top-48 right-0 h-[500px] w-[500px] rounded-full bg-[#ED254E]/10 blur-3xl" />

      <div className="container-custom">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >

            <motion.h1
              variants={item}
              className="leading-none text-[3.3rem] font-bold tracking-tight text-[#011936] sm:text-7xl"
            >
               Building things
              <br />

              <span className="relative inline-block">

                that read,
                <span className="relative text-[#ED254E]">
                  {" "}see{" "}

                  <svg
                    className="absolute -bottom-5 left-0 w-full"
                    viewBox="0 0 280 24"
                    fill="none"
                  >
                    <motion.path
                      d="M5 16 Q50 2 95 14 T190 14 T275 10"
                      stroke="#ED254E"
                      strokeWidth="5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.2,
                        delay: 1,
                      }}
                    />
                  </svg>
                </span>

                {" "}and think.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-8 text-muted font-[var(--font-handwriting)] text-xl"
            >
              First-Class Honours graduate in Computer Science with AI.
              Passionate about building intelligent systems using{" "}
              <span className="font-semibold text-[#011936]">
                NLP
              </span>
              ,{" "}
              <span className="font-semibold text-[#011936]">
                Machine Learning
              </span>
              ,{" "}
              <span className="font-semibold text-[#011936]">
                Computer Vision
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#011936]">
                Agentic AI
              </span>
              . In my free time, I enjoy making animations with Python (˶ᵔ ᵕ ᵔ˶)
            </motion.p>

            {/* Skill Pills */}

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    y: -4,
                    rotate: -2,
                  }}
                  className="rounded-full border border-[rgba(1,25,54,.15)] bg-white px-5 py-2 text-sm font-medium shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}

            <motion.div
              variants={item}
              className="mt-12 flex flex-wrap gap-5"
            >
              <Link
                href="#projects"
                className="group btn-primary flex items-center gap-2"
              >
                View Projects

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="btn-outline"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Floating doodle image */}

            <motion.div
              animate={{
                y: [0, -18, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/fina2.gif"
                alt="Anshali Manoharan"
                width={1030}
                height={1030}
                priority
                className="h-auto w-full max-w-[1050px] select-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}