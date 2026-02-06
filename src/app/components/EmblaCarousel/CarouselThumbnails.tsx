import { memo } from "react";
import { CarouselThumbnailsProps } from "@/app/types/carousel";
import ThumbnailItem from "./ThumbnailItem";

const CarouselThumbnails = memo(
  ({
    slides,
    selectedIndex,
    isMobile,
    onThumbClick,
    emblaRef,
  }: CarouselThumbnailsProps) => {
    return (
      <div
        className={`overflow-hidden py-6 bg-white dark:bg-gray-900 px-4 md:px-0 ${
          isMobile ? "" : "flex justify-center"
        }`}
        ref={emblaRef}
      >
        <div className="flex gap-3">
          {slides.map((slide, index) => (
            <ThumbnailItem
              key={`${slide.imageSlide}-${index}`}
              src={slide.imageSlide}
              alt={`Thumbnail ${index + 1}`}
              isSelected={index === selectedIndex}
              onClick={() => onThumbClick(index)}
            />
          ))}
        </div>
      </div>
    );
  },
);

CarouselThumbnails.displayName = "CarouselThumbnails";

export default CarouselThumbnails;
