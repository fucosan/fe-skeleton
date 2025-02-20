import { Meta, StoryObj } from '@storybook/react';
import { OtpVerification } from './otp-verification';

const meta = {
  title: 'Components/OTP Verification',
  component: () => <OtpVerification />,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof OtpVerification>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
