import { Meta, StoryObj } from "@storybook/react";
import { CardProps } from "./Card.type";
import Card from ".";

const meta: Meta<CardProps> = {
  title: "Organisms/Card",
  tags: ["autodocs"],
  component: Card,
  argTypes: {
    children: {
      control: "text",
    },
  },
};

export const Primary: StoryObj<CardProps> = {
  args: {
    Title: "Title",
    SubTitle: "Subtitle",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "primary",
  },
};

export const Secondary: StoryObj<CardProps> = {
  args: {
    Title: "Title",
    SubTitle: "Subtitle",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "secondary",
  },
};

export const Alert: StoryObj<CardProps> = {
  args: {
    Title: "ALERT!",
    SubTitle: "Subtitle",
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    variant: "alert",
  },
};

export const WithImage: StoryObj<CardProps> = {
  args: {
    children:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Title: "Title",
    media:
      "https://img.freepik.com/fotos-gratis/fundo-espacial-com-poeira-estelar-e-estrelas-brilhantes-cosmos-coloridos-realistas-com-nebulosa-e-via-lactea_1258-150925.jpg?t=st=1728527168~exp=1728530768~hmac=afcb96c5cdcd58fb5d3ead48c11e596c3dabadac4664da7f4dc6f1823af4387d&w=826",
    variant: "primary",
  },
};

export default meta;
