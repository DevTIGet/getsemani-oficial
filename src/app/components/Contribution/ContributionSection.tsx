import ContributionCard, { ContributionCardProps } from "./ContributionCard";

type ContributionSectionProps = {
  title: string;
  description: string;
  cards: ContributionCardProps[];
};

export default function ContributionSection({
  title,
  description,
  cards,
}: ContributionSectionProps) {
  return (
    <section className="w-full py-12 md:py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-black text-2xl md:text-4xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-black text-base font-semibold mb-8">{description}</p>
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
