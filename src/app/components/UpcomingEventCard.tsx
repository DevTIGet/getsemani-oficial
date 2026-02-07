import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type UpcomingEventCardProps = {
  image: string;
  date: string;
  title: string;
  link: string;
};

export default function UpcomingEventCard({
  image,
  date,
  title,
  link,
}: UpcomingEventCardProps) {
  return (
    <div className="flex-1 bg-white rounded-2xl shadow-md flex flex-col overflow-hidden">
      <div className="relative w-full h-44 md:h-56">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="bg-primary px-6 py-4 flex flex-col gap-1 flex-1 justify-between">
        <span className="text-xs text-gray-300">{date}</span>
        <span className="font-bold text-base text-white uppercase">
          {title}
        </span>
        <Link
          href={link}
          className="mt-2 text-primary-blue text-sm font-bold flex items-center gap-1 hover:underline"
        >
          Ver mais
          <FiArrowUpRight className="text-primary-blue font-bold" />
        </Link>
      </div>
    </div>
  );
}
