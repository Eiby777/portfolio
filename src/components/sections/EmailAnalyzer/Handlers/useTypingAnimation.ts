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

// Interface para el estado de cada mensaje
interface MessageState {
  message: ChatMessageType | ChatResponse;
  mounted: boolean;
  pairIndex: number;
}

// Interface para el estado de los pares pregunta-respuesta
interface PairState {
  questionMounted: boolean;
  responseMounted: boolean;
  timing: number; // Timing específico para este par
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
  const [messageStates, setMessageStates] = useState<MessageState[]>([]);
  const [pairStates, setPairStates] = useState<PairState[]>([]);
  const [isFlowActive, setIsFlowActive] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const isStartingRef = useRef(false);

  // Inicializar los estados de los pares
  const initializePairStates = useCallback(() => {
    const pairs: PairState[] = chatbotData.questions.map((_, index) => ({
      questionMounted: false,
      responseMounted: false,
      timing: autoStartDelay + (index * 5000) // 5 segundos entre cada par
    }));
    setPairStates(pairs);
    
    // Inicializar estados de mensajes
    const messages: MessageState[] = [];
    chatbotData.questions.forEach((question, index) => {
      messages.push({
        message: question,
        mounted: false,
        pairIndex: index
      });
      
      const response = chatbotData.responses.find(r => r.questionId === question.id);
      if (response) {
        messages.push({
          message: response,
          mounted: false,
          pairIndex: index
        });
      }
    });
    setMessageStates(messages);
  }, [autoStartDelay]);

  // Obtener mensajes montados para mostrar
  const mountedMessages = messageStates
    .filter(state => state.mounted)
    .map(state => state.message);

  const resetFlow = useCallback(() => {
    console.info('Resetting flow');
    
    // Limpiar todos los timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];

    setMessageStates([]);
    setPairStates([]);
    setIsFlowActive(false);
    setHasStarted(false);
    isStartingRef.current = false;
  }, []);

  // Montar una pregunta específica
  const mountQuestion = useCallback((pairIndex: number) => {
    console.info(`Mounting question ${pairIndex}`);
    
    setMessageStates(prev => 
      prev.map(state => 
        state.pairIndex === pairIndex && 'question' in state.message
          ? { ...state, mounted: true }
          : state
      )
    );
    
    setPairStates(prev =>
      prev.map((pair, index) =>
        index === pairIndex
          ? { ...pair, questionMounted: true }
          : pair
      )
    );
  }, []);

  // Montar una respuesta específica
  const mountResponse = useCallback((pairIndex: number) => {
    console.info(`Mounting response ${pairIndex}`);
    
    setMessageStates(prev => 
      prev.map(state => 
        state.pairIndex === pairIndex && 'answer' in state.message
          ? { ...state, mounted: true }
          : state
      )
    );
    
    setPairStates(prev =>
      prev.map((pair, index) =>
        index === pairIndex
          ? { ...pair, responseMounted: true }
          : pair
      )
    );
    
    // Notificar completado del par
    if (onPairComplete) {
      onPairComplete(pairIndex);
    }
  }, [onPairComplete]);

  // Efecto para manejar la lógica de montaje
  useEffect(() => {
    if (!hasStarted || !isFlowActive) return;

    // Programar montaje de la primera pregunta
    const firstQuestionTimer = setTimeout(() => {
      mountQuestion(0);
    }, autoStartDelay);
    
    timersRef.current.push(firstQuestionTimer);

    return () => {
      clearTimeout(firstQuestionTimer);
    };
  }, [hasStarted, isFlowActive, autoStartDelay, mountQuestion]);

  // Efecto para manejar el montaje secuencial
  useEffect(() => {
    if (!hasStarted || !isFlowActive || pairStates.length === 0) return;

    // Revisar cada par para determinar qué se puede montar
    pairStates.forEach((pair, index) => {
      // Si la pregunta no está montada
      if (!pair.questionMounted) {
        // Para la primera pregunta, montar inmediatamente con el timing
        if (index === 0) {
          const timer = setTimeout(() => {
            mountQuestion(index);
          }, pair.timing);
          
          timersRef.current.push(timer);
        }
        // Para las siguientes preguntas, montar solo si el par anterior está completamente montado (pregunta y respuesta)
        else if (pairStates[index - 1] &&
                 pairStates[index - 1].questionMounted &&
                 pairStates[index - 1].responseMounted) {
          const timer = setTimeout(() => {
            mountQuestion(index);
          }, pair.timing);
          
          timersRef.current.push(timer);
        }
      }
      
      // Si la pregunta está montada pero la respuesta no, montar la respuesta
      else if (!pair.responseMounted) {
        const questionMessage = messageStates.find(
          state => state.pairIndex === index && 'question' in state.message
        );
        
        if (questionMessage && questionMessage.mounted) {
          // Calcular tiempo de escritura de la pregunta + pausa
          const question = questionMessage.message as ChatMessageType;
          const typingDuration = question.question.length * question.typingSpeed;
          
          const timer = setTimeout(() => {
            mountResponse(index);
          }, typingDuration + 1000); // 1 segundo de pausa después de escribir
          
          timersRef.current.push(timer);
        }
      }
      
      // Si es el último par y ambas partes están montadas, completar el flujo
      else if (index === pairStates.length - 1 && pair.questionMounted && pair.responseMounted) {
        const timer = setTimeout(() => {
          console.info('Flow complete');
          setIsFlowActive(false);
          if (onFlowComplete) {
            onFlowComplete();
          }
        }, 500);
        
        timersRef.current.push(timer);
      }
    });

    return () => {
      // Los timers se limpian en resetFlow
    };
  }, [hasStarted, isFlowActive, pairStates, messageStates, mountQuestion, mountResponse, onFlowComplete]);

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
    
    // Inicializar estados
    initializePairStates();
  }, [enabled, hasStarted, initializePairStates]);

  // AutoStart - Solo se ejecuta UNA VEZ cuando las condiciones son correctas
  useEffect(() => {
    if (autoStart && enabled && !hasStarted && !isStartingRef.current) {
      console.info('Auto-starting flow');
      startFlow();
    }
  }, [autoStart, enabled, startFlow]);

  return {
    messages: mountedMessages,
    isFlowActive,
    currentQuestionIndex: Math.floor(mountedMessages.length / 2),
    hasStarted,
    startFlow,
    resetFlow,
    messagesEndRef,
  };
};