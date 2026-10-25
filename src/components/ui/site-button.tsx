import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "text" | "light" | "outline-light";
export type ButtonSize = "md" | "sm";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[15px]",
  sm: "h-10 px-4 text-sm",
};

// "light" dan "outline-light" dipakai di atas section biru tua.
const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-active active:bg-brand-dark focus-visible:outline-brand",
  secondary:
    "border border-border bg-background text-foreground hover:bg-surface-soft active:bg-surface-strong focus-visible:outline-brand",
  text: "h-auto px-0 text-brand underline-offset-4 hover:text-brand-active hover:underline focus-visible:outline-brand",
  light:
    "bg-white text-brand-dark hover:bg-brand-tint active:bg-brand-tint focus-visible:outline-white",
  "outline-light":
    "border border-white/30 text-white hover:bg-white/10 active:bg-white/15 focus-visible:outline-white",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, sizes[size], variants[variant], className);
}

type ButtonLinkProps = Omit<React.ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Paksa buka di tab baru. Default: otomatis untuk URL http(s). */
  external?: boolean;
};

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
