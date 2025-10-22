import styled from 'styled-components';
import { motion, type Easing } from 'framer-motion';

export const TransformContainer = styled.div<{ $isActive: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

export const EmailThreadTransform = styled(motion.div)<{ $isTransforming: boolean }>`
  position: relative;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1;
  background: white;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  ${({ $isTransforming }) => $isTransforming && `
    border-color: #1a73e8;
    box-shadow: 0 8px 24px rgba(26, 115, 232, 0.3);
  `}
`;

export const EmailContentPreview = styled(motion.div)`
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #5f6368;
  line-height: 1.4;
`;

export const GmailIconContainer = styled(motion.div)<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #1a73e8;
  box-shadow: 0 4px 12px rgba(26, 115, 232, 0.3);
`;

export const gmailIconVariants = {
  emailThread: {
    scale: 1,
    borderRadius: '12px',
    transition: {
      duration: 0.5,
      ease: "easeInOut" as Easing,
    },
  },
  shrinking: {
    scale: 0.8,
    borderRadius: '12px',
    transition: {
      duration: 0.5,
      ease: "easeInOut" as Easing,
    },
  },
  gmailIcon: {
    scale: 0.5,
    borderRadius: '50%',
    transition: {
      duration: 0.8,
      ease: "easeInOut" as Easing,
    },
  },
  disappearing: {
    scale: 0.2,
    opacity: 0,
    borderRadius: '50%',
    transition: {
      duration: 1,
      ease: "easeInOut" as Easing,
    },
  },
};

export const gmailLogoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as Easing,
    },
  },
  disappearing: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.5,
      ease: "easeInOut" as Easing,
    },
  },
};

export const emailContentVariants = {
  visible: {
    opacity: 1,
    scale: 1,
  },
  fading: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as Easing,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
};