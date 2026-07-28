"use client";
import { motion } from "framer-motion";
import { scaleIn, staggerContainer } from "@/lib/motion";
import { serviceCards } from "@/data/services";

export function ServiceCards() {
  return (
    <section id="services" className="scroll-mt-32 bg-[#faf6ef] py-24 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3"
      >
        {serviceCards.map(({ title, description, icon: Icon }) => (
          <motion.div
            key={title}
            variants={scaleIn}
            className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
              <div className="mt-10 flex justify-center">
                <Icon className="size-16 text-zinc-300" strokeWidth={1.25} />
              </div>
            </div>
            <p className="mt-10 text-sm text-zinc-500">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
