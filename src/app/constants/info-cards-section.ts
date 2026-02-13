import type { ScheduleEvent } from "@/app/types/event";
import type { SedeInfo } from "@/app/types/address";
import type { InfoCardsSectionData } from "@/app/types/info-cards";

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    id: 1,
    title: "DOMINGO",
    day: "DOM",
    times: ["9h", "19h"],
    variant: "primary",
  },
  {
    id: 2,
    title: "QUARTA-FEIRA",
    day: "QUA",
    times: ["20h"],
    variant: "secondary",
  },
  {
    id: 3,
    title: "SÁBADO",
    day: "SÁB",
    times: ["9h", "13h", "19h", "20h"],
    variant: "primary",
  },
];

export const SEDE_INFO: SedeInfo = {
  name: "Igreja Batista Getsamani - Dona Clara",
  address: {
    street: "R. Cassiano Campolina, 360",
    neighborhood: "Dona Clara",
    city: "Belo Horizonte - MG",
  },
  phone: "(31) 3448-9899",
};

export const INFO_CARDS_SECTION_DATA: InfoCardsSectionData = {
  mainImage: "/imagens/slides/teste2.jpg",
  sedeInfo: SEDE_INFO,
  scheduleEvents: SCHEDULE_EVENTS,
  findUs: {
    text: "Encontre-nos",
    description:
      "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    buttonText: "SAIBA MAIS",
    buttonLink: "/igreja/onde-estamos",
  },
  agenda: {
    text: "Agenda",
    description:
      "standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    buttonText: "SAIBA MAIS",
    buttonLink: "/agenda",
  },
  churchImage: "/imagens/slides/teste.jpg",
};
