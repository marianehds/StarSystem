import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "./Button.type";
import Button from ".";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  tags: ["autodocs"],
  component: Button,
  args: {
    stars: true,
  },
  argTypes: {
    children: {
      control: "text",
      description: "Texto do botão",
    },
    stars: {
      control: "boolean",
      description: "Exibe animação de estrelas ao clicar",
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
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Error: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    variant: "error",
  },
};

export const Alert: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    variant: "alert",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Button",
    disabled: true,
  },
};
