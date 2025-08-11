import { TSize, TVariant } from "@/src/shared/types";

export type RadioOption = {
  label: React.ReactNode;
  value: string;
  disabled?: boolean;
};

export type RadioProps = {
  label?: string;
  variant?: TVariant;
  size?: TSize;
  name?: string;
  options?: RadioOption[];
  selectedValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'variant' | 'onChange' | 'children'>;
