'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import { useTheme } from '@/app/context/ThemeContext'
import { useNavigation } from '@/app/hooks/useNavigation'
import { useClickOutside } from '@/app/hooks/useClickOutside'
import { NavbarLogo } from './NavbarLogo'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenu } from './MobileMenu'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const {
    isMobileMenuOpen,
    openDropdown,
    openMobileSubmenu,
    toggleMobileMenu,
    closeMobileMenu,
    handleDropdownToggle,
    closeDropdown,
    handleMobileSubmenuToggle,
  } = useNavigation()

  useClickOutside(dropdownRef, closeDropdown)

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-slate-800/40 z-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavbarLogo theme={theme} />

          {/* Desktop Menu */}
          <DesktopMenu
            ref={dropdownRef}
            theme={theme}
            openDropdown={openDropdown}
            onDropdownToggle={handleDropdownToggle}
            onDropdownClose={closeDropdown}
            onThemeToggle={toggleTheme}
          />

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMobileMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          theme={theme}
          openSubmenu={openMobileSubmenu}
          onSubmenuToggle={handleMobileSubmenuToggle}
          onClose={closeMobileMenu}
          onThemeToggle={toggleTheme}
        />
      </div>
    </nav>
  )
}

export { Navbar }
