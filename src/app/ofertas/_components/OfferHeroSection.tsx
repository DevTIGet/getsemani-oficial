import Image from "next/image";
import Link from "next/link";
import type { OfferHeroSection as OfferHeroSectionProps } from "@/app/types/page-data";

export default function OfferHeroSection({
  title,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
}: OfferHeroSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative rounded-2xl overflow-hidden h-72 md:h-96 flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center text-center gap-6 px-6">
          <h1 className="text-white font-bold text-2xl md:text-3xl max-w-sm leading-snug">
            {title}
          </h1>
          <Link
            href={buttonHref}
            className="px-10 py-2.5 rounded-lg bg-white text-gray-800 text-sm font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
