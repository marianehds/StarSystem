import { Meta, StoryObj } from "@storybook/react";
import { RadioProps } from "./Radio.type";
import Radio from ".";

const meta: Meta<RadioProps> = {
  title: "Atoms/Radio",
  tags: ["autodocs"],
  component: Radio,
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export const Alert: StoryObj<RadioProps> = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "alert",
  },
};

export const Primary: StoryObj<RadioProps> = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "primary",
  },
};

export const Secondary: StoryObj<RadioProps> = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "secondary",
  },
};

export default meta;
