import * as React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** "dark" = dipakai di atas latar biru tua */
  tone?: "light" | "dark";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  id,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-wider",
            dark ? "text-brand-light" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn("type-h2 text-balance", eyebrow && "mt-3", dark ? "text-white" : "text-foreground")}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-on-dark-soft" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
