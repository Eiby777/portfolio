export type InvoicePhaseName = 'intro' | 'formats' | 'validation' | 'export';

export class InvoicePhase {
  private readonly _name: InvoicePhaseName;
  private readonly _duration: number;

  constructor(name: InvoicePhaseName, duration: number) {
    if (duration <= 0) {
      throw new Error('InvoicePhase duration must be greater than zero');
    }

    this._name = name;
    this._duration = duration;
  }

  get name(): InvoicePhaseName {
    return this._name;
  }

  get duration(): number {
    return this._duration;
  }
}

export class InvoiceAnimationTimeline {
  private readonly phases: InvoicePhase[];

  constructor(phases: InvoicePhase[]) {
    if (phases.length === 0) {
      throw new Error('InvoiceAnimationTimeline requires at least one phase');
    }

    this.phases = phases;
  }

  getPhase(index: number): InvoicePhase {
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

  static createFromDurations(durations: Record<InvoicePhaseName, number>): InvoiceAnimationTimeline {
    const orderedPhases: InvoicePhaseName[] = ['intro', 'formats', 'validation', 'export'];
    const phases = orderedPhases.map((name) => new InvoicePhase(name, durations[name]));
    return new InvoiceAnimationTimeline(phases);
  }
}
