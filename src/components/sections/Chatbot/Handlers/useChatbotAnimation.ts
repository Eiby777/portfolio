import { useCallback, useMemo, useState } from 'react';
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

  const restart = useCallback(() => {
    setPhaseIndex(timeline.resetIndex());
    setIsPlaying(false);
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
