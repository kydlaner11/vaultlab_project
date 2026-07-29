import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowDownRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectCard } from "@/components/portfolio/project-card";
import { portfolioProjects } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = portfolioProjects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <section className="bg-[#181818] pt-36 pb-16 text-white sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-5xl px-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Kembali ke semua karya
            </Link>
            <p className="mt-8 text-sm font-medium tracking-wide text-brand-light">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-lg text-zinc-400">{project.summary}</p>
          </div>
        </section>

        <section className="bg-[#faf6ef] py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative aspect-video overflow-hidden rounded-[2rem]">
              <Image
                src={`https://picsum.photos/seed/${project.seed}/1600/900`}
                alt={project.title}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium tracking-wide text-zinc-500">KLIEN</p>
                <p className="mt-1 font-medium text-zinc-900">{project.client}</p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-zinc-500">KATEGORI</p>
                <p className="mt-1 font-medium text-zinc-900">{project.category}</p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-zinc-500">LAYANAN</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-12 sm:grid-cols-3">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Tantangan</h2>
                <p className="mt-3 text-sm text-zinc-600">{project.challenge}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Solusi</h2>
                <p className="mt-3 text-sm text-zinc-600">{project.solution}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-zinc-900">Hasil</h2>
                <p className="mt-3 text-sm text-zinc-600">{project.result}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#181818] py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Tertarik dengan hasil serupa untuk bisnis Anda?
              </h2>
              <p className="mt-2 text-zinc-400">Konsultasikan kebutuhan website Anda, gratis tanpa komitmen.</p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-medium text-white transition-colors hover:bg-brand-light"
            >
              Konsultasi Gratis
              <ArrowDownRight className="size-4" />
            </Link>
          </div>
        </section>

        {otherProjects.length > 0 && (
          <section className="bg-[#faf6ef] py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Karya Lainnya</h2>
              <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-3">
                {otherProjects.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
