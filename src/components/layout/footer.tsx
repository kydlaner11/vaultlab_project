import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-32 bg-[#181818] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-2xl font-semibold text-brand-light">{siteConfig.name.toLowerCase()}.</p>
            <h2 className="mt-6 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
              Siap membuat website terbaik untuk bisnis Anda?
            </h2>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-light"
          >
            Konsultasi Gratis
            <ArrowDownRight className="size-4" />
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white">Beranda</Link>
            <Link href="/#about" className="hover:text-white">Tentang</Link>
            <Link href="/portfolio" className="hover:text-white">Karya</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
