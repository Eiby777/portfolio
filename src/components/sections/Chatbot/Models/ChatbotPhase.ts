export type ChatbotPhaseName = 
  | 'intro' 
  | 'customer-query' 
  | 'chatbot-response' 
  | 'cta';

export class ChatbotPhase {
  private readonly _name: ChatbotPhaseName;
  private readonly _duration: number;

  constructor(name: ChatbotPhaseName, duration: number) {
    if (duration <= 0) {
      throw new Error('ChatbotPhase duration must be greater than zero');
    }

    this._name = name;
    this._duration = duration;
  }

  get name(): ChatbotPhaseName {
    return this._name;
  }

  get duration(): number {
    return this._duration;
  }
}

export class ChatbotAnimationTimeline {
  private readonly phases: ChatbotPhase[];

  constructor(phases: ChatbotPhase[]) {
    if (phases.length === 0) {
      throw new Error('ChatbotAnimationTimeline requires at least one phase');
    }

    this.phases = phases;
  }

  getPhase(index: number): ChatbotPhase {
    const safeIndex = Math.min(Math.max(index, 0), this.phases.length - 1);
    return this.phases[safeIndex];
  }

  getNextIndex(currentIndex: number): number {
    return currentIndex >= this.phases.length - 1 
      ? currentIndex 
      : currentIndex + 1;
  }

  isLast(index: number): boolean {
    return index >= this.phases.length - 1;
  }

  resetIndex(): number {
    return 0;
  }

  static createFromDurations(
    durations: Record<ChatbotPhaseName, number>
  ): ChatbotAnimationTimeline {
    const orderedPhases: ChatbotPhaseName[] = [
      'intro',
      'customer-query',
      'chatbot-response',
      'cta'
    ];
    const phases = orderedPhases.map(
      (name) => new ChatbotPhase(name, durations[name])
    );
    return new ChatbotAnimationTimeline(phases);
  }
}
