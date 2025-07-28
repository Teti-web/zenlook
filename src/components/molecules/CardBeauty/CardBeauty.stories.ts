import { cardBeatyBenefits, cardBeatyProfesional } from './CardBeauty.moks';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import CardBeauty from './CardBeauty';
const meta = {
  title: 'Molecules/CardBeauty',
  component: CardBeauty,
  tags: ['autodocs'],
} satisfies Meta<typeof CardBeauty>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BeautyProfessional: Story = {
  args: cardBeatyProfesional,
};

export const BeautyBenefits: Story = {
  args: cardBeatyBenefits,
};
