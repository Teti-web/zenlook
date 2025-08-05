import { TextBoxProps } from './TextBox.type';
import { motion } from 'framer-motion';
import { FC } from 'react';

const TextBox: FC<TextBoxProps> = ({ title, description, index, allItems, isOpen }) => {
  return (
    <motion.div
      className={`border-peach bg-content-inverce-blur relative flex max-w-[285px] flex-col gap-6 border p-6 backdrop-blur-[20px] md:-translate-y-5.5 md:gap-4 md:px-6 md:pt-12 md:pb-6 lg:max-w-[393px] ${
        isOpen ? 'z-10 opacity-100' : 'z-[-1] opacity-0'
      }`}
      initial={{
        opacity: 0,
        y: -10,
        scaleY: 0.3,
        height: 0,
        x: 0,
        borderBottomLeftRadius: '9999px',
        borderBottomRightRadius: '9999px',
      }}
      animate={
        isOpen
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              scaleY: 1,
              height: 'auto',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0',
            }
          : {
              opacity: 0,
              y: -10,
              x: 0,
              scaleY: 0.3,
              height: 0,
              borderBottomLeftRadius: '9999px',
              borderBottomRightRadius: '9999px',
            }
      }
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <p className="font-regular text-secondary flex min-w-[285px] items-center font-sans text-xs md:hidden">
        [0{index ? index + 1 : 1}
        <span className="font-regular text-content-secondary font-sans text-xs">/0{allItems}]</span>
      </p>
      <motion.p
        className="font-sans text-2xl font-semibold md:text-3xl lg:text-[40px]"
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {title}
      </motion.p>
      <motion.p
        className="font-regular font-sans text-xs md:text-base"
        initial={{ opacity: 0, y: -20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default TextBox;
