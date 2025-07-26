import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Description from "./Description";

const meta = {
    title: 'Molecules/Description',
    component: Description,
    tags: ['autodocs'],
  } satisfies Meta<typeof Description>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        boldText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        button: {
            children: 'Button',
            variant: 'primary',
            size: 'medium',
            className: 'w-max',
        },
        
    },
  };

  export const Secondary: Story = {
    args: {
        title: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
            variant: 'h2',
            className: 'text-center',
        },
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        button: {
            children: 'Button',
            variant: 'secondary',
            size: 'medium',
            className: 'w-max',
        },
        variant: 'secondary',
    },
  };
