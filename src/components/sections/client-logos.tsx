import Image from "next/image";
import { partners } from "@/data/partners";

// Jumlah minimal logo dalam satu putaran agar tidak ada celah kosong di layar lebar.
const MIN_LOGOS_PER_LOOP = 10;
// Detik per logo: makin besar makin lambat.
const SECONDS_PER_LOGO = 4;

function LogoGroup({ items, hidden = false }: { items: typeof partners; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-14 pr-14">
      {items.map((partner, index) => (
        <li key={`${partner.name}-${index}`} className="flex h-12 shrink-0 items-center justify-center">
          <Image
            src={partner.logo}
            alt={hidden ? "" : partner.name}
            width={256}
            height={96}
            className="h-9 w-auto max-w-none object-contain opacity-60 grayscale transition-[opacity,filter] duration-200 hover:opacity-100 hover:grayscale-0 sm:h-10"
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientLogos() {
  // Ulangi daftar bila logo sedikit, supaya satu putaran selalu lebih lebar dari layar.
  const repeats = Math.max(1, Math.ceil(MIN_LOGOS_PER_LOOP / partners.length));
  const items = Array.from({ length: repeats }, () => partners).flat();

  return (
    <section aria-labelledby="clients-heading" className="border-b border-border bg-background py-12 sm:py-16">
      <div className="container-page">
        <h2 id="clients-heading" className="text-center text-sm font-medium text-body">
          Dipercaya oleh berbagai bisnis
        </h2>

        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:overflow-x-auto">
          <div
            className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
            style={{ animationDuration: `${items.length * SECONDS_PER_LOGO}s` }}
          >
            <LogoGroup items={items} />
            <LogoGroup items={items} hidden />
          </div>
        </div>
      </div>
    </section>
  );
}