import { TSize, TVariant } from "@/src/shared/types";

export type ButtonProps = {
  children: React.ReactNode;
  variant: TVariant;
  size: TSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
