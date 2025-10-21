import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaUser, FaRobot } from 'react-icons/fa';
import {
  MessageBubble,
  MessageTime,
  TypingIndicator,
  TypingDots,
  TypingDot,
  messageVariants,
  typingVariants,
  dotsVariants,
  dotVariants,
} from '../Styles/ChatbotStyles';

/**
 * Interface for ChatMessage component props
 */
interface ChatMessageProps {
  /** The message text to display */
  text: string;
  /** Whether this is a user message or bot response */
  isUser: boolean;
  /** Timestamp of the message */
  timestamp: Date;
  /** Whether the message should animate typing */
  shouldType?: boolean;
  /** Typing speed in milliseconds per character */
  typingSpeed?: number;
  /** Delay before starting to type (in milliseconds) */
  typingDelay?: number;
  /** Current color saturation value (0-1) */
  saturation?: number;
  /** Callback when typing animation completes */
  onTypingComplete?: () => void;
  /** Whether to show user/bot icons */
  showIcons?: boolean;
}

/**
 * ChatMessage component that displays individual messages with typing animations
 * @param text - The message text to display
 * @param isUser - Whether this is a user message or bot response
 * @param timestamp - Timestamp of the message
 * @param shouldType - Whether the message should animate typing
 * @param typingSpeed - Typing speed in milliseconds per character
 * @param typingDelay - Delay before starting to type
 * @param saturation - Current color saturation value
 * @param onTypingComplete - Callback when typing animation completes
 * @param showIcons - Whether to show user/bot icons
 */
const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  isUser,
  timestamp,
  shouldType = false,
  typingSpeed = 30,
  typingDelay = 0,
  saturation = 0,
  onTypingComplete,
  showIcons = true,
}) => {
  const [displayedText, setDisplayedText] = useState(shouldType ? '' : text);
  const [isTyping, setIsTyping] = useState(shouldType);
  const [hasCompletedTyping, setHasCompletedTyping] = useState(!shouldType);

  /**
   * Handle typing animation
   */
  useEffect(() => {
    if (!shouldType || hasCompletedTyping) return;

    const startTyping = () => {
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          // Typing complete
          clearInterval(typeInterval);
          setIsTyping(false);
          setHasCompletedTyping(true);
          if (onTypingComplete) {
            onTypingComplete();
          }
        }
      }, typingSpeed);

      return () => clearInterval(typeInterval);
    };

    // Start typing after delay
    const delayTimer = setTimeout(startTyping, typingDelay);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [shouldType, text, typingSpeed, typingDelay, hasCompletedTyping, onTypingComplete]);

  /**
   * Reset typing state when text changes
   */
  useEffect(() => {
    if (shouldType) {
      setDisplayedText('');
      setIsTyping(true);
      setHasCompletedTyping(false);
    } else {
      setDisplayedText(text);
      setIsTyping(false);
      setHasCompletedTyping(true);
    }
  }, [text, shouldType]);

  return (
    <AnimatePresence mode="wait">
      {isTyping && !hasCompletedTyping ? (
        <TypingIndicator
          key="typing"
          $saturation={saturation}
          variants={typingVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <TypingDots variants={dotsVariants} animate="animate">
            <TypingDot $saturation={saturation} variants={dotVariants} />
            <TypingDot $saturation={saturation} variants={dotVariants} />
            <TypingDot $saturation={saturation} variants={dotVariants} />
          </TypingDots>
        </TypingIndicator>
      ) : (
        <MessageBubble
          key="message"
          $isUser={isUser}
          $saturation={saturation}
          variants={messageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {showIcons && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.5rem',
              fontSize: '0.8rem',
              opacity: 0.8,
            }}>
              {isUser ? (
                <>
                  <FaUser />
                  <span>You</span>
                </>
              ) : (
                <>
                  <FaRobot />
                  <span>Assistant</span>
                </>
              )}
            </div>
          )}
          <div style={{ flex: 1 }}>
            {displayedText}
          </div>
          <MessageTime>
            {timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </MessageTime>
        </MessageBubble>
      )}
    </AnimatePresence>
  );
};

export default ChatMessage;