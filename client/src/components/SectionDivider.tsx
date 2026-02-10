import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  type?: "zigzag" | "wavy" | "spiky";
  color?: string;
}

export function SectionDivider({ className, type = "zigzag", color = "#000" }: SectionDividerProps) {
  // SVG patterns for 90s style dividers
  return (
    <div className={cn("w-full h-12 overflow-hidden", className)}>
      {type === "zigzag" && (
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full block">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={color} />
        </svg>
      )}
      {type === "wavy" && (
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full block">
          <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" fill={color}></path>
        </svg>
      )}
    </div>
  );
}
