import { useCallback, useMemo, useState } from 'react';
import { CvAnimationTimeline } from '../Models/CvPhase';
import type { CvPhaseName } from '../Models/CvPhase';

const PHASE_DURATIONS: Record<CvPhaseName, number> = {
  intro: 4000,
  upload: 6000,
  analysis: 7000,
  ranking: 6000,
  interview: 6000,
  cta: 10000,
};

export const useCvAnimation = () => {
  const timeline = useMemo(
    () => CvAnimationTimeline.createFromDurations(PHASE_DURATIONS),
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
