import { Meta, StoryObj } from '@storybook/react';
import { Popover } from './popover';

const meta = {
  title: 'Components/ui/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
