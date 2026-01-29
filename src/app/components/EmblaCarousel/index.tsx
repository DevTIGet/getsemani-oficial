"use client";

import { useState, useEffect, useCallback, memo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import CarouselSlide from "./CarouselSlide";
import CarouselThumbnails from "./CarouselThumbnails";
import { CarouselProps } from "@/app/types/carousel";
import {
  DEFAULT_AUTOPLAY_DELAY,
  MOBILE_THUMBS_OPTIONS,
  DESKTOP_THUMBS_OPTIONS,
} from "@/app/constants/carousel";

/**
 * Main carousel component with autoplay and thumbnail navigation
 * Supports responsive behavior with different configurations for mobile and desktop
 */
const EmblaCarousel = memo(
  ({
    slides,
    options,
    autoplayDelay = DEFAULT_AUTOPLAY_DELAY,
  }: CarouselProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const isMobile = useIsMobile();

    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [
      Autoplay({ delay: autoplayDelay, stopOnInteraction: false }),
    ]);

    const thumbsOptions = isMobile
      ? MOBILE_THUMBS_OPTIONS
      : DESKTOP_THUMBS_OPTIONS;
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(thumbsOptions);

    const handleThumbClick = useCallback(
      (index: number) => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        emblaMainApi.scrollTo(index);
      },
      [emblaMainApi, emblaThumbsApi],
    );

    const handleSelect = useCallback(() => {
      if (!emblaMainApi) return;
      setSelectedIndex(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi]);

    useEffect(() => {
      if (!emblaMainApi) return;

      handleSelect();
      emblaMainApi.on("select", handleSelect);
      emblaMainApi.on("reInit", handleSelect);

      return () => {
        emblaMainApi.off("select", handleSelect);
        emblaMainApi.off("reInit", handleSelect);
      };
    }, [emblaMainApi, handleSelect]);

    return (
      <div className="w-full">
        {/* Main Carousel */}
        <div className="overflow-hidden" ref={emblaMainRef}>
          <div className="flex">
            {slides.map((src, index) => (
              <CarouselSlide
                key={`${src}-${index}`}
                src={src}
                alt={`Slide ${index + 1}`}
                priority={index === 0}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails */}
        <CarouselThumbnails
          slides={slides}
          selectedIndex={selectedIndex}
          isMobile={isMobile}
          onThumbClick={handleThumbClick}
          emblaRef={emblaThumbsRef}
        />
      </div>
    );
  },
);

EmblaCarousel.displayName = "EmblaCarousel";

export default EmblaCarousel;
