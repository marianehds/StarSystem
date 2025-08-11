import { Meta, StoryObj } from "@storybook/react";
import { TypographyProps } from "./Typography.type";
import { Typography } from "./Typography";

const meta: Meta<TypographyProps> = {
  title: "Atoms/Typography",
  tags: ["autodocs"],
  component: Typography,
  argTypes: {
    children: {
      control: "text",
      description: "Texto do Typography",
    },
    size: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
      description: "Tamanho do Typography",
    },
    color: {
      control: "color",
      description: "Cor do Typography",
    },
    fontWeight: {
      control: "radio",
      options: ["regular", "bold"],
      description: "Font Weight do Typography"
    }
  },
};

export default meta;

export const H1: StoryObj<TypographyProps> = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    size: "h1",
  },
};

export const P: StoryObj<TypographyProps> = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    size: "h6",
  },
};
