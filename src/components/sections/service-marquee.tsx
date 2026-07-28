"use client";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { serviceTiles } from "@/data/services";

export function ServiceMarquee() {
  return (
    <section className="overflow-hidden bg-[#181818] py-2">
      <InfiniteSlider gap={0} duration={45} durationOnHover={90}>
        {serviceTiles.map(({ index, title, icon: Icon }) => (
          <div
            key={index}
            className="flex h-72 w-80 flex-col justify-between border-r border-white/10 px-8 py-8 sm:w-96"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-wide text-zinc-500">{index}</span>
              <span className="flex size-8 items-center justify-center rounded-full bg-brand-secondary">
                <Icon className="size-4 text-white" />
              </span>
            </div>
            <h3 className="text-3xl font-semibold leading-tight text-white">{title}</h3>
          </div>
        ))}
      </InfiniteSlider>
    </section>
  );
}
