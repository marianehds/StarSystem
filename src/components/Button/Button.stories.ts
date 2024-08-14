import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./Button.type";
import Button from ".";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export default meta;

export const Night: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "night",
  },
};

export const Twilight: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "twilight",
  },
};
