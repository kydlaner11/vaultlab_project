"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function About() {
  return (
    <section id="about" className="scroll-mt-32 bg-[#181818] py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col justify-center"
        >
          <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm font-medium text-zinc-400">
            <ArrowDownRight className="size-4 text-brand-light" />
            TENTANG KAMI
          </motion.p>

          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Proses rapi,{" "}
            <span className="text-zinc-500">hasil yang nyata.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 max-w-md text-zinc-400">
            Kami menangani setiap proyek website dari brief awal hingga siap online — memadukan
            strategi desain dengan teknologi terkini untuk hasil yang tahan lama.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
            >
              Lebih Lanjut Tentang Kami
              <ArrowDownRight className="size-4" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#181818] transition-colors hover:bg-zinc-200"
            >
              Lihat Layanan
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex max-w-md items-center gap-4 rounded-2xl bg-[#232323] p-4"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
              <Image
                src="https://picsum.photos/seed/lumora-about-case/120/120"
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-white">Klinik Sehat — Company Profile</p>
              <Link href="/portfolio/klinik-sehat-company-profile" className="text-sm text-brand-light hover:underline">
                Lihat Detail ↳
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 grid max-w-md grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-4 text-[#181818]">
              <p className="text-2xl font-semibold">120+</p>
              <p className="text-sm text-zinc-500">Website telah diluncurkan</p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-[#181818]">
              <p className="text-2xl font-semibold">98%</p>
              <p className="text-sm text-zinc-500">Tingkat kepuasan klien</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative hidden lg:block">
          <div className="sticky top-32 aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="https://picsum.photos/seed/lumora-portrait/900/1100"
              alt="Tim di balik Vaultlab"
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:hidden">
          <Image
            src="https://picsum.photos/seed/lumora-portrait/900/1100"
            alt="Tim di balik Vaultlab"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
