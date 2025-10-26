/**
 * Chatbot data model for EmailAnalyzer animation
 * Contains questions and answers related to email thread content
 */

/**
 * Interface for a chatbot message/question
 */
export interface ChatMessage {
  /** Unique identifier for the message */
  id: string;
  /** The question text */
  question: string;
  /** Animation delay in milliseconds before showing of the question */
  animationDelay: number;
  /** Typing animation speed in milliseconds per character */
  typingSpeed: number;
  /** Whether the message is currently being typed */
  isTyping?: boolean;
  /** Whether the message has been fully displayed */
  isComplete?: boolean;
}

/**
 * Interface for a chatbot response/answer
 */
export interface ChatResponse {
  /** Unique identifier for the response */
  id: string;
  /** The answer text */
  answer: string;
  /** ID of question this response answers */
  questionId: string;
  /** Animation delay in milliseconds before showing of the response */
  animationDelay: number;
  /** Typing animation speed in milliseconds per character */
  typingSpeed: number;
  /** Whether the response contains a URL */
  hasUrl?: boolean;
  /** URL to include in the response (if applicable) */
  url?: string;
  /** Whether the response is currently being typed */
  isTyping?: boolean;
  /** Whether the response has been fully displayed */
  isComplete?: boolean;
}

/**
 * Array of 3 questions related to email thread content
 */
export const chatbotQuestions: ChatMessage[] = [
  {
    id: 'question-1',
    question: '¿Cuál es el objetivo principal del proyecto de rediseño del sitio web mencionado en los correos?',
    animationDelay: 1000,
    typingSpeed: 30,
    isTyping: false,
    isComplete: false
  },
  {
    id: 'question-2',
    question: '¿Quiénes son los miembros clave del equipo involucrados en este proyecto y cuáles son sus roles?',
    animationDelay: 3000,
    typingSpeed: 30,
    isTyping: false,
    isComplete: false
  },
  {
    id: 'question-3',
    question: '¿Qué stack técnico se ha propuesto para el rediseño del sitio web?',
    animationDelay: 5000,
    typingSpeed: 30,
    isTyping: false,
    isComplete: false
  }
];

/**
 * Array of 3 corresponding answers from chatbot
 */
export const chatbotResponses: ChatResponse[] = [
  {
    id: 'response-1',
    questionId: 'question-1',
    answer: 'Según el hilo de correos, los objetivos principales del proyecto de rediseño del sitio web son: 1) Mejorar la experiencia del usuario y la navegación, 2) Actualizar el diseño visual para que coincida con las nuevas directrices de marca, 3) Optimizar para la adaptabilidad móvil, y 4) Aumentar las tasas de conversión en un 15%. El proyecto está planeado para el Q4 con un cronograma estimado de 8-10 semanas desde el inicio hasta el lanzamiento.',
    animationDelay: 2000,
    typingSpeed: 10, // Further reduced from 15 to make ellipsis animation even shorter
    isTyping: false,
    isComplete: false
  },
  {
    id: 'response-2',
    questionId: 'question-2',
    answer: 'Los miembros clave del equipo involucrados en el proyecto son: Sarah Johnson (Gerente de Proyecto), Mike Wilson (Jefe de Marketing), David Chen (Desarrollador Principal), y Emily Rodriguez (Diseñadora UI/UX Senior). Sarah lidera el proyecto, Mike maneja los requisitos de marketing y SEO, David es responsable de la arquitectura técnica, y Emily lidera el trabajo de diseño.',
    animationDelay: 4000,
    typingSpeed: 10, // Further reduced from 15 to make ellipsis animation even shorter
    isTyping: false,
    isComplete: false
  },
  {
    id: 'response-3',
    questionId: 'question-3',
    answer: 'Puede probar este servicio en https://portfolio-abisay.vercel.app/email-analyzer donde podrá experimentar cómo la IA transforma hilos de correos complejos en insights accionables y respuestas automatizadas.',
    animationDelay: 6000,
    typingSpeed: 10, // Further reduced from 15 to make ellipsis animation even shorter
    hasUrl: true,
    url: 'https://portfolio-abisay.vercel.app/email-analyzer',
    isTyping: false,
    isComplete: false
  }
];

/**
 * Combined chat data for easy import
 */
export const chatbotData = {
  questions: chatbotQuestions,
  responses: chatbotResponses
};

console.info('chatbotData loaded', {
  questionsCount: chatbotData.questions.length,
  responsesCount: chatbotData.responses.length,
  questions: chatbotData.questions.map(q => ({ id: q.id, text: q.question })),
  responses: chatbotData.responses.map(r => ({ id: r.id, questionId: r.questionId, text: r.answer.substring(0, 50) + '...' }))
});

export default chatbotData;
