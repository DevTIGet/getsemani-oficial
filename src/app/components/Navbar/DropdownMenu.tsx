import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { MenuItem } from "@/app/constants/navigation";

type DropdownMenuProps = {
  item: MenuItem;
  isOpen: boolean;
  isScrolled?: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export const DropdownMenu = ({
  item,
  isOpen,
  isScrolled = true,
  onToggle,
  onClose,
}: DropdownMenuProps) => {
  const textColorClass = !isScrolled
    ? "text-white hover:text-gray-200"
    : "text-gray-600 dark:text-gray-300 hover:text-primary";

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 transition-colors font-semibold ${textColorClass}`}
      >
        {item.label}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && item.submenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 min-w-[200px]"
          >
            {item.submenu.map((subItem) => (
              <Link
                key={subItem.href}
                href={subItem.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary transition-colors"
                onClick={onClose}
              >
                {subItem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
