"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl items-start",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "group/bento rounded-2xl border border-[rgba(1,25,54,.1)] bg-white p-4 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:border-[#ED254E]/40 transition-shadow duration-300",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition-transform duration-300">
        {icon}
        <div className="font-sans font-bold text-[#011936] mb-2">
          {title}
        </div>
        <div className="font-sans font-normal text-[#4b5563] text-xs">
          {description}
        </div>
      </div>
    </motion.div>
  );
};