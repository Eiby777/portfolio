export type AnomalyPhaseName = 
  | 'intro' 
  | 'data-analysis' 
  | 'anomaly-detection' 
  | 'predictions' 
  | 'cta';

export class AnomalyPhase {
  private readonly _name: AnomalyPhaseName;
  private readonly _duration: number;

  constructor(name: AnomalyPhaseName, duration: number) {
    if (duration < 0) {
      throw new Error('AnomalyPhase duration must be non-negative');
    }

    this._name = name;
    this._duration = duration;
  }

  get name(): AnomalyPhaseName {
    return this._name;
  }

  get duration(): number {
    return this._duration;
  }
}

export class AnomalyAnimationTimeline {
  private readonly phases: AnomalyPhase[];

  constructor(phases: AnomalyPhase[]) {
    if (phases.length === 0) {
      throw new Error('AnomalyAnimationTimeline requires at least one phase');
    }

    this.phases = phases;
  }

  getPhase(index: number): AnomalyPhase {
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

  static createFromDurations(
    durations: Record<AnomalyPhaseName, number>
  ): AnomalyAnimationTimeline {
    const orderedPhases: AnomalyPhaseName[] = [
      'intro',
      'data-analysis',
      'anomaly-detection',
      'predictions',
      'cta'
    ];
    const phases = orderedPhases.map((name) => new AnomalyPhase(name, durations[name]));
    return new AnomalyAnimationTimeline(phases);
  }
}
