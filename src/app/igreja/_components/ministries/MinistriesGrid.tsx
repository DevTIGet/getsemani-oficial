"use client";

import { useState } from "react";
import MobileMinistryTabs from "./tabs/MobileMinistryTabs";
import DesktopMinistrySidebar from "./sidebar/DesktopMinistrySidebar";
import MinistryCard from "./card/MinistryCard";

export interface Ministry {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

interface MinistriesGridProps {
  ministries: Ministry[];
}

export default function MinistriesGrid({ ministries }: MinistriesGridProps) {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry>(
    ministries[0],
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMinistryChange = (ministry: Ministry) => {
    if (ministry.id === selectedMinistry.id) return;

    setIsAnimating(true);
    setTimeout(() => {
      setSelectedMinistry(ministry);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="relative flex flex-col lg:flex-row gap-2 lg:gap-0">
        <MobileMinistryTabs
          ministries={ministries}
          selectedId={selectedMinistry.id}
          onSelect={handleMinistryChange}
        />

        <DesktopMinistrySidebar
          ministries={ministries}
          selectedId={selectedMinistry.id}
          onSelect={handleMinistryChange}
        />

        <div className="w-full lg:w-[65%] lg:pl-10">
          <MinistryCard ministry={selectedMinistry} isAnimating={isAnimating} />
        </div>
      </div>
    </section>
  );
}
