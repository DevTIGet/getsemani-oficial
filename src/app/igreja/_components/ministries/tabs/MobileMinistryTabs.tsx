import MinistryTabButton from "./MinistryTabButton";
import type { Ministry } from "../MinistriesGrid";

interface MobileMinistryTabsProps {
  ministries: Ministry[];
  selectedId: number;
  onSelect: (ministry: Ministry) => void;
}

export default function MobileMinistryTabs({
  ministries,
  selectedId,
  onSelect,
}: MobileMinistryTabsProps) {
  return (
    <div className="lg:hidden mb-6">
      <div className="relative bg-gray-100 dark:bg-gray-800 rounded-full p-1.5">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-1.5 min-w-max">
            {ministries.map((ministry) => (
              <MinistryTabButton
                key={ministry.id}
                name={ministry.name}
                isSelected={selectedId === ministry.id}
                onClick={() => onSelect(ministry)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
