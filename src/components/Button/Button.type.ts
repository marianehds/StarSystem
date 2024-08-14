export type TVariant = "twilight" | "night";
export type TSize = "small" | "medium" | "large";

export type ButtonProps = {
  children: React.ReactNode;
  variant: TVariant;
  size: TSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
