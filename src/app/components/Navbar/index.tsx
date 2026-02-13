"use client";
import { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { useTheme } from "@/app/context/ThemeContext";
import { useNavigation } from "@/app/hooks/useNavigation";
import { useClickOutside } from "@/app/hooks/useClickOutside";
import { Logo } from "@/app/components/Navbar/Logo";
import { DesktopMenu } from "@/app/components/Navbar/DesktopMenu";
import { MobileMenu } from "@/app/components/Navbar/MobileMenu";
import { menuItems } from "@/app/constants/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Se não está na home, já começa sólida
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHome);

  const {
    isMobileMenuOpen,
    openDropdown,
    openMobileSubmenu,
    toggleMobileMenu,
    closeMobileMenu,
    handleDropdownToggle,
    closeDropdown,
    handleMobileSubmenuToggle,
  } = useNavigation();

  useClickOutside(dropdownRef, closeDropdown);

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    setIsScrolled(false);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, pathname]);

  // Determina se o background deve ser exibido
  const showBackground = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 ${
        showBackground
          ? "bg-white dark:bg-gray-900 shadow-md dark:shadow-slate-800/40"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo theme={theme} isScrolled={showBackground} />

          {/* Desktop Menu */}
          <DesktopMenu
            menuItems={menuItems}
            ref={dropdownRef}
            theme={theme}
            isScrolled={showBackground}
            openDropdown={openDropdown}
            onDropdownToggle={handleDropdownToggle}
            onDropdownClose={closeDropdown}
            onThemeToggle={toggleTheme}
          />

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              showBackground
                ? "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white"
                : "hover:bg-white/10 text-white"
            }`}
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          menuItems={menuItems}
          isOpen={isMobileMenuOpen}
          theme={theme}
          openSubmenu={openMobileSubmenu}
          onSubmenuToggle={handleMobileSubmenuToggle}
          onClose={closeMobileMenu}
          onThemeToggle={toggleTheme}
        />
      </div>
    </nav>
  );
};

export { Navbar };
