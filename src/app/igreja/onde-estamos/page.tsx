import { MapSection } from "../_components/MapSection";
import { SocialSection } from "../_components/SocialSection";
import { SOCIAL_SECTION_DATA } from "@/app/constants/social-section";
import { MAP_INFO } from "@/app/constants/address";

const Address = () => {
  return (
    <div className="w-full">
      <div className="py-8" />

      <MapSection
        title={MAP_INFO.title}
        address={MAP_INFO.address}
        embedUrl={MAP_INFO.embedUrl}
      />

      <SocialSection {...SOCIAL_SECTION_DATA} />
    </div>
  );
};

export default Address;
