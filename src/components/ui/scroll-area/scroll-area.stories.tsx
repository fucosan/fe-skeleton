import { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollBar } from './scroll-area';

function ScrollAreaStory() {
  return (
    <ScrollArea className="h-[200px] w-[450px] rounded-md border p-4">
      <div className='w-[550px] h-[100px] whitespace-nowrap'>
        Jokester began sneaking into the castle in the middle of the night and leaving
        jokes all over the place: under the king&apos;s pillow, in his soup, even in the
        royal toilet. The king was furious, but he couldn&apos;t seem to stop Jokester. And
        then, one day, the people of the kingdom discovered that the jokes left by
        Jokester were so funny that they couldn&apos;t help but laugh. And once they
        started laughing, they couldn&apos;t stop.
      </div>

      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  );
}

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollAreaStory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};

