import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './calendar';

const meta = {
  title: 'Components/ui/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
