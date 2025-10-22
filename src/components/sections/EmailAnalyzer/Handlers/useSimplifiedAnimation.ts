
import { useState, useEffect, useCallback } from 'react';

export type AnimationPhase = 'introduction' | 'problem-demo' | 'solution-reveal' | 'cta-display';

const PHASE_DURATIONS = {
  introduction: 500,
  'problem-demo': 12000,
  'solution-reveal': 25000, // Aumentado para dar más tiempo al chatbot
  'cta-display': 3000,
};

export const useSimplifiedAnimation = () => {
  const [phase, setPhase] = useState<AnimationPhase>('introduction');
  const [isPlaying, setIsPlaying] = useState(false);

  const startAnimation = useCallback(() => {
    setIsPlaying(true);
    setPhase('introduction');
  }, []);

  const nextPhase = useCallback(() => {
    setPhase(current => {
      switch (current) {
        case 'introduction':
          return 'problem-demo';
        case 'problem-demo':
          return 'solution-reveal';
        case 'solution-reveal':
          return 'cta-display';
        default:
          return current;
      }
    });
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timeout = setTimeout(() => {
      nextPhase();
    }, PHASE_DURATIONS[phase]);

    return () => clearTimeout(timeout);
  }, [phase, isPlaying, nextPhase]);

  return {
    phase,
    isPlaying,
    startAnimation,
    nextPhase,
  };
};
