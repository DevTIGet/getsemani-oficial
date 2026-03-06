import { MapSection } from "@/app/igreja/_components/MapSection";
import ContactSection from "@/app/contato/_components/ContactSection";

import { CONTACT_PAGE_DATA } from "@/app/constants/contact-page";
import { MAP_INFO } from "@/app/constants/address";
const Contact = () => {
  return (
    <div className="w-full">
      <div className="py-8" />
      <ContactSection {...CONTACT_PAGE_DATA} />
      <MapSection
        title={MAP_INFO.title}
        address={MAP_INFO.address}
        embedUrl={MAP_INFO.embedUrl}
      />
    </div>
  );
};

export default Contact;
