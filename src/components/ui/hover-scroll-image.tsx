"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";

interface HoverScrollImageProps extends Omit<ImageProps, "fill" | "style" | "ref"> {
  /** Class untuk container (atur aspect ratio & rounded di sini, mis. "aspect-9/16 rounded-2xl") */
  containerClassName?: string;
  /** Durasi (detik) untuk scroll dari atas sampai bawah gambar. Makin besar = makin pelan/halus */
  duration?: number;
  /** Jeda (detik) sebelum arah scroll berbalik, di atas & di bawah */
  pauseDuration?: number;
}

/**
 * Gambar portrait yang lebih tinggi dari container-nya.
 * Otomatis "discroll" pelan ke bawah (translateY) sampai menampilkan
 * bagian bawah gambar, lalu kembali ke atas, berulang terus — tanpa
 * perlu hover atau interaksi apa pun.
 */
export function HoverScrollImage({
  containerClassName = "",
  duration = 6,
  pauseDuration = 0.8,
  alt,
  className,
  ...imageProps
}: HoverScrollImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

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
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      <motion.div
        className="absolute inset-x-0 top-0"
        animate={canScroll ? { y: [0, -scrollDistance] } : { y: 0 }}
        transition={
          canScroll
            ? {
                duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: pauseDuration,
              }
            : { duration: 0.3 }
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