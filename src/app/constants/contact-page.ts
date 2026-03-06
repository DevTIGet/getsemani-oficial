import type { ContactPageData } from "@/app/types/contact";

export const CONTACT_PAGE_DATA: ContactPageData = {
  infoPanel: {
    title: "Estamos aqui para te atender e orar por você!",
    backgroundImage: "/imagens/slides/congresso-setxa-noite-195 2.png",
    emailLabel: "FALE CONOSCO VIA E-MAIL",
    email: "secretaria@getsemani.com.br",
    phoneLabel: "OU PELO TELEFONE",
    phone: "(31) 3448-9899",
    socialLabel: "REDES SOCIAIS",
    socialLinks: [
      { platform: "instagram", url: "https://instagram.com/getsemani" },
      { platform: "youtube", url: "https://youtube.com/@getsemani" },
      { platform: "twitter", url: "https://twitter.com/getsemani" },
      { platform: "facebook", url: "https://facebook.com/getsemani" },
    ],
    scheduleLabel: "HORÁRIO DE ATENDIMENTO",
    schedule: "Segunda à Sexta,\ndas 09h às 15h",
  },
  formPanel: {
    title: "Como podemos te ajudar?",
    prayerRequests: [
      { label: "PEDIDO DE ORAÇÃO", href: "#pedido-oracao" },
      { label: "SUPORTE PASTORAL", href: "#suporte-pastoral" },
      { label: "DÚVIDAS SOBRE A IGREJA", href: "#duvidas-igreja" },
      { label: "INTERESSE EM MINISTÉRIOS", href: "#interesse-ministerios" },
      { label: "DESEJO DE MEMBRO", href: "#desejo-membro" },
      { label: "OUTROS ASSUNTOS", href: "#outros-assuntos" },
    ],
    submitButtonLabel: "ENVIAR PARA RH",
  },
};
