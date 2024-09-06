import React from "react";

const Link = ({
  children,
  className,
  href,
}: React.LinkHTMLAttributes<HTMLLinkElement>) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
