"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "flex items-center z-5 justify-center rounded-2xl px-8 py-4 transition-ease duration-300 w-full";

  const variants = {
    primary:
      "bg-[#ffbd11] text-[#1a1a1a] shadow-[0_12px_28px_rgba(255,189,17,0.3)]",
    secondary:
      "border bg-transparent",
  };

  const buttonContent = (
   <motion.span
  whileHover={{
    y: -5,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    duration: 0.3,
    ease: "easeOut",
  }}
  className={`${baseStyles} ${variants[variant]} ${className}`}
>
  {children}
</motion.span>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};

export default Button;