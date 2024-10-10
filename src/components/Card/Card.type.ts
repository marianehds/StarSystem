import { TVariant } from "@/src/shared/types";

export type CardProps = {
  media?: React.ReactNode;
  Title?: string;
  SubTitle?: string;
  children: React.ReactNode;
  variant: TVariant;

};
