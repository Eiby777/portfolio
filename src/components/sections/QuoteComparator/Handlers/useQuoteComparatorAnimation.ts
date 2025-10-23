import { useCallback, useEffect, useMemo, useState } from 'react';
import { QuoteAnimationTimeline, type QuotePhaseName } from '../Models/QuotePhase';

const PHASE_DURATIONS: Record<QuotePhaseName, number> = {
  intro: 4000,
  upload: 7000,
  analysis: 9000,
  comparison: 9000,
  recommendation: 7000,
  cta: 4000,
};

export const useQuoteComparatorAnimation = () => {
  const timeline = useMemo(
    () => QuoteAnimationTimeline.createFromDurations(PHASE_DURATIONS),
    []
  );

  const [phaseIndex, setPhaseIndex] = useState<number>(timeline.resetIndex());
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const start = useCallback(() => {
    setPhaseIndex(timeline.resetIndex());
    setIsPlaying(true);
  }, [timeline]);

  const goToPhase = useCallback(
    (target: QuotePhaseName) => {
      const ordered: QuotePhaseName[] = ['intro', 'upload', 'analysis', 'comparison', 'recommendation', 'cta'];
      const targetIndex = ordered.indexOf(target);
      if (targetIndex >= 0) {
        setPhaseIndex(targetIndex);
      }
    },
    []
  );

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

  const phase = timeline.getPhase(phaseIndex).name;
  const isFinalPhase = timeline.isLast(phaseIndex);

  return {
    phase,
    isPlaying,
    isFinalPhase,
    start,
    goToPhase,
  };
};
