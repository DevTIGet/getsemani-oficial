import { memo } from "react";
import Image from "next/image";
import { SlideOverlayProps } from "@/app/types/carousel";

const SlideOverlay = memo(({ slide, isVisible }: SlideOverlayProps) => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`${isVisible ? "transition-all duration-700 ease-out opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="relative w-48 h-20 md:w-64 md:h-28 lg:w-80 lg:h-32 mb-4">
            <Image
              src={slide.logoEvento}
              alt="Logo do evento"
              fill
              className="object-contain object-left"
            />
          </div>
        </div>

        <div
          className={`${isVisible ? "transition-all duration-700 ease-out delay-150 opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-3">
            {slide.titulo}
          </h2>
        </div>

        <div
          className={`${isVisible ? "transition-all duration-700 ease-out delay-300 opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-xl mb-6 leading-relaxed">
            {slide.sloganEvento}
          </p>
        </div>

        <div
          className={`pointer-events-auto ${isVisible ? "transition-all duration-700 ease-out delay-500 opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors cursor-pointer">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
});

SlideOverlay.displayName = "SlideOverlay";

export default SlideOverlay;
