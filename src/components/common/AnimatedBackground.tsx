import React, { useMemo } from 'react';
import { BackgroundContainer } from './AnimatedBackground/BackgroundContainer';
import { renderAnimation } from './AnimatedBackground/RenderUtils';

interface AnimatedBackgroundProps {
  type: 'email' | 'invoice' | 'chatbot' | 'quote' | 'cv' | 'meeting' | 'sales';
  colors?: string[];
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ type }) => {
  const animationContent = useMemo(() => renderAnimation(type), [type]);

  return React.createElement(
    BackgroundContainer,
    { $type: type },
    animationContent
  );
};

export default AnimatedBackground;
