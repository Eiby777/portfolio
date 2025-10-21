import { useState, useEffect, useCallback } from 'react';

export type EmailAnalyzerPhase =
  | 'initial'
  | 'transition'
  | 'email-thread'
  | 'transform'
  | 'chatbot-appear'
  | 'icon-fade'
  | 'chatbot-active';

interface UseEmailAnalyzerAnimationReturn {
  phase: EmailAnalyzerPhase;
  isComplete: boolean;
  startAnimation: () => void;
  onInitialComplete: () => void;
  onTransitionComplete: () => void;
  onEmailThreadComplete: () => void;
  onTransformComplete: () => void;
  onChatbotAppearComplete: () => void;
  onIconFadeComplete: () => void;
  onChatbotActiveComplete: () => void;
}

/**
 * Main animation controller hook for EmailAnalyzer component.
 * Manages the complete animation flow through 7 phases:
 * 1. initial - Centered text and play button
 * 2. transition - Fade out initial elements
 * 3. email-thread - Auto-scrolling Gmail thread
 * 4. transform - Thread shrinks to Gmail icon
 * 5. chatbot-appear - Muted chatbot behind icon
 * 6. icon-fade - Gmail icon disappears, chatbot becomes vivid
 * 7. chatbot-active - Automated Q&A flow
 */
export const useEmailAnalyzerAnimation = (): UseEmailAnalyzerAnimationReturn => {
  const [phase, setPhase] = useState<EmailAnalyzerPhase>('initial');
  const [isComplete, setIsComplete] = useState(false);

  const startAnimation = useCallback(() => {
    console.info('Starting EmailAnalyzer animation');
    setPhase('transition');
  }, []);

  const onInitialComplete = useCallback(() => {
    console.info('Initial phase completed');
    setPhase('transition');
  }, []);

  const onTransitionComplete = useCallback(() => {
    console.info('Transition phase completed');
    setPhase('email-thread');
  }, []);

  const onEmailThreadComplete = useCallback(() => {
    console.info('Email thread phase completed');
    setPhase('transform');
  }, []);

  const onTransformComplete = useCallback(() => {
    console.info('Transform phase completed');
    setPhase('chatbot-appear');
  }, []);

  const onChatbotAppearComplete = useCallback(() => {
    console.info('Chatbot appear phase completed');
    setPhase('icon-fade');
  }, []);

  const onIconFadeComplete = useCallback(() => {
    console.info('Icon fade phase completed');
    setPhase('chatbot-active');
  }, []);

  const onChatbotActiveComplete = useCallback(() => {
    console.info('Chatbot active phase completed');
    setIsComplete(true);
  }, []);

  // Auto-start animation on mount (similar to useHeroAnimation)
  useEffect(() => {
    console.info('EmailAnalyzer animation hook mounted');
    // Animation starts automatically after a brief delay
  }, []);

  return {
    phase,
    isComplete,
    startAnimation,
    onInitialComplete,
    onTransitionComplete,
    onEmailThreadComplete,
    onTransformComplete,
    onChatbotAppearComplete,
    onIconFadeComplete,
    onChatbotActiveComplete,
  };
};