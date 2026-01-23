import { motion } from 'framer-motion'
import {
  SunIcon as SunIconSolid,
  MoonIcon as MoonIconSolid,
} from '@heroicons/react/24/solid'

type ThemeToggleProps = {
  theme: string
  onToggle: () => void
}

export const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <SunIconSolid className="h-5 w-5 text-white" />
      ) : (
        <MoonIconSolid className="h-5 w-5 text-black" />
      )}
    </motion.button>
  )
}
