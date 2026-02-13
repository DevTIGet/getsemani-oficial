import MinistrySidebarButton from "./MinistrySidebarButton";
import type { Ministry } from "../MinistriesGrid";

interface DesktopMinistrySidebarProps {
  ministries: Ministry[];
  selectedId: number;
  onSelect: (ministry: Ministry) => void;
}

export default function DesktopMinistrySidebar({
  ministries,
  selectedId,
  onSelect,
}: DesktopMinistrySidebarProps) {
  return (
    <div className="hidden lg:block lg:w-[35%] lg:pr-6 space-y-2 relative">
      {ministries.map((ministry) => (
        <MinistrySidebarButton
          key={ministry.id}
          name={ministry.name}
          isSelected={selectedId === ministry.id}
          onClick={() => onSelect(ministry)}
        />
      ))}
    </div>
  );
}
