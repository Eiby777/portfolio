import { useState, useEffect, useCallback } from 'react';

/**
 * Color saturation states for the chatbot
 */
export type ColorSaturationState = 'muted' | 'transitioning' | 'vivid';

/**
 * Interface for color transition hook return value
 */
interface UseColorTransitionReturn {
  /** Current color saturation state */
  saturationState: ColorSaturationState;
  /** Whether the color transition is currently active */
  isTransitioning: boolean;
  /** Current saturation value (0-1) */
  saturationValue: number;
  /** Start the color transition from muted to vivid */
  startColorTransition: () => void;
  /** Reset color state to muted */
  resetColorState: () => void;
  /** Set color state manually */
  setColorState: (state: ColorSaturationState) => void;
}

/**
 * Interface for color transition callbacks
 */
interface ColorTransitionCallbacks {
  /** Callback when color transition completes */
  onTransitionComplete?: () => void;
  /** Callback when each transition phase completes */
  onPhaseComplete?: (phase: ColorSaturationState) => void;
}

/**
 * Custom hook for managing chatbot color saturation transitions
 * @param callbacks - Optional callback functions for transition events
 * @param transitionDuration - Duration of the transition in milliseconds (default: 2000)
 * @returns Object with color transition controls and state
 */
export const useColorTransition = (
  callbacks: ColorTransitionCallbacks = {},
  transitionDuration: number = 2000
): UseColorTransitionReturn => {
  const {
    onTransitionComplete,
    onPhaseComplete,
  } = callbacks;

  const [saturationState, setSaturationState] = useState<ColorSaturationState>('muted');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [saturationValue, setSaturationValue] = useState(0);

  /**
   * Update saturation value based on state
   */
  const updateSaturationValue = useCallback((state: ColorSaturationState) => {
    switch (state) {
      case 'muted':
        setSaturationValue(0);
        break;
      case 'transitioning':
        // Saturation value will be animated
        break;
      case 'vivid':
        setSaturationValue(1);
        break;
      default:
        setSaturationValue(0);
    }
  }, []);

  /**
   * Handle state changes with callbacks
   */
  const handleStateChange = useCallback((newState: ColorSaturationState) => {
    setSaturationState(newState);
    updateSaturationValue(newState);

    // Call phase complete callback
    if (onPhaseComplete) {
      onPhaseComplete(newState);
    }

    // Handle specific state completions
    if (newState === 'vivid' && onTransitionComplete) {
      onTransitionComplete();
    }
  }, [updateSaturationValue, onPhaseComplete, onTransitionComplete]);

  /**
   * Start the color transition from muted to vivid
   */
  const startColorTransition = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    handleStateChange('transitioning');

    // Animate saturation value over time
    const startTime = Date.now();
    const startValue = saturationValue;
    const endValue = 1;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / transitionDuration, 1);

      // Use ease-out curve for smooth transition
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (endValue - startValue) * easedProgress;

      setSaturationValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Transition complete
        setIsTransitioning(false);
        handleStateChange('vivid');
      }
    };

    requestAnimationFrame(animate);
  }, [isTransitioning, saturationValue, transitionDuration, handleStateChange]);

  /**
   * Reset color state to muted
   */
  const resetColorState = useCallback(() => {
    setIsTransitioning(false);
    handleStateChange('muted');
  }, [handleStateChange]);

  /**
   * Set color state manually
   */
  const setColorStateManual = useCallback((state: ColorSaturationState) => {
    setIsTransitioning(false);
    handleStateChange(state);
  }, [handleStateChange]);

  /**
   * Handle component unmount
   */
  useEffect(() => {
    return () => {
      setIsTransitioning(false);
    };
  }, []);

  return {
    saturationState,
    isTransitioning,
    saturationValue,
    startColorTransition,
    resetColorState,
    setColorState: setColorStateManual,
  };
};

/**
 * Helper function to get transition duration based on state
 * @param state - Current color saturation state
 * @returns Duration in milliseconds
 */
export const getColorTransitionDuration = (state: ColorSaturationState): number => {
  switch (state) {
    case 'muted':
      return 0;
    case 'transitioning':
      return 2000; // Default transition duration
    case 'vivid':
      return 0;
    default:
      return 0;
  }
};

/**
 * Helper function to interpolate between muted and vivid colors
 * @param mutedColor - The muted color value
 * @param vividColor - The vivid color value
 * @param saturation - Saturation value between 0 and 1
 * @returns Interpolated color value
 */
export const interpolateColor = (
  mutedColor: string,
  vividColor: string,
  saturation: number
): string => {
  // Simple interpolation for hex colors
  // This is a basic implementation - could be enhanced for HSL interpolation
  if (saturation <= 0) return mutedColor;
  if (saturation >= 1) return vividColor;

  // For now, return vivid color when saturation > 0.5, otherwise muted
  return saturation > 0.5 ? vividColor : mutedColor;
};

export default useColorTransition;