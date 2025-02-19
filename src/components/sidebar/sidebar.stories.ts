import { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './sidebar';


const meta = {
  title: 'Components/sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  parameters: {
    router: {
      routes: ['/', '/about'],
      initialEntries: ['/about']
    }
  },
  args: {},
};
