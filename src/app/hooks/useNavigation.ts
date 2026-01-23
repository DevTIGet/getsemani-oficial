import { useState } from 'react'

export const useNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  )

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenMobileSubmenu(null)
  }

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const closeDropdown = () => {
    setOpenDropdown(null)
  }

  const handleMobileSubmenuToggle = (label: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label)
  }

  return {
    isMobileMenuOpen,
    openDropdown,
    openMobileSubmenu,
    toggleMobileMenu,
    closeMobileMenu,
    handleDropdownToggle,
    closeDropdown,
    handleMobileSubmenuToggle,
  }
}
