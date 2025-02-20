import { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from './login-form';


function LoginFormStory() {
  return <LoginForm />;
}

const meta = {
  title: 'Components/login Form',
  component: () => <LoginFormStory />,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;
export const DefaultLoginForm: Story = {
  args: {
    type: 'password',
  },
};
