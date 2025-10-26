import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

/**
 * Color schemes for muted and vivid states
 */
export const chatbotColors = {
  // Muted colors (desaturated, grayscale-like)
  muted: {
    primary: '#666666', // Dark gray instead of blue
    secondary: '#999999', // Medium gray instead of red
    accent: '#cccccc', // Light gray instead of green
    warning: '#bbbbbb', // Light gray instead of yellow
    background: 'rgba(255, 255, 255, 0.02)',
    border: 'rgba(255, 255, 255, 0.05)',
    text: '#cccccc',
    textSecondary: 'rgba(255, 255, 255, 0.5)',
    userBubble: '#666666',
    botBubble: 'rgba(0, 0, 0, 0.1)',
    botIcon: 'linear-gradient(135deg, #666666 0%, #cccccc 100%)',
  },
  // Vivid colors (Gmail-inspired)
  vivid: {
    primary: '#1a73e8', // Gmail blue
    secondary: '#ea4335', // Gmail red
    accent: '#34a853', // Gmail green
    warning: '#fbbc04', // Gmail yellow
    background: 'rgba(255, 255, 255, 0.05)',
    border: 'rgba(255, 255, 255, 0.1)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    userBubble: '#1a73e8',
    botBubble: 'rgba(0, 0, 0, 0.3)',
    botIcon: 'linear-gradient(135deg, #1a73e8 0%, #34a853 100%)',
  },
};

/**
 * Get interpolated color based on saturation value
 * @param saturation - Value between 0 (muted) and 1 (vivid)
 * @param colorKey - Key from the color scheme
 * @returns Interpolated color value
 */
export const getInterpolatedColor = (saturation: number, colorKey: keyof typeof chatbotColors.muted): string => {
  const muted = chatbotColors.muted[colorKey];
  const vivid = chatbotColors.vivid[colorKey];

  if (saturation <= 0) return muted;
  if (saturation >= 1) return vivid;

  // For gradients, return vivid when saturation > 0.5
  if (colorKey === 'botIcon') {
    return saturation > 0.5 ? vivid : muted;
  }

  // Simple interpolation for other colors
  return saturation > 0.5 ? vivid : muted;
};

/**
 * Main chatbot container with dynamic colors
 */
export const ChatbotContainer = styled(motion.div)<{ $saturation: number }>`
  background: ${({ $saturation }) => getInterpolatedColor($saturation, 'background')};
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid ${({ $saturation }) => getInterpolatedColor($saturation, 'border')};
  backdrop-filter: blur(10px);
  height: 750px; /* Increased from 650px to 750px */
  width: 600px;   /* Increased from 450px to 600px */
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
`;

/**
 * Chat header container
 */
export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

/**
 * Bot icon with dynamic colors
 */
export const BotIcon = styled(motion.div)<{ $saturation: number }>`
  width: 60px;     /* Increased from 50px to 60px */
  height: 60px;    /* Increased from 50px to 60px */
  background: ${({ $saturation }) => getInterpolatedColor($saturation, 'botIcon')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem; /* Increased from 1.4rem to 1.8rem */
  transition: background 0.3s ease;
`;

/**
 * Header text container
 */
export const HeaderText = styled.div`
  flex: 1;
`;

/**
 * Header title with dynamic colors
 */
export const HeaderTitle = styled.h3<{ $saturation: number }>`
  color: ${({ $saturation }) => getInterpolatedColor($saturation, 'text')};
  font-size: 1.4rem; /* Increased from 1.1rem to 1.4rem */
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
`;

/**
 * Header subtitle with dynamic colors
 */
export const HeaderSubtitle = styled.p<{ $saturation: number }>`
  color: ${({ $saturation }) => getInterpolatedColor($saturation, 'textSecondary')};
  font-size: 1rem; /* Increased from 0.85rem to 1rem */
  margin: 0.5rem 0 0 0;
  transition: color 0.3s ease;
`;

