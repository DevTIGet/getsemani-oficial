import Link from 'next/link'
import { forwardRef } from 'react'
import { DropdownMenu } from './DropdownMenu'
import { ThemeToggle } from './ThemeToggle'
import { menuItems } from '@/app/constants/navigation'

type DesktopMenuProps = {
  theme: string
  openDropdown: string | null
  onDropdownToggle: (label: string) => void
  onDropdownClose: () => void
  onThemeToggle: () => void
}

export const DesktopMenu = forwardRef<HTMLDivElement, DesktopMenuProps>(
  (
    { theme, openDropdown, onDropdownToggle, onDropdownClose, onThemeToggle },
    ref,
  ) => {
    return (
      <div className="hidden md:flex items-center space-x-8" ref={ref}>
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.submenu ? (
              <DropdownMenu
                item={item}
                isOpen={openDropdown === item.label}
                onToggle={() => onDropdownToggle(item.label)}
                onClose={onDropdownClose}
              />
            ) : (
              <Link
                href={item.href!}
                className="hover:text-primary transition-colors font-semibold text-gray-600 dark:text-gray-300"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </div>
    )
  },
)

DesktopMenu.displayName = 'DesktopMenu'
