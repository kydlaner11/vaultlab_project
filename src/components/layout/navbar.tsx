"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { TikTokIcon } from "@/components/icons/tiktok-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { ButtonLink } from "@/components/ui/site-button";
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

/** `onDark` = navbar transparan di atas hero biru (teks putih). */
const linkClass = (active: boolean, onDark: boolean) =>
  cn(
    "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
    onDark
      ? active
        ? "text-white"
        : "text-white/80 hover:text-white"
      : active
        ? "text-brand"
        : "text-body hover:text-foreground",
  );

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [pagesOpen, setPagesOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const announcementRef = React.useRef<HTMLDivElement>(null);

  // Transparan hanya di beranda saat berada di paling atas dan menu mobile tertutup.
  // Halaman lain tidak punya hero biru, jadi navbar langsung solid.
  const onDark = pathname === "/" && !scrolled && !open;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bagikan tinggi announcement bar ke CSS agar padding atas hero selalu pas,
  // termasuk saat teks bar membungkus jadi dua baris di layar sempit.
  React.useEffect(() => {
    const el = announcementRef.current;
    if (!el) return;
    const update = () =>
      document.documentElement.style.setProperty("--announcement-h", `${el.offsetHeight}px`);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPagesOpen(false);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isHomeActive = (name: string) => name === "Beranda" && pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div ref={announcementRef}>
        <AnnouncementBar />
      </div>

      <div
        className={cn(
          "border-b transition-[background-color,border-color,box-shadow] duration-300",
          onDark ? "border-transparent bg-transparent" : "border-border bg-background",
          scrolled && !open && "shadow-sm",
        )}
      >
        <nav aria-label="Navigasi utama" className="container-page flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "rounded-md text-xl font-bold tracking-tight transition-colors duration-300",
                onDark ? "text-white" : "text-brand-dark",
              )}
            >
              {siteConfig.name.toLowerCase()}.
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                if (item.children) {
                  const pagesActive = item.children.some((child) => isActiveHref(pathname, child.href));
                  return (
                    <li
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setPagesOpen(true)}
                      onMouseLeave={() => setPagesOpen(false)}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                          setPagesOpen(false);
                        }
                      }}
                    >
                      <button
                        type="button"
                        aria-expanded={pagesOpen}
                        aria-haspopup="true"
                        onClick={() => setPagesOpen((v) => !v)}
                        className={cn(linkClass(pagesActive, onDark), "flex items-center gap-1")}
                      >
                        {item.name}
                        <ChevronDown
                          className={cn("size-4 transition-transform duration-200", pagesOpen && "rotate-180")}
                        />
                      </button>
                      {pagesOpen && (
                        <div className="absolute left-0 top-full w-48 pt-2">
                          <div className="animate-in fade-in-0 rounded-lg border border-border bg-background p-1.5 shadow-md duration-150">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                onClick={() => setPagesOpen(false)}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-surface-soft",
                                  isActiveHref(pathname, child.href)
                                    ? "text-brand"
                                    : "text-body hover:text-foreground",
                                )}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={linkClass(isHomeActive(item.name) || isActiveHref(pathname, item.href), onDark)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden lg:block">
            <ButtonLink href={whatsappHref} size="sm" variant={onDark ? "light" : undefined}>
              Konsultasi Gratis
              <ArrowRight className="size-4" />
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={cn(
              "-mr-2 flex size-11 items-center justify-center rounded-md transition-colors duration-200 lg:hidden",
              onDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-surface-soft",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <div id="mobile-menu" className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border lg:hidden">
            <div className="container-page flex flex-col gap-5 py-5">
              <ul className="flex flex-col">
                {navItems.flatMap((item) =>
                  item.children
                    ? item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-md py-3 text-base font-medium text-body hover:text-foreground"
                          >
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
                              "block rounded-md py-3 text-base font-medium",
                              isHomeActive(item.name) || isActiveHref(pathname, item.href)
                                ? "text-brand"
                                : "text-body hover:text-foreground",
                            )}
                          >
                            {item.name}
                          </Link>
                        </li>,
                      ],
                )}
              </ul>

              <div className="flex items-center gap-3 border-t border-border pt-5">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Vaultlab"
                  className="flex size-10 items-center justify-center rounded-md border border-border text-body transition-colors duration-200 hover:bg-surface-soft hover:text-foreground"
                >
                  <InstagramIcon className="size-4" />
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok Vaultlab"
                  className="flex size-10 items-center justify-center rounded-md border border-border text-body transition-colors duration-200 hover:bg-surface-soft hover:text-foreground"
                >
                  <TikTokIcon className="size-4" />
                </a>
              </div>

              <ButtonLink href={whatsappHref} className="w-full" onClick={() => setOpen(false)}>
                Konsultasi Gratis
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}