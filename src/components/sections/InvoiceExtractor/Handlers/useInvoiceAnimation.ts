import { useCallback, useEffect, useMemo, useState } from 'react';
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
