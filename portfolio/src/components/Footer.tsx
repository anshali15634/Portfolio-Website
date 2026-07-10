import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(1,25,54,0.08)] bg-[#011936] py-6 text-sm text-white/70">
      <div className="container-custom flex flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Anshali Manoharan. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#hero" className="transition-colors hover:text-white">
            Top
          </Link>
          <Link href="#projects" className="transition-colors hover:text-white">
            Projects
          </Link>
          <Link href="#contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
