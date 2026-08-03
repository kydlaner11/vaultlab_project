"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "120+", label: "Website Diluncurkan" },
  { value: "98%", label: "Klien Puas & Merekomendasikan" },
  { value: "4.9/5", label: "Rating Kepuasan Klien" },
  { value: "5 Hari", label: "Pengerjaan Tercepat" },
];

export function StatsBanner() {
  return (
    <section className="bg-brand py-20 text-white sm:py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 text-center lg:grid-cols-4"
      >
        {stats.map(({ value, label }) => (
          <motion.div key={label} variants={fadeUp}>
            <p className="text-4xl font-semibold tracking-tight sm:text-5xl">{value}</p>
            <p className="mt-2 text-sm text-white/70">{label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
