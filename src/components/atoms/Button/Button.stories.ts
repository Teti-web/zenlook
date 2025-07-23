import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import Button from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'medium',
    label: 'Button',
  },
};

export const Decorative: Story = {
  args: {
    children: 'Button',
    variant: 'decorative',
    size: 'medium',
    label: 'Button',
  },
};
export const Small: Story = {
  args: {
    children: 'Try for Free',
    variant: 'secondary',
    size: 'small',
    label: 'Try for Free',
  },
};
