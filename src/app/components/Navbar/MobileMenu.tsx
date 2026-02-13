import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  SunIcon as SunIconSolid,
  MoonIcon as MoonIconSolid,
} from "@heroicons/react/24/solid";
import type { MenuItem } from "@/app/types/navigation";

type MobileMenuProps = {
  menuItems: MenuItem[];
  isOpen: boolean;
  theme: string;
  openSubmenu: string | null;
  onSubmenuToggle: (label: string) => void;
  onClose: () => void;
  onThemeToggle: () => void;
};

export const MobileMenu = ({
  menuItems,
  isOpen,
  theme,
  openSubmenu,
  onSubmenuToggle,
  onClose,
  onThemeToggle,
}: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => onSubmenuToggle(item.label)}
                      className="flex items-center justify-between w-full py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-semibold"
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openSubmenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openSubmenu === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-2 mt-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block py-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                              onClick={onClose}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-semibold"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: menuItems.length * 0.1 }}
            >
              <button
                onClick={() => {
                  onThemeToggle();
                  onClose();
                }}
                className="flex items-center py-2 hover:text-primary transition-colors"
              >
                {theme === "dark" ? (
                  <SunIconSolid className="h-5 w-5 mr-2 text-yellow-500" />
                ) : (
                  <MoonIconSolid className="h-5 w-5 mr-2 text-blue-400" />
                )}
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
