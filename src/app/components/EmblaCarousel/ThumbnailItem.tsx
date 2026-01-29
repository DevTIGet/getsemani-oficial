import { memo } from "react";
import Image from "next/image";

type ThumbnailItemProps = {
  src: string;
  alt: string;
  isSelected: boolean;
  onClick: () => void;
};

/**
 * Individual thumbnail item component
 */
const ThumbnailItem = memo(
  ({ src, alt, isSelected, onClick }: ThumbnailItemProps) => {
    return (
      <div
        className={`flex-[0_0_auto] w-40 h-24 md:w-52 md:h-32 lg:w-64 lg:h-36 cursor-pointer transition-all duration-300 rounded-xl ${
          isSelected
            ? "opacity-100 -translate-y-2 shadow-xl/30"
            : "opacity-60 hover:opacity-100 hover:-translate-y-2 hover:shadow-xl/30"
        }`}
        onClick={onClick}
      >
        <div
          className={`relative w-full h-full rounded-xl overflow-hidden border-2 transition-all ${
            isSelected
              ? "border-primary"
              : "border-transparent hover:border-primary"
          }`}
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </div>
      </div>
    );
  },
);

ThumbnailItem.displayName = "ThumbnailItem";

export default ThumbnailItem;
