import { ButtonProps } from "./Button.type";
import { defaultSize, defaulVariant } from ".";
import "./Button.scss";

export const Button = ({
  children,
  className,
  disabled,
  onClick,
  variant = defaulVariant,
  size = defaultSize,
}: ButtonProps) => {

  return (
    <button
      data-component="button-starsystem"
      className={`${className} button--${variant} size--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

