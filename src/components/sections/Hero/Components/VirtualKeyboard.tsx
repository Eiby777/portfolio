import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { keyboardLayout } from '../Models/keyboardLayout';
import type { KeyData } from '../Models/keyboardLayout';

interface VirtualKeyboardProps {
  activeKey?: string;
  onKeyPress?: (key: string) => void;
}

const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 30px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08), rgba(118, 75, 162, 0.05));
  border-radius: 24px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.12), rgba(118, 75, 162, 0.12));
    border-radius: 24px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 20px;
    gap: 6px;
  }
`;

const KeyboardRow = styled.div`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;

const KeyButton = styled(motion.button)<{ $isActive: boolean; $width?: number }>`
  width: ${({ $width }) => $width || 52}px;
  height: 52px;
  border: none;
  border-radius: 8px;
  background: ${({ $isActive }) =>
    $isActive
      ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))'
      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.05))'};
  color: white;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ $isActive }) =>
    $isActive
      ? '0 4px 12px rgba(102, 126, 234, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      : '0 2px 8px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(102, 126, 234, 0.05)'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), transparent);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  @media (max-width: 768px) {
    width: ${({ $width }) => $width ? $width * 0.7 : 40}px;
    height: 40px;
    font-size: 14px;
  }

  &:hover {
    background: ${({ $isActive }) =>
      $isActive
        ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9))'
        : 'linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.08))'};
    transform: translateY(-2px);
    box-shadow: ${({ $isActive }) =>
      $isActive
        ? '0 6px 16px rgba(102, 126, 234, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        : '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(102, 126, 234, 0.1)'};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: ${({ $isActive }) =>
      $isActive
        ? '0 2px 8px rgba(102, 126, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        : '0 1px 4px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(102, 126, 234, 0.05)'};
  }
`;

const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({
  activeKey,
  onKeyPress,
}) => {
  console.log('VirtualKeyboard render - activeKey:', activeKey);

  const handleKeyClick = (keyData: KeyData) => {
    onKeyPress?.(keyData.key);
  };

  return (
    <KeyboardContainer>
      {keyboardLayout.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex}>
          {row.map((keyData) => (
            <KeyButton
              key={keyData.code}
              $isActive={activeKey === keyData.key}
              $width={keyData.width}
              onClick={() => handleKeyClick(keyData)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {keyData.key}
            </KeyButton>
          ))}
        </KeyboardRow>
      ))}
    </KeyboardContainer>
  );
};

export default VirtualKeyboard;