import AgendaCarousel from "@/app/agenda/_components/AgendaCarousel";
import PopularEventsSection from "@/app/agenda/_components/PopularEventsSection";
import {
  AGENDA_CAROUSEL_SLIDES,
  AGENDA_POPULAR_EVENTS,
} from "@/app/constants/agenda-page";

const EventosPage = () => {
  return (
    <div className="w-full">
      <div className="py-8" />
      <AgendaCarousel slides={AGENDA_CAROUSEL_SLIDES} />
      <PopularEventsSection
        title="Todos os Eventos"
        href="/eventos"
        events={AGENDA_POPULAR_EVENTS}
        displayMode="all"
        showViewAll={false}
      />
    </div>
  );
};

export default EventosPage;
