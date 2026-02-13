interface MinistryTabButtonProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function MinistryTabButton({
  name,
  isSelected,
  onClick,
}: MinistryTabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative px-3 py-2.5 rounded-full font-medium text-xs transition-all duration-300 whitespace-nowrap ${
        isSelected
          ? "bg-primary-blue dark:bg-primary text-white shadow-md"
          : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-700/50"
      }`}
    >
      {name}
    </button>
  );
}
