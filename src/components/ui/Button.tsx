import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const StyledButton = styled(motion.button)<{
  $variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  $size: 'sm' | 'md' | 'lg';
  $color?: string;
  $backgroundColor?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: 0.75rem;
  transition: all 0.25s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  border: 2px solid transparent;
  
  /* Size variants */
  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
      case 'md':
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
      case 'lg':
        return `
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
    }
  }}
  
  /* Style variants */
  ${({ $variant, $color, $backgroundColor }) => {
    switch ($variant) {
      case 'primary':
        return `
          background: ${$backgroundColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
          color: ${$color || '#ffffff'};
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          
          &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
          }
        `;
      case 'secondary':
        return `
          background: ${$backgroundColor || '#1a1a1a'};
          color: ${$color || '#ffffff'};
          border-color: ${$color || '#667eea'};
          
          &:hover {
            background: ${$color || '#667eea'};
            color: #ffffff;
            transform: translateY(-2px);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${$color || '#ffffff'};
          border-color: ${$color || '#667eea'};
          
          &:hover {
            background: ${$color || '#667eea'};
            color: #ffffff;
            transform: translateY(-2px);
          }
        `;
      case 'ghost':
        return `
          background: transparent;
          color: ${$color || '#ffffff'};
          
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-1px);
          }
        `;
      default:
        return '';
    }
  }}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
  }
  
  /* Active state */
  &:active {
    transform: translateY(0);
  }
  
  /* Focus state */
  &:focus-visible {
    outline: 2px solid #667eea;
    outline-offset: 2px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  color,
  backgroundColor,
  onClick,
  type = 'button',
  disabled = false,
  className,
  href,
  target,
  rel,
}) => {
  const buttonVariants = {
    initial: { scale: 1, opacity: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const Component = href ? 'a' : StyledButton;
  const componentProps = href ? { href, target, rel } : { as: 'button', type, onClick, disabled };

  return (
    <Component
      className={className}
      $variant={variant}
      $size={size}
      $color={color}
      $backgroundColor={backgroundColor}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...componentProps}
    >
      {children}
    </Component>
  );
};

export default Button;