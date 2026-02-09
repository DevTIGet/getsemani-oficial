import { IoPlayOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";

const ProgrammingBarSection = () => {
  return (
    <section className="w-full bg-[#142042] py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 md:gap-6 text-white text-xs md:text-base font-medium">
        <span>HOJE</span>
        <span className="border-l border-white h-4 mx-1 md:mx-2" />
        <span>CULTO BASE</span>
        <span className="border-l border-white h-4 mx-1 md:mx-2" />
        <span>20:00</span>
        <span className="border-l border-white h-4 mx-1 md:mx-2" />
        <span className="flex items-center gap-1 cursor-pointer hover:underline">
          ASSISTA ONLINE
          <CiPlay1 className="h-4 w-4 ml-1 text-white stroke-1" />
        </span>
      </div>
    </section>
  );
};

export { ProgrammingBarSection };
