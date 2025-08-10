import { TSize, TVariant } from "@/src/shared/types";

export type RadioProps = {
  variant?: TVariant;
  className?: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: TSize;

  children: React.ReactNode;
}
