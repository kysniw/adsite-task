import React from "react";

const Title = ({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className={` uppercase text-6xl font-bebas ${className}`}>
      {children}
    </h1>
  );
};

export default Title;
