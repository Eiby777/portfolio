import { useCallback, useEffect, useMemo, useState } from 'react';
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

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const currentPhase = timeline.getPhase(phaseIndex);
    const timeout = window.setTimeout(() => {
      if (timeline.isLast(phaseIndex)) {
        setIsPlaying(false);
        return;
      }

      setPhaseIndex(timeline.getNextIndex(phaseIndex));
    }, currentPhase.duration);

    return () => window.clearTimeout(timeout);
  }, [isPlaying, phaseIndex, timeline]);

  const restart = useCallback(() => {
    setPhaseIndex(timeline.resetIndex());
    setIsPlaying(false);
  }, [timeline]);

  const phase = timeline.getPhase(phaseIndex).name;
  const isFinalPhase = timeline.isLast(phaseIndex);

  return {
    phase,
    isPlaying,
    start,
    restart,
    isFinalPhase,
  };
};
