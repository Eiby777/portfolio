import { useCallback, useMemo, useState } from 'react';
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
    // Auto-avanzar a la siguiente fase después de un breve delay
    setTimeout(() => {
      goToNextPhase();
    }, 500);
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
    isFirstPhase,
    isLastPhase,
    start,
    goToPhase,
    goToNextPhase,
    goToPrevPhase,
  };
};
