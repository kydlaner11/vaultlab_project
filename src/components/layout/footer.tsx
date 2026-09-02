import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { TikTokIcon } from "@/components/icons/tiktok-icon";

const whatsappHref = buildWhatsAppLink(
  siteConfig.whatsapp,
  "Halo, saya ingin konsultasi gratis untuk pembuatan website.",
);

export function Footer() {
  return (
    <footer className="bg-[#181818] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-2xl font-semibold text-white">{siteConfig.name.toLowerCase()}.</p>
            <h2 className="mt-6 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              Jasa buat website terbaik untuk bisnis Anda
            </h2>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-light"
          >
            Konsultasi Gratis
            <ArrowDownRight className="size-4" />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex gap-6">
              <Link href="/" className="hover:text-white">Beranda</Link>
              <Link href="/#about" className="hover:text-white">Tentang</Link>
              <Link href="/portfolio" className="hover:text-white">Portofolio</Link>
            </div>

            <div className="flex items-center gap-3 sm:border-l sm:border-white/10 sm:pl-6">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Vaultlab"
                className="group relative flex size-8 items-center justify-center overflow-hidden rounded-full border border-white/15 text-zinc-400 transition-colors duration-300 hover:border-transparent hover:text-white"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] transition-transform duration-300 group-hover:scale-100" />
                <InstagramIcon className="relative z-10 size-3.5" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Vaultlab"
                className="group relative flex size-8 items-center justify-center overflow-hidden rounded-full border border-white/15 text-zinc-400 transition-colors duration-300 hover:border-transparent hover:text-black"
              >
                <span className="absolute inset-0 scale-0 rounded-full bg-white transition-transform duration-300 group-hover:scale-100" />
                <TikTokIcon className="relative z-10 size-3.5" />
              </a>
            </div>
          </div>
          <p>© {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}