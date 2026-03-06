import Image from "next/image";
import type { OfferImpactBanner as OfferImpactBannerProps } from "@/app/types/page-data";

export default function OfferImpactBanner({
  description,
  stat,
  statLabel,
  imageSrc,
  imageAlt,
}: OfferImpactBannerProps) {
  return (
    <section className="w-full relative h-64 md:h-72 flex items-center justify-center my-8">
      <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 gap-3 max-w-2xl mx-auto">
        <p className="text-white/90 text-sm md:text-xl leading-relaxed">
          {description}
        </p>
        <span className="text-white font-bold text-4xl md:text-5xl tracking-tight">
          {stat}
        </span>
        <p className="text-white text-base md:text-xl font-medium leading-snug">
          {statLabel}
        </p>
      </div>
    </section>
  );
}
