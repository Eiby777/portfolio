import { useCallback, useMemo, useState } from 'react';
import { MeetingAnimationTimeline } from '../Models/MeetingPhase';
import type { MeetingPhaseName } from '../Models/MeetingPhase';

const PHASE_DURATIONS: Record<MeetingPhaseName, number> = {
  intro: 3000,
  recording: 9500,
  analysis: 6500,
  results: 12000,
  cta: 8000,
};

export const useMeetingAnimation = () => {
  const timeline = useMemo(
    () => MeetingAnimationTimeline.createFromDurations(PHASE_DURATIONS),
    []
  );
  const [phaseIndex, setPhaseIndex] = useState<number>(timeline.resetIndex());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const start = useCallback(() => {
    setPhaseIndex(timeline.resetIndex());
    setIsPlaying(true);
  }, [timeline]);

  const goToNextPhase = useCallback(() => {
    setPhaseIndex((current) => {
      if (timeline.isLast(current)) {
        return current;
      }
      return timeline.getNextIndex(current);
    });
  }, [timeline]);

  const goToPrevPhase = useCallback(() => {
    setPhaseIndex((current) => {
      if (current <= 0) {
        return current;
      }
      return current - 1;
    });
  }, []);

  const restart = useCallback(() => {
    setPhaseIndex(timeline.resetIndex());
    setIsPlaying(false);
  }, [timeline]);

  const phase = timeline.getPhase(phaseIndex).name;
  const isFirstPhase = phaseIndex === 0;
  const isLastPhase = timeline.isLast(phaseIndex);

  return {
    phase,
    isPlaying,
    start,
    restart,
    goToNextPhase,
    goToPrevPhase,
    isFirstPhase,
    isLastPhase,
  };
};
