import { CardBeautyProps } from './CardBeauty.type';

export const cardBeatyProfesional: CardBeautyProps = {
  image: {
    src: 'https://picsum.photos/id/16/2500/1667.jpg',
    alt: 'Card Beauty Image',
    width: 450,
    height: 600,
  },
  variant: 'beauty-professional',
  personalInfo: {
    name: 'John Doe',
    profesional: 'Beauty Professional',
    description: 'Customers for nail services',
    rating: 4.5,
    progress: '+75%',
  },
};

export const cardBeatyBenefits: CardBeautyProps = {
  variant: 'beauty-benefits',
  image: {
    src: 'https://picsum.photos/id/16/2500/1667.jpg',
    alt: 'Card Beauty Image',
    width: 450,
    height: 600,
  },
  title: 'Mobile Professionals',
  description: 'Take bookings anywhere, sync your schedule across multiple locations',
};
