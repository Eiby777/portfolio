import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChatbotAnimationTimeline } from '../Models/ChatbotPhase';
import type { ChatbotPhaseName } from '../Models/ChatbotPhase';

const PHASE_DURATIONS: Record<ChatbotPhaseName, number> = {
  intro: 3500,
  'customer-query': 5000,
  'chatbot-response': 12000,
  cta: 5000,
};

export class ChatbotAnimationController {
  private timeline: ChatbotAnimationTimeline;

  constructor(durations: Record<ChatbotPhaseName, number>) {
    this.timeline = ChatbotAnimationTimeline.createFromDurations(durations);
  }

  getTimeline(): ChatbotAnimationTimeline {
    return this.timeline;
  }
}

export const useChatbotAnimation = () => {
  const controller = useMemo(
    () => new ChatbotAnimationController(PHASE_DURATIONS),
    []
  );

  const timeline = controller.getTimeline();
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
