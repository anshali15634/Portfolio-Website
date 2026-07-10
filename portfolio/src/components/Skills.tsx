"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Artificial Intelligence",
    accent: true,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Generative AI",
      "Agentic AI",
      "Prompt Engineering",
      "RAG",
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "LangChain",
      "LangGraph",
      "OpenCV",
      "Transformers",
    ],
  },
  {
    title: "Backend & Development",
    accent: true,
    skills: [
      "Python",
      "FastAPI",
      ".NET",
      "Next.js",
      "TypeScript",
      "SQL",
      "Git",
      "REST APIs",
    ],
  },
  {
    title: "Cloud & Vector Databases",
    skills: [
      "Azure AI Foundry",
      "Azure AI Search",
      "Pinecone",
      "Supabase",
      "Google Gemini",
      "OpenAI API",
      "Firecrawl",
      "Model Context Protocol",
    ],
  },
];

const marqueeOne = [
  "Python",
  "Machine Learning",
  "PyTorch",
  "TensorFlow",
  "scikit-learn",
  "Computer Vision",
  "OpenCV",
  "Deep Learning",
  "Natural Language Processing",
  "LangChain",
  "LangGraph",
  "Agentic AI",
  "RAG",
  "Prompt Engineering",
];

const marqueeTwo = [
  "FastAPI",
  ".NET",
  "Next.js",
  "TypeScript",
  "SQL",
  "Azure AI Foundry",
  "Azure AI Search",
  "Pinecone",
  "Supabase",
  "GitHub",
  "REST APIs",
  "MCP",
  "Google Gemini",
  "OpenAI",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="grid-background-dark bg-[#011936] py-28 text-white"
    >
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 flex items-center gap-3 font-[var(--font-doodle)] text-3xl text-[#ED254E]"
          >
            <span className="h-[2px] w-8 bg-[#ED254E]" />
            toolbox
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="max-w-3xl text-5xl font-bold leading-tight md:text-6xl"
          >
            Technologies I enjoy building with.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-lg leading-8 text-white/70"
          >
            My experience spans traditional machine learning, modern LLM
            frameworks, cloud AI platforms, backend engineering, and
            full-stack development. I'm always exploring emerging tools and
            incorporating them into practical AI systems.
          </motion.p>
        </motion.div>

        {/* Marquee */}

        <div className="relative mt-16 overflow-hidden">

          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            className="flex w-max gap-4"
          >
            {[...marqueeOne, ...marqueeOne].map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>

        </div>

        <div className="relative mt-6 overflow-hidden">

          <motion.div
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex w-max gap-4"
          >
            {[...marqueeTwo, ...marqueeTwo].map((skill, index) => (
              <span
                key={index}
                className="rounded-full border border-[#ED254E]/40 bg-[#ED254E]/10 px-6 py-3 text-sm font-medium text-[#ff9fb2]"
              >
                {skill}
              </span>
            ))}
          </motion.div>

        </div>

        {/* Categories */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-7 lg:grid-cols-2"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              whileHover={{
                y: -8,
              }}
              className={`rounded-3xl border p-8 transition-all duration-300 ${
                category.accent
                  ? "border-[#ED254E]/40 bg-[#ED254E]/5"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <h3 className="font-[var(--font-display)] text-2xl font-bold">
                {category.title}
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      rotate: -2,
                    }}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-[#ED254E] hover:bg-[#ED254E] hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}