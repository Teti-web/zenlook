import { CardProps } from './Card.type';

export const cardMock: CardProps = {
  title: {
    text: 'Track your performance ',
  },
  description: 'Track your progress and performance easily & growth here',
  decorativeNumber: '01',
  image: {
    src: 'https://picsum.photos/id/13/2500/1667.jpg',
    alt: 'Card Image',
    width: 391,
    height: 280,
  },
};

export const cardMockWithDecorators: CardProps = {
  ...cardMock,
  decoratorsImage: [
    {
      src: 'https://picsum.photos/id/10/2500/1667.jpg',
      alt: 'Card Image',
      width: 125,
      height: 69,
    },
    {
      src: 'https://picsum.photos/id/10/2500/1667.jpg',
      alt: 'Card Image',
      width: 125,
      height: 69,
      className: 'rounded-[12px] top-[90px] left-[-60px]',
    },
  ],
};
