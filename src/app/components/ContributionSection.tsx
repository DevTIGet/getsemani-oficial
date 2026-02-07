import ContributionCard from "./ContributionCard";

const cards = [
  {
    image: "/imagens/slides/congresso-setxa-noite-195 2.png",
    title: "Projeto de Evangelismo e Discipulado",
    link: "#",
  },
  {
    image: "/imagens/slides/congresso-setxa-noite-195 2.png",
    title: "Projeto de Apoio a Famílias Carentes",
    link: "#",
  },
  {
    image: "/imagens/slides/congresso-setxa-noite-195 2.png",
    title: "Projeto de Capacitação de Líderes",
    link: "#",
  },
];

export default function ContributionSection() {
  return (
    <section className="w-full py-12 md:py-16 my-8 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-black text-2xl md:text-4xl font-bold mb-2">
          Faça sua contribuição
        </h2>
        <p className="text-black text-base font-semibold mb-8">
          Sua colaboração é muito importante para o avanço do reino
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {cards.map((card, idx) => (
            <ContributionCard
              key={idx}
              image={card.image}
              title={card.title}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
