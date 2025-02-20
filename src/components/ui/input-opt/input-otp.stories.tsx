import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "./input-otp";

export function InputOTPDemo() {
  return (
    <InputOTP
      maxLength={6}
      inputMode='numeric'
    >
      <InputOTPGroup className='gap-[11px]' >
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
    </InputOTP>
  )
}

const meta = {
  title: 'Components/ui/input-otp',
  component: InputOTPDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},

  args: { onClick: fn() },
} satisfies Meta<typeof InputOTPDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
