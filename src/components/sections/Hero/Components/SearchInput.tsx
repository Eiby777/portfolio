import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface SearchInputProps {
  value: string;
  onSubmit?: () => void;
  placeholder?: string;
}

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px 36px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.08));
  border-radius: 24px;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(102, 126, 234, 0.1);
  width: 100%;
  max-width: min(1200px, 90vw);
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15));
    border-radius: 24px;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 24px 28px;
    gap: 16px;
    max-width: 90vw;
    border-radius: 20px;
  }
`;

const InputField = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 26px;
  font-weight: 400;
  outline: none;
  padding: 8px 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  letter-spacing: -0.02em;
  min-width: 0;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
  }

  &:focus {
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;

const SubmitButton = styled(motion.button)`
  width: 64px;
  height: 64px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow:
    0 4px 16px rgba(102, 126, 234, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
  }

  &:hover {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
    transform: translateY(-2px) scale(1.02);
    box-shadow:
      0 6px 20px rgba(102, 126, 234, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(0) scale(1.0);
    box-shadow:
      0 2px 8px rgba(102, 126, 234, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
`;

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onSubmit,
  placeholder = 'Buscar...',
}) => {
  const handleSubmit = () => {
    onSubmit?.();
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        value={value}
        placeholder={placeholder}
        readOnly
      />
      <SubmitButton
        onClick={handleSubmit}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <FaArrowRight size={24} />
      </SubmitButton>
    </InputContainer>
  );
};

export default SearchInput;