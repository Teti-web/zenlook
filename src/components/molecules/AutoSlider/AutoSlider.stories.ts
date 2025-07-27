import { Meta, StoryObj } from "@storybook/nextjs-vite";
import AutoSlider from "./AutoSlider";
const meta = {
    title: 'Molecules/AutoSlider',
    component: AutoSlider,
    tags: ['autodocs'],
  } satisfies Meta<typeof AutoSlider>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
      label: {
        text: 'NO FLUFF. JUST ESSENTIALS.',
      },
      items: [
        {
          src: '/images/trasted/logo-1.png',
          alt: 'Calendar',
          width: 194,
          height: 58,
        },
        {
          src: '/images/trasted/logo-2.png',
          alt: 'Calendar',
          width: 163,
          height: 40,
        },
        {
          src: '/images/trasted/logo-3.png',
          alt: 'Calendar',
          width: 221,
          height: 40,
        },
        {
          src: '/images/trasted/logo-4.png',
          alt: 'Calendar',
          width: 163,
          height: 40,
        },

      ],
    },
  };
  