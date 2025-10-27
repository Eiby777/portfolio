import { useState, useEffect, useCallback, useMemo } from 'react';

export type EmailAnalyzerPhase =
  | 'initial'
  | 'transition'
  | 'email-thread'
  | 'transform'
  | 'chatbot-appear'
  | 'icon-fade'
  | 'chatbot-active'
  | 'neural-network';

interface UseEmailAnalyzerAnimationReturn {
  phase: EmailAnalyzerPhase;
  isComplete: boolean;
  isTransitioning: boolean;
  neuralIntensity: number;
  startAnimation: () => void;
  onInitialComplete: () => void;
  onTransitionComplete: () => void;
  onEmailThreadComplete: () => void;
  onTransformComplete: () => void;
  onChatbotAppearComplete: () => void;
  onIconFadeComplete: () => void;
  onChatbotActiveComplete: () => void;
  onNeuralNetworkComplete: () => void;
}

/**
 * Enhanced animation controller hook for EmailAnalyzer component with neural network effects.
 * Manages the complete animation flow through 8 phases:
 * 1. initial - Centered text and play button
 * 2. transition - Fade out initial elements
 * 3. email-thread - Auto-scrolling Gmail thread
 * 4. transform - Thread shrinks to Gmail icon
 * 5. chatbot-appear - Muted chatbot behind icon
 * 6. icon-fade - Gmail icon disappears, chatbot becomes vivid
 * 7. chatbot-active - Automated Q&A flow
 * 8. neural-network - AI analysis visualization with glowing connections
 */
export const useEmailAnalyzerAnimation = (): UseEmailAnalyzerAnimationReturn => {
  const [phase, setPhase] = useState<EmailAnalyzerPhase>('initial');
  const [isComplete, setIsComplete] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [neuralIntensity, setNeuralIntensity] = useState(0);

  // Neural network intensity animation
  useEffect(() => {
    if (phase === 'neural-network') {
      const interval = setInterval(() => {
        setNeuralIntensity(prev => {
          const newIntensity = (Math.sin(Date.now() * 0.003) + 1) / 2;
          return Math.max(0.3, Math.min(1, newIntensity));
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [phase]);

  const startAnimation = useCallback(() => {
    console.info('Starting enhanced EmailAnalyzer animation');
    setIsTransitioning(true);
    setPhase('transition');
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  const onInitialComplete = useCallback(() => {
    console.info('Initial phase completed');
    setIsTransitioning(true);
    setPhase('transition');
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  const onTransitionComplete = useCallback(() => {
    console.info('Transition phase completed');
    setIsTransitioning(true);
    setPhase('email-thread');
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  const onEmailThreadComplete = useCallback(() => {
    console.info('Email thread phase completed');
    setIsTransitioning(true);
    setPhase('transform');
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  }, []);

  const onTransformComplete = useCallback(() => {
    console.info('Transform phase completed');
    setIsTransitioning(true);
    setPhase('chatbot-appear');
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  const onChatbotAppearComplete = useCallback(() => {
    console.info('Chatbot appear phase completed');
    setIsTransitioning(true);
    setPhase('icon-fade');
    setTimeout(() => {
      setIsTransitioning(false);
    }, 350);
  }, []);

  const onIconFadeComplete = useCallback(() => {
    console.info('Icon fade phase completed');
    setIsTransitioning(true);
    setPhase('chatbot-active');
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, []);

  const onChatbotActiveComplete = useCallback(() => {
    console.info('Chatbot active phase completed');
    setIsTransitioning(true);
    setPhase('neural-network');
    setTimeout(() => {
      setIsTransitioning(false);
      // Auto-complete neural phase after delay
      setTimeout(() => {
        setIsComplete(true);
      }, 8000);
    }, 400);
  }, []);

  const onNeuralNetworkComplete = useCallback(() => {
    console.info('Neural network phase completed');
    setIsComplete(true);
  }, []);

  // Memoized animation states
  const animationStates = useMemo(() => ({
    initial: { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
    transition: { opacity: 0, transform: 'scale(0.95)', filter: 'blur(2px)' },
    emailThread: { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
    transform: { opacity: 0.7, transform: 'scale(0.8)', filter: 'blur(1px)' },
    chatbotAppear: { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
    iconFade: { opacity: 0.5, transform: 'scale(1.1)', filter: 'blur(3px)' },
    chatbotActive: { opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' },
    neuralNetwork: { opacity: 1, transform: 'scale(1)', filter: `blur(${neuralIntensity * 2}px)` }
  }), [neuralIntensity]);

  // Auto-start animation on mount with enhanced timing
  useEffect(() => {
    console.info('Enhanced EmailAnalyzer animation hook mounted');
    // Start animation after component mounts
    const startTimer = setTimeout(() => {
      startAnimation();
    }, 1000);
    return () => clearTimeout(startTimer);
  }, [startAnimation]);

  return {
    phase,
    isComplete,
    isTransitioning,
    neuralIntensity,
    startAnimation,
    onInitialComplete,
    onTransitionComplete,
    onEmailThreadComplete,
    onTransformComplete,
    onChatbotAppearComplete,
    onIconFadeComplete,
    onChatbotActiveComplete,
    onNeuralNetworkComplete,
    animationStates
  };
};
