export type MeetingPhaseName = 'intro' | 'recording' | 'analysis' | 'results' | 'cta';

export class MeetingPhase {
  private readonly _name: MeetingPhaseName;
  private readonly _duration: number;

  constructor(name: MeetingPhaseName, duration: number) {
    if (duration <= 0) {
      throw new Error('MeetingPhase duration must be greater than zero');
    }

    this._name = name;
    this._duration = duration;
  }

  get name(): MeetingPhaseName {
    return this._name;
  }

  get duration(): number {
    return this._duration;
  }
}

export class MeetingAnimationTimeline {
  private readonly phases: MeetingPhase[];

  constructor(phases: MeetingPhase[]) {
    if (phases.length === 0) {
      throw new Error('MeetingAnimationTimeline requires at least one phase');
    }

    this.phases = phases;
  }

  getPhase(index: number): MeetingPhase {
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

  static createFromDurations(durations: Record<MeetingPhaseName, number>): MeetingAnimationTimeline {
    const orderedPhases: MeetingPhaseName[] = ['intro', 'recording', 'analysis', 'results', 'cta'];
    const phases = orderedPhases.map((name) => new MeetingPhase(name, durations[name]));
    return new MeetingAnimationTimeline(phases);
  }
}
