import EmblaCarousel from "@/app/components/EmblaCarousel";
import WelcomeSection from "@/app/components/WelcomeSection";
import TVGetSection from "@/app/components/TVGetSection";
import UpcomingEventsSection from "@/app/components/Upcoming/UpcomingEventsSection";
import ContributionSection from "@/app/components/Contribution/ContributionSection";
import SplitSection from "./components/SplitSection";

import {
  CAROUSEL_SLIDES,
  CAROUSEL_OPTIONS,
  DEFAULT_AUTOPLAY_DELAY,
  MOBILE_THUMBS_OPTIONS,
  DESKTOP_THUMBS_OPTIONS,
} from "@/app/constants/carousel";
import { WELCOME_SECTION_DATA } from "@/app/constants/welcome-section";
import { TV_GET_VIDEOS } from "@/app/constants/videos";
import { HOME_PAGE_DATA } from "@/app/constants/home-page";

export default function Home() {
  return (
    <div className="w-full">
      <EmblaCarousel
        slides={CAROUSEL_SLIDES}
        options={CAROUSEL_OPTIONS}
        autoplayDelay={DEFAULT_AUTOPLAY_DELAY}
        mobileThumbsOptions={MOBILE_THUMBS_OPTIONS}
        desktopThumbsOptions={DESKTOP_THUMBS_OPTIONS}
      />
      <WelcomeSection {...WELCOME_SECTION_DATA} />
      <TVGetSection videos={TV_GET_VIDEOS} />
      <UpcomingEventsSection
        title={HOME_PAGE_DATA.upcomingEvents.title}
        href={HOME_PAGE_DATA.upcomingEvents.href}
        events={HOME_PAGE_DATA.upcomingEvents.events}
      />
      <ContributionSection
        title={HOME_PAGE_DATA.contribution.title}
        description={HOME_PAGE_DATA.contribution.description}
        cards={HOME_PAGE_DATA.contribution.cards}
      />
      <SplitSection {...HOME_PAGE_DATA.cellSection} />
    </div>
  );
}
