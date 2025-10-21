import styled from 'styled-components';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

// Gmail colors
const gmailColors = {
  red: '#ea4335',
  yellow: '#fbbc04',
  green: '#34a853',
  blue: '#1a73e8',
  white: '#ffffff',
  gray: '#5f6368',
  lightGray: '#f1f3f4',
  darkGray: '#202124',
};

// Container for the Gmail icon transformation
export const GmailIconContainer = styled(motion.div)<{ $size?: number }>`
  position: relative;
  width: ${({ $size = 48 }) => $size}px;
  height: ${({ $size = 48 }) => $size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${gmailColors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

// Gmail "M" logo container
export const GmailLogo = styled(motion.div)<{ $size?: number }>`
  position: relative;
  width: ${({ $size = 32 }) => $size}px;
  height: ${({ $size = 32 }) => $size}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Gmail "M" letter made of colored sections
export const GmailMLetter = styled(motion.div)<{ $size?: number }>`
  position: relative;
  width: ${({ $size = 32 }) => $size}px;
  height: ${({ $size = 32 }) => $size}px;
  overflow: hidden;
`;

// Individual color sections for the "M"
export const GmailSection = styled(motion.div)<{ 
  $color: string; 
  $position: 'left' | 'right' | 'center' | 'bottom'; 
  $size?: number;
}>`
  position: absolute;
  background-color: ${({ $color }) => $color};
  ${({ $position, $size = 32 }) => {
    switch ($position) {
      case 'left':
        return `
          left: 0;
          top: 0;
          width: ${$size * 0.4}px;
          height: ${$size * 0.6}px;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        `;
      case 'right':
        return `
          right: 0;
          top: 0;
          width: ${$size * 0.4}px;
          height: ${$size * 0.6}px;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        `;
      case 'center':
        return `
          left: ${$size * 0.3}px;
          top: ${$size * 0.2}px;
          width: ${$size * 0.4}px;
          height: ${$size * 0.5}px;
          clip-path: polygon(0 100%, 50% 0, 100% 100%);
        `;
      case 'bottom':
        return `
          bottom: 0;
          left: 0;
          width: 100%;
          height: ${$size * 0.4}px;
          clip-path: polygon(0 0, 20% 100%, 80% 100%, 100% 0);
        `;
      default:
        return '';
    }
  }}
`;

// Email thread container that transforms into Gmail icon
export const EmailThreadTransform = styled(motion.div)<{ $isTransforming?: boolean }>`
  width: 100%;
  height: 100%;
  background-color: ${gmailColors.white};
  border-radius: ${({ $isTransforming = false }) => $isTransforming ? '50%' : '8px'};
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

// Email content that's visible before transformation
export const EmailContentPreview = styled(motion.div)`
  padding: 12px;
  background-color: ${gmailColors.white};
  border-bottom: 1px solid ${gmailColors.lightGray};
  font-family: 'Google Sans', sans-serif;
  font-size: 14px;
  color: ${gmailColors.darkGray};
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.3s ease;
`;

// Animation variants for the transformation
export const gmailIconVariants: Variants = {
  // Initial state as email thread
  emailThread: {
    scale: 1,
    borderRadius: '8px',
    width: '100%',
    height: '100%',
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  // Shrinking state
  shrinking: {
    scale: 0.8,
    borderRadius: '12px',
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  // Final state as Gmail icon
  gmailIcon: {
    scale: 1,
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  // Disappearing state
  disappearing: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// Animation variants for the Gmail "M" logo appearance
export const gmailLogoVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1],
      staggerChildren: 0.1,
    },
  },
  disappearing: {
    opacity: 0,
    scale: 0.8,
    rotate: 10,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

// Animation variants for individual "M" sections
export const gmailSectionVariants: Variants = {
  hidden: (custom: { $position: string }) => {
    switch (custom.$position) {
      case 'left':
        return { x: -20, opacity: 0 };
      case 'right':
        return { x: 20, opacity: 0 };
      case 'center':
        return { y: -20, opacity: 0 };
      case 'bottom':
        return { y: 20, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1],
    },
  },
  disappearing: (custom: { $position: string }) => {
    switch (custom.$position) {
      case 'left':
        return { x: -10, opacity: 0 };
      case 'right':
        return { x: 10, opacity: 0 };
      case 'center':
        return { y: -10, opacity: 0 };
      case 'bottom':
        return { y: 10, opacity: 0 };
      default:
        return { opacity: 0 };
    }
  },
};

// Animation variants for email content during transformation
export const emailContentVariants: Variants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
  fading: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
};

// Container for the entire transformation animation
export const TransformContainer = styled(motion.div)<{ $isActive?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ $isActive = false }) => $isActive ? 100 : 10};
  pointer-events: none;
`;

// Responsive design adjustments
export const mediaQueries = {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)',
};

export default gmailColors;