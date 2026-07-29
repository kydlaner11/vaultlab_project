"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowDownRight } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-32 bg-[#faf6ef] py-24 sm:py-32">
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
            className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-500"
          >
            <ArrowDownRight className="size-4 text-brand-secondary" />
            HARGA PAKET
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Pilih paket sesuai kebutuhan bisnis Anda.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-zinc-500">
            Harga transparan, tanpa biaya tersembunyi. Semua paket sudah termasuk revisi &amp; konsultasi gratis.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3 md:items-start"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              className={cn(
                "flex flex-col rounded-3xl border p-8",
                plan.highlighted
                  ? "border-brand bg-[#181818] text-white shadow-xl md:-my-4 md:py-12"
                  : "border-zinc-200 bg-white text-zinc-900",
              )}
            >
              {plan.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-secondary px-3 py-1 text-xs font-medium text-white">
                  Paling Populer
                </span>
              )}

              <h3 className={cn("text-lg font-semibold", plan.highlighted ? "text-white" : "text-zinc-900")}>
                {plan.name}
              </h3>
              <p className={cn("mt-2 text-sm", plan.highlighted ? "text-zinc-400" : "text-zinc-500")}>
                {plan.description}
              </p>

              <p className="mt-6 text-4xl font-semibold tracking-tight">{plan.price}</p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={cn(
                      "flex items-start gap-2 text-sm",
                      plan.highlighted ? "text-zinc-300" : "text-zinc-600",
                    )}
                  >
                    <Check className={cn("mt-0.5 size-4 shrink-0", plan.highlighted ? "text-brand-light" : "text-brand-secondary")} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
                  plan.highlighted
                    ? "bg-brand text-white hover:bg-brand-light"
                    : "bg-[#181818] text-white hover:bg-zinc-800",
                )}
              >
                {plan.cta}
                <ArrowDownRight className="size-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
