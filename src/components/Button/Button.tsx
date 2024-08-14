import { ButtonProps } from "./Button.type";
import { defaultSize, defaulVariant } from ".";
import "./Button.scss";

export const Button = ({
  children,
  className,
  variant = defaulVariant,
  size = defaultSize,
}: ButtonProps) => {
  return (
    <button
      data-component="button-starsystem"
      className={`${className} variant-${variant} size-${size}`}
    >
      {children}
    </button>
  );
};

