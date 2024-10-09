import React from "react";
import { TypographyProps } from "./Typography.type";
import "./Typography.scss";

export const Typography = ({
  variant = "h1",
  className = "",
  color,
  children,
  fontWeight,
}: TypographyProps) => {
  const Component = variant;

  return (
    <Component
     data-component="typography-starsystem"
      className={`typography weight--${fontWeight} ${className}`}
      style={{ color }}
    >
      {children}
    </Component>
  );
};
