import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import { getContrastColor, rgbaFromHex } from '../../utils/color';

const NavigationControls = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem 0;
`;

const NavButton = styled(motion.button)<{
  $primary: string;
  $secondary: string;
  $textColor: string;
  $shadow: string;
  $shadowHover: string;
}>`
  background: linear-gradient(135deg, ${({ $primary }) => $primary} 0%, ${({ $secondary }) => $secondary} 100%);
  color: ${({ $textColor }) => $textColor};
  border: none;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px ${({ $shadow }) => $shadow};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px ${({ $shadowHover }) => $shadowHover};
  }

  &:active {
    transform: translateY(0);
  }
`;

interface AnimationNavigationProps {
  primaryColor: string;
  secondaryColor: string;
  onNext: () => void;
  onPrev: () => void;
  isFirstPhase: boolean;
  isLastPhase: boolean;
}

const AnimationNavigation: React.FC<AnimationNavigationProps> = ({
  primaryColor,
  secondaryColor,
  onNext,
  onPrev,
  isFirstPhase,
  isLastPhase,
}) => {
  const textColor = getContrastColor(primaryColor);
  const shadowColor = rgbaFromHex(primaryColor, 0.3);
  const shadowHoverColor = rgbaFromHex(primaryColor, 0.4);

  return (
    <NavigationControls
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {!isFirstPhase && (
        <NavButton
          $primary={primaryColor}
          $secondary={secondaryColor}
          $textColor={textColor}
          $shadow={shadowColor}
          $shadowHover={shadowHoverColor}
          onClick={onPrev}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChevronLeft />
          Retroceder
        </NavButton>
      )}
      {!isLastPhase && (
        <NavButton
          $primary={primaryColor}
          $secondary={secondaryColor}
          $textColor={textColor}
          $shadow={shadowColor}
          $shadowHover={shadowHoverColor}
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Siguiente
          <FaChevronRight />
        </NavButton>
      )}
    </NavigationControls>
  );
};

export default AnimationNavigation;
