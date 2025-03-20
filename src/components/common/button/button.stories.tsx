import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'components/common/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['pink', 'lightPink', 'white'] },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    fontVariant: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyStories: Story = {
  args: {
    children: '버튼 테스트',
    fontVariant: 'sm',
  },
  render: ({ ...args }) => (
    <div style={{ width: '550px' }}>
      <Button {...args}>{args.children}</Button>
    </div>
  ),
};
