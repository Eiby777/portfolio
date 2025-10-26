
import { useState, useCallback } from 'react';

export type AnimationPhase = 'introduction' | 'problem-demo' | 'solution-reveal' | 'cta-display';

const PHASE_ORDER: AnimationPhase[] = ['introduction', 'problem-demo', 'solution-reveal', 'cta-display'];

export const useSimplifiedAnimation = () => {
  const [phase, setPhase] = useState<AnimationPhase>('introduction');
  const [isPlaying, setIsPlaying] = useState(false);

  const startAnimation = useCallback(() => {
    setIsPlaying(true);
    setPhase('introduction');
  }, []);

  const nextPhase = useCallback(() => {
    setPhase(current => {
      const currentIndex = PHASE_ORDER.indexOf(current);
      if (currentIndex < PHASE_ORDER.length - 1) {
        return PHASE_ORDER[currentIndex + 1];
      }
      return current;
    });
  }, []);

  const prevPhase = useCallback(() => {
    setPhase(current => {
      const currentIndex = PHASE_ORDER.indexOf(current);
      if (currentIndex > 0) {
        return PHASE_ORDER[currentIndex - 1];
      }
      return current;
    });
  }, []);

  const isFirstPhase = PHASE_ORDER.indexOf(phase) === 0;
  const isLastPhase = PHASE_ORDER.indexOf(phase) === PHASE_ORDER.length - 1;

  return {
    phase,
    isPlaying,
    startAnimation,
    nextPhase,
    prevPhase,
    isFirstPhase,
    isLastPhase,
  };
};
