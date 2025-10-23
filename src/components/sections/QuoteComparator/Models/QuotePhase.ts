export type QuotePhaseName = 'intro' | 'upload' | 'analysis' | 'comparison' | 'recommendation' | 'cta';

export class QuotePhase {
  private readonly _name: QuotePhaseName;
  private readonly _duration: number;

  constructor(name: QuotePhaseName, duration: number) {
    if (duration <= 0) {
      throw new Error('QuotePhase duration must be greater than zero');
    }

    this._name = name;
    this._duration = duration;
  }

  get name(): QuotePhaseName {
    return this._name;
  }

  get duration(): number {
    return this._duration;
  }
}

export class QuoteAnimationTimeline {
  private readonly phases: QuotePhase[];

  constructor(phases: QuotePhase[]) {
    if (phases.length === 0) {
      throw new Error('QuoteAnimationTimeline requires at least one phase');
    }

    this.phases = phases;
  }

  getPhase(index: number): QuotePhase {
    const safeIndex = Math.min(Math.max(index, 0), this.phases.length - 1);
    return this.phases[safeIndex];
  }

  getNextIndex(currentIndex: number): number {
    return currentIndex >= this.phases.length - 1 ? currentIndex : currentIndex + 1;
  }

  isLast(index: number): boolean {
    return index >= this.phases.length - 1;
  }

  resetIndex(): number {
    return 0;
  }

  static createFromDurations(durations: Record<QuotePhaseName, number>): QuoteAnimationTimeline {
    const orderedPhases: QuotePhaseName[] = [
      'intro',
      'upload',
      'analysis',
      'comparison',
      'recommendation',
      'cta'
    ];
    const phases = orderedPhases.map((name) => new QuotePhase(name, durations[name]));
    return new QuoteAnimationTimeline(phases);
  }
}
