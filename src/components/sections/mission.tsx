"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { missionTags } from "@/data/mission";

export function Mission() {
  return (
    <section className="bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm font-medium text-zinc-500">
              <ArrowDownRight className="size-4 text-brand-secondary" />
              MISI KAMI
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Mengubah ide menjadi website nyata.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-xs text-sm text-zinc-500">
            Kami terus berinovasi dalam desain dan teknologi untuk menghadirkan website yang
            tidak hanya indah, tapi juga berdampak bagi bisnis Anda.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {missionTags.map(({ seed, label }) => (
            <motion.div
              key={seed}
              variants={fadeUp}
              className="relative aspect-[3/4] overflow-hidden rounded-3xl"
            >
              <Image
                src={`https://picsum.photos/seed/${seed}/500/700`}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-wide text-zinc-800">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
