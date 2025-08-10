import React from "react";
import { RadioProps } from "./Radio.type";
import "./Radio.scss";

export const Radio = ({
  variant = "primary",
  className,
  children,
}: RadioProps) => {

  return (
    <div>

       <input type="radio"  
     data-component="Radio-starsystem"
      className={`Radio  ${className}`}
    />
   {children}
    </div>

  );
};
