// components/InfoCardsSection.tsx
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { SCHEDULE_EVENTS, SEDE_INFO } from "@/app/constants/info-cards";

const InfoCardsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Imagem */}
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/imagens/slides/teste2.jpg"
              alt="Comunidade Getsamani"
              width={400}
              height={320}
              className="w-full h-full object-cover min-h-[180px]"
            />
          </div>

          {/* Card 2 - SEDE */}
          <div className="bg-primary-blue text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">SEDE</h3>
              <p className="text-sm mb-4 opacity-90">
                Igreja Batista Getsamani - Dona Clara
              </p>
              <address className="not-italic text-sm leading-relaxed opacity-90">
                {SEDE_INFO.address.street}
                <br />
                {SEDE_INFO.address.neighborhood}
                <br />
                {SEDE_INFO.address.city}
              </address>
            </div>
            <div className="flex items-center gap-2 text-sm mt-4">
              <FaPhoneAlt className="w-4 h-4" />
              <a
                href={`tel:${SEDE_INFO.phone.replace(/\D/g, "")}`}
                className="hover:underline"
              >
                {SEDE_INFO.phone}
              </a>
            </div>
          </div>

          {/* Card 3 - Programação Semanal */}
          <div className="bg-[#CED2DB] rounded-3xl p-4 md:p-8 row-span-1 lg:row-span-2 min-h-[180px] order-5 md:order-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-black">
              Programação Semanal
            </h3>
            <div className="space-y-3">
              {SCHEDULE_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className={`rounded-2xl p-3 md:p-4 ${
                    event.variant === "primary"
                      ? "bg-primary text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <span className="font-bold text-xs md:text-sm uppercase">
                      {event.title}
                    </span>
                    <span className="text-xs md:text-sm font-medium">
                      {event.day}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base font-medium">
                    {event.times.map((time, idx) => (
                      <span key={idx}>{time}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 4 - Encontre-nos */}
          <div className="bg-[#d4d8dd] rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-black">
                Encontre-nos
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make
              </p>
            </div>
            <Link
              href="#"
              className="bg-primary-blue text-white font-bold px-6 py-3 rounded-xl text-sm uppercase hover:bg-primary-blue/90 transition-colors w-fit mt-4"
            >
              SAIBA MAIS
            </Link>
          </div>

          {/* Card 5 - Agenda */}
          <div className="bg-primary rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[180px]">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
                Agenda
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make
              </p>
            </div>
            <Link
              href="#"
              className="bg-[#d4d8dd] text-primary-blue font-bold px-6 py-3 rounded-xl text-sm uppercase hover:bg-white/90 transition-colors w-fit mt-4"
            >
              SAIBA MAIS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { InfoCardsSection };
