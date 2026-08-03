"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import { freeFeatures } from "@/data/free-features";

export function FreeFeaturesCta() {
  return (
    <section className="bg-[#faf6ef] pt-24 pb-5 sm:pt-32 sm:pb-10">
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
            FITUR
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Dapatkan Fitur Gratis untuk Website Anda!
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {freeFeatures.map(({ icon: Icon, title, description }) => (
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 rounded-[2.5rem] bg-[#181818] px-8 py-14 text-center text-white sm:px-14"
        >
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Bikin Website? Vaultlab Solusinya!</h3>
          <p className="mx-auto mt-3 max-w-md text-zinc-400">
            Konsultasikan kebutuhan Anda dan dapatkan penawaran harga terbaik.
          </p>
          <Link
            href="/#pricing"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-light"
          >
            Lihat Paket Harga
            <ArrowDownRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
