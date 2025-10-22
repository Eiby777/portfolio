import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { getInterpolatedColor } from './ChatbotStyles';

/**
 * Container for the typing indicator
 */
export const TypingIndicatorContainer = styled(motion.div)<{ $saturation: number }>`
  background: ${props => getInterpolatedColor(props.$saturation, 'botBubble')};
  color: ${props => getInterpolatedColor(props.$saturation, 'text')};
  border: 1px solid ${props => getInterpolatedColor(props.$saturation, 'border')};
  max-width: 80%;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  border-bottom-left-radius: 0.25rem;
  margin-right: auto;
  font-size: 0.9rem;
  transition: all 0.3s ease;
`;

/**
 * Container for the typing dots
 */
export const TypingDotsContainer = styled(motion.div)<{ $dotGap: number }>`
  display: flex;
  gap: ${props => props.$dotGap}px;
  align-items: center;
`;

/**
 * Individual typing dot
 */
export const TypingDot = styled(motion.div)<{
  $saturation: number;
  $dotSize: number;
}>`
  width: ${props => props.$dotSize}px;
  height: ${props => props.$dotSize}px;
  background: ${props => getInterpolatedColor(props.$saturation, 'primary')};
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
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
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
      staggerChildren: 0.2,
    },
  },
};

/**
 * Animation variants for individual dots
 */
export const dotVariants: Variants = {
  animate: {
    y: [0, -6, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};