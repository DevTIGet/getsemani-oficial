import EmblaCarousel from "@/app/components/EmblaCarousel";
import WelcomeSection from "@/app/components/WelcomeSection";
import TVGetSection from "@/app/components/TVGetSection";
import UpcomingEventsSection from "@/app/components/UpcomingEventsSection";
import { CAROUSEL_SLIDES, CAROUSEL_OPTIONS } from "@/app/constants/carousel";

export default function Home() {
  return (
    <div className="w-full">
      <EmblaCarousel slides={CAROUSEL_SLIDES} options={CAROUSEL_OPTIONS} />
      <WelcomeSection />
      <TVGetSection />
      <UpcomingEventsSection />
    </div>
  );
}
