import { Meta, StoryObj } from "@storybook/react";
import { TypographyProps } from "./Typography.type";
import Typography from ".";

const meta: Meta<TypographyProps> = {
  title: "Atoms/Typography",
  tags: ["autodocs"],
  component: Typography,
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export const H1: StoryObj<TypographyProps> = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "h1",
  },
};

export const P: StoryObj<TypographyProps> = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "h6",
  },
};

export default meta;
