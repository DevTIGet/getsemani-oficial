import type { ContactPageData } from "@/app/types/contact";
import ContactInfoPanel from "./ContactInfoPanel";
import ContactFormPanel from "./ContactFormPanel";

type ContactSectionProps = ContactPageData;

export default function ContactSection({
  infoPanel,
  formPanel,
}: ContactSectionProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <ContactInfoPanel {...infoPanel} />
        <ContactFormPanel {...formPanel} />
      </div>
    </section>
  );
}
