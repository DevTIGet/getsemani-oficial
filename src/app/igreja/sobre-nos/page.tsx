import SplitSection from "@/app/components/SplitSection";
import { SloganSection } from "../_components/SloganSection";
import { InfoCardsSection } from "../_components/InfoCardsSection";

const About = () => {
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

      <div className="grid ">
        <SplitSection
          title="Atitude de ser Atitude Pertencer"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          imageSrc="/imagens/slides/teste.jpg"
          imageAlt="Atitude"
          imagePosition="left"
          backgroundColor="bg-primary"
          textColor="text-white"
          descriptionColor="text-white/90"
        />

        <SplitSection
          title="Quem é o Pr. Jorge Linhares"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. g industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
          imageSrc="/imagens/slides/teste4.png"
          imageAlt="Pastor Jorge Linhares"
          imagePosition="right"
          backgroundColor="bg-primary"
          textColor="text-white"
          descriptionColor="text-white/90"
        />

        <InfoCardsSection />

        <SplitSection
          title="AINDA NÃO FAZ PARTE DA CÉLULA?"
          description="Sua colaboração é muito importante para o avanço do reino"
          buttonText="Células"
          buttonHref="#celulas"
          imageSrc="/imagens/slides/teste4.png"
          imageAlt="Grupo de célula em atividade"
          imagePosition="right"
          textColor="text-white"
          descriptionColor="text-white/90"
          backgroundColor="bg-primary"
        />
      </div>
    </div>
  );
};

export default About;
