import { StoryObj } from '@storybook/nextjs-vite';

import { Meta } from '@storybook/nextjs-vite';

import Image from './Image';
const meta = {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/id/13/2500/1667.jpg',
    alt: 'Image',
    width: 500,
    height: 667,
  },
};

export const DesktopSrc: Story = {
  args: {
    src: 'https://picsum.photos/id/15/2500/1500.jpg',
    alt: 'Image',
    width: 1200,
    height: 667,
    desktopSrc: 'https://picsum.photos/id/15/2500/1500.jpg',
    mobileSrc: 'https://picsum.photos/id/15/400/600.jpg',
  },
};

export const MobileSrc: Story = {
  args: {
    src: 'https://picsum.photos/id/12/2500/1667.jpg',
    alt: 'Image',
    width: 1200,
    height: 467,
    mobileSrc: 'https://picsum.photos/400/600',
  },
};
