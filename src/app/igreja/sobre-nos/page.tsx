import SplitSection from "@/app/components/SplitSection";
import { SloganSection } from "../_components/SloganSection";

const about = () => {
  return (
    <div className="w-full">
      <div className="py-8" />
      <SplitSection
        eyebrow="Igreja Batista Getsamani"
        eyebrowColor="text-primary"
        title="Você é essencial para esta comunidade de fé"
        description="Aqui na Getsamani você experimenta momentos transformadores na presença preciosa do Espírito Santo!"
        imageSrc="/imagens/slides/congresso-setxa-noite-195 2.png"
        imageAlt="Comunidade Getsamani"
        imagePosition="right"
        textColor="text-black dark:text-white"
        descriptionColor="text-gray-600 dark:text-gray-400"
      />

      <SloganSection />
    </div>
  );
};

export default about;
