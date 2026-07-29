"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { valuePoints } from "@/data/why-us";

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#181818] pb-6 pt-24 sm:pt-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
          <Image
            src="https://picsum.photos/seed/lumora-texture/1600/900"
            alt=""
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover opacity-70"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto -mt-24 max-w-5xl rounded-[2.5rem] bg-white px-8 py-14 sm:px-14"
      >
        <p className="flex items-center gap-2 text-sm font-medium text-brand-secondary">
          ↳ KENAPA HARUS KAMI
        </p>
        <h2 className="mt-4 max-w-lg text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Pengerjaan website yang terasa seperti kemitraan.
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-12 grid gap-8 sm:grid-cols-3"
        >
          {valuePoints.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={fadeUp}>
              <Icon className="size-7 text-brand-secondary" />
              <h3 className="mt-4 font-medium text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
