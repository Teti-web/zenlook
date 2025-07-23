import { Meta, StoryObj } from '@storybook/nextjs-vite';

import Link from './Link';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: '/',
    children: 'Primary Link',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    href: '/',
    children: 'Secondary Link',
    variant: 'secondary',
  },
};

export const Underline: Story = {
  args: {
    href: '/',
    children: 'Underlined Link',
    variant: 'underline',
  },
};
