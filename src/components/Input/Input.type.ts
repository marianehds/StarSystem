import { TSize, TVariant } from "@/src/shared/types";

export type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: TVariant;
  size?: TSize;
} & React.InputHTMLAttributes<HTMLInputElement>;
