export interface ScheduleEvent {
  id: string;
  title: string;
  day: string;
  times: string[];
  variant: "primary" | "secondary";
}

export interface InfoCard {
  id: string;
  type: "image" | "sede" | "schedule" | "info";
  title?: string;
  content?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const SCHEDULE_EVENTS: ScheduleEvent[] = [
  {
    id: "1",
    title: "CULTO DE CELEBRAÇÃO",
    day: "DOMINGO",
    times: ["8:00", "11:00", "17:00", "19:00"],
    variant: "primary",
  },
  {
    id: "2",
    title: "CULTO DE CELEBRAÇÃO",
    day: "DOMINGO",
    times: ["8:00", "11:00", "17:00", "19:00"],
    variant: "secondary",
  },
  {
    id: "3",
    title: "CULTO DE CELEBRAÇÃO",
    day: "DOMINGO",
    times: ["8:00", "11:00", "17:00", "19:00"],
    variant: "primary",
  },
  {
    id: "4",
    title: "CULTO DE CELEBRAÇÃO",
    day: "DOMINGO",
    times: ["8:00", "11:00", "17:00", "19:00"],
    variant: "secondary",
  },
];

export const SEDE_INFO = {
  address: {
    street: "R. Cassiano Campolina, 360",
    neighborhood: "Dona Clara",
    city: "Belo Horizonte - MG",
  },
  phone: "(31) 1111-1111",
};
