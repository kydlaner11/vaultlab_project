"use client";
import * as React from "react";
import { MotionConfig } from "framer-motion";

// Menghormati pengaturan "reduce motion" di perangkat pengunjung.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
