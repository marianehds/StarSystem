export type TVariant = "primary" | "secondary" | "alert" | "disabled";
export type TSize = "small" | "medium" | "large";

export type ButtonProps = {
  children: React.ReactNode;
  variant: TVariant;
  size: TSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
