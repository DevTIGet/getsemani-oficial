"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const CARDS = [
  {
    image: "/imagens/slides/congresso-setxa-noite-195 2.png",
    title: "Lorem Ipsum is simply dummy",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    image: "/imagens/slides/congresso-setxa-noite-195 2.png",
    title: "Voluntariado transforma vidas",
    text: "O voluntariado é essencial para o crescimento da igreja e o fortalecimento da comunidade. Junte-se a nós e faça a diferença!",
  },
  {
    image: "/imagens/slides/congresso-setxa-noite-195 2.png",
    title: "Seja parte do propósito",
    text: "Descubra como servir pode impactar sua vida e a de outros. Oportunidades para todos os perfis e idades.",
  },
];

export default function VolunteerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Header with title and navigation arrows */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          A Importância do
          <br />
          Voluntariado na Igreja
        </h2>

        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            className="embla__prev w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
            onClick={scrollPrev}
            aria-label="Slide anterior"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="embla__next w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
            onClick={scrollNext}
            aria-label="Próximo slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="embla__container flex">
          {CARDS.map((card, index) => (
            <div
              className="embla__slide flex-[0_0_100%] min-w-0 transition-opacity duration-500"
              key={index}
              style={{ opacity: index === selectedIndex ? 1 : 0.3 }}
            >
              <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 bg-primary p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="embla__dots flex justify-center gap-2 mt-6">
        {CARDS.map((_, index) => (
          <button
            key={index}
            className={`embla__dot w-3 h-3 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
