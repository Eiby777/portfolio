import { useState, useEffect, useRef, useCallback } from 'react';
import { chatbotData } from '../Models/chatbotData';
import type { ChatMessage as ChatMessageType, ChatResponse } from '../Models/chatbotData';

/**
 * Interface for useTypingAnimation hook options
 */
interface UseTypingAnimationOptions {
  /** Whether the automated flow should start automatically */
  autoStart?: boolean;
  /** Delay before starting the automated flow (in milliseconds) */
  autoStartDelay?: number;
  /** Callback when each Q&A pair completes */
  onPairComplete?: (pairIndex: number) => void;
  /** Callback when the entire flow completes */
  onFlowComplete?: () => void;
  /** Whether the hook is enabled */
  enabled?: boolean;
}

/**
 * Interface for useTypingAnimation hook return value
 */
interface UseTypingAnimationReturn {
  /** Array of current messages in the conversation */
  messages: Array<ChatMessageType | ChatResponse>;
  /** Whether the automated flow is currently active */
  isFlowActive: boolean;
  /** Current question index being processed */
  currentQuestionIndex: number;
  /** Whether the flow has started */
  hasStarted: boolean;
  /** Function to manually start the automated flow */
  startFlow: () => void;
  /** Function to reset the flow state */
  resetFlow: () => void;
  /** Reference to the messages container for scrolling */
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

/**
 * Custom hook for managing automated question-answer flow with typing animations
 * @param options - Configuration options for the hook
 * @returns Hook state and control functions
 */
export const useTypingAnimation = ({
  autoStart = false,
  autoStartDelay = 0,
  onPairComplete,
  onFlowComplete,
  enabled = true,
}: UseTypingAnimationOptions = {}): UseTypingAnimationReturn => {
  const [messages, setMessages] = useState<Array<ChatMessageType | ChatResponse>>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFlowActive, setIsFlowActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /**
   * Get the text content from a message
   */
  const getMessageText = useCallback((message: ChatMessageType | ChatResponse): string => {
    if ('question' in message) {
      return message.question;
    }
    if ('answer' in message) {
      return message.answer;
    }
    return '';
  }, []);

  /**
   * Calculate typing duration for a message
   */
  const getTypingDuration = useCallback((message: ChatMessageType | ChatResponse): number => {
    const text = getMessageText(message);
    const typingSpeed = 'typingSpeed' in message ? message.typingSpeed : 30;
    return text.length * typingSpeed;
  }, [getMessageText]);

  /**
   * Add a question to the messages array and start its typing animation
   */
  const addQuestion = useCallback((index: number) => {
    if (index >= chatbotData.questions.length) {
      // Flow complete
      setIsFlowActive(false);
      if (onFlowComplete) {
        onFlowComplete();
      }
      return;
    }

    const question = chatbotData.questions[index];
    setMessages(prev => [...prev, question]);

    // Schedule the response after question typing completes + delay
    const questionTypingDuration = getTypingDuration(question);
    const responseDelay = question.animationDelay;

    setTimeout(() => {
      addResponse(index);
    }, questionTypingDuration + responseDelay);
  }, [getTypingDuration, onFlowComplete]);

  /**
   * Add a response to the messages array and schedule next question
   */
  const addResponse = useCallback((questionIndex: number) => {
    const response = chatbotData.responses.find(r => r.questionId === chatbotData.questions[questionIndex].id);
    if (!response) return;

    setMessages(prev => [...prev, response]);

    // Notify that this Q&A pair is complete
    if (onPairComplete) {
      onPairComplete(questionIndex);
    }

    // Schedule next question after response typing completes + delay
    const responseTypingDuration = getTypingDuration(response);
    const nextQuestionDelay = response.animationDelay;

    setTimeout(() => {
      setCurrentQuestionIndex(prev => prev + 1);
      addQuestion(questionIndex + 1);
    }, responseTypingDuration + nextQuestionDelay);
  }, [getTypingDuration, onPairComplete, addQuestion]);

  /**
   * Start the automated Q&A flow
   */
  const startFlow = useCallback(() => {
    if (isFlowActive || !enabled) return;

    setIsFlowActive(true);
    setHasStarted(true);
    setCurrentQuestionIndex(0);
    setMessages([]);

    // Start with the first question
    addQuestion(0);
  }, [isFlowActive, enabled, addQuestion]);

  /**
   * Reset the flow state
   */
  const resetFlow = useCallback(() => {
    setMessages([]);
    setIsFlowActive(false);
    setHasStarted(false);
    setCurrentQuestionIndex(0);
  }, []);

  /**
   * Auto-start the flow if requested and enabled
   */
  useEffect(() => {
    if (autoStart && enabled && !hasStarted) {
      const timer = setTimeout(() => {
        startFlow();
      }, autoStartDelay);

      return () => clearTimeout(timer);
    }
  }, [autoStart, autoStartDelay, enabled, hasStarted, startFlow]);

  /**
   * Reset when disabled
   */
  useEffect(() => {
    if (!enabled) {
      resetFlow();
    }
  }, [enabled, resetFlow]);

  return {
    messages,
    isFlowActive,
    currentQuestionIndex,
    hasStarted,
    startFlow,
    resetFlow,
    messagesEndRef,
  };
};

export default useTypingAnimation;