import Link from 'next/link'

type NavbarLogoProps = {
  theme: string
}

export const NavbarLogo = ({ theme }: NavbarLogoProps) => {
  return (
    <Link href="/" className="flex items-center w-14 h-8">
      <img
        src={`${theme === 'dark' ? '/logos/logo-white.svg' : '/logos/logo-black.svg'}`}
        alt="logo"
      />
    </Link>
  )
}
