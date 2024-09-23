import React from "react";
import { motion, MotionProps } from "framer-motion";

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    gradient?: boolean;
    shadow?: "sm" | "md" | "lg" | "xl" | "2xl";
    rounded?: "sm" | "md" | "lg" | "xl" | "full";
    hover?: boolean;
  };

export const Card: React.FC<CardProps> = ({
  gradient = false,
  shadow = "md",
  rounded = "md",
  hover = true,
  className = "",
  children,
  ...props
}) => {
  const baseClasses = "bg-white dark:bg-gray-800 overflow-hidden";
  const gradientClasses = gradient
    ? "bg-gradient-to-br from-purple-400 to-indigo-600"
    : "";
  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
  }[shadow];
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  }[rounded];
  const hoverClasses = hover
    ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    : "";

  return (
    <motion.div
      className={`${baseClasses} ${gradientClasses} ${shadowClasses} ${roundedClasses} ${hoverClasses} ${className}`}
      whileHover={hover ? { scale: 1.02 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
