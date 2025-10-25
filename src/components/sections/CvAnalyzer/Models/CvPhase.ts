export type CvPhaseName = 
  | 'intro' 
  | 'upload' 
  | 'analysis' 
  | 'ranking' 
  | 'interview' 
  | 'cta';

export class CvPhase {
  private readonly _name: CvPhaseName;
  private readonly _duration: number;

  constructor(name: CvPhaseName, duration: number) {
    if (duration <= 0) {
      throw new Error('CvPhase duration must be greater than zero');
    }

    this._name = name;
    this._duration = duration;
  }

  get name(): CvPhaseName {
    return this._name;
  }

  get duration(): number {
    return this._duration;
  }
}

export class CvAnimationTimeline {
  private readonly phases: CvPhase[];

  constructor(phases: CvPhase[]) {
    if (phases.length === 0) {
      throw new Error('CvAnimationTimeline requires at least one phase');
    }

    this.phases = phases;
  }

  getPhase(index: number): CvPhase {
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

  static createFromDurations(durations: Record<CvPhaseName, number>): CvAnimationTimeline {
    const orderedPhases: CvPhaseName[] = [
      'intro',
      'upload',
      'analysis',
      'ranking',
      'interview',
      'cta'
    ];
    const phases = orderedPhases.map((name) => new CvPhase(name, durations[name]));
    return new CvAnimationTimeline(phases);
  }
}
