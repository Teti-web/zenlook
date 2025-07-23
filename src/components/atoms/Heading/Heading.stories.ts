import { Meta } from '@storybook/nextjs-vite';

import { StoryObj } from '@storybook/nextjs-vite';

import Heading from './Heading';

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Heading',
  },
};

export const H1: Story = {
  args: {
    text: 'Boss Your Beauty Biz Like a Pro',
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    text: 'Boss Your Beauty Biz Like a Pro',
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    text: 'Boss Your Beauty Biz Like a Pro',
    variant: 'h3',
  },
};

export const H4: Story = {
  args: {
    text: 'Boss Your Beauty Biz Like a Pro',
    variant: 'h4',
  },
};

export const H5: Story = {
  args: {
    text: 'Boss Your Beauty Biz Like a Pro',
    variant: 'h5',
  },
};

export const H6: Story = {
  args: {
    text: 'Boss Your Beauty Biz Like a Pro',
    variant: 'h6',
  },
};
