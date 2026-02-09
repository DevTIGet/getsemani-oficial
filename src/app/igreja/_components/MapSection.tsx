import { MAP_INFO } from "@/app/constants/address";

interface MapSectionProps {
  title?: string;
  address?: string;
  embedUrl?: string;
}

const MapSection = ({
  title = MAP_INFO.title,
  address = MAP_INFO.address,
  embedUrl = MAP_INFO.embedUrl,
}: MapSectionProps) => {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden shadow-lg">
          {/* Header com endereço */}
          <div className=" bg-primary-blue dark:bg-primary text-white px-6 py-4 z-10">
            <p className="text-xs md:text-base font-medium">
              {title} - {address}
            </p>
          </div>

          {/* Google Maps Iframe */}
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title={`Localização ${title}`}
          />
        </div>
      </div>
    </section>
  );
};

export { MapSection };
