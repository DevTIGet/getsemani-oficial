"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type PropType = {
  slides: string[];
  options?: any;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 105000, stopOnInteraction: false }),
  ]);

  // Configuração diferente para mobile e desktop
  const thumbsOptions = isMobile
    ? {
        dragFree: true,
        skipSnaps: true,
        watchDrag: true,
      }
    : {
        containScroll: "trimSnaps",
        dragFree: false,
        align: "center" as const,
      };

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(thumbsOptions);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);

    return () => {
      emblaMainApi.off("select", onSelect);
      emblaMainApi.off("reInit", onSelect);
    };
  }, [emblaMainApi, onSelect]);

  return (
    <div className="w-full">
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="flex">
          {slides.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0" key={index}>
              <div className="relative w-full h-[90vh]">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div
        className={`overflow-hidden py-6 bg-white dark:bg-gray-900 px-4 md:px-0 ${
          isMobile ? "" : "flex justify-center"
        }`}
        ref={emblaThumbsRef}
      >
        <div className="flex gap-3">
          {slides.map((src, index) => (
            <div
              key={index}
              className={`flex-[0_0_auto] w-40 h-24 md:w-52 md:h-32 lg:w-64 lg:h-36 cursor-pointer transition-all duration-300 ${
                index === selectedIndex
                  ? "opacity-100 -translate-y-2 shadow-lg"
                  : "opacity-60 hover:opacity-100 hover:-translate-y-2 hover:shadow-lg"
              }`}
              onClick={() => onThumbClick(index)}
            >
              <div
                className={`relative w-full h-full rounded-xl overflow-hidden border-2 transition-all shadow-md ${
                  index === selectedIndex
                    ? "border-primary"
                    : "border-transparent hover:border-primary"
                }`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
