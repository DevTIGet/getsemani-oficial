import { motion } from "framer-motion";
import {
  SunIcon as SunIconSolid,
  MoonIcon as MoonIconSolid,
} from "@heroicons/react/24/solid";

type ThemeToggleProps = {
  theme: string;
  isScrolled?: boolean;
  onToggle: () => void;
};

export const ThemeToggle = ({
  theme,
  isScrolled = true,
  onToggle,
}: ThemeToggleProps) => {
  const iconColorClass = !isScrolled
    ? "text-white"
    : theme === "dark"
      ? "text-white"
      : "text-black";
  const hoverClass = !isScrolled
    ? "hover:bg-white/10"
    : "hover:bg-gray-100 dark:hover:bg-gray-800";

  return (
    <motion.button
      onClick={onToggle}
      className={`p-2 rounded-lg transition-colors ${hoverClass}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <SunIconSolid className={`h-5 w-5 ${iconColorClass}`} />
      ) : (
        <MoonIconSolid className={`h-5 w-5 ${iconColorClass}`} />
      )}
    </motion.button>
  );
};
