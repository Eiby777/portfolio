import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';
import { useColorTransition } from '../Handlers/useColorTransition';
import { useTypingAnimation } from '../Handlers/useTypingAnimation';
import type { ChatMessage as ChatMessageType, ChatResponse } from '../Models/chatbotData';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import {
  ChatbotContainer,
  ChatHeader,
  BotIcon,
  HeaderText,
  HeaderTitle,
  HeaderSubtitle,
  MessagesContainer,
  colorTransitionVariants,
} from '../Styles/ChatbotStyles';

/**
 * Interface for AnimatedChatbot component props
 */
interface AnimatedChatbotProps {
  /** Whether the chatbot should start the automated flow */
  autoStart?: boolean;
  /** Delay before starting the automated flow (in milliseconds) */
  autoStartDelay?: number;
  /** Callback when the color transition completes */
  onColorTransitionComplete?: () => void;
  /** Callback when the entire automated flow completes */
  onFlowComplete?: () => void;
  /** Whether the chatbot is visible */
  isVisible?: boolean;
}

/**
 * AnimatedChatbot component that displays automated Q&A flow with color transitions
 * @param autoStart - Whether to start the automated flow automatically
 * @param autoStartDelay - Delay before starting the automated flow
 * @param onColorTransitionComplete - Callback when color transition completes
 * @param onFlowComplete - Callback when entire flow completes
 * @param isVisible - Whether the chatbot is visible
 */
const AnimatedChatbot: React.FC<AnimatedChatbotProps> = ({
  autoStart = false,
  autoStartDelay = 0,
  onColorTransitionComplete,
  onFlowComplete,
  isVisible = true,
}) => {
  const {
    saturationState,
    saturationValue,
    startColorTransition,
    resetColorState,
  } = useColorTransition({
    onTransitionComplete: onColorTransitionComplete,
  });

  const {
    messages,
    isFlowActive,
    resetFlow,
    messagesEndRef,
  } = useTypingAnimation({
    autoStart,
    autoStartDelay,
    onPairComplete: (pairIndex) => {
      // Start color transition when the first question starts typing
      if (pairIndex === 0) {
        startColorTransition();
      }
    },
    onFlowComplete,
    enabled: isVisible,
  });

  /**
   * Get the text content from a message
   */
  const getMessageText = (message: ChatMessageType | ChatResponse): string => {
    if ('question' in message) {
      return message.question;
    }
    if ('answer' in message) {
      return message.answer;
    }
    return '';
  };

  /**
   * Check if message is from user (question) or bot (response)
   */
  const isUserMessage = (message: ChatMessageType | ChatResponse): boolean => {
    return 'question' in message;
  };

  /**
   * Scroll to bottom when messages change
   */
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  /**
   * Handle typing completion for messages
   */
  const handleMessageTypingComplete = () => {
    // Color transition is now handled in the useTypingAnimation hook
  };

  /**
   * Reset state when component becomes invisible
   */
  useEffect(() => {
    if (!isVisible) {
      resetColorState();
      resetFlow();
    }
  }, [isVisible, resetColorState, resetFlow]);

  if (!isVisible) {
    return null;
  }

  return (
    <ChatbotContainer
      $saturation={saturationValue}
      variants={colorTransitionVariants}
      animate={saturationState}
      initial="muted"
    >
      <ChatHeader>
        <BotIcon $saturation={saturationValue}>
          <FaRobot />
        </BotIcon>
        <HeaderText>
          <HeaderTitle $saturation={saturationValue}>
            Asistente de Email
          </HeaderTitle>
          <HeaderSubtitle $saturation={saturationValue}>
            Analizando el hilo de correos...
          </HeaderSubtitle>
        </HeaderText>
      </ChatHeader>

      <MessagesContainer>
        <AnimatePresence>
          {messages.map((message, index) => {
            const isLastMessage = index === messages.length - 1;
            const isBotResponse = !isUserMessage(message);
            const showTypingIndicator = isLastMessage && isBotResponse && isFlowActive;

            return (
              <React.Fragment key={message.id}>
                <ChatMessage
                  text={getMessageText(message)}
                  isUser={isUserMessage(message)}
                  timestamp={new Date()}
                  shouldType={true}
                  typingSpeed={'typingSpeed' in message ? message.typingSpeed : 30}
                  saturation={saturationValue}
                  onTypingComplete={handleMessageTypingComplete}
                  showIcons={true}
                />
                {showTypingIndicator && (
                  <TypingIndicator
                    saturation={saturationValue}
                    isVisible={true}
                  />
                )}
              </React.Fragment>
            );
          })}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </MessagesContainer>
    </ChatbotContainer>
  );
};

export default AnimatedChatbot;