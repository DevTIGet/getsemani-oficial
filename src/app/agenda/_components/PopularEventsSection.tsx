import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { AgendaPopularEvent } from "@/app/constants/agenda-page";

type PopularEventsSectionProps = {
  title: string;
  href: string;
  events: AgendaPopularEvent[];
  displayMode?: "limited" | "all";
  showViewAll?: boolean;
};

const PopularEventsSection = ({
  title,
  href,
  events,
  displayMode = "limited",
  showViewAll = true,
}: PopularEventsSectionProps) => {
  const eventsToRender = displayMode === "limited" ? events.slice(0, 6) : events;

  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-black dark:text-white text-2xl md:text-3xl font-bold">
            {title}
          </h2>
          {showViewAll ? (
            <Link
              href={href}
              className="text-primary text-xs md:text-sm font-semibold tracking-wide inline-flex items-center gap-1"
            >
              VER TODOS
              <FiArrowUpRight className="text-base" />
            </Link>
          ) : null}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-8">
          {eventsToRender.map((event, index) => (
            <article
              key={`${event.title}-${index}`}
              className={`w-full ${
                displayMode === "limited"
                  ? index >= 6
                    ? "hidden"
                    : index >= 4
                      ? "hidden md:block"
                      : ""
                  : ""
              }`}
            >
              <Link href={event.href} className="block">
                <div className="relative w-full h-36 sm:h-40 md:h-44 rounded-2xl overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <p className="mt-2 text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase">
                {event.date}
              </p>
              <Link
                href={event.href}
                className="mt-1 inline-flex items-center gap-1 text-black dark:text-white font-bold text-xs md:text-base hover:text-primary"
              >
                {event.title}
                <FiArrowUpRight className="text-base" />
              </Link>
              <p className="mt-1 text-xs md:text-sm text-gray-600 dark:text-gray-400">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularEventsSection;
