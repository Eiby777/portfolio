import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';
import { ChatbotScenario } from '../Models/ChatbotScenario';
import type { ChatbotMessage } from '../Models/ChatbotScenario';
import {
  AnimationWrapper,
  MessageList,
  MessageBubble,
  PersonaTag,
} from '../Styles/LayoutStyles';

const TypingIndicator: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    style={{
      alignSelf: 'flex-end',
      display: 'flex',
      gap: '0.25rem',
      padding: '0.8rem 1.2rem',
      background: 'rgba(153, 51, 255, 0.35)',
      borderRadius: '1rem',
      border: '1px solid rgba(153, 51, 255, 0.25)',
    }}
  >
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{
          repeat: Infinity,
          duration: 0.9,
          delay: i * 0.15
        }}
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#cc66ff',
        }}
      />
    ))}
  </motion.div>
);

const ChatbotResponseScene: React.FC = () => {
  const scenario = useMemo(
    () => ChatbotScenario.createCustomerServiceScenario(),
    []
  );
  const [visibleMessages, setVisibleMessages] = useState<ChatbotMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const allMessages = scenario.allMessages;
    const timeouts: number[] = [];

    setVisibleMessages([]);
    setIsTyping(false);

    const revealMessage = (index: number) => {
      if (index >= allMessages.length) {
        return;
      }

      const message = allMessages[index];
      setIsTyping(true);

      const delayTimeout = window.setTimeout(() => {
        setIsTyping(false);
        setVisibleMessages((prev) => [...prev, message]);

        const nextTimeout = window.setTimeout(() => {
          revealMessage(index + 1);
        }, 400);
        timeouts.push(nextTimeout);
      }, message.delay);

      timeouts.push(delayTimeout);
    };

    revealMessage(0);

    return () => {
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      setIsTyping(false);
    };
  }, [scenario]);

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'center' }}>
          <FaRobot style={{ color: '#cc66ff', fontSize: '1.5rem' }} />
          <PersonaTag>Conversación en vivo</PersonaTag>
        </div>

        <MessageList>
          <AnimatePresence mode="popLayout">
            {visibleMessages.map((msg, idx) => (
              <MessageBubble
                key={idx}
                $author={msg.author}
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25 
                }}
              >
                {msg.content}
              </MessageBubble>
            ))}
            {isTyping && <TypingIndicator key="typing" />}
          </AnimatePresence>
        </MessageList>
      </motion.div>
    </AnimationWrapper>
  );
};

export default ChatbotResponseScene;
