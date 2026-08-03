"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { formatIndonesianDate } from "@/lib/utils";
import type { BlogPost } from "@/data/blog";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <motion.div variants={fadeUp}>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-zinc-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium tracking-wide text-zinc-800">
            {post.category}
          </span>
        </div>
        <div className="mt-4">
          <p className="text-xs text-zinc-500">
            {formatIndonesianDate(post.date)} · {post.readTime}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-brand">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-zinc-500">{post.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
}
