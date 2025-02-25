import { Meta, StoryObj } from '@storybook/react';
import { Form } from './form';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};