"use client";
import * as React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, CalendarCheck, CircleCheck, TrendingUp } from "lucide-react";
import { ButtonLink } from "@/components/ui/site-button";
import { TechMarquee } from "@/components/ui/tech-marquee";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";

const whatsappHref = buildWhatsAppLink(
  siteConfig.whatsapp,
  "Halo, saya ingin konsultasi gratis untuk pembuatan website.",
);

const comparison = [
  {
    label: "Tampilan di internet",
    before: "Hanya media sosial",
    after: "Website profesional & cepat",
  },
  {
    label: "Calon pelanggan",
    before: "Tidak terlacak",
    after: "Masuk langsung lewat WhatsApp",
  },
];

/* Kolom "Sebelum" = 7/16 lebar kartu, sama dengan posisi garis pemisah di grafik (140/320). */
const SPLIT_COLS = "grid-cols-[7fr_9fr]";

const BEFORE_LINE = "M0 108 L28 102 L56 110 L84 100 L112 105 L140 100";
const AFTER_LINE = "M140 100 L188 76 L206 80 L232 56 L262 40 L290 30 L314 14";

/** Grafik before/after murni SVG — ilustrasi, bukan data klien. */
function ResultChart({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 320 130" className="h-auto w-full overflow-visible" role="img" aria-label="Ilustrasi grafik calon pelanggan sebelum dan sesudah memiliki website">
      <defs>
        <linearGradient id="hero-after-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" style={{ stopColor: "var(--color-brand)", stopOpacity: 0.18 }} />
          <stop offset="100%" style={{ stopColor: "var(--color-brand)", stopOpacity: 0 }} />
        </linearGradient>
      </defs>

      <g className="stroke-hairline" strokeWidth="1">
        <line x1="0" y1="34" x2="320" y2="34" />
        <line x1="0" y1="68" x2="320" y2="68" />
        <line x1="0" y1="102" x2="320" y2="102" />
      </g>
      <line x1="140" y1="0" x2="140" y2="130" className="stroke-body/40" strokeWidth="1" strokeDasharray="3 4" />

      <path d={BEFORE_LINE} className="fill-none stroke-body/40" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

      <motion.path
        d={`${AFTER_LINE} L314 130 L140 130 Z`}
        fill="url(#hero-after-fill)"
        initial={animate ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      />
      <motion.path
        d={AFTER_LINE}
        className="fill-none stroke-brand"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        initial={animate ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
      />

      <motion.g
        initial={animate ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.3 }}
      >
        <circle cx="314" cy="14" r="9" className="origin-center fill-red-500/25 [transform-box:fill-box] motion-safe:animate-ping" />
        <circle cx="314" cy="14" r="4.5" className="fill-red-500 stroke-white" strokeWidth="1.5" />
      </motion.g>
    </svg>
  );
}

function ResultCard({ animate }: { animate: boolean }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-xl sm:p-6">
      <div className="flex items-start gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-tint text-brand">
          <TrendingUp className="size-5" />
        </span>
        <div>
          <p className="text-base leading-snug font-semibold text-foreground sm:text-lg">Setelah website baru berjalan</p>
          <p className="text-sm text-body">Calon pelanggan yang masuk lewat website</p>
        </div>
      </div>

      <div className="mt-5">
        <ResultChart animate={animate} />
        <div className={`mt-2 grid ${SPLIT_COLS} items-center text-sm`}>
          <span className="text-body">Sebelum</span>
          <div className="flex items-center justify-between">
            <span className="font-medium text-brand">Sesudah</span>
            <span className="rounded-md border border-border px-2 py-0.5 text-xs text-body">Ilustrasi</span>
          </div>
        </div>
      </div>

      <div className="mt-5 border-t border-hairline pt-4">
        <div className={`grid ${SPLIT_COLS} text-xs font-semibold tracking-wider uppercase`}>
          <span className="text-body">Sebelum</span>
          <span className="text-brand">Sesudah</span>
        </div>

        {comparison.map((row, index) => (
          <div
            key={row.label}
            className={`mt-3 grid ${SPLIT_COLS} gap-y-1 ${index > 0 ? "border-t border-hairline pt-3" : ""}`}
          >
            <p className="col-span-2 text-xs text-body">{row.label}</p>
            <p className="pr-3 text-sm text-body/70 sm:text-[15px]">{row.before}</p>
            <p className="flex items-start gap-2 text-sm leading-snug font-medium text-foreground sm:text-[15px]">
              <CircleCheck className="mt-0.5 size-[18px] shrink-0 text-brand" />
              {row.after}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const GRID_SIZE = "48px 48px";
const gridLines = (alpha: number) =>
  `linear-gradient(to right, rgba(255,255,255,${alpha}) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,${alpha}) 1px, transparent 1px)`;

/**
 * Latar hero: glow ambient statis + grid halus. Di perangkat dengan mouse,
 * cahaya dan grid yang lebih terang mengikuti kursor (dengan efek pegas).
 * Di layar sentuh atau saat "reduce motion" aktif, hanya lapisan statis yang tampil.
 */
function HeroBackground({
  active,
  x,
  y,
}: {
  active: boolean;
  x: ReturnType<typeof useSpring>;
  y: ReturnType<typeof useSpring>;
}) {
  const glow = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(91,155,234,0.30), transparent 70%)`;
  const mask = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, black, transparent)`;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* glow lembut di atas, di belakang navbar */}
      <div
        className="absolute -top-48 left-1/2 size-[720px] max-w-[110vw] -translate-x-1/2 rounded-full opacity-60"
        style={{ background: "radial-gradient(closest-side, rgba(141,184,240,0.45), transparent)" }}
      />

      {/* grid dasar, memudar ke bawah */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: gridLines(0.05),
          backgroundSize: GRID_SIZE,
          maskImage: "linear-gradient(to bottom, black 35%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 95%)",
        }}
      />

      {/* lapisan yang mengikuti kursor */}
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.div className="absolute inset-0" style={{ background: glow }} />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: gridLines(0.22),
            backgroundSize: GRID_SIZE,
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        />
      </motion.div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = React.useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 180, damping: 26, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 180, damping: 26, mass: 0.6 });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    // Hanya mouse; sentuhan dan pena tidak memicu efek.
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nextX = event.clientX - rect.left;
    const nextY = event.clientY - rect.top;
    if (!active) {
      // Lompat ke posisi awal agar cahaya tidak "terbang" dari pojok.
      x.jump(nextX);
      y.jump(nextY);
      setActive(true);
    }
    rawX.set(nextX);
    rawY.set(nextY);
  }

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActive(false)}
      // Mulai dari paling atas halaman: navbar (fixed & transparan) menumpang di atas latar ini.
      // Padding atas = tinggi announcement bar (--announcement-h, diisi navbar) + navbar 4rem + jarak.
      className="relative overflow-hidden bg-linear-to-b from-brand to-brand-dark pt-[calc(var(--announcement-h,2.5rem)+6rem)] pb-16 sm:pt-[calc(var(--announcement-h,2.5rem)+7.5rem)] sm:pb-20 lg:pb-24"
    >
      <HeroBackground active={active} x={x} y={y} />
      {/* minmax(0, …) + min-w-0: mencegah kolom melebar karena isi marquee yang sangat panjang */}
      <div className="container-page relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <motion.div className="min-w-0" initial="hidden" animate="show" variants={staggerContainer}>
          {/* <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-red-500" aria-hidden="true" />
            Jasa Pembuatan Website &amp; Aplikasi
          </motion.p> */}

          <motion.h1 variants={fadeUp} className="type-h1 max-w-xl text-balance text-white">
            Bawa Bisnis Anda{" "}
            <span className="underline decoration-red-500 decoration-[3px] underline-offset-[10px]">
              Level Up
            </span>{" "}
            dengan Website Profesional
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-lg text-base leading-relaxed text-on-dark-soft sm:mt-6 sm:text-lg">
            Konsultasikan kebutuhan bisnis anda gratis. Mulai dari website company profile, katalog produk, hingga website bisnis yang dirancang sesuai kebutuhan Anda, kami siap menghadirkan solusi digital yang efektif untuk mendukung pertumbuhan bisnis.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={whatsappHref} variant="light" className="w-full sm:w-auto">
              Konsultasi Gratis
              <CalendarCheck className="size-4" />
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="outline-light" className="w-full sm:w-auto">
              Lihat Portofolio
              <ArrowRight className="size-4" />
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full min-w-0 max-w-xl flex-col gap-4 lg:max-w-124 lg:justify-self-end"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <ResultCard animate={!reduceMotion} />

          <div className="rounded-2xl bg-white px-5 py-5 shadow-xl sm:px-6">
            <p className="text-sm text-body">Teknologi yang kami gunakan</p>
            <TechMarquee className="mt-4" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}