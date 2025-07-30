import { cardBeatyProfesional } from '../CardBeauty/CardBeauty.moks';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Slider from './Slider';

const meta = {
  title: 'Molecules/Slider',
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      cardBeatyProfesional,
      cardBeatyProfesional,
      cardBeatyProfesional,
      cardBeatyProfesional,
      cardBeatyProfesional,
    ],
  },
};
