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
      description: "Texto do botão",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "alert", "error"],
      description: "Variação do botão",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Tamanho do botão",
    },
    onClick: {
      description: "OnClick do button",
    }
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "primary",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "secondary",
  },
};

export const Error: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "error",
  },
};

export const Alert: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "alert",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    disabled: true,
  },
};
