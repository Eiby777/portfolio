import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaRobot, FaArrowRight } from 'react-icons/fa';
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
} from '../Styles/ChatbotStyles';

/**
 * Interface for AnimatedChatbot component props
 */
interface AnimatedChatbotProps {
  /** Whether the chatbot should start the automated flow */
  autoStart?: boolean;
  /** Delay before starting the automated flow (in milliseconds) */
  autoStartDelay?: number;
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
  onFlowComplete,
  isVisible = true,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [ellipsisCount, setEllipsisCount] = useState(0);

  const {
    messages,
    isFlowActive,
    hasStarted,
    resetFlow,
    messagesEndRef,
  } = useTypingAnimation({
    autoStart,
    autoStartDelay,
    onPairComplete: (pairIndex) => {
      console.info('AnimatedChatbot onPairComplete', { pairIndex });
      // Simplified - no color transitions
    },
    onFlowComplete: () => {
      console.info('AnimatedChatbot onFlowComplete');
      if (onFlowComplete) onFlowComplete();
    },
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
   * Animated ellipsis for "Analizando..." state
   */
  useEffect(() => {
    if (!hasStarted && isVisible) {
      const interval = setInterval(() => {
        setEllipsisCount(prev => (prev + 1) % 4);
      }, 500);
      return () => clearInterval(interval);
    } else {
      setEllipsisCount(0);
    }
  }, [hasStarted, isVisible]);

  /**
   * Reset state when component becomes invisible
   */
  useEffect(() => {
    if (!isVisible) {
      //resetFlow();
      //setInputValue('');
    }
  }, [isVisible, resetFlow]);

  if (!isVisible) {
    return null;
  }

  return (
    <ChatbotContainer $saturation={1}>
      <ChatHeader>
        <BotIcon $saturation={1}>
          <FaRobot />
        </BotIcon>
        <HeaderText>
          <HeaderTitle $saturation={1}>
            Asistente de Email
          </HeaderTitle>
          <HeaderSubtitle $saturation={1}>
            {hasStarted ? (isFlowActive ? 'Procesando preguntas...' : 'Análisis completado') : `Analizando el hilo de correos${'.'.repeat(ellipsisCount)}`}
          </HeaderSubtitle>
        </HeaderText>
      </ChatHeader>

      <MessagesContainer>
        <AnimatePresence>
          {messages.map((message, index) => {
            const isLastMessage = index === messages.length - 1;
            const isUserMessage = 'question' in message; // true para preguntas (derecha), false para respuestas (izquierda)
            const showTypingIndicator = isLastMessage && !isUserMessage && isFlowActive;

            return (
              <React.Fragment key={message.id}>
                <ChatMessage
                  text={getMessageText(message)}
                  isUser={isUserMessage}
                  timestamp={new Date()}
                  shouldType={true}
                  typingSpeed={'typingSpeed' in message ? message.typingSpeed : 30}
                  onTypingComplete={() => {
                    handleMessageTypingComplete();
                  }}
                  showIcons={true}
                />
                {showTypingIndicator && (
                  <TypingIndicator
                    isVisible={true}
                  />
                )}
              </React.Fragment>
            );
          })}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </MessagesContainer>

      {/* Input field and send button */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        padding: '1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && inputValue.trim()) {
              setInputValue('');
            }
          }}
          placeholder="Escribe tu pregunta..."
          style={{
            flex: 1,
            padding: '0.75rem',
            borderRadius: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#ffffff',
            fontSize: '0.9rem',
            outline: 'none'
          }}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (inputValue.trim()) {
              setInputValue('');
            }
          }}
          style={{
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            border: 'none',
            backgroundColor: '#1a73e8',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <FaArrowRight />
        </motion.button>
      </div>
    </ChatbotContainer>
  );
};

export default AnimatedChatbot;