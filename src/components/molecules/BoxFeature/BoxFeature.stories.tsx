import { Meta, StoryObj } from '@storybook/nextjs-vite';
import { boxFeatureMock } from './BoxFeature.mocks';
import BoxFeature from './BoxFeature';

const meta = {
  title: 'Molecules/BoxFeature',
  component: BoxFeature,
  tags: ['autodocs'],
} satisfies Meta<typeof BoxFeature>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...boxFeatureMock,
  },
};
