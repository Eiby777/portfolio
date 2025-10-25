import { useCallback, useEffect, useMemo, useState } from 'react';
import { AnomalyAnimationTimeline, type AnomalyPhaseName } from '../Models/AnomalyPhase';

const PHASE_DURATIONS: Record<AnomalyPhaseName, number> = {
  intro: 4000,
  'data-analysis': 9000,
  'anomaly-detection': 10000,
  predictions: 8000,
  cta: 0,
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

  const goToNextPhase = useCallback(() => {
    setPhaseIndex((current) => {
      if (timeline.isLast(current)) {
        return current;
      }
      return timeline.getNextIndex(current);
    });
  }, [timeline]);

  const phase = timeline.getPhase(phaseIndex).name;

  return {
    phase,
    isPlaying,
    start,
    goToNextPhase,
  };
};