/**
 * Messages container
 */
export const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  margin-bottom: 1.5rem;

  &::-webkit-scrollbar {
    width: 6px; /* Increased from 4px to 6px */
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #1a73e8;
    border-radius: 3px;
  }
`;

/**
 * Individual message bubble with dynamic colors
 */
export const MessageBubble = styled(motion.div)<{
  $isUser: boolean;
  $saturation: number;
}>`
  max-width: 80%;
  margin-bottom: 1.5rem; /* Increased from 1rem to 1.5rem */
  padding: 1rem 1.5rem; /* Increased from 0.75rem 1rem */
  border-radius: 1rem;
  font-size: 1.1rem; /* Increased from 0.9rem to 1.1rem */
  line-height: 1.5;
  position: relative;
  transition: all 0.3s ease;

  ${({ $isUser, $saturation }) => $isUser ? `
    background: ${getInterpolatedColor($saturation, 'userBubble')};
    color: white;
    margin-left: auto;
    border-bottom-right-radius: 0.25rem;
  ` : `
    background: ${getInterpolatedColor($saturation, 'botBubble')};
    color: ${getInterpolatedColor($saturation, 'text')};
    margin-right: auto;
    border-bottom-left-radius: 0.25rem;
    border: 1px solid ${getInterpolatedColor($saturation, 'border')};
  `}
`;

/**
 * Message timestamp
 */
export const MessageTime = styled.span`
  font-size: 0.85rem; /* Increased from 0.75rem to 0.85rem */
  opacity: 0.7;
  margin-top: 0.5rem; /* Increased from 0.25rem to 0.5rem */
  display: block;
`;

/**
 * Typing indicator container
 */
export const TypingIndicator = styled(motion.div)<{ $saturation: number }>`
  background: ${({ $saturation }) => getInterpolatedColor($saturation, 'botBubble')};
  color: ${({ $saturation }) => getInterpolatedColor($saturation, 'text')};
  border: 1px solid ${({ $saturation }) => getInterpolatedColor($saturation, 'border')};
  max-width: 80%;
  margin-bottom: 1.5rem; /* Increased from 1rem to 1.5rem */
  padding: 1rem 1.5rem; /* Increased from 0.75rem 1rem */
  border-radius: 1rem;
  border-bottom-left-radius: 0.25rem;
  margin-right: auto;
  font-size: 1.1rem; /* Increased from 0.9rem to 1.1rem */
  transition: all 0.3s ease;
`;

/**
 * Typing dots animation
 */
export const TypingDots = styled(motion.div)`
  display: flex;
  gap: 0.35rem; /* Increased from 0.25rem to 0.35rem */
  align-items: center;
`;

/**
 * Individual typing dot
 */
export const TypingDot = styled(motion.div)<{ $saturation: number }>`
  width: 8px; /* Increased from 6px to 8px */
  height: 8px; /* Increased from 6px to 8px */
  background: ${({ $saturation }) => getInterpolatedColor($saturation, 'primary')};
  border-radius: 50%;
  transition: background 0.3s ease;
`;

/**
 * Animation variants for message appearance
 */
export const messageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1],
    },
  },
};

/**
 * Animation variants for typing indicator
 */
export const typingVariants: Variants = {
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
 * Animation variants for color transition
 */
export const colorTransitionVariants: Variants = {
  muted: {
    filter: 'saturate(0) brightness(0.8)',
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  transitioning: {
    filter: 'saturate(0.5) brightness(0.9)',
    transition: {
      duration: 2,
      ease: [0, 0, 0.2, 1],
    },
  },
  vivid: {
    filter: 'saturate(1) brightness(1)',
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/**
 * Typing dots animation variants
 */
export const dotsVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/**
 * Individual dot animation variants
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

/**
 * Responsive design adjustments
 */
export const mediaQueries = {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
};

export default chatbotColors;
