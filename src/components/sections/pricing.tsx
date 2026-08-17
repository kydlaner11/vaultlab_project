"use client";
import { motion } from "framer-motion";
import { Check, ArrowDownRight, ChevronDown } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import { pricingPlans } from "@/data/pricing";
import { cn, buildWhatsAppLink } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-32 bg-background pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground"
          >
            <ArrowDownRight className="size-4 text-brand" />
            HARGA PAKET
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Pilih paket sesuai kebutuhan bisnis Anda.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            Harga transparan, tanpa biaya tersembunyi. Semua paket sudah termasuk revisi &amp; konsultasi gratis.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={scaleIn}
              className={cn(
                "flex flex-col rounded-3xl border p-8 transition-shadow",
                plan.highlighted
                  ? "border-transparent bg-surface-dark text-white shadow-xl lg:-my-4 lg:py-12"
                  : "border-border bg-card text-card-foreground hover:shadow-md",
              )}
            >
              <span
                className={cn(
                  "mb-3 inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide",
                  plan.highlighted ? "border-white/20 text-white/70" : "border-border text-muted-foreground",
                )}
              >
                {plan.tier}
              </span>

              {plan.highlighted && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                  Paling Populer
                </span>
              )}

              <h3 className={cn("text-lg font-semibold", plan.highlighted ? "text-white" : "text-foreground")}>
                {plan.name}
              </h3>
              <p className={cn("mt-2 text-sm", plan.highlighted ? "text-white/60" : "text-muted-foreground")}>
                {plan.description}
              </p>

              <p className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{plan.price}</p>

              <a
                href={buildWhatsAppLink(
                  siteConfig.whatsapp,
                  `Halo, saya tertarik dengan paket ${plan.tier} - ${plan.name} (${plan.price}).`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-active"
              >
                {plan.cta}
                <ArrowDownRight className="size-4" />
              </a>

              <details
                open={plan.highlighted}
                className={cn(
                  "group mt-6 border-t pt-5",
                  plan.highlighted ? "border-white/10" : "border-border",
                )}
              >
                <summary
                  className={cn(
                    "flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium",
                    plan.highlighted ? "text-white" : "text-foreground",
                  )}
                >
                  Fitur Paket
                  <ChevronDown
                    className={cn(
                      "size-4 shrink-0 transition-transform group-open:rotate-180",
                      plan.highlighted ? "text-brand-light" : "text-brand",
                    )}
                  />
                </summary>

                <ul className="mt-4 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-2 text-sm",
                        plan.highlighted ? "text-white/70" : "text-muted-foreground",
                      )}
                    >
                      <Check className={cn("mt-0.5 size-4 shrink-0", plan.highlighted ? "text-brand-light" : "text-brand")} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}