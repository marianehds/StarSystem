import { Meta, StoryObj } from "@storybook/react";
import { InputProps } from "./Input.type";
import { Input } from "./Input";

const meta: Meta<InputProps> = {
  title: "Molecules/Input",
  tags: ["autodocs"],
  component: Input,
  argTypes: {
    children: {
      control: "text",
      description: "Texto do input",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "alert"],
      description: "Variante do input",
    },
    disabled: {
      control: "boolean",
      description: "Se o input está desabilitado",
    },
    placeholder: {
      control: "text",
      description: "Texto do placeholder",

    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url", "search"],
      description: "Tipo do input",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Tamanho do input",
      defaultValue: "medium",
    },
 
    onChange: {
      action: "onChange",
      description: "Função de mudança do input",
    },
    maxLength: {
      control: 'number',
      description: 'Valor máximo do input'
    }
   
  },
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    variant: "primary",
    placeholder: "Digite seu nome",

  },
};

export const Secondary: StoryObj<InputProps> = {
  args: {
    variant: "secondary",
    placeholder: "Digite seu telefone",
    type: "tel",
    maxLength: 11
  },
};

export const Alert: StoryObj<InputProps> = {
  args: {
    variant: "alert",
    type: 'text',
  },
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
};
