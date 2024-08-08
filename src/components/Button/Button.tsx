import { ButtonProps } from "./Button.type";

const Button = ({ children, className }: ButtonProps) => {
  return <button className={`classes ${className} `}>{children}</button>;
};

export default Button;
