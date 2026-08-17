"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { partners } from "@/data/partners";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";

const whatsappHref = buildWhatsAppLink(
  siteConfig.whatsapp,
  "Halo, saya ingin konsultasi gratis untuk pembuatan website.",
);

// Text repeated around the rotating badge — edit freely
const BADGE_LOOP = "VAULTLAB • WEBSITE PARTNER • VAULTLAB • WEBSITE PARTNER • ";

function RotatingBadge() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      className="relative size-24 shrink-0 sm:size-28"
    >
      <svg viewBox="0 0 100 100" className="size-full">
        <defs>
          <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <circle cx="50" cy="50" r="49" className="fill-brand" />
        <text className="fill-on-dark text-[7.2px] font-medium uppercase tracking-[0.15em]">
          <textPath href="#badge-circle" startOffset="0%">
            {BADGE_LOOP}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-9 items-center justify-center rounded-full bg-background sm:size-10">
          <ArrowUpRight className="size-4 text-brand sm:size-5" />
        </span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pt-36 pb-20 sm:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left — copy */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="text-center lg:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full bg-surface-strong px-4 py-1.5 text-sm font-medium text-foreground"
          >
            <ArrowDownRight className="size-4 text-brand" />
            SELAMAT DATANG DI {siteConfig.name.toUpperCase()}
          </motion.p>

          <h1 className="mx-auto mt-6 max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:mx-0">
            <motion.span variants={fadeUp} className="block text-foreground">
              Website Impian
            </motion.span>
            <motion.span variants={fadeUp} className="mt-2 flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-foreground">Bisnis</span>
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex size-11 items-center justify-center rounded-xl bg-brand sm:size-14"
              >
                <ArrowDownRight className="size-5 text-white sm:size-6" />
              </motion.span>
              <span className="text-foreground">Anda</span>
            </motion.span>
            <motion.span variants={fadeUp} className="mt-2 block text-foreground">
              Dimulai di Sini
            </motion.span>
          </h1>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-md text-lg text-muted-foreground lg:mx-0">
            Kami membantu bisnis Anda tampil profesional secara online lewat website yang cepat, modern,
            dan dioptimasi untuk SEO.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand/90"
              >
                Konsultasi Gratis
                <ArrowDownRight className="size-4" />
              </a>
            </motion.div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-base font-medium text-foreground underline-offset-4 transition-colors hover:text-brand hover:underline"
            >
              Lihat Semua Layanan
              <ArrowDownRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — photo collage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/collage-1.png"
                  alt="Tim Vaultlab berdiskusi dengan klien"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-center">
                <RotatingBadge />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-10">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/collage-2.png"
                  alt="Klien Vaultlab"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
              {/* <div className="relative aspect-4/5 overflow-hidden rounded-3xl">
                <Image
                  src="/images/hero/collage-3.png"
                  alt="Proses kerja tim Vaultlab"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div> */}
            </div>
          </div>

          <motion.span
            animate={{ scale: [1, 1.15, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 bottom-16 flex size-9 items-center justify-center rounded-full bg-brand-yellow text-brand"
          >
            <Sparkles className="size-4" />
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute left-6 top-4 flex size-6 items-center justify-center rounded-full bg-brand-light text-white"
          >
            <Sparkles className="size-3" />
          </motion.span>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <p className="text-sm text-muted-foreground md:w-44 md:text-right">Dipercaya oleh berbagai bisnis</p>
          <div className="relative w-full overflow-hidden md:w-[calc(100%-11rem)]">
            <InfiniteSlider gap={56} duration={30} durationOnHover={60}>
              {partners.map((partner) => (
                <div key={partner.name} className="flex h-24 w-64 shrink-0 items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={256}
                    height={96}
                    className="h-full w-auto object-contain opacity-70 grayscale transition-opacity hover:opacity-100"
                  />
                </div>
              ))}
            </InfiniteSlider>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />
          </div>
        </div>
      </div>
    </section>
  );
}