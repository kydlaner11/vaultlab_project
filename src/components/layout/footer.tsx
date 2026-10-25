import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/site-button";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { TikTokIcon } from "@/components/icons/tiktok-icon";

const whatsappHref = buildWhatsAppLink(
  siteConfig.whatsapp,
  "Halo, saya ingin konsultasi gratis untuk pembuatan website.",
);

const linkGroups = [
  {
    title: "Perusahaan",
    links: [
      { name: "Beranda", href: "/" },
      { name: "Tentang", href: "/#about" },
      { name: "Portofolio", href: "/portfolio" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { name: "Layanan Kami", href: "/#layanan" },
      { name: "Proses Kerja", href: "/#proses" },
      { name: "Harga Paket", href: "/#pricing" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
];

const footerLink =
  "rounded-sm text-sm text-on-dark-soft transition-colors duration-200 hover:text-white focus-visible:outline-white";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-page py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="text-2xl font-bold tracking-tight">{siteConfig.name.toLowerCase()}.</p>
            <h2 className="mt-5 max-w-md text-2xl font-semibold leading-snug tracking-tight text-balance sm:text-3xl">
              Jasa buat website terbaik untuk bisnis Anda
            </h2>
            <div className="mt-8">
              <ButtonLink href={whatsappHref} variant="light" className="w-full sm:w-auto">
                Konsultasi Gratis
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6 lg:justify-items-end">
            {linkGroups.map((group) => (
              <div key={group.title} className="lg:min-w-36">
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className={footerLink}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="lg:min-w-36">
              <h3 className="text-sm font-semibold text-white">Ikuti Kami</h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${footerLink} inline-flex items-center gap-2`}
                  >
                    <InstagramIcon className="size-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${footerLink} inline-flex items-center gap-2`}
                  >
                    <TikTokIcon className="size-4" />
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-on-dark-soft">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
