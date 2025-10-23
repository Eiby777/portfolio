export type MessageAuthor = 'customer' | 'chatbot' | 'system';

export class ChatbotMessage {
  private readonly _author: MessageAuthor;
  private readonly _content: string;
  private readonly _delay: number;

  constructor(author: MessageAuthor, content: string, delay: number) {
    if (delay < 0) {
      throw new Error('ChatbotMessage delay cannot be negative');
    }

    this._author = author;
    this._content = content;
    this._delay = delay;
  }

  get author(): MessageAuthor {
    return this._author;
  }

  get content(): string {
    return this._content;
  }

  get delay(): number {
    return this._delay;
  }
}

export class ChatbotScenario {
  private readonly messages: ChatbotMessage[];

  constructor(messages: ChatbotMessage[]) {
    if (messages.length === 0) {
      throw new Error('ChatbotScenario requires at least one message');
    }

    this.messages = messages;
  }

  get allMessages(): ChatbotMessage[] {
    return [...this.messages];
  }

  static createCustomerServiceScenario(): ChatbotScenario {
    return new ChatbotScenario([
      new ChatbotMessage(
        'customer',
        'Hola, necesito saber si el envío express aplica para Santiago.',
        0
      ),
      new ChatbotMessage(
        'chatbot',
        '¡Hola! Según tu política logística, el envío express se ofrece en Santo Domingo y Santiago con un costo adicional de RD$350.',
        1100
      ),
      new ChatbotMessage(
        'customer',
        '¿Y cuánto tardaría en llegar si hago el pedido hoy?',
        4600
      ),
      new ChatbotMessage(
        'chatbot',
        'Para órdenes confirmadas antes de las 4:00 p.m., la entrega express llega en menos de 24 horas.',
        6100
      ),
      new ChatbotMessage(
        'chatbot',
        '¿Deseas que le envíe al cliente un enlace de pago o que programe una llamada con un agente?',
        9500
      )
    ]);
  }
}
