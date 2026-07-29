"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { pricingFaq } from "@/data/pricing-faq";

export function FaqSection() {
  return (
    <section className="bg-[#faf6ef] py-24 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto max-w-3xl px-6"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Pertanyaan yang sering diajukan.
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4">
          {pricingFaq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-zinc-200 bg-white px-6 py-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-zinc-900">
                {item.question}
                <Plus className="size-4 shrink-0 text-brand-secondary transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3 text-sm text-zinc-600">{item.answer}</p>
            </details>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
