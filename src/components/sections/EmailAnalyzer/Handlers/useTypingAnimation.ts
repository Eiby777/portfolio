import { useState, useEffect, useRef, useCallback } from 'react';
import { chatbotData } from '../Models/chatbotData';
import type { ChatMessage as ChatMessageType, ChatResponse } from '../Models/chatbotData';

interface UseTypingAnimationOptions {
  autoStart?: boolean;
  autoStartDelay?: number;
  onPairComplete?: (pairIndex: number) => void;
  onFlowComplete?: () => void;
  enabled?: boolean;
}

interface UseTypingAnimationReturn {
  messages: Array<ChatMessageType | ChatResponse>;
  isFlowActive: boolean;
  currentQuestionIndex: number;
  hasStarted: boolean;
  startFlow: () => void;
  resetFlow: () => void;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export const useTypingAnimation = ({
  autoStart = false,
  autoStartDelay = 0,
  onPairComplete,
  onFlowComplete,
  enabled = true,
}: UseTypingAnimationOptions = {}): UseTypingAnimationReturn => {
  const [messages, setMessages] = useState<Array<ChatMessageType | ChatResponse>>([]);
  const [isFlowActive, setIsFlowActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const instanceId = useRef<string>(`instance-${Date.now()}-${Math.random()}`);

  console.info('useTypingAnimation initialized', { 
    instanceId: instanceId.current,
    autoStart, 
    autoStartDelay, 
    enabled 
  });

  // Calcular tiempos absolutos para cada mensaje
  const calculateMessageTimings = useCallback(() => {
    const timings: Array<{ message: ChatMessageType | ChatResponse; timestamp: number }> = [];
    let currentTime = autoStartDelay;

    // Agregar preguntas y respuestas intercaladas
    chatbotData.questions.forEach((question, index) => {
      // Tiempo para la pregunta
      const questionTime = currentTime + 500 + (index * 4000); // 500ms base + 4s por cada par
      timings.push({
        message: question,
        timestamp: questionTime
      });

      // Encontrar la respuesta correspondiente
      const response = chatbotData.responses.find(r => r.questionId === question.id);
      if (response) {
        // Tiempo para la respuesta (2s después de la pregunta)
        timings.push({
          message: response,
          timestamp: questionTime + 2000
        });
      }
    });

    // Ordenar por timestamp para asegurar el orden correcto
    timings.sort((a, b) => a.timestamp - b.timestamp);

    console.info('Message timings calculated', {
      instanceId: instanceId.current,
      timings: timings.map(t => ({
        id: t.message.id,
        type: 'question' in t.message ? 'question' : 'response',
        timestamp: t.timestamp
      }))
    });

    return timings;
  }, [autoStartDelay]);

  const startFlow = useCallback(() => {
    console.info('startFlow called', { 
      instanceId: instanceId.current,
      enabled, 
      hasStarted 
    });
    
    if (!enabled || hasStarted) {
      console.info('Flow start blocked', { enabled, hasStarted });
      return;
    }

    console.info('Starting flow', { instanceId: instanceId.current });
    setHasStarted(true);
    setIsFlowActive(true);
    setMessages([]);

    const timings = calculateMessageTimings();
    const startTime = Date.now();

    // Programar cada mensaje con su tiempo absoluto
    timings.forEach(({ message, timestamp }) => {
      const delay = timestamp;
      
      console.info('Scheduling message', {
        instanceId: instanceId.current,
        messageId: message.id,
        type: 'question' in message ? 'question' : 'response',
        delay
      });

      const timer = setTimeout(() => {
        console.info('Showing message', {
          instanceId: instanceId.current,
          messageId: message.id,
          type: 'question' in message ? 'question' : 'response'
        });

        setMessages(prev => {
          const newMessages = [...prev, message];
          console.info('Messages updated', {
            instanceId: instanceId.current,
            count: newMessages.length,
            lastMessageId: message.id
          });
          return newMessages;
        });

        // Verificar si es el último mensaje
        const isLastMessage = timings[timings.length - 1].message.id === message.id;
        if (isLastMessage) {
          console.info('All messages shown, completing flow', { instanceId: instanceId.current });
          setIsFlowActive(false);
          if (onFlowComplete) {
            onFlowComplete();
          }
        }
      }, delay);

      timersRef.current.push(timer);
    });
  }, [enabled, hasStarted, calculateMessageTimings, onFlowComplete]);

  const resetFlow = useCallback(() => {
    console.info('resetFlow called', { instanceId: instanceId.current });
    
    // Limpiar todos los timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    setMessages([]);
    setIsFlowActive(false);
    setHasStarted(false);
    
    console.info('Flow reset complete', { instanceId: instanceId.current });
  }, []);

  // AutoStart
  useEffect(() => {
    if (autoStart && enabled && !hasStarted) {
      console.info('Auto starting flow', { instanceId: instanceId.current });
      startFlow();
    }
  }, [autoStart, enabled, hasStarted, startFlow]);

  // Reset cuando se deshabilita
  useEffect(() => {
    if (!enabled) {
      console.info('Enabled is false, resetting flow', { instanceId: instanceId.current });
      resetFlow();
    }
  }, [enabled, resetFlow]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return {
    messages,
    isFlowActive,
    currentQuestionIndex: Math.floor(messages.length / 2), // Approximate
    hasStarted,
    startFlow,
    resetFlow,
    messagesEndRef,
  };
};