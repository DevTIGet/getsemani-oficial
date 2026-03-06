import type { Contribution } from "./contribution";
import type { UpcomingEvent } from "./event";

export interface HeaderSection {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  textColor: string;
  descriptionColor: string;
}

export interface VolunteerSection {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  textColor: string;
  descriptionColor: string;
  backgroundColor: string;
}

export interface DonationBanner {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface OfferHeroSection {
  title: string;
  imageSrc: string;
  imageAlt: string;
  buttonText: string;
  buttonHref: string;
}

export type ContributionMethodIcon =
  | "app"
  | "pix"
  | "bank"
  | "church"
  | "qrcode";

export interface ContributionMethod {
  icon: ContributionMethodIcon;
  title: string;
  description: string;
}

export interface OfferContributionSection {
  title: string;
  methods: ContributionMethod[];
  qrCode: {
    title: string;
    imageSrc?: string;
  };
}

export interface OffersPageData {
  heroSection: OfferHeroSection;
  contributionSection: OfferContributionSection;
  impactBanner: OfferImpactBanner;
  actionsCarousel: OfferActionsCarousel;
}

export interface OfferActionItem {
  id: number | string;
  image: string;
  title: string;
  description: string;
  href: string;
}

export interface OfferActionsCarousel {
  title: string;
  items: OfferActionItem[];
}

export interface OfferImpactBanner {
  description: string;
  stat: string;
  statLabel: string;
  imageSrc: string;
  imageAlt: string;
}

export interface MinistriesPageData {
  headerSection: HeaderSection;
  volunteerSection: VolunteerSection;
  donationBanner: DonationBanner;
}

export interface CellSection {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  textColor: string;
  descriptionColor: string;
}

export interface HomePageData {
  contribution: {
    title: string;
    description: string;
    cards: Contribution[];
  };
  upcomingEvents: {
    title: string;
    href: string;
    events: UpcomingEvent[];
  };
  cellSection: CellSection;
}
