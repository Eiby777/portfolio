import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { getInterpolatedColor } from './ChatbotStyles';

/**
 * Main typing indicator container with dynamic colors
 */
export const TypingIndicatorContainer = styled(motion.div)<{ $saturation: number }>`
  background: ${getInterpolatedColor(0, 'botBubble')};
  color: ${getInterpolatedColor(0, 'text')};
  border: 1px solid ${getInterpolatedColor(0, 'border')};
  max-width: 80%;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border-bottom-left-radius: 0.25rem;
  margin-right: auto;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  min-height: 2.5rem;
`;

/**
 * Container for the animated typing dots
 */
export const TypingDotsContainer = styled(motion.div)<{ $dotGap: number }>`
  display: flex;
  gap: ${({ $dotGap }) => `${$dotGap}px`};
  align-items: center;
`;

/**
 * Individual typing dot with dynamic colors and size
 */
export const TypingDot = styled(motion.div)<{
  $saturation: number;
  $dotSize: number;
}>`
  width: ${({ $dotSize }) => `${$dotSize}px`};
  height: ${({ $dotSize }) => `${$dotSize}px`};
  background: ${({ $saturation }) => getInterpolatedColor($saturation, 'primary')};
  border-radius: 50%;
  transition: background 0.3s ease;
`;

/**
 * Animation variants for typing indicator appearance
 */
export const typingIndicatorVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -10,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/**
 * Animation variants for dots container
 */
export const dotsContainerVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/**
 * Animation variants for individual dots
 */
export const dotVariants: Variants = {
  animate: (duration: number) => ({
    y: [0, -8, 0],
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut',
      repeatDelay: 0.1,
    },
  }),
};

/**
 * Responsive design adjustments for mobile devices
 */
export const mobileStyles = `
  @media (max-width: 768px) {
    ${TypingIndicatorContainer} {
      max-width: 90%;
      padding: 0.6rem 0.8rem;
      font-size: 0.85rem;
      min-height: 2.2rem;
    }

    ${TypingDot} {
      width: 5px;
      height: 5px;
    }
  }
`;

/**
 * Alternative color schemes for different themes
 */
export const alternativeColorSchemes = {
  minimal: {
    background: 'rgba(255, 255, 255, 0.02)',
    border: 'rgba(255, 255, 255, 0.03)',
    dotColor: '#999999',
  },
  vibrant: {
    background: 'rgba(26, 115, 232, 0.1)',
    border: 'rgba(26, 115, 232, 0.2)',
    dotColor: '#1a73e8',
  },
};

export default TypingIndicatorContainer;