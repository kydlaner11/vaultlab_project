"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="mx-auto max-w-3xl px-6 text-center"
    >
      <motion.p
        variants={fadeUp}
        className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-zinc-500"
      >
        <ArrowDownRight className="size-4 text-brand-secondary" />
        {eyebrow}
      </motion.p>
      <motion.h1 variants={fadeUp} className="mt-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
        {title}
      </motion.h1>
      {description && (
        <motion.p variants={fadeUp} className="mt-6 text-lg text-zinc-600">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
