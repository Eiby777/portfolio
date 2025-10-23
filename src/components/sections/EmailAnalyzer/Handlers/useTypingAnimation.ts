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
  const isStartingRef = useRef(false); // Prevenir múltiples inicios

  // Calcular tiempos absolutos para cada mensaje
  const calculateMessageTimings = useCallback((delay: number) => {
    const timings: Array<{ message: ChatMessageType | ChatResponse; timestamp: number; pairIndex: number }> = [];

    chatbotData.questions.forEach((question, index) => {
      // Pregunta aparece primero
      const questionTime = delay + (index * 5000); // 5 segundos entre cada par
      timings.push({
        message: question,
        timestamp: questionTime,
        pairIndex: index
      });

      // Respuesta aparece 2 segundos después de la pregunta
      const response = chatbotData.responses.find(r => r.questionId === question.id);
      if (response) {
        timings.push({
          message: response,
          timestamp: questionTime + 2000,
          pairIndex: index
        });
      }
    });

    return timings;
  }, []);

  const resetFlow = useCallback(() => {
    console.info('Resetting flow');
    
    // Limpiar todos los timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    setMessages([]);
    setIsFlowActive(false);
    setHasStarted(false);
    isStartingRef.current = false;
  }, []);

  const startFlow = useCallback(() => {
    // Prevenir múltiples ejecuciones simultáneas
    if (isStartingRef.current || !enabled || hasStarted) {
      console.info('Flow start blocked', { 
        isStarting: isStartingRef.current, 
        enabled, 
        hasStarted 
      });
      return;
    }

    console.info('Starting flow');
    isStartingRef.current = true;
    setHasStarted(true);
    setIsFlowActive(true);
    setMessages([]);

    const timings = calculateMessageTimings(autoStartDelay);
    let lastPairIndex = -1;

    // Programar cada mensaje
    timings.forEach(({ message, timestamp, pairIndex }, idx) => {
      const timer = setTimeout(() => {
        console.info('Showing message', {
          messageId: message.id,
          type: 'question' in message ? 'question' : 'response'
        });

        setMessages(prev => [...prev, message]);

        // Notificar cuando se completa un par (después de mostrar la respuesta)
        if ('answer' in message && pairIndex !== lastPairIndex) {
          lastPairIndex = pairIndex;
          if (onPairComplete) {
            onPairComplete(pairIndex);
          }
        }

        // Si es el último mensaje, completar el flujo
        if (idx === timings.length - 1) {
          console.info('Flow complete');
          setTimeout(() => {
            setIsFlowActive(false);
            if (onFlowComplete) {
              onFlowComplete();
            }
          }, 500); // Pequeño delay para que se vea el último mensaje
        }
      }, timestamp);

      timersRef.current.push(timer);
    });
  }, [enabled, hasStarted, autoStartDelay, calculateMessageTimings, onPairComplete, onFlowComplete]);

  // AutoStart - Solo se ejecuta UNA VEZ cuando las condiciones son correctas
  useEffect(() => {
    if (autoStart && enabled && !hasStarted && !isStartingRef.current) {
      console.info('Auto-starting flow');
      startFlow();
    }
  }, [autoStart, enabled]); // NO incluir startFlow ni hasStarted aquí

  // Reset cuando se deshabilita
  useEffect(() => {
    if (!enabled && hasStarted) {
      console.info('Disabled, resetting flow');
      resetFlow();
    }
  }, [enabled, hasStarted, resetFlow]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      console.info('Unmounting, cleaning up timers');
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
    };
  }, []);

  return {
    messages,
    isFlowActive,
    currentQuestionIndex: Math.floor(messages.length / 2),
    hasStarted,
    startFlow,
    resetFlow,
    messagesEndRef,
  };
};