import { TSize, TVariant } from "@/src/shared/types";

export type InputProps = {
  label?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: TVariant;
  size?: TSize;
} & React.InputHTMLAttributes<HTMLInputElement>;
