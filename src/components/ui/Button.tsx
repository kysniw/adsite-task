import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "bordered";
}

const Button = ({
  variant = "filled",
  children,
  className,
  ...props
}: ButtonProps) => {
  const variantClass = classNames({
    "bg-primary text-secondary": variant === "filled",
    "bg-secondary text-primary": variant === "bordered",
  });

  return (
    <button
      className={`rounded-lg px-6 py-3 border font-semibold border-primary duration-300
         hover:shadow-md hover:shadow-gray-400 ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
