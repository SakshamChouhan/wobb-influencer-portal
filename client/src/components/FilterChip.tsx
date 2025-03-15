import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm",
        isActive 
          ? "bg-[#2196F3]/10 text-[#2196F3]" 
          : "bg-gray-100 text-[#6C757D]"
      )}
    >
      {label}
      <i className={`${isActive ? "ri-close-line" : "ri-add-line"} ml-1 cursor-pointer`}></i>
    </button>
  );
}
