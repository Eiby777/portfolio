import styled from 'styled-components';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  background?: string;
  border?: string;
  glow?: boolean;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const StyledCard = styled(motion.div)<{
  $variant: 'default' | 'glass' | 'gradient' | 'outlined';
  $padding: 'sm' | 'md' | 'lg';
  $background?: string;
  $border?: string;
  $glow: boolean;
  $hover: boolean;
}>`
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  /* Padding variants */
  ${({ $padding }) => {
    switch ($padding) {
      case 'sm':
        return 'padding: 1rem;';
      case 'md':
        return 'padding: 1.5rem;';
      case 'lg':
        return 'padding: 2rem;';
      default:
        return 'padding: 1.5rem;';
    }
  }}
  
  /* Style variants */
  ${({ $variant, $background, $border, $glow }) => {
    switch ($variant) {
      case 'default':
        return `
          background: ${$background || '#1a1a1a'};
          border: ${$border || '1px solid rgba(255, 255, 255, 0.1)'};
          ${$glow ? 'box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);' : ''}
        `;
      case 'glass':
        return `
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: ${$border || '1px solid rgba(255, 255, 255, 0.1)'};
          ${$glow ? 'box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);' : ''}
        `;
      case 'gradient':
        return `
          background: ${$background || 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'};
          border: ${$border || '1px solid rgba(255, 255, 255, 0.1)'};
          ${$glow ? 'box-shadow: 0 0 30px rgba(102, 126, 234, 0.3);' : ''}
        `;
      case 'outlined':
        return `
          background: transparent;
          border: ${$border || '2px solid rgba(255, 255, 255, 0.2)'};
          ${$glow ? 'box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);' : ''}
        `;
      default:
        return '';
    }
  }}
  
  /* Hover effect */
  ${({ $hover }) => $hover && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }
  `}
  
  /* Glow effect on hover */
  ${({ $glow, $hover }) => $glow && $hover && `
    &:hover {
      box-shadow: 0 0 30px rgba(102, 126, 234, 0.5);
    }
  `}
`;

const cardVariants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  background,
  border,
  glow = false,
  hover = false,
  className,
  onClick,
}) => {
  return (
    <StyledCard
      className={className}
      $variant={variant}
      $padding={padding}
      $background={background}
      $border={border}
      $glow={glow}
      $hover={hover}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover={hover ? "hover" : undefined}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  );
};

export default Card;