import { useState, useEffect, useRef } from 'react';

/**
 * Interface for the email scroll hook return value
 */
interface UseEmailScrollReturn {
  /** Ref to attach to the scrollable container */
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  /** Whether scrolling is currently in progress */
  isScrolling: boolean;
  /** Whether scrolling has completed */
  hasScrolledToEnd: boolean;
  /** Function to start the auto-scroll animation */
  startScroll: () => void;
  /** Function to stop the auto-scroll animation */
  stopScroll: () => void;
  /** Current scroll position as a percentage (0-100) */
  scrollProgress: number;
}

/**
 * Custom hook for managing auto-scroll functionality in the email thread viewer
 * @param scrollSpeed - Scroll speed in pixels per second (default: 100)
 * @param onComplete - Callback function when scrolling completes
 * @returns Object with scroll controls and state
 */
export const useEmailScroll = (
  scrollSpeed: number = 100,
  onComplete?: () => void
): UseEmailScrollReturn => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number>(0);
  
  /**
   * Start the auto-scroll animation
   */
  const startScroll = () => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    setHasScrolledToEnd(false);
    setScrollProgress(0);
    lastTimestampRef.current = 0;
    
    // Start at the top
    scrollContainerRef.current.scrollTop = 0;
    
    // Begin the animation loop
    requestAnimationFrame(animateScroll);
  };
  
  /**
   * Stop the auto-scroll animation
   */
  const stopScroll = () => {
    setIsScrolling(false);
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };
  
  /**
   * Animation loop for smooth scrolling
   */
  const animateScroll = (timestamp: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const maxScroll = container.scrollHeight - container.clientHeight;
    
    // Initialize timestamp on first run
    if (lastTimestampRef.current === 0) {
      lastTimestampRef.current = timestamp;
    }
    
    // Calculate time delta
    const deltaTime = timestamp - lastTimestampRef.current;
    lastTimestampRef.current = timestamp;
    
    // Calculate scroll distance based on speed and time delta
    const scrollDistance = (scrollSpeed * deltaTime) / 1000;
    
    // Update scroll position
    const newScrollTop = Math.min(container.scrollTop + scrollDistance, maxScroll);
    container.scrollTop = newScrollTop;
    
    // Update progress
    const progress = maxScroll > 0 ? (newScrollTop / maxScroll) * 100 : 0;
    setScrollProgress(progress);
    
    // Check if we've reached the end
    if (newScrollTop >= maxScroll) {
      setIsScrolling(false);
      setHasScrolledToEnd(true);
      setScrollProgress(100);
      
      // Call completion callback if provided
      if (onComplete) {
        onComplete();
      }
      
      return;
    }
    
    // Continue animation
    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };
  
  /**
   * Handle manual scroll events
   */
  const handleManualScroll = () => {
    if (!scrollContainerRef.current || isScrolling) return;
    
    const container = scrollContainerRef.current;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const currentScroll = container.scrollTop;
    
    const progress = maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0;
    setScrollProgress(progress);
    
    // Check if at the end
    if (currentScroll >= maxScroll) {
      setHasScrolledToEnd(true);
    } else {
      setHasScrolledToEnd(false);
    }
  };
  
  /**
   * Set up event listeners
   */
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    container.addEventListener('scroll', handleManualScroll);
    
    return () => {
      container.removeEventListener('scroll', handleManualScroll);
      
      // Clean up animation frame on unmount
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isScrolling]);
  
  return {
    scrollContainerRef,
    isScrolling,
    hasScrolledToEnd,
    startScroll,
    stopScroll,
    scrollProgress
  };
};

export default useEmailScroll;