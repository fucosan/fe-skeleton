import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Label } from './label';

const meta = {
  title: 'Components/ui/label',
  component: () => <Label >This is a label</Label>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},

  args: { onClick: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Input',
    className: '',
  },
};
