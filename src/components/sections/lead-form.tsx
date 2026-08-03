"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { siteConfig } from "@/config/site";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", phone: "", message: "" };

export function LeadForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [submitted, setSubmitted] = React.useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Permintaan Konsultasi Website — ${form.name}`;
    const body = [
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      `No. Telepon: ${form.phone}`,
      "",
      "Pesan:",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-32 bg-[#faf6ef] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={staggerContainer}
            className="flex flex-col justify-center"
          >
            <motion.p
              variants={fadeUp}
              className="flex items-center gap-2 text-sm font-medium tracking-wide text-zinc-500"
            >
              <ArrowDownRight className="size-4 text-brand-secondary" />
              AJUKAN PROYEK
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              Ingin Punya Website Profesional?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-md text-zinc-500">
              Yuk, mulai dengan mengisi form berikut ini. Tim kami akan segera menghubungi Anda.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-3xl border border-zinc-200 bg-white p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <CheckCircle2 className="size-10 text-brand" />
                <p className="font-medium text-zinc-900">Terima kasih!</p>
                <p className="max-w-xs text-sm text-zinc-500">
                  Aplikasi email Anda akan terbuka untuk mengirim pesan ke tim kami.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="lead-name" className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Nama
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      placeholder="Nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="lead-email" className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                      Email
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-phone" className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    No. Telepon
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor="lead-message" className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Pesan
                  </label>
                  <textarea
                    id="lead-message"
                    name="message"
                    required
                    maxLength={1000}
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                    placeholder="Ceritakan kebutuhan website Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#181818] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  Kirim Pesan
                  <ArrowDownRight className="size-4" />
                </button>

                <p className="text-xs text-zinc-400">
                  atau email langsung ke{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-brand hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
