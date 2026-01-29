import Link from "next/link";

type LogoProps = {
  theme: "dark" | "light";
  size?: string;
  isScrolled?: boolean;
};

export const Logo = ({
  theme,
  size = "w-16 h-10 md:w-20 md:h-12",
  isScrolled = true,
}: LogoProps) => {
  // Quando não está scrolled, sempre mostra o logo branco (modo dark)
  // Quando está scrolled, usa o theme normal
  const logoSrc = !isScrolled
    ? "/logos/logo-white.svg"
    : theme === "dark"
      ? "/logos/logo-white.svg"
      : "/logos/logo-black.svg";

  return (
    <Link href="/" className={`flex items-center`}>
      <img src={logoSrc} alt="logo" className={size} />
    </Link>
  );
};
