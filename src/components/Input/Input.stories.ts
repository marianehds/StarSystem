import { Meta, StoryObj } from "@storybook/react";
import { InputProps } from "./Input.type";
import Input from ".";

const meta: Meta<InputProps> = {
  title: "Molecules/Input",
  tags: ["autodocs"],
  component: Input,
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    children: "Input",
    variant: "primary",
  },
};

export const Secondary: StoryObj<InputProps> = {
  args: {
    children: "Input",
    variant: "secondary",
  },
};

export const Alert: StoryObj<InputProps> = {
  args: {
    children: "Input",
    variant: "alert",
  },
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    children: "Input",
    variant: "disabled",
  },
};
