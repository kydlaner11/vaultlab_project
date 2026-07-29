import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { BlogGrid } from "@/components/blog/blog-grid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, insight, dan panduan seputar website, SEO, dan digital marketing dari tim Vaultlab.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <section className="bg-[#faf6ef] pt-36 pb-16 sm:pt-44">
          <PageHeader
            eyebrow="BLOG"
            title="Tips & insight seputar website."
            description="Kumpulan tulisan seputar website, SEO, dan strategi digital untuk membantu bisnis Anda tumbuh secara online."
          />
        </section>
        <section className="bg-[#faf6ef] pb-24 sm:pb-32">
          <BlogGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
