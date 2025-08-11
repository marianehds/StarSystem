import { TSize, TVariantWithError } from "@/src/shared/types";

export type ButtonProps = {
  children: React.ReactNode;
  variant: TVariantWithError;
  size: TSize;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
