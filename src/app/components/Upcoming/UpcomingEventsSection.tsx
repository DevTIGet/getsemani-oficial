import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import UpcomingEventCard from "./UpcomingEventCard";

const events = [
  {
    image: "/imagens/slides/teste.jpg",
    date: "Outubro 29, 2025",
    title: "CULTO DOS EMPREENDEDORES",
    link: "#",
  },
  {
    image: "/imagens/slides/teste2.jpg",
    date: "Novembro 10, 2025",
    title: "CONFERÊNCIA DE JOVENS",
    link: "#",
  },
  {
    image: "/imagens/slides/teste4.png",
    date: "Dezembro 5, 2025",
    title: "CULTO DE CELEBRAÇÃO",
    link: "#",
  },
];

export default function UpcomingEventsSection() {
  return (
    <section className="w-full py-12 md:py-16 my-8 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-primary-blue dark:text-white text-2xl md:text-4xl font-bold tracking-wide">
            Próximos Eventos
          </h2>
          <Link
            href="#"
            className="text-primary text-xs md:text-base font-bold flex items-center gap-1 hover:underline"
          >
            VER TODOS
            <span className="text-lg">
              <FiArrowUpRight className="font-bold stroke-3" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {events.map((event, idx) => (
            <UpcomingEventCard
              key={idx}
              image={event.image}
              date={event.date}
              title={event.title}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
