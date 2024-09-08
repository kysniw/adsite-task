import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "bordered" | "custom";
}

const Button = ({
  variant = "filled",
  children,
  className,
  ...props
}: ButtonProps) => {
  const cn = classNames(
    `rounded-lg px-6 py-3 border font-semibold border-primary duration-300
    hover:shadow-md hover:shadow-gray-400`,
    {
      "bg-primary text-secondary": variant === "filled",
      "bg-secondary text-primary": variant === "bordered",
    },
    className
  );

  return (
    <button className={variant === "custom" ? className : cn} {...props}>
      {children}
    </button>
  );
};

export default Button;
