interface MinistrySidebarButtonProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function MinistrySidebarButton({
  name,
  isSelected,
  onClick,
}: MinistrySidebarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full px-5 py-3 rounded-full font-semibold text-xs tracking-wider transition-all duration-300 group ${
        isSelected
          ? "bg-primary-blue dark:bg-primary text-white shadow-xl scale-[1.02] lg:translate-x-2"
          : "bg-primary-blue/75 dark:bg-primary/40 text-white/85 hover:bg-primary-blue/90 dark:hover:bg-primary/90 hover:text-white hover:scale-[1.01] hover:shadow-lg"
      }`}
    >
      <span className="relative z-10">{name}</span>

      {/* Brilho no hover */}
      <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}
