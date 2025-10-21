import React from 'react';
import styled, { keyframes } from 'styled-components';

const ellipsisAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
`;

const EllipsisContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px;
`;

const Dot = styled.div<{ $delay: number }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  animation: ${ellipsisAnimation} 1.4s ease-in-out infinite both;
  animation-delay: ${({ $delay }) => $delay}s;
`;

const LoadingEllipsis: React.FC = () => {
  return (
    <EllipsisContainer>
      <Dot $delay={0} />
      <Dot $delay={0.16} />
      <Dot $delay={0.32} />
    </EllipsisContainer>
  );
};

export default LoadingEllipsis;