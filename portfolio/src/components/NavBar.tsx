"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {  Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120; // Navbar offset

      let currentSection = navLinks[0].href;

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          currentSection = `#${section.id}`;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-[rgba(1,25,54,0.08)] bg-[rgba(252,252,251,0.82)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <span className="h-3 w-3 rounded-full bg-[#ED254E] transition-transform duration-300 group-hover:scale-125" />

            <span className="font-[var(--font-display)] text-lg font-bold tracking-tight">
              Anshali Manoharan
            </span>
          </Link>

          {/* Desktop Nav */}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">

              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group relative text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.href
                        ? "text-[#ED254E]"
                        : "text-[#011936] hover:text-[#ED254E]"
                    }`}
                  >
                    {item.label}

                    <>
                    {activeSection === item.href && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#ED254E]"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                      />
                    )}

                    <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#ED254E] transition-all duration-300 group-hover:w-full" />
                  </>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Socials */}

          <div className="hidden lg:flex items-center gap-5">

            <Link
              href="mailto:anshali.manoharan.12263.11i@gmail.com"
              aria-label="Email"
            >
              <Mail
                size={19}
                className="transition hover:text-[#ED254E]"
              />
            </Link>

            <Link
              href="https://github.com/anshali15634"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub
                size={19}
                className="transition hover:text-[#ED254E]"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/anshali-manoharan-524830311/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin
                size={19}
                className="transition hover:text-[#ED254E]"
              />
            </Link>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#FCFCFB]"
          >

            <div className="flex h-20 items-center justify-between px-6">

              <span className="font-[var(--font-display)] text-xl font-bold">
                Menu
              </span>

              <button
                onClick={() => setMobileOpen(false)}
              >
                <X size={28} />
              </button>

            </div>

            <motion.div
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-12 flex flex-col items-center gap-8"
            >

              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-[var(--font-display)] text-3xl font-semibold transition-colors duration-300 ${
                    activeSection === item.href
                      ? "text-[#ED254E]"
                      : "text-[#011936] hover:text-[#ED254E]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-10 flex gap-8">

                <Link
                  href="mailto:anshali.manoharan.12263.11i@gmail.com"
                >
                  <Mail
                    size={24}
                  />
                </Link>

                <Link
                  href="https://github.com/YOUR_USERNAME"
                  target="_blank"
                >
                  <FaGithub
                    size={24}
                  />
                </Link>

                <Link
                  href="https://linkedin.com/in/YOUR_USERNAME"
                  target="_blank"
                >
                  <FaLinkedin
                    size={24}
                  />
                </Link>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}