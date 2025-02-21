import { Meta, StoryObj } from '@storybook/react';
import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select"
import { Label } from '../label/label';

const timeZones = [
  { value: 'est', label: 'Eastern Standard Time (EST)' },
  { value: 'cst', label: 'Central Standard Time (CST)' },
  { value: 'mst', label: 'Mountain Standard Time (MST)' },
  { value: 'pst', label: 'Pacific Standard Time (PST)' },
  { value: 'akst', label: 'Alaska Standard Time (AKST)' },
  { value: 'hst', label: 'Hawaii Standard Time (HST)' },
  { value: 'gmt', label: 'Greenwich Mean Time (GMT)' },
  { value: 'cet', label: 'Central European Time (CET)' },
  { value: 'eet', label: 'Eastern European Time (EET)' },
  { value: 'west', label: 'Western European Summer Time (WEST)' },
  { value: 'cat', label: 'Central Africa Time (CAT)' },
  { value: 'eat', label: 'East Africa Time (EAT)' },
];

type SelectProps = React.ComponentProps<typeof Select> & {
  items: { value: string; label: string }[];
  isInvalid?: boolean;
};

const SelectScrollable: React.FC<SelectProps> = ({ items, isInvalid = false, ...props }) => {
  return (
    <div className='flex flex-col gap-[8px]'>
      <Label className='text-[12px] font-bold'>Timezone</Label>
      <Select {...props}>
        <SelectTrigger className="w-[280px]" aria-invalid={isInvalid}>
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent >
          {items.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div >
  )
}

const meta = {
  title: 'Components/ui/Select',
  component: SelectScrollable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SelectScrollable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: timeZones
  },
};

export const Disabled: Story = {
  args: {
    items: timeZones,
    disabled: true,
  }
}

export const Error: Story = {
  args: {
    items: timeZones,
    isInvalid: true,
  }
}
