import styled, { keyframes } from 'styled-components';

interface AnimatedBackgroundProps {
  type: 'email' | 'invoice' | 'chatbot' | 'quote' | 'cv' | 'meeting' | 'sales';
}

// Performance optimized keyframes with transform3d and will-change hints
const backgroundGlow = keyframes`
  0% { transform: rotate3d(0, 0, 1, 0deg) scale3d(1, 1, 1); opacity: 0.35; }
  50% { transform: rotate3d(0, 0, 1, 180deg) scale3d(1.08, 1.08, 1); opacity: 0.55; }
  100% { transform: rotate3d(0, 0, 1, 360deg) scale3d(1, 1, 1); opacity: 0.35; }
`;

const backgroundGradients: Record<AnimatedBackgroundProps['type'], string> = {
  email: 'radial-gradient(circle at 20% 20%, rgba(0, 102, 255, 0.22), transparent 55%), radial-gradient(circle at 75% 65%, rgba(102, 179, 255, 0.18), transparent 65%), linear-gradient(160deg, rgba(0, 30, 85, 0.45), rgba(0, 30, 60, 0.08))',
  invoice: 'radial-gradient(circle at 25% 30%, rgba(0, 255, 136, 0.25), transparent 55%), radial-gradient(circle at 70% 75%, rgba(51, 255, 170, 0.18), transparent 60%), linear-gradient(180deg, rgba(0, 40, 30, 0.4), rgba(0, 25, 18, 0.08))',
  chatbot: 'radial-gradient(circle at 30% 25%, rgba(153, 51, 255, 0.25), transparent 55%), radial-gradient(circle at 80% 75%, rgba(255, 153, 255, 0.18), transparent 65%), linear-gradient(145deg, rgba(35, 0, 55, 0.5), rgba(20, 0, 35, 0.08))',
  quote: 'radial-gradient(circle at 25% 30%, rgba(255, 102, 0, 0.22), transparent 55%), radial-gradient(circle at 75% 70%, rgba(255, 204, 102, 0.18), transparent 65%), linear-gradient(180deg, rgba(60, 20, 0, 0.45), rgba(30, 10, 0, 0.08))',
  cv: 'radial-gradient(circle at 30% 20%, rgba(255, 51, 102, 0.24), transparent 55%), radial-gradient(circle at 78% 70%, rgba(255, 153, 204, 0.18), transparent 60%), linear-gradient(150deg, rgba(60, 0, 20, 0.48), rgba(35, 0, 15, 0.08))',
  meeting: 'radial-gradient(circle at 20% 25%, rgba(0, 255, 255, 0.24), transparent 55%), radial-gradient(circle at 70% 80%, rgba(153, 255, 255, 0.18), transparent 60%), linear-gradient(180deg, rgba(0, 45, 55, 0.45), rgba(0, 25, 30, 0.08))',
  sales: 'radial-gradient(circle at 25% 25%, rgba(255, 204, 0, 0.24), transparent 55%), radial-gradient(circle at 78% 70%, rgba(255, 240, 153, 0.18), transparent 60%), linear-gradient(160deg, rgba(60, 40, 0, 0.45), rgba(30, 20, 0, 0.08))'
};

// Performance optimized styled components
export const BackgroundContainer = styled.div<{ $type: AnimatedBackgroundProps['type'] }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background: ${({ $type }) => backgroundGradients[$type]};
  isolation: isolate;
  will-change: transform, opacity;
  contain: layout style paint;

  &::after {
    content: '';
    position: absolute;
    inset: -35%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
    mix-blend-mode: screen;
    animation: ${backgroundGlow} 24s linear infinite;
    opacity: 0.6;
    will-change: transform;
  }

  /* Accessibility: Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }

    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;