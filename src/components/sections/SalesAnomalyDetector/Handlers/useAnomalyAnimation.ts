import { useCallback, useMemo, useState } from 'react';
import { AnomalyAnimationTimeline, type AnomalyPhaseName } from '../Models/AnomalyPhase';

const PHASE_DURATIONS: Record<AnomalyPhaseName, number> = {
  intro: 4000,
  'data-analysis': 9000,
  'anomaly-detection': 10000,
  predictions: 8000,
  cta: 5000,
};

export const useAnomalyAnimation = () => {
  const timeline = useMemo(
    () => AnomalyAnimationTimeline.createFromDurations(PHASE_DURATIONS),
    []
  );

  const [phaseIndex, setPhaseIndex] = useState<number>(timeline.resetIndex());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const start = useCallback(() => {
    setPhaseIndex(timeline.resetIndex());
    setIsPlaying(true);
    // Auto-avanzar a la siguiente fase después de un breve delay
    setTimeout(() => {
      goToNextPhase();
    }, 500);
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

  const phase = timeline.getPhase(phaseIndex).name;
  const isFirstPhase = phaseIndex === 0;
  const isLastPhase = timeline.isLast(phaseIndex);

  return {
    phase,
    isPlaying,
    start,
    goToNextPhase,
    goToPrevPhase,
    isFirstPhase,
    isLastPhase,
  };
};
