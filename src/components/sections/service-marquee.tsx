"use client";
import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { serviceTiles, type ServiceTile } from "@/data/services";

const CARD_COUNT = serviceTiles.length;

export function ServiceMarquee() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <StaticServiceList />;
  }

  return <PinnedServiceStack />;
}

function PinnedServiceStack() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#181818]"
      style={{ height: `${CARD_COUNT * 100}dvh` }}
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        {serviceTiles.map((tile, index) => (
          <StackedServiceCard key={tile.index} tile={tile} index={index} progress={progress} />
        ))}
      </div>
    </section>
  );
}

function StackedServiceCard({
  tile,
  index,
  progress,
}: {
  tile: ServiceTile;
  index: number;
  progress: MotionValue<number>;
}) {
  const segments = Math.max(CARD_COUNT - 1, 1);
  const start = index === 0 ? 0 : (index - 1) / segments;
  const end = index === 0 ? 1 : index / segments;
  const x = useTransform(progress, [start, end], index === 0 ? ["0%", "0%"] : ["100%", "0%"]);
  const opacity = useTransform(progress, [start, end], index === 0 ? [1, 1] : [0, 1]);

  const Icon = tile.icon;

  return (
    <motion.div
      style={{ x, opacity, zIndex: index }}
      className="absolute inset-0 border-t border-white/10 bg-[#181818]"
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-between px-6 pt-28 pb-16 sm:pt-32">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium tracking-wide text-zinc-500">{tile.index}</span>
          <span className="flex size-11 items-center justify-center rounded-full bg-brand-secondary sm:size-12">
            <Icon className="size-5 text-white" />
          </span>
        </div>
        <h3 className="max-w-3xl text-6xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {tile.title}
        </h3>
      </div>
    </motion.div>
  );
}

function StaticServiceList() {
  return (
    <section className="bg-[#181818] py-24 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto flex max-w-6xl flex-col px-6"
      >
        {serviceTiles.map((tile) => {
          const Icon = tile.icon;
          return (
            <motion.div
              key={tile.index}
              variants={fadeUp}
              className="flex items-center justify-between gap-6 border-t border-white/10 py-8 first:border-t-0"
            >
              <div>
                <span className="text-xs font-medium tracking-wide text-zinc-500">{tile.index}</span>
                <h3 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{tile.title}</h3>
              </div>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-secondary">
                <Icon className="size-5 text-white" />
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
