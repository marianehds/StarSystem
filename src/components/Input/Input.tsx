import React from "react";
import "./Input.scss";
import { InputProps } from "./Input.type";

export const Input = ({
  value,
  onChange,
  placeholder,
  disabled,
  variant = "primary",
  size,
  className,
  ...props
}: InputProps) => {
  return (
    <div
      data-component="input-starsystem"
      className={`${className} size--${size}`}
    >
      <input
        className={`input input--${variant}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};
