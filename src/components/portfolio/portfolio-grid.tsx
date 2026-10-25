"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { portfolioProjects } from "@/data/portfolio";
import { ProjectCard } from "./project-card";

const ALL = "Semua";

/**
 * Filter jenis + grid portofolio. Jenis diambil otomatis dari `category`
 * tiap proyek di data/portfolio.ts.
 * `limit`: batasi jumlah kartu (beranda); tanpa `limit` = tampilkan semua.
 */
export function PortfolioGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = React.useState(ALL);

  const categories = React.useMemo(
    () => [ALL, ...Array.from(new Set(portfolioProjects.map((project) => project.category)))],
    [],
  );

  const filtered =
    category === ALL ? portfolioProjects : portfolioProjects.filter((project) => project.category === category);
  const visible = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <p id="portfolio-filter-label" className="shrink-0 text-sm text-body">
          Lihat berdasarkan jenis website
        </p>
        <div
          role="group"
          aria-labelledby="portfolio-filter-label"
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {categories.map((name) => {
            const selected = name === category;
            return (
              <button
                key={name}
                type="button"
                aria-pressed={selected}
                onClick={() => setCategory(name)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-200",
                  selected
                    ? "border-brand bg-brand-tint text-brand"
                    : "border-border bg-white text-body hover:border-brand/40 hover:text-foreground",
                )}
              >
                {name}
              </button>
            );
          })}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Menampilkan {visible.length} proyek{category === ALL ? "" : ` ${category}`}
      </p>

      <ul className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}