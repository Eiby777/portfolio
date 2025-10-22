import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EmailThread } from '../Models/emailThreadsData';
import EmailMessage from './EmailMessage';
import { useEmailScroll } from '../Handlers/useEmailScroll';
import {
  ThreadContainer,
  ThreadHeader,
  Subject,
  Participants,
  ThreadDate,
  threadContainerVariants
} from '../Styles/EmailThreadStyles';

interface EmailThreadViewerProps {
  /** Email thread data to display */
  thread: EmailThread;
  /** Whether to start auto-scroll animation */
  shouldAutoScroll?: boolean;
  /** Callback when scrolling completes */
  onScrollComplete?: () => void;
  /** Scroll speed in pixels per second */
  scrollSpeed?: number;
  /** Maximum height for the thread container */
  maxHeight?: string;
  /** Whether to show height reduction animation */
  enableHeightAnimation?: boolean;
  /** Whether to show tedious work tooltips */
  showTooltips?: boolean;
}

interface TooltipData {
  id: string;
  message: string;
  color: string;
  position: { top: string; left: string };
  delay: number;
}

/**
 * Component that displays an email thread in Gmail format with auto-scroll functionality
 * @param thread - Email thread data to display
 * @param shouldAutoScroll - Whether to start auto-scroll animation
 * @param onScrollComplete - Callback when scrolling completes
 * @param scrollSpeed - Scroll speed in pixels per second
 */
const EmailThreadViewer: React.FC<EmailThreadViewerProps> = ({
  thread,
  shouldAutoScroll = false,
  onScrollComplete,
  scrollSpeed = 100,
  maxHeight = '60vh',
  enableHeightAnimation = true,
  showTooltips = true
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showThread, setShowThread] = useState(false);
  const [containerHeight, setContainerHeight] = useState(maxHeight);
  const [visibleTooltips, setVisibleTooltips] = useState<string[]>([]);
  
  const {
    scrollContainerRef,
    isScrolling,
    hasScrolledToEnd,
    startScroll,
    scrollProgress
  } = useEmailScroll(scrollSpeed, onScrollComplete);

  // Tooltips data showing the tedious work
  const tooltips: TooltipData[] = [
    {
      id: 'tooltip-1',
      message: '¡Demasiado largo para leer!',
      color: '#fbbc04', // Amarillo
      position: { top: '15%', left: '80%' },
      delay: 2000
    },
    {
      id: 'tooltip-2',
      message: '¿Quién tiene tiempo para esto?',
      color: '#ea4335', // Rojo
      position: { top: '30%', left: '15%' },
      delay: 3500
    },
    {
      id: 'tooltip-3',
      message: 'Información importante perdida',
      color: '#fbbc04', // Amarillo
      position: { top: '45%', left: '75%' },
      delay: 5000
    },
    {
      id: 'tooltip-4',
      message: 'Trabajo manual ineficiente',
      color: '#ea4335', // Rojo
      position: { top: '60%', left: '20%' },
      delay: 6500
    }
  ];

  // Initialize the component
  useEffect(() => {
    // Show the thread after a short delay
    const timer = setTimeout(() => {
      setShowThread(true);
      if (shouldAutoScroll) {
        // Start auto-scroll after thread is visible
        setTimeout(() => {
          setIsAnimating(true);
          startScroll();
          
          // Show tooltips sequentially
          if (showTooltips) {
            tooltips.forEach((tooltip) => {
              setTimeout(() => {
                setVisibleTooltips(prev => [...prev, tooltip.id]);
              }, tooltip.delay);
            });
          }
        }, 500);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [shouldAutoScroll, startScroll, showTooltips, tooltips]);

  // Handle height reduction animation during scroll
  useEffect(() => {
    if (!enableHeightAnimation || !isScrolling) return;

    const heightReductionInterval = setInterval(() => {
      setContainerHeight(prev => {
        const currentHeight = parseInt(prev.replace('vh', ''));
        const newHeight = Math.max(currentHeight - 0.5, 30); // Reduce height but not less than 30vh
        return `${newHeight}vh`;
      });
    }, 200);

    return () => clearInterval(heightReductionInterval);
  }, [enableHeightAnimation, isScrolling]);

  // Handle scroll completion
  useEffect(() => {
    if (hasScrolledToEnd && isAnimating) {
      setIsAnimating(false);
    }
  }, [hasScrolledToEnd, isAnimating]);

  // Format thread date
  const formatThreadDate = (date: Date): string => {
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return date.toLocaleDateString('en-US', { weekday: 'long' });
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
      });
    }
  };

  // Get participant names
  const getParticipantNames = (): string => {
    const allEmails = new Set<string>();
    
    thread.messages.forEach(message => {
      allEmails.add(message.from);
      message.to.forEach(email => allEmails.add(email));
      if (message.cc) {
        message.cc.forEach(email => allEmails.add(email));
      }
    });
    
    const names = Array.from(allEmails).map(email => {
      const name = email.split('@')[0];
      const parts = name.split('.');
      if (parts.length >= 2) {
        return `${parts[0].charAt(0).toUpperCase() + parts[0].slice(1)} ${parts[1].charAt(0).toUpperCase() + parts[1].slice(1)}`;
      }
      return name;
    });
    
    if (names.length <= 3) {
      return names.join(', ');
    } else {
      return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others`;
    }
  };

  return (
    <motion.div
      style={{
        width: '100%',
        height: containerHeight,
        backgroundColor: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        position: 'relative',
        transition: enableHeightAnimation ? 'height 0.3s ease-out' : 'none'
      }}
    >
      {/* Email Thread Content */}
      <div
        ref={scrollContainerRef}
        style={{
          height: '100%',
          overflowY: 'auto',
          padding: '1rem'
        }}
      >
        <AnimatePresence>
          {showThread && (
            <ThreadContainer
              as={motion.div}
              variants={threadContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Thread Header */}
              <ThreadHeader>
                <Subject>{thread.subject}</Subject>
                <Participants>{getParticipantNames()}</Participants>
                <ThreadDate>{formatThreadDate(thread.createdDate)}</ThreadDate>
              </ThreadHeader>

              {/* Email Messages */}
              {thread.messages.map((message, index) => (
                <EmailMessage
                  key={message.id}
                  message={message}
                  index={index}
                  totalMessages={thread.messages.length}
                />
              ))}
            </ThreadContainer>
          )}
        </AnimatePresence>
      </div>

      {/* Tooltips showing tedious work */}
      <AnimatePresence>
        {showTooltips && tooltips.map((tooltip) => (
          visibleTooltips.includes(tooltip.id) && (
            <motion.div
              key={tooltip.id}
              initial={{
                opacity: 0,
                scale: 0.8,
                y: -10
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                y: -10
              }}
              transition={{
                duration: 0.4,
                ease: 'easeOut'
              }}
              style={{
                position: 'absolute',
                top: tooltip.position.top,
                left: tooltip.position.left,
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                pointerEvents: 'none'
              }}
            >
              <div style={{
                backgroundColor: tooltip.color,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                maxWidth: '200px',
                textAlign: 'center',
                position: 'relative'
              }}>
                {tooltip.message}
                <div style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderTop: `6px solid ${tooltip.color}`
                }} />
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Scroll Progress Indicator (for debugging) */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          zIndex: 100
        }}>
          {isScrolling ? 'Scrolling' : hasScrolledToEnd ? 'Complete' : 'Ready'} - {Math.round(scrollProgress)}%
        </div>
      )}
    </motion.div>
  );
};

export default EmailThreadViewer;