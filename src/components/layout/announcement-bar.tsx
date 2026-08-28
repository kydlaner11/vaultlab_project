"use client";

import * as React from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Flame } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/utils";
import { siteConfig, promoConfig } from "@/config/site";

const promoWhatsappHref = buildWhatsAppLink(siteConfig.whatsapp, promoConfig.whatsappMessage);

function getTimeLeft(target: number) {
  const diff = Math.max(target - Date.now(), 0);
  return {
    diff,
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const pad = (n: number) => n.toString().padStart(2, "0");

function TimeBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <motion.span
        key={value}
        initial={{ y: -4, opacity: 0.5 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="rounded bg-black/30 px-1.5 py-0.5 text-[10px] font-bold tabular-nums leading-none sm:px-2 sm:py-1 sm:text-sm"
      >
        {value}
      </motion.span>
      <span className="mt-0.5 text-[7px] uppercase tracking-wide opacity-70 sm:text-[9px]">
        {label}
      </span>
    </div>
  );
}

export function AnnouncementBar() {
  const target = React.useMemo(() => new Date(promoConfig.endDate).getTime(), []);
  const [timeLeft, setTimeLeft] = React.useState(() => getTimeLeft(target));
  const [hidden, setHidden] = React.useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHidden(latest > 10);
  });

  React.useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  if (!promoConfig.active || timeLeft.diff <= 0) return null;

  return (
    <motion.div
      initial={false}
      animate={{
        height: hidden ? 0 : "auto",
        opacity: hidden ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative z-10 w-full overflow-hidden bg-linear-to-r from-red-600 via-orange-500 to-red-600 bg-[length:200%_100%] text-white [animation:gradient-move_4s_linear_infinite]"
    >
      <a
        href={promoWhatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 px-3 py-1.5 text-center sm:flex-row sm:justify-between sm:gap-3 sm:px-6"
      >
        {/* Headline row */}
        <div className="flex items-center gap-1.5 text-[11px] font-semibold leading-tight sm:text-sm">
          <Flame className="size-3.5 shrink-0 animate-pulse text-yellow-200 sm:size-4" />

          <span className="max-w-190px truncate sm:max-w-none">
            {promoConfig.headline}
          </span>

          <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-black/25 px-2 py-0.5 text-xs sm:inline-flex">
            <span className="text-white/60 line-through">{promoConfig.originalPrice}</span>
            <span className="font-bold text-yellow-300">{promoConfig.discountedPrice}</span>
          </span>

          <span className="shrink-0 rounded-full bg-yellow-300 px-1.5 py-0.5 text-[10px] font-extrabold text-red-700">
            -{promoConfig.discountPercent}%
          </span>

          <span className="hidden font-semibold underline underline-offset-2 sm:inline">
            {promoConfig.ctaLabel}
          </span>
        </div>

        {/* Countdown row */}
        <div className="flex shrink-0 items-center gap-1 rounded-md bg-black/25 px-1.5 py-0.5 sm:gap-2 sm:rounded-lg sm:px-2.5 sm:py-1">
          <span className="text-[8px] font-medium uppercase tracking-wide opacity-80 sm:text-[11px]">
            Berakhir
          </span>
          <div className="flex items-center gap-0.5 sm:gap-1">
            {timeLeft.days > 0 && (
              <>
                <TimeBox value={pad(timeLeft.days)} label="hr" />
                <span className="opacity-50">:</span>
              </>
            )}
            <TimeBox value={pad(timeLeft.hours)} label="jam" />
            <span className="opacity-50">:</span>
            <TimeBox value={pad(timeLeft.minutes)} label="mnt" />
            <span className="opacity-50">:</span>
            <TimeBox value={pad(timeLeft.seconds)} label="dtk" />
          </div>
        </div>
      </a>

      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </motion.div>
  );
}