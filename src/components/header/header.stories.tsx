import { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';
import { links } from '../sidebar/constants';

function HeaderStory() {
  return (
    <div className="w-[1280px] flex flex-col gap-[6px] border border-blue-500">
      <Header />
    </div>
  );
}

const meta = {
  title: 'Components/header',
  component: HeaderStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  parameters: {
    router: {
      routes: links.map(link => link.to),
      initialEntries: ['/members']
    }
  },
  args: {},
};
