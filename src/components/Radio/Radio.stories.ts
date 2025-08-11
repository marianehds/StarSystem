import { Meta, StoryObj } from "@storybook/react";
import { RadioProps } from "./Radio.type";
import { Radio } from "./Radio";

const meta: Meta<RadioProps> = {
  title: "Atoms/Radio",
  tags: ["autodocs"],
  component: Radio,
  argTypes: {
    options: {
      description: "Opções do Radio",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Tamanho do radio",
    },
    disabled: {
      control: "boolean",
      description: "Se o radio está desabilitado",
    },
    onChange: {
      action: "onChange",
      description: "Função de mudança",
    },
  },
};

export default meta;


export const Default: StoryObj<RadioProps> = {
  args: {
    size: "medium",
    options: [
      { label: "Plano Básico", value: "basic" },
      { label: "Plano Padrão", value: "standard" },
      { label: "Plano Premium", value: "premium" },
    ],
  },
};

export const Disabled: StoryObj<RadioProps> = {
  args: {
    size: "medium",
    disabled: true,
    options: [
      { label: "Plano Básico", value: "basic" },
      { label: "Plano Padrão", value: "standard" },
      { label: "Plano Premium", value: "premium" },
    ],
  },
};
