"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { partners } from "@/data/partners";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#faf6ef] pt-36 pb-20 sm:pt-44">
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="mx-auto max-w-6xl px-6 text-center"
      >
        <motion.p
          variants={fadeUp}
          className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide text-zinc-500"
        >
          <ArrowDownRight className="size-4 text-brand-secondary" />
          WELCOME TO {siteConfig.name.toUpperCase()}
        </motion.p>

        <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <motion.span variants={fadeUp} className="block text-zinc-900">
            Your Next Big
          </motion.span>
          <motion.span variants={fadeUp} className="mt-2 flex items-center justify-center gap-3">
            <span className="text-zinc-900">Growth</span>
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex size-11 items-center justify-center rounded-xl bg-brand sm:size-14"
            >
              <ArrowDownRight className="size-5 text-white sm:size-6" />
            </motion.span>
            <span className="text-zinc-300">Move</span>
          </motion.span>
          <motion.span variants={fadeUp} className="mt-2 block text-zinc-300">
            Starts Here
          </motion.span>
        </h1>

        <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-xl text-lg text-zinc-600">
          I&apos;m a growth strategist helping brands scale through SEO, performance media, and
          conversion-focused design. Explore the work — the numbers speak for themselves.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#181818] px-6 py-3 text-base font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Book a Call
            <ArrowDownRight className="size-4" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-base font-medium text-zinc-800 transition-colors hover:bg-zinc-900/5"
          >
            See My Work
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto mt-16 max-w-6xl px-6"
      >
        <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900">
          <Image
            src="https://picsum.photos/seed/lumora-hero/1600/900"
            alt="Preview of a Vaultlab client growth strategy project"
            fill
            priority
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-cover opacity-80"
          />

          <div className="absolute left-4 top-4 flex max-w-xs items-center gap-3 rounded-2xl bg-[#1c1c1cdd] p-3 backdrop-blur-md sm:left-8 sm:top-8">
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl">
              <Image
                src="https://picsum.photos/seed/lumora-case/100/100"
                alt=""
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Aurora Retail — Scale Strategy</p>
              <a href="#work" className="text-xs text-brand-light hover:underline">
                See Details ↳
              </a>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex gap-3 sm:bottom-8 sm:right-8">
            <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-2xl font-semibold text-zinc-900">3.8x</p>
              <p className="text-xs text-zinc-500">Across paid campaigns</p>
            </div>
            <div className="rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
              <p className="text-2xl font-semibold text-zinc-900">+240%</p>
              <p className="text-xs text-zinc-500">Organic growth, 8mo</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <p className="text-sm text-zinc-500 md:w-44 md:text-right">Trusted by growing teams</p>
          <div className="relative w-full overflow-hidden md:w-[calc(100%-11rem)]">
            <InfiniteSlider gap={80} duration={30} durationOnHover={60}>
              {partners.map(({ name, icon: Icon }) => (
                <div key={name} className="flex items-center gap-2 text-zinc-400">
                  <Icon className="size-5" />
                  <span className="text-base font-semibold">{name}</span>
                </div>
              ))}
            </InfiniteSlider>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#faf6ef]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#faf6ef]" />
          </div>
        </div>
      </div>
    </section>
  );
}
