// src/components/Input/Input.tsx

import React from "react";
import "./Input.scss";
import { InputProps } from "./Input.type";

export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  variant = "primary",
  size,
  className,
}: InputProps) => {
  return (
    <div className={`${className} size--${size}`}>
      {label && <label className="input-label">{label}</label>}
      <input
        className={`input input--${variant}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
