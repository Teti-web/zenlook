import { cardMock, cardMockWithDecorators } from './Card.mocks';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Card from './Card';
import React from 'react';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: cardMock,
};

export const WithDecorators: Story = {
  args: cardMockWithDecorators,
};
