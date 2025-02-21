import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './date-picker';

const meta = {
  title: 'Components/ui/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
