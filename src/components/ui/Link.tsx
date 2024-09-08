import classNames from "classnames";
import React from "react";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
  inactive?: boolean;
}

const Link = ({
  children,
  className,
  href,
  active = false,
  inactive = false,
  ...props
}: LinkProps) => {
  const cn = classNames(
    "cursor-pointer duration-300 hover:text-primary",
    { "border-b-2 border-primary text-primary font-semibold": active },
    { "hover:text-inherit": inactive },
    className
  );

  return (
    <a href={href} className={cn} {...props}>
      {children}
    </a>
  );
};

export default Link;
