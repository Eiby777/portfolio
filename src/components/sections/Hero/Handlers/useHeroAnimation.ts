import { useState, useEffect, useCallback } from 'react';
import { defaultSearchText } from '../Models/keyboardLayout';

export type AnimationPhase = 'initial' | 'typing' | 'loading' | 'final';

interface UseHeroAnimationReturn {
  phase: AnimationPhase;
  searchText: string;
  activeKey: string;
  isComplete: boolean;
  startAnimation: () => void;
}

export const useHeroAnimation = (): UseHeroAnimationReturn => {
  const [phase, setPhase] = useState<AnimationPhase>('initial');
  const [searchText, setSearchText] = useState('');
  const [activeKey, setActiveKey] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const startAnimation = useCallback(() => {
    console.log('Starting animation');
    setPhase('typing');
  }, []);

  // Auto-start animation on mount
  useEffect(() => {
    console.log('Hero animation hook mounted, starting animation');
    const timer = setTimeout(() => {
      startAnimation();
    }, 1000); // Small delay to allow component to render

    return () => clearTimeout(timer);
  }, [startAnimation]);

  useEffect(() => {
    if (phase === 'typing') {
      console.log('Starting typing animation');
      let currentIndex = 0;
      const text = defaultSearchText;
      console.log('Typing text:', text);

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          const char = text[currentIndex];
          console.log('Typing char:', char);
          setActiveKey(char === ' ' ? ' ' : char.toUpperCase());
          setSearchText(prev => prev + char);
          currentIndex++;
        } else {
          console.log('Typing complete, moving to loading');
          clearInterval(typeInterval);
          setActiveKey('');
          setTimeout(() => setPhase('loading'), 500);
        }
      }, 150);

      return () => clearInterval(typeInterval);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'loading') {
      console.log('Starting loading phase');
      const loadingTimeout = setTimeout(() => {
        console.log('Loading complete, moving to final');
        setPhase('final');
      }, 1500);

      return () => clearTimeout(loadingTimeout);
    }
  }, [phase]);

  useEffect(() => {
    if (phase === 'final') {
      console.log('Animation complete');
      setIsComplete(true);
    }
  }, [phase]);

  return {
    phase,
    searchText,
    activeKey,
    isComplete,
    startAnimation,
  };
};