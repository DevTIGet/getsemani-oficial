import { EmblaOptionsType } from "embla-carousel";

export type SlideData = {
  imageSlide: string;
  logoEvento: string;
  titulo: string;
  sloganEvento: string;
};

export type CarouselProps = {
  slides: readonly SlideData[] | SlideData[];
  options?: EmblaOptionsType;
  autoplayDelay?: number;
  mobileThumbsOptions?: EmblaOptionsType;
  desktopThumbsOptions?: EmblaOptionsType;
};

export type CarouselSlideProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export type CarouselThumbnailsProps = {
  slides: readonly SlideData[] | SlideData[];
  selectedIndex: number;
  isMobile: boolean;
  onThumbClick: (index: number) => void;
  emblaRef: (node: HTMLDivElement | null) => void;
};

export type SlideOverlayProps = {
  slide: SlideData;
  isVisible: boolean;
};
