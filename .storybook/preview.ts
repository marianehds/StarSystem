import type { Preview } from "@storybook/react";
import '../app/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Abre a página de introdução ao carregar
    docs: {
      defaultName: 'Introdução',
    },
    options: {
      storySort: {
        order: ['Introdução', 'Colors', 'Atoms', 'Molecules', 'Organisms'],
      },
    },
  },
};

export default preview;
