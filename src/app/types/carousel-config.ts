export interface CarouselOptions {
  loop: boolean;
}

export interface ThumbsOptions {
  containScroll: string;
  dragFree?: boolean;
}

export interface CarouselConfig {
  defaultAutoplayDelay: number;
  mobileThumbsOptions: ThumbsOptions;
  desktopThumbsOptions: ThumbsOptions;
  mobileBreakpoint: number;
}
