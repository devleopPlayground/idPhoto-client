import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: 'components/common/input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    fontVariant: {
      control: { type: 'select', options: ['tn', 'sm', 'md', 'lg'] },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyStories: Story = {
  args: {
    fontVariant: 'sm',
    label: '라벨',
  },
  render: ({ ...args }) => (
    <div style={{ width: '550px' }}>
      <Input {...args} />
    </div>
  ),
};
