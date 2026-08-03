"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { teamMembers } from "@/data/team";

export function Team() {
  return (
    <section className="bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-zinc-500"
          >
            <ArrowDownRight className="size-4 text-brand-secondary" />
            TIM KAMI
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Tim Profesional di Balik Vaultlab
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-zinc-500">
            Didukung oleh developer, desainer, dan spesialis SEO berpengalaman.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <motion.div key={member.image} variants={fadeUp}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-lg font-semibold text-zinc-900">{member.name}</p>
              <p className="text-sm text-zinc-500">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
