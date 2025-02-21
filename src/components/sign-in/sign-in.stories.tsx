import { Meta, StoryObj } from '@storybook/react';
import { SignIn } from './sign-in';

const meta = {
  title: 'Components/Sign In',
  component: SignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof meta>;
export const DefaultSignInForm: Story = {
  args: {
    type: 'password',
  },
};
