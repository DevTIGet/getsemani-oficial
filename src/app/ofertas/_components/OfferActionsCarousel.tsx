"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { OfferActionsCarousel as OfferActionsCarouselProps } from "@/app/types/page-data";

export default function OfferActionsCarousel({
  title,
  items,
}: OfferActionsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-gray-900 dark:text-white font-bold text-xl md:text-3xl">
          {title}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            <FiChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próximo"
            className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition-colors cursor-pointer"
          >
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-[0_0_80%] sm:flex-[0_0_45%] md:flex-[0_0_30%] min-w-0"
            >
              <Link href={item.href} className="group block">
                <div className="relative h-44 md:h-72  w-full rounded-2xl overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-start justify-between gap-1">
                  <span className="font-bold text-sm md:text-xl text-gray-900 dark:text-white">
                    {item.title}
                  </span>
                  <FiArrowUpRight className="shrink-0 w-4 h-4 text-gray-400 group-hover:text-primary transition-colors mt-0.5" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {item.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
