import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaRobot, FaUser, FaPaperPlane, FaLightbulb, FaList, FaQuestionCircle } from 'react-icons/fa';

// Gmail-inspired color scheme
const colors = {
  primary: '#1a73e8', // Gmail blue
  secondary: '#ea4335', // Gmail red
  accent: '#34a853', // Gmail green
  warning: '#fbbc04', // Gmail yellow
  background: 'rgba(255, 255, 255, 0.05)',
  border: 'rgba(255, 255, 255, 0.1)',
  text: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
  userBubble: '#1a73e8',
  botBubble: 'rgba(0, 0, 0, 0.3)',
};

const ChatbotContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(0, 102, 255, 0.3);
  backdrop-filter: blur(10px);
  height: 500px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.border};
`;

const BotIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const HeaderText = styled.div`
  flex: 1;
`;

const HeaderTitle = styled.h3`
  color: ${colors.text};
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
`;

const HeaderSubtitle = styled.p`
  color: ${colors.textSecondary};
  font-size: 0.85rem;
  margin: 0.25rem 0 0 0;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem;
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${colors.primary};
    border-radius: 2px;
  }
`;

const MessageBubble = styled(motion.div)<{ $isUser: boolean }>`
  max-width: 80%;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
  position: relative;

  ${({ $isUser }) => $isUser ? `
    background: ${colors.userBubble};
    color: white;
    margin-left: auto;
    border-bottom-right-radius: 0.25rem;
  ` : `
    background: ${colors.botBubble};
    color: ${colors.text};
    margin-right: auto;
    border-bottom-left-radius: 0.25rem;
    border: 1px solid ${colors.border};
  `}
`;

const MessageTime = styled.span`
  font-size: 0.75rem;
  opacity: 0.7;
  margin-top: 0.25rem;
  display: block;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ActionButton = styled(motion.button)`
  background: rgba(26, 115, 232, 0.1);
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${colors.primary};
    color: white;
    transform: translateY(-1px);
  }
`;

const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

const ChatInput = styled.textarea`
  flex: 1;
  min-height: 40px;
  max-height: 80px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${colors.border};
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  color: ${colors.text};
  font-family: inherit;
  font-size: 0.9rem;
  resize: none;

  &::placeholder {
    color: ${colors.textSecondary};
  }

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
  }
`;

const SendButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  background: ${colors.primary};
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  &:hover {
    background: #1557b0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ActionButton {
  id: string;
  text: string;
  icon: React.ReactNode;
}

const actionButtons: ActionButton[] = [
  { id: 'summary', text: 'Resume el hilo de correos', icon: <FaList /> },
  { id: 'conclusion', text: 'Cual es la conclusión', icon: <FaLightbulb /> },
  { id: 'tasks', text: 'Que tareas hay pendientes', icon: <FaQuestionCircle /> },
];

const messageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EmailChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: '¿En qué te puedo ayudar?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: `Gracias por tu pregunta: "${text}". Esta es una respuesta simulada del chatbot de análisis de emails.`,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleActionButtonClick = (actionId: string, text: string) => {
    handleSendMessage(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  return (
    <ChatbotContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ChatHeader>
        <BotIcon>
          <FaRobot />
        </BotIcon>
        <HeaderText>
          <HeaderTitle>Asistente de Email</HeaderTitle>
          <HeaderSubtitle>Analiza y responde preguntas sobre tus correos</HeaderSubtitle>
        </HeaderText>
      </ChatHeader>

      <MessagesContainer>
        <AnimatePresence>
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              $isUser={message.isUser}
              variants={messageVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3 }}
            >
              {message.text}
              <MessageTime>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </MessageTime>
            </MessageBubble>
          ))}
        </AnimatePresence>
        {isTyping && (
          <MessageBubble $isUser={false}>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Escribiendo...
            </motion.div>
          </MessageBubble>
        )}
        <div ref={messagesEndRef} />
      </MessagesContainer>

      <ActionButtonsContainer>
        {actionButtons.map((button) => (
          <ActionButton
            key={button.id}
            onClick={() => handleActionButtonClick(button.id, button.text)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {button.icon}
            {button.text}
          </ActionButton>
        ))}
      </ActionButtonsContainer>

      <InputContainer>
        <ChatInput
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe tu pregunta..."
          rows={1}
        />
        <SendButton
          onClick={() => handleSendMessage(inputValue)}
          disabled={!inputValue.trim()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPaperPlane />
        </SendButton>
      </InputContainer>
    </ChatbotContainer>
  );
};

export default EmailChatbot;