import { ButtonProps } from "./Button.type";
import "./Button.scss";

const Button = ({ children, className, variant = 'night'  }: ButtonProps) => {
  return (
    <button
      data-component="button-starsystem"
      className={`${className} btn-${variant} `}
    >
      {children}
    </button>
  );
};

export default Button;
