"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { portfolioProjects } from "@/data/portfolio";

export function Portfolio() {
  return (
    <section id="work" className="scroll-mt-32 bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl"
        >
          Selected work, chosen results.
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2"
        >
          {portfolioProjects.map((project) => (
            <motion.a key={project.seed} href="#contact" variants={fadeUp} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-zinc-200">
                <Image
                  src={`https://picsum.photos/seed/${project.seed}/900/700`}
                  alt={project.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">{project.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{project.meta}</p>
                </div>
                <ArrowDownRight className="mt-1 size-5 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
