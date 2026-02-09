import { FiArrowUpRight } from "react-icons/fi";

export type ContributionCardProps = {
  image: string;
  title: string;
  link?: string;
};

export default function ContributionCard({
  image,
  title,
  link,
}: ContributionCardProps) {
  return (
    <div className="flex-1 rounded-2xl shadow-md flex flex-col overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <div className="px-6 py-4 flex items-center justify-between bg-white">
        <span className="font-bold text-lg text-black">{title}</span>
        <span>
          <FiArrowUpRight className="text-black stroke-3 text-xl" />
        </span>
      </div>
    </div>
  );
}
