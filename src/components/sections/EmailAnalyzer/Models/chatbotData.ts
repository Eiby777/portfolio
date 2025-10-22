/**
 * Chatbot data model for EmailAnalyzer animation
 * Contains questions and answers related to the email thread content
 */

/**
 * Interface for a chatbot message/question
 */
export interface ChatMessage {
  /** Unique identifier for the message */
  id: string;
  /** The question text */
  question: string;
  /** Animation delay in milliseconds before showing the question */
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
  /** ID of the question this response answers */
  questionId: string;
  /** Animation delay in milliseconds before showing the response */
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
 * Array of 3 questions related to the email thread content
 */
export const chatbotQuestions: ChatMessage[] = [
  {
    id: 'question-1',
    question: 'What is the main objective of the website redesign project mentioned in the emails?',
    animationDelay: 1000,
    typingSpeed: 30,
    isTyping: false,
    isComplete: false
  },
  {
    id: 'question-2',
    question: 'Who are the key team members involved in this project and what are their roles?',
    animationDelay: 3000,
    typingSpeed: 30,
    isTyping: false,
    isComplete: false
  },
  {
    id: 'question-3',
    question: 'What technical stack has been proposed for the website redesign?',
    animationDelay: 5000,
    typingSpeed: 30,
    isTyping: false,
    isComplete: false
  }
];

/**
 * Array of 3 corresponding answers from the chatbot
 */
export const chatbotResponses: ChatResponse[] = [
  {
    id: 'response-1',
    questionId: 'question-1',
    answer: 'Based on the email thread, the main objectives of the website redesign project are: 1) Improve user experience and navigation, 2) Update visual design to match new brand guidelines, 3) Optimize for mobile responsiveness, and 4) Increase conversion rates by 15%. The project is planned for Q4 with an estimated timeline of 8-10 weeks from kickoff to launch.',
    animationDelay: 2000,
    typingSpeed: 25,
    isTyping: false,
    isComplete: false
  },
  {
    id: 'response-2',
    questionId: 'question-2',
    answer: 'The key team members involved in the project are: Sarah Johnson (Project Manager), Mike Wilson (Head of Marketing), David Chen (Lead Developer), and Emily Rodriguez (Senior UI/UX Designer). Sarah is leading the project, Mike is handling marketing requirements and SEO, David is responsible for technical architecture, and Emily is leading the design work.',
    animationDelay: 4000,
    typingSpeed: 25,
    isTyping: false,
    isComplete: false
  },
  {
    id: 'response-3',
    questionId: 'question-3',
    answer: 'Puede probar este servicio en https://portfolio-abisay.vercel.app/email-analyzer donde podrá experimentar cómo la IA transforma hilos de email complejos en insights accionables y respuestas automatizadas.',
    animationDelay: 6000,
    typingSpeed: 25,
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