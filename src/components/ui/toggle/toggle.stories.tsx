import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './toggle';
import { ChevronIcon, FilterAltIcon } from '@/assets/icons';
import React from 'react';

function ToggleStory() {
  const [isOn, setIsOn] = React.useState(false);
  return (
    <>
      <Toggle
        variant={'outline'}
        className='flex justify-between py-[14px] px-[16px] gap-[8px] text-[14px] h-[45px] data-[state=on]:border-none'
        size={'lg'}
        onClick={() => setIsOn(prev => !prev)}
      >
        <FilterAltIcon />
        <span className='h-[17px]'>Narrow Down</span>
        <ChevronIcon direction={isOn ? 'down' : 'up'} />
      </Toggle >
    </>
  );
}

const meta = {
  title: 'Components/ui/Toggle',
  component: ToggleStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
