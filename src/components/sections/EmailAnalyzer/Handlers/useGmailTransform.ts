import { useState, useEffect, useCallback } from 'react';

/**
 * Animation states for the Gmail icon transformation
 */
export type AnimationState = 'idle' | 'appearing' | 'shrinking' | 'transforming' | 'disappearing';

/**
 * Interface for the Gmail transform hook return value
 */
interface UseGmailTransformReturn {
  /** Current animation state */
  animationState: AnimationState;
  /** Whether the animation is currently active */
  isAnimating: boolean;
  /** Whether the Gmail icon is visible */
  isIconVisible: boolean;
  /** Whether the email content is visible */
  isEmailContentVisible: boolean;
  /** Start the transformation animation from email to Gmail icon */
  startTransformation: () => void;
  /** Start the disappearing animation */
  startDisappearing: () => void;
  /** Reset the animation state */
  resetAnimation: () => void;
  /** Set the animation state manually */
  setAnimationState: (state: AnimationState) => void;
}

/**
 * Interface for animation callbacks
 */
interface AnimationCallbacks {
  /** Callback when transformation completes */
  onTransformComplete?: () => void;
  /** Callback when disappearing animation completes */
  onDisappearComplete?: () => void;
  /** Callback when each animation phase completes */
  onPhaseComplete?: (phase: AnimationState) => void;
}

/**
 * Custom hook for managing the Gmail icon transformation animation
 * @param callbacks - Optional callback functions for animation events
 * @returns Object with animation controls and state
 */
export const useGmailTransform = (
  callbacks: AnimationCallbacks = {}
): UseGmailTransformReturn => {
  const {
    onTransformComplete,
    onDisappearComplete,
    onPhaseComplete,
  } = callbacks;

  const [animationState, setAnimationState] = useState<AnimationState>('idle');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(false);
  const [isEmailContentVisible, setIsEmailContentVisible] = useState(true);

  /**
   * Update visibility states based on animation state
   */
  const updateVisibilityStates = useCallback((state: AnimationState) => {
    switch (state) {
      case 'idle':
        setIsIconVisible(false);
        setIsEmailContentVisible(true);
        setIsAnimating(false);
        break;
      case 'appearing':
        setIsIconVisible(false);
        setIsEmailContentVisible(true);
        setIsAnimating(true);
        break;
      case 'shrinking':
        setIsIconVisible(false);
        setIsEmailContentVisible(true);
        setIsAnimating(true);
        break;
      case 'transforming':
        setIsIconVisible(true);
        setIsEmailContentVisible(false);
        setIsAnimating(true);
        break;
      case 'disappearing':
        setIsIconVisible(true);
        setIsEmailContentVisible(false);
        setIsAnimating(true);
        break;
      default:
        setIsIconVisible(false);
        setIsEmailContentVisible(true);
        setIsAnimating(false);
    }
  }, []);

  /**
   * Handle animation state changes with callbacks
   */
  const handleStateChange = useCallback((newState: AnimationState) => {
    setAnimationState(newState);
    updateVisibilityStates(newState);
    
    // Call phase complete callback
    if (onPhaseComplete) {
      onPhaseComplete(newState);
    }
    
    // Handle specific state completions
    if (newState === 'transforming' && onTransformComplete) {
      // Small delay to ensure the animation is visible
      setTimeout(() => {
        onTransformComplete();
      }, 600);
    }
    
    if (newState === 'disappearing' && onDisappearComplete) {
      // Small delay to ensure the animation completes
      setTimeout(() => {
        onDisappearComplete();
      }, 300);
    }
  }, [updateVisibilityStates, onPhaseComplete, onTransformComplete, onDisappearComplete]);

  /**
   * Start the transformation animation from email to Gmail icon
   */
  const startTransformation = useCallback(() => {
    if (isAnimating) return;
    
    // Start the animation sequence
    handleStateChange('appearing');
    
    // Move to shrinking phase
    setTimeout(() => {
      handleStateChange('shrinking');
    }, 400);
    
    // Move to transforming phase
    setTimeout(() => {
      handleStateChange('transforming');
    }, 800);
  }, [isAnimating, handleStateChange]);

  /**
   * Start the disappearing animation
   */
  const startDisappearing = useCallback(() => {
    if (animationState !== 'transforming') return;
    
    handleStateChange('disappearing');
    
    // Return to idle after disappearing
    setTimeout(() => {
      handleStateChange('idle');
    }, 300);
  }, [animationState, handleStateChange]);

  /**
   * Reset the animation state
   */
  const resetAnimation = useCallback(() => {
    handleStateChange('idle');
  }, [handleStateChange]);

  /**
   * Set the animation state manually
   */
  const setAnimationStateManual = useCallback((state: AnimationState) => {
    handleStateChange(state);
  }, [handleStateChange]);

  /**
   * Handle component unmount
   */
  useEffect(() => {
    return () => {
      // Clean up any ongoing animations
      setIsAnimating(false);
    };
  }, []);

  return {
    animationState,
    isAnimating,
    isIconVisible,
    isEmailContentVisible,
    startTransformation,
    startDisappearing,
    resetAnimation,
    setAnimationState: setAnimationStateManual,
  };
};

/**
 * Helper function to get animation duration based on state
 * @param state - Current animation state
 * @returns Duration in milliseconds
 */
export const getAnimationDuration = (state: AnimationState): number => {
  switch (state) {
    case 'appearing':
      return 400;
    case 'shrinking':
      return 400;
    case 'transforming':
      return 600;
    case 'disappearing':
      return 300;
    default:
      return 0;
  }
};

/**
 * Helper function to get animation delay based on state
 * @param state - Current animation state
 * @returns Delay in milliseconds
 */
export const getAnimationDelay = (state: AnimationState): number => {
  switch (state) {
    case 'appearing':
      return 0;
    case 'shrinking':
      return 400;
    case 'transforming':
      return 800;
    case 'disappearing':
      return 0;
    default:
      return 0;
  }
};

export default useGmailTransform;