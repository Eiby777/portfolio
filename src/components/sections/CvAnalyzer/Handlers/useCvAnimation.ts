import { useCallback, useEffect, useMemo, useState } from 'react';
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
