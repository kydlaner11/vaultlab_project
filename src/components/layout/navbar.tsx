"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ArrowDownRight, Plus, } from "lucide-react";
import { TikTokIcon } from "@/components/icons/tiktok-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { cn, buildWhatsAppLink } from "@/lib/utils";
import { siteConfig, navItems } from "@/config/site";
import { AnnouncementBar } from "@/components/layout/announcement-bar";

const whatsappHref = buildWhatsAppLink(
  siteConfig.whatsapp,
  "Halo, saya ingin konsultasi gratis untuk pembuatan website.",
);

function isActiveHref(pathname: string, href: string) {
  if (href.startsWith("/#") || href === "#") return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [pagesOpen, setPagesOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => setScrolled(latest > 20));
    return () => unsubscribe();
  }, [scrollY]);

  return (
<motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <AnnouncementBar />

      <div className="lg:px-6 xl:px-10">
        <motion.div
          data-state={open ? "active" : undefined}
          animate={{
            paddingTop: scrolled ? 12 : 20,
            paddingBottom: scrolled ? 12 : 20,
            boxShadow: scrolled ? "0 10px 30px -18px rgba(0,0,0,0.7)" : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-4 rounded-b-3xl bg-[#0a0a0a] px-6 text-white shadow-lg shadow-black/20 sm:px-10"
        >
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-semibold tracking-tight text-white">
              {siteConfig.name.toLowerCase()}.
            </Link>
            <span className="hidden h-6 w-px bg-white/15 lg:block" aria-hidden="true" />

            <ul className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
              {navItems.map((item) => {
                if (item.children) {
                  const pagesActive = item.children.some((child) => isActiveHref(pathname, child.href));
                  return (
                    <li
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setPagesOpen(true)}
                      onMouseLeave={() => setPagesOpen(false)}
                    >
                      <button
                        type="button"
                        aria-expanded={pagesOpen}
                        className={cn(
                          "flex items-center gap-1 transition-colors hover:text-white",
                          pagesActive && "text-brand-light",
                        )}
                      >
                        {item.name}
                        <Plus className={cn("size-3.5 transition-transform duration-200", pagesOpen && "rotate-45")} />
                      </button>
                      <AnimatePresence>
                        {pagesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            className="absolute left-0 top-full mt-3 w-40 rounded-2xl border border-white/10 bg-[#111111] p-2 shadow-xl shadow-black/40"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className={cn(
                                  "block rounded-xl px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white",
                                  isActiveHref(pathname, child.href) && "text-brand-light",
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "transition-colors hover:text-white",
                        (item.name === "Beranda" || isActiveHref(pathname, item.href)) && "text-brand-light hover:text-white",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="relative z-20 -mr-2 block cursor-pointer p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-2 border-r border-white/10 pr-4">
              <motion.a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Vaultlab"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-white/15 text-zinc-300 transition-colors duration-300 hover:border-transparent hover:text-white"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-linear-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] transition-transform duration-300 group-hover:scale-100" />
                <InstagramIcon className="relative z-10 size-4" />
              </motion.a>

              <motion.a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Vaultlab"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex size-9 items-center justify-center overflow-hidden rounded-full border border-white/15 text-zinc-300 transition-colors duration-300 hover:border-transparent hover:text-black"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-white transition-transform duration-300 group-hover:scale-100" />
                <TikTokIcon className="relative z-10 size-4" />
              </motion.a>
            </div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-light"
              >
                Konsultasi Gratis
                <ArrowDownRight className="size-4" />
              </a>
            </motion.div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full overflow-hidden lg:hidden"
              >
                <div className="flex flex-col gap-4 border-t border-white/10 pt-4 pb-2">
                  <ul className="flex flex-col gap-3 text-sm text-zinc-300">
                    {navItems.flatMap((item) =>
                      item.children
                        ? item.children.map((child) => (
                            <li key={child.name}>
                              <Link href={child.href} onClick={() => setOpen(false)} className="block py-1">
                                {child.name}
                              </Link>
                            </li>
                          ))
                        : [
                            <li key={item.name}>
                              <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                  "block py-1",
                                  (item.name === "Beranda" || isActiveHref(pathname, item.href)) && "text-brand-light",
                                )}
                              >
                                {item.name}
                              </Link>
                            </li>,
                          ],
                    )}
                  </ul>
                  <div className="flex items-center gap-3">
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Vaultlab"
                      className="flex size-9 items-center justify-center rounded-full border border-white/15 text-zinc-300"
                    >
                      <InstagramIcon className="size-4" />
                    </a>
                    <a
                      href={siteConfig.social.tiktok}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok Vaultlab"
                      className="flex size-9 items-center justify-center rounded-full border border-white/15 text-zinc-300"
                    >
                      <TikTokIcon className="size-4" />
                    </a>
                  </div>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white"
                  >
                    Konsultasi Gratis
                    <ArrowDownRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.header>
  );
}
