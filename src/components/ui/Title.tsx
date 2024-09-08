import classNames from "classnames";
import React from "react";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Title = ({ children, className, size = "md", ...props }: TitleProps) => {
  const cn = classNames(
    "uppercase font-bebas",
    { "text-5xl md:text-6xl": size === "xl" },
    { "text-4xl md:text-5xl": size === "lg" },
    { "text-3xl md:text-4xl": size === "md" },
    { "text-2xl md:text-3xl": size === "sm" },
    { "text-xl md:text-2xl": size === "xs" },
    className
  );

  return (
    <h1 className={cn} {...props}>
      {children}
    </h1>
  );
};

export default Title;
