export type TVariant = "twilight" | "night";

export type ButtonProps = {
  children: React.ReactNode;
  variant: TVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
