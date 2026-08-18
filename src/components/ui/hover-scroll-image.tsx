"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";

interface HoverScrollImageProps extends Omit<ImageProps, "fill" | "style" | "ref"> {
  /** Class untuk container (atur aspect ratio & rounded di sini, mis. "aspect-9/16 rounded-2xl") */
  containerClassName?: string;
  /** Durasi (detik) untuk scroll dari atas sampai bawah gambar. Makin besar = makin pelan/halus */
  duration?: number;
}

/**
 * Gambar portrait yang lebih tinggi dari container-nya.
 * Saat di-hover, gambar "discroll" pelan ke bawah (translateY) sampai
 * menampilkan bagian bawah gambar, lalu kembali ke atas saat hover selesai.
 * Efek ini yang dipakai imajiner.id di kartu portofolio mereka.
 */
export function HoverScrollImage({
  containerClassName = "",
  duration = 6,
  alt,
  className,
  ...imageProps
}: HoverScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [hovered, setHovered] = useState(false);

  const measure = () => {
    if (!containerRef.current || !imgRef.current) return;
    const containerHeight = containerRef.current.offsetHeight;
    const imageHeight = imgRef.current.offsetHeight;
    setScrollDistance(Math.max(0, imageHeight - containerHeight));
  };

  // Ukur pas gambar sudah render. Kalau gambar sudah ke-cache browser,
  // next/image kadang gak fire onLoad lagi, jadi kita cek manual juga.
  useEffect(() => {
    if (imgRef.current?.complete) measure();

    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const canScroll = scrollDistance > 0;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
    >
      <motion.div
        className="absolute inset-x-0 top-0"
        animate={{ y: hovered && canScroll ? -scrollDistance : 0 }}
        transition={
          hovered && canScroll
            ? { duration, ease: "linear" }
            : { duration: 0.6, ease: "easeOut" }
        }
      >
        <Image
          ref={imgRef}
          alt={alt}
          onLoad={measure}
          className={`h-auto w-full object-cover object-top ${className ?? ""}`}
          {...imageProps}
        />
      </motion.div>
    </div>
  );
}