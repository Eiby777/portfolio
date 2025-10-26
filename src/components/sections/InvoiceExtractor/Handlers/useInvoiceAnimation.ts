import { useCallback, useMemo, useState } from 'react';
import { InvoiceAnimationTimeline } from '../Models/InvoicePhase';
import type { InvoicePhaseName } from '../Models/InvoicePhase';

const PHASE_DURATIONS: Record<InvoicePhaseName, number> = {
  intro: 3500,
  formats: 9000,
  validation: 11000,
  export: 7000,
};

export const useInvoiceAnimation = () => {
  const timeline = useMemo(
    () => InvoiceAnimationTimeline.createFromDurations(PHASE_DURATIONS),
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
