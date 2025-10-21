import React from 'react';
import {
  TypingIndicatorContainer,
  TypingDotsContainer,
  TypingDot,
  typingIndicatorVariants,
  dotsContainerVariants,
  dotVariants,
} from '../Styles/TypingIndicatorStyles';

/**
 * Interface for TypingIndicator component props
 */
interface TypingIndicatorProps {
  /** Current color saturation value (0-1) */
  saturation?: number;
  /** Whether the indicator should be visible */
  isVisible?: boolean;
  /** Custom animation duration for dots (in seconds) */
  dotAnimationDuration?: number;
  /** Number of dots to display */
  dotCount?: number;
  /** Size of each dot (in pixels) */
  dotSize?: number;
  /** Gap between dots (in pixels) */
  dotGap?: number;
}

/**
 * TypingIndicator component that displays animated bouncing dots
 * @param saturation - Current color saturation value
 * @param isVisible - Whether the indicator should be visible
 * @param dotAnimationDuration - Custom animation duration for dots
 * @param dotCount - Number of dots to display
 * @param dotSize - Size of each dot
 * @param dotGap - Gap between dots
 */
const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  saturation = 0,
  isVisible = true,
  dotAnimationDuration = 1.5,
  dotCount = 3,
  dotSize = 6,
  dotGap = 4,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <TypingIndicatorContainer
      $saturation={saturation}
      variants={typingIndicatorVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <TypingDotsContainer
        variants={dotsContainerVariants}
        animate="animate"
        $dotGap={dotGap}
      >
        {Array.from({ length: dotCount }, (_, index) => (
          <TypingDot
            key={index}
            $saturation={saturation}
            $dotSize={dotSize}
            variants={dotVariants}
            custom={dotAnimationDuration}
          />
        ))}
      </TypingDotsContainer>
    </TypingIndicatorContainer>
  );
};

export default TypingIndicator;