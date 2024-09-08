import classNames from "classnames";
import React from "react";

interface TooltipProps {
  children: React.ReactNode;
  color?: "dark" | "primary";
  position?: "top" | "bottom";
}

const Tooltip = ({
  children,
  position = "bottom",
  color = "dark",
}: TooltipProps) => {
  const cn = classNames(
    `invisible scale-0 group-hover:visible group-hover:scale-100 absolute px-6 py-3
    rounded-lg text-secondary duration-300`,
    { "bg-dark": color === "dark" },
    { "bg-primary": color === "primary" },
    { "-top-1 -translate-y-full": position === "top" },
    { "-bottom-1 translate-y-full": position === "bottom" }
  );

  return <div className={cn}>{children}</div>;
};

export default Tooltip;
