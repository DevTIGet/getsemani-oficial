import type { VolunteerSlide } from "@/app/types/volunteer";

export const VOLUNTEER_CAROUSEL_DATA = {
  title: "A Importância do Voluntariado na Igreja",
  slides: [
    {
      image: "/imagens/slides/congresso-setxa-noite-195 2.png",
      title: "Lorem Ipsum is simply dummy",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    },
    {
      image: "/imagens/slides/congresso-setxa-noite-195 2.png",
      title: "Voluntariado transforma vidas",
      text: "O voluntariado é essencial para o crescimento da igreja e o fortalecimento da comunidade. Junte-se a nós e faça a diferença!",
    },
    {
      image: "/imagens/slides/congresso-setxa-noite-195 2.png",
      title: "Seja parte do propósito",
      text: "Descubra como servir pode impactar sua vida e a de outros. Oportunidades para todos os perfis e idades.",
    },
  ] as VolunteerSlide[],
};
