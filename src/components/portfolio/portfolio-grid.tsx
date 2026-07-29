"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { ProjectCard } from "./project-card";
import { portfolioProjects } from "@/data/portfolio";

export function PortfolioGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="mx-auto grid max-w-6xl gap-x-8 gap-y-14 px-6 sm:grid-cols-2"
    >
      {portfolioProjects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </motion.div>
  );
}
