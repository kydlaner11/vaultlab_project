"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { about } from "@/data/about";
import { HoverScrollImage } from "@/components/ui/hover-scroll-image";

function useDragScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!ref.current) return;
    isDown.current = true;
    ref.current.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDown.current || !ref.current) return;
    const dx = e.clientX - startX.current;
    ref.current.scrollLeft = scrollLeft.current - dx;
  };

  const onPointerUp = () => {
    isDown.current = false;
  };

  return { ref, onPointerDown, onPointerMove, onPointerUp };
}

export function About() {
  const drag = useDragScroll();

  return (
    <section id="about" className="scroll-mt-32 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
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
              <span className="text-muted-foreground">{about.headline.muted}</span>{" "}
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

        {/* Featured project strip — drag / swipe / scroll horizontally, any number of items */}
        <motion.div
          ref={drag.ref}
          onPointerDown={drag.onPointerDown}
          onPointerMove={drag.onPointerMove}
          onPointerUp={drag.onPointerUp}
          onPointerLeave={drag.onPointerUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-16 flex cursor-grab gap-4 overflow-x-auto scroll-smooth px-6 pb-2 select-none active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {about.projects.map((project) => (
            <motion.div key={project.slug} variants={fadeUp} className="w-52 shrink-0 sm:w-64">
              <Link
                href={`/portfolio/${project.slug}`}
                draggable={false}
                className="group relative block aspect-9/16 overflow-hidden rounded-2xl bg-surface-strong"
              >
                <HoverScrollImage
                  src={project.image}
                  alt={project.name}
                  width={423}
                  height={1800}
                  duration={8}
                  draggable={false}
                  containerClassName="h-full w-full"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="flex items-center gap-1 text-sm font-medium text-white">
                    {project.name}
                    <ArrowUpRight className="size-3.5" />
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        {/* <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="mt-20 border-t border-hairline pt-12"
        >
          <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <span className="size-2 bg-brand-secondary" />
            {about.statsEyebrow}
          </motion.p>

          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {about.stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <p className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{stat.value}</p>
                <p className="mt-3 text-sm font-medium text-foreground">{stat.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}