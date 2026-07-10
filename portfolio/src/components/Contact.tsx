"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="grid-background relative overflow-hidden bg-white py-24">
      <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#ED254E]/12 blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 rounded-[2rem] border border-[rgba(1,25,54,0.08)] bg-white/90 p-8 shadow-[0_30px_80px_rgba(1,25,54,0.08)] backdrop-blur md:p-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-[#ED254E]/15 blur-3xl" />
              <Image
                src="/images/me.png"
                alt="Anshali Manoharan"
                width={420}
                height={420}
                className="relative h-auto w-full max-w-[320px] object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-5 flex items-center gap-3 font-[var(--font-doodle)] text-3xl text-[#ED254E]">
              <span className="h-[2px] w-8 bg-[#ED254E]" />
              contact me
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-[#011936] sm:text-5xl">
              Let&apos;s build something meaningful together.
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              I&apos;m always open to conversations about AI research, product ideas,
              internships, or collaborations that create real-world impact.
            </p>

            <form className="mt-8 rounded-3xl border border-[rgba(1,25,54,0.08)] bg-[#f8fafc] p-6 shadow-sm">
              <label htmlFor="email" className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-[#011936]/70">
                Email
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[rgba(1,25,54,0.12)] bg-white px-4 py-3 shadow-sm">
                  <Mail size={18} className="text-[#ED254E]" />
                  <input
                    id="email"
                    type="email"
                    value="anshali.manoharan.12263.11i@gmail.com"
                    readOnly
                    className="w-full bg-transparent text-sm text-[#011936] outline-none"
                  />
                </div>
                <a
                  href="mailto:anshali.manoharan.12263.11i@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#011936] px-5 py-3 text-sm font-semibold !text-white transition-all duration-300 hover:bg-[#ED254E]"
                >
                  Reach out
                  <ArrowRight size={16} />
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
