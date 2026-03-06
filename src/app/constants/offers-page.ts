import type { OffersPageData } from "@/app/types/page-data";

export const OFFERS_PAGE_DATA: OffersPageData = {
  heroSection: {
    title: "Contribua para o avanço do Reino",
    imageSrc: "/imagens/slides/congresso-setxa-noite-195 2.png",
    imageAlt: "Igreja Getsêmani",
    buttonText: "OFERTAR",
    buttonHref: "#",
  },
  contributionSection: {
    title: "Formas de contribuição",
    methods: [
      {
        icon: "app",
        title: "App e Site",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      },
      {
        icon: "pix",
        title: "Via Pix",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      },
      {
        icon: "bank",
        title: "Depósito bancário",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      },
      {
        icon: "church",
        title: "Presencialmente",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
      },
    ],
    qrCode: {
      title: "Pix QR Code",
    },
  },
  impactBanner: {
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    stat: "+546.555",
    statLabel: "Pessoas Transformadas através dos nossos projetos",
    imageSrc: "/imagens/slides/congresso-setxa-noite-195 2.png",
    imageAlt: "Impacto da Igreja Getsêmani",
  },
  actionsCarousel: {
    title: "Nossas Ações",
    items: [
      {
        id: 1,
        image: "/imagens/slides/teste.jpg",
        title: "Ação Social",
        description:
          "Ação social de distribuição de alimentos e roupas para famílias em situação de vulnerabilidade, promovendo dignidade e esperança através do amor ao próximo.",
        href: "#",
      },
      {
        id: 2,
        image: "/imagens/slides/congresso-setxa-noite-195 2.png",
        title: "Projeto de Evangelismo",
        description:
          "Projeto de evangelismo em comunidades carentes, levando a mensagem de esperança e transformação através de ações práticas e envolvimento comunitário.",
        href: "#",
      },
      {
        id: 3,
        image: "/imagens/slides/teste2.jpg",
        title: "Ação de Capacitação",
        description:
          "Ação de capacitação para membros da comunidade, oferecendo treinamentos e workshops para desenvolvimento pessoal e profissional.",
        href: "#",
      },
      {
        id: 4,
        image: "/imagens/slides/teste4.png",
        title: "Ação de Voluntariado",
        description:
          "Ação de voluntariado para membros da comunidade, oferecendo oportunidades de engajamento e impacto social através de atividades práticas e envolvimento comunitário.",
        href: "#",
      },
      {
        id: 5,
        image: "/imagens/slides/teste3.webp",
        title: "Projeto de Ação Comunitária",
        description:
          "Projeto de ação comunitária para promover o desenvolvimento social e econômico das comunidades carentes, com foco em capacitação e empoderamento.",
        href: "#",
      },
    ],
  },
};
