import type { Meta, StoryObj } from '@storybook/react';
import Loader from '.';

const meta = {
  title: 'components/common/loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyStories: Story = {
  args: {
    size: 'sm',
  },
  render: ({ ...args }) => (
    <div style={{ width: '550px' }}>
      <Loader {...args} />
    </div>
  ),
};
