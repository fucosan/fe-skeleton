import { Meta, StoryObj } from '@storybook/react';
import { ResetPassword } from './reset-password';

const meta = {
  title: 'Components/reset-password',
  component: ResetPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ResetPassword>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
