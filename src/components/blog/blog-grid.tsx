"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { PostCard } from "./post-card";
import { blogPosts } from "@/data/blog";

export function BlogGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="mx-auto grid max-w-6xl gap-x-8 gap-y-14 px-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {blogPosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </motion.div>
  );
}
