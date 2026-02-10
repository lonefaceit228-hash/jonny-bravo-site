import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface ComicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
}

const ComicButton = forwardRef<HTMLButtonElement, ComicButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-bravo-blue text-white hover:bg-blue-600 border-black",
      secondary: "bg-white text-black hover:bg-gray-100 border-black",
      accent: "bg-bravo-pink text-white hover:bg-pink-600 border-white",
      outline: "bg-transparent text-black border-black hover:bg-black/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-lg",
      md: "px-6 py-3 text-xl",
      lg: "px-8 py-4 text-2xl",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05, rotate: -2 }}
        whileTap={{ scale: 0.95, y: 4, x: 4, boxShadow: "0px 0px 0px rgba(0,0,0,1)" }}
        className={cn(
          "relative font-display uppercase tracking-wider border-4 shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-colors duration-200",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

ComicButton.displayName = "ComicButton";

export { ComicButton };
