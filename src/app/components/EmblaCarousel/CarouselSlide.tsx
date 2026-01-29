import { memo } from "react";
import Image from "next/image";
import { CarouselSlideProps } from "@/app/types/carousel";

/**
 * Individual carousel slide component
 */
const CarouselSlide = memo(
  ({ src, alt, priority = false }: CarouselSlideProps) => {
    return (
      <div className="flex-[0_0_100%] min-w-0">
        <div className="relative w-full h-[90vh]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={priority}
          />
        </div>
      </div>
    );
  },
);

CarouselSlide.displayName = "CarouselSlide";

export default CarouselSlide;
