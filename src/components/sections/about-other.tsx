"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { about, type TemplateCategory } from "@/data/about-other";
import { HoverScrollImage } from "@/components/ui/hover-scroll-image";

/**
 * Drag-to-scroll per baris. Tiap <TemplateRow> memanggil hook ini sendiri,
 * jadi setiap strip punya state drag yang terpisah.
 *
 * Perbedaan dari versi lama:
 * - pointer capture baru dipasang setelah geser > 5px, supaya klik biasa
 *   pada <Link> tetap jalan.
 * - klik dibatalkan hanya kalau user memang habis drag.
 */
function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const dragged = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!ref.current || e.pointerType === "touch") return; // touch pakai native swipe
    isDown.current = true;
    dragged.current = false;
    startX.current = e.clientX;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDown.current || !ref.current) return;
    const dx = e.clientX - startX.current;
    if (!dragged.current && Math.abs(dx) > 5) {
      dragged.current = true;
      ref.current.setPointerCapture(e.pointerId);
    }
    if (dragged.current) ref.current.scrollLeft = scrollLeft.current - dx;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    isDown.current = false;
    if (ref.current?.hasPointerCapture(e.pointerId)) {
      ref.current.releasePointerCapture(e.pointerId);
    }
  };

  const onClickCapture = (e: React.MouseEvent) => {
    if (dragged.current) {
      e.preventDefault();
      e.stopPropagation();
      dragged.current = false;
    }
  };

  const scrollBy = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return { ref, onPointerDown, onPointerMove, onPointerUp, onClickCapture, scrollBy };
}

function TemplateRow({ category }: { category: TemplateCategory }) {
  const drag = useDragScroll();

  return (
    <div className="mt-16 first:mt-16 sm:mt-20">
      {/* Header baris: judul kategori + tombol panah (desktop) */}
      <div className="flex items-end justify-between gap-6 px-6">
        <div className="max-w-xl">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Template <span className="text-muted-foreground italic">{category.title}</span>
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">{category.desc}</p>
        </div>

        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => drag.scrollBy(-1)}
            aria-label={`Geser ${category.title} ke kiri`}
            className="grid size-9 place-items-center rounded-full border border-foreground/30 text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => drag.scrollBy(1)}
            aria-label={`Geser ${category.title} ke kanan`}
            className="grid size-9 place-items-center rounded-full border border-foreground/30 text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Strip horizontal: drag / swipe / scroll, jumlah item bebas */}
      <motion.div
        ref={drag.ref}
        onPointerDown={drag.onPointerDown}
        onPointerMove={drag.onPointerMove}
        onPointerUp={drag.onPointerUp}
        onPointerLeave={drag.onPointerUp}
        onClickCapture={drag.onClickCapture}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mt-8 flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-6 pb-2 select-none active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {category.templates.map((tpl) => (
          <motion.div key={tpl.slug} variants={fadeUp} className="w-52 shrink-0 sm:w-64">
            <Link
              href={`/portfolio/${tpl.slug}`}
              draggable={false}
              className="group relative block aspect-9/16 overflow-hidden rounded-2xl bg-surface-strong"
            >
              <HoverScrollImage
                src={tpl.image}
                alt={`Template ${category.title}: ${tpl.name}`}
                width={423}
                height={1800}
                duration={8}
                draggable={false}
                containerClassName="h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-linear-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <p className="flex items-center gap-1 text-sm font-medium text-white">
                  {tpl.name}
                  <ArrowUpRight className="size-3.5" />
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function AboutOther() {
  return (
    <section id="about" className="scroll-mt-32 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header (tetap sama seperti sebelumnya) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="flex flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
            >
              <span className="size-2 bg-brand-secondary" />
              {about.eyebrow}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl"
            >
              {about.headline.lead}{" "}
              <span className="text-muted-foreground italic">{about.headline.muted}</span>{" "}
              {about.headline.tail}
            </motion.h2>
          </div>

          <motion.div variants={fadeUp}>
            <Link
              href={about.cta.href}
              className="inline-flex items-center gap-1.5 border-b border-foreground/30 pb-1 text-sm font-medium text-foreground transition-colors hover:border-brand hover:text-brand"
            >
              {about.cta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Display template: satu baris per bidang usaha */}
        {about.categories.map((category) => (
          <TemplateRow key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}