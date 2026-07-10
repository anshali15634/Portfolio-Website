"use client";

import { motion, type Variants } from "framer-motion";

const stats = [
  {
    value: "5",
    label: "Research Internships",
  },
  {
    value: "2",
    label: "Research Publications",
  },
  {
    value: "1st",
    label: "Class Honours Degree",
  },
  {
    value: "6+",
    label: "Professional Certifications",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container-custom">

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              variants={fadeUp}
              className="mb-5 flex items-center gap-3 font-[var(--font-doodle)] text-3xl text-[#ED254E]"
            >
              <span className="h-[2px] w-8 bg-[#ED254E]" />
              about me
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-5xl font-bold leading-tight text-[#011936] md:text-6xl"
            >
              I enjoy building AI that solves real problems.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg leading-8 text-muted"
            >
              I'm a{" "}
              <span className="font-semibold text-[#011936]">
                First-Class Honours Computer Science with Artificial
                Intelligence graduate
              </span>{" "}
              from the University of Nottingham Malaysia. My experience spans
              Natural Language Processing, Machine Learning, Computer Vision,
              Retrieval-Augmented Generation (RAG), and Agentic AI systems.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-8 text-muted"
            >
              Throughout five research internships and an industry internship,
              I've worked on projects ranging from EEG-based fatigue detection
              and financial forecasting to multilingual RAG applications,
              document intelligence systems, and AI-powered digital personas.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-8 text-muted"
            >
              Outside of work, I spend a lot of time exploring the latest AI
              research, experimenting with new frameworks, and building
              side-projects involving agentic workflows, MCP servers, LLM
              orchestration, and developer tooling.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                "Python",
                "LangChain",
                "LangGraph",
                "MCP",
                "PyTorch",
                "Computer Vision",
                "NLP",
                "RAG",
                "Next.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[rgba(1,25,54,.15)] bg-white px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ED254E]"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  rotate: -1,
                }}
                className="card flex min-h-[170px] flex-col justify-center rounded-3xl bg-white p-8 shadow-sm"
              >
                <h3 className="font-[var(--font-display)] text-5xl font-bold text-[#ED254E]">
                  {stat.value}
                </h3>

                <p className="mt-4 text-base leading-7 text-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              whileHover={{
                y: -8,
                rotate: 1,
              }}
              className="card col-span-full rounded-3xl bg-[#011936] p-8 text-white"
            >
              <p className="font-[var(--font-doodle)] text-3xl text-[#ED254E]">
                Current Focus
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Building production-ready AI systems
              </h3>

              <p className="mt-5 leading-8 text-white/80">
                I'm currently focused on developing agentic AI applications,
                Retrieval-Augmented Generation pipelines, Model Context
                Protocol integrations, and scalable backend architectures that
                bridge research with real-world deployment.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}