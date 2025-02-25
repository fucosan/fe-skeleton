import { Meta, StoryObj } from '@storybook/react';
import OtpError from './otp-error';

const meta = {
  title: 'Components/OTP Error',
  component: OtpError,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof OtpError>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
