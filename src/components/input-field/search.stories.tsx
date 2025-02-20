import { Meta, StoryObj } from '@storybook/react';
import { SearchField } from './search';

const meta = {
  title: 'Components/input-field/Search',
  component: SearchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SearchField>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: 'text',
  },
};
