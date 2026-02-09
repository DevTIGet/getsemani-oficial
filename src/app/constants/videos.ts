export interface VideoData {
  id: string;
  title: string;
  author: string;
  date: string;
  description: string;
  youtubeId: string;
}

export const TV_GET_VIDEOS: VideoData[] = [
  {
    id: "1",
    title: "CAIXA D'ÁGUA",
    author: "Pra. Daniela Linhares",
    date: "08 Fevereiro, 2026",
    description:
      "Mensagem inspiradora sobre a importância de manter nossa fé e confiança em Deus, mesmo em tempos de dificuldade.",
    youtubeId: "-dYN220VYHw",
  },
  {
    id: "2",
    title: "MANHÃ COM DEUS",
    author: "Pr. Jorge Linhares",
    date: "08 Fevereiro, 2026",
    description: "Mensagem poderosa sobre fé e esperança para os dias atuais.",
    youtubeId: "v-WmNk6kXp4",
  },
  {
    id: "3",
    title: "O Tabernáculo",
    author: "Pr. Carlos Cavalcanti",
    date: "05 Fevereiro, 2026",
    description: "É perigoso ser muito forte e poderoso",
    youtubeId: "Xckv4XY8VqU",
  },
];
