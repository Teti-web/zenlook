import type { TabProps } from './Tab.type';
import { motion } from 'framer-motion';
import { FC } from 'react';

const Tab: FC<TabProps> = ({ name, isActive, onClick }) => {
  return (
    <>
      <motion.button
        onClick={onClick}
        className={`md:text-regular text-semibold text-secondary flex cursor-pointer items-center justify-center px-3 py-3 backdrop-blur-xl transition-colors duration-300 md:px-4 md:py-3 md:text-base lg:px-8 lg:py-4`}
        aria-label={`Tab: ${name}`}
        animate={{
          backgroundColor: isActive ? '#F4AFBB4D' : 'rgba(255, 255, 255, 0.05)',
          borderColor: isActive ? '#f4afbb4d' : 'transparent',
        }}
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        style={{
          border: isActive ? '1px solid #f4afbb4d' : '1px solid transparent',
        }}
      >
        {name}
      </motion.button>
    </>
  );
};

export default Tab;
