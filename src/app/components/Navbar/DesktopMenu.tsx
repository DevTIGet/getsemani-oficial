import Link from "next/link";
import { forwardRef } from "react";
import { DropdownMenu } from "./DropdownMenu";
import { ThemeToggle } from "./ThemeToggle";
import type { MenuItem } from "@/app/types/navigation";

type DesktopMenuProps = {
  menuItems: MenuItem[];
  theme: string;
  isScrolled?: boolean;
  openDropdown: string | null;
  onDropdownToggle: (label: string) => void;
  onDropdownClose: () => void;
  onThemeToggle: () => void;
};

export const DesktopMenu = forwardRef<HTMLDivElement, DesktopMenuProps>(
  (
    {
      menuItems,
      theme,
      isScrolled = true,
      openDropdown,
      onDropdownToggle,
      onDropdownClose,
      onThemeToggle,
    },
    ref,
  ) => {
    const textColorClass = !isScrolled
      ? "text-white hover:text-gray-200"
      : "text-gray-600 dark:text-gray-300 hover:text-primary";

    return (
      <div className="hidden md:flex items-center space-x-8" ref={ref}>
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.submenu ? (
              <DropdownMenu
                item={item}
                isOpen={openDropdown === item.label}
                isScrolled={isScrolled}
                onToggle={() => onDropdownToggle(item.label)}
                onClose={onDropdownClose}
              />
            ) : (
              <Link
                href={item.href!}
                className={`transition-colors font-semibold ${textColorClass}`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <ThemeToggle
          theme={theme}
          onToggle={onThemeToggle}
          isScrolled={isScrolled}
        />
      </div>
    );
  },
);

DesktopMenu.displayName = "DesktopMenu";
