import { Meta, StoryObj } from '@storybook/react';
import { ForgotPassword } from './forgot-password';

const meta = {
  title: 'Components/forgot-password',
  component: ForgotPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ForgotPassword>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
