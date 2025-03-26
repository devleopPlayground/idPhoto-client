import type { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

const meta = {
  title: 'components/common/typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['tn', 'sm', 'md', 'lg'] },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypographyStories: Story = {
  args: {
    variant: 'sm',
    children: '짧은글',
  },
  render: ({ variant, children }) => (
    <div style={{ width: '550px' }}>
      <Typography variant={variant}>
        긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글 긴글
        긴글 긴글 긴글 긴글
      </Typography>
      <br />
      <Typography variant={variant}>{children}</Typography>
    </div>
  ),
};
