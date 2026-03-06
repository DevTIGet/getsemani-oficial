import OfferHeroSection from "./_components/OfferHeroSection";
import OfferContributionSection from "./_components/OfferContributionSection";
import OfferImpactBanner from "./_components/OfferImpactBanner";
import OfferActionsCarousel from "./_components/OfferActionsCarousel";
import { OFFERS_PAGE_DATA } from "@/app/constants/offers-page";

const Offer = () => {
  return (
    <div className="w-full">
      <div className="py-8" />
      <OfferHeroSection {...OFFERS_PAGE_DATA.heroSection} />
      <OfferContributionSection {...OFFERS_PAGE_DATA.contributionSection} />
      <OfferImpactBanner {...OFFERS_PAGE_DATA.impactBanner} />
      <OfferActionsCarousel {...OFFERS_PAGE_DATA.actionsCarousel} />
    </div>
  );
};

export default Offer;
