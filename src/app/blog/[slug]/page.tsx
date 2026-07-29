import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowDownRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PostCard } from "@/components/blog/post-card";
import { blogPosts } from "@/data/blog";
import { formatIndonesianDate } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <section className="bg-[#181818] pt-36 pb-16 text-white sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Kembali ke blog
            </Link>
            <p className="mt-8 text-sm font-medium tracking-wide text-brand-light">
              {post.category} · {formatIndonesianDate(post.date)} · {post.readTime}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{post.title}</h1>
            <p className="mt-6 text-lg text-zinc-400">{post.excerpt}</p>
          </div>
        </section>

        <section className="bg-[#faf6ef] py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="relative aspect-video overflow-hidden rounded-[2rem]">
              <Image
                src={`https://picsum.photos/seed/${post.seed}/1600/900`}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-12 flex flex-col gap-10">
              {post.sections.map((section) => (
                <div key={section.heading ?? section.body.slice(0, 20)}>
                  {section.heading && (
                    <h2 className="text-xl font-semibold text-zinc-900">{section.heading}</h2>
                  )}
                  <p className="mt-3 leading-relaxed text-zinc-600">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#181818] py-16 text-white sm:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Butuh bantuan membuat website?
              </h2>
              <p className="mt-2 text-zinc-400">Konsultasikan kebutuhan bisnis Anda, gratis tanpa komitmen.</p>
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

        {otherPosts.length > 0 && (
          <section className="bg-[#faf6ef] py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6">
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">Artikel Lainnya</h2>
              <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-3">
                {otherPosts.map((p) => (
                  <PostCard key={p.slug} post={p} />
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
