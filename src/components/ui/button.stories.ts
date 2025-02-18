import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, buttonVariants } from './button';
import { type VariantProps } from "class-variance-authority"

type ButtonVariants = VariantProps<typeof buttonVariants>
const variants: ButtonVariants['variant'][] = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'];
const size: ButtonVariants['size'][] = ['default', 'sm', 'lg', 'icon'];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ui/button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      description: 'The variant of the button',
      options: variants
    },
    size: {
      control: 'select',
      description: 'The size of the button',
      options: size
    },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Button',
    className: '',
  },
};
