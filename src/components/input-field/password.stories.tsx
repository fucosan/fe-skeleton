import { Meta, StoryObj } from '@storybook/react';
import { PasswordField } from './password';

const meta = {
  title: 'Components/input-field/Password',
  component: PasswordField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: 'password',
  },
};
