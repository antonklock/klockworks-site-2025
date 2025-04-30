"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
}

const Button = ({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-6 py-3 font-bold rounded transition duration-300 tracking-wider";
  const variantStyles = {
    primary: "bg-kwRed text-white hover:bg-kwDarkRed hover:underline",
    secondary:
      "bg-transparent border-2 border-kwRed text-white hover:bg-kwRed hover:text-white hover:underline",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
