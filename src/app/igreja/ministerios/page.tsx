import SplitSection from "@/app/components/SplitSection";
import VolunteerCarousel from "@/app/igreja/_components/ministries/VolunteerCarousel";
import MinistriesGrid from "@/app/igreja/_components/ministries/MinistriesGrid";
import { MINISTRIES_DATA } from "@/app/constants/ministries";

const Ministries = () => {
  return (
    <div className="w-full">
      <div className="py-8" />

      <SplitSection
        eyebrow="What is Lorem Ipsum?"
        eyebrowColor="text-primary"
        title="Lorem Ipsum is simply dummy text of the"
        description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        imageSrc="/imagens/slides/congresso-setxa-noite-195 2.png"
        imageAlt="Comunidade Getsamani"
        imagePosition="right"
        textColor="text-black dark:text-white"
        descriptionColor="text-gray-600 dark:text-gray-400"
      />

      <VolunteerCarousel />

      <MinistriesGrid ministries={MINISTRIES_DATA} />
    </div>
  );
};

export default Ministries;
