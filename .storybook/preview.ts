import type { Preview } from "@storybook/react";
import '../src/index.css';
import withTanstackRouter from './withTanstackRouter';
import { initialize, mswLoader } from 'msw-storybook-addon'

initialize()

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'near-white',
      values: [
        { name: 'near-white', value: '#F9F9F9' },
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return withTanstackRouter(Story, context);
    }
  ],
  // @ts-expect-error not sure why this is not working
  loaders: [mswLoader],
};

export default preview;
