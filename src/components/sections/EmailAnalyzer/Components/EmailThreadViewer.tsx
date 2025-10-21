import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EmailThread } from '../Models/emailThreadsData';
import EmailMessage from './EmailMessage';
import { useEmailScroll } from '../Handlers/useEmailScroll';
import {
  ThreadViewerContainer,
  Sidebar,
  Logo,
  Navigation,
  MainContent,
  TopBar,
  SearchBar,
  Icons,
  Icon,
  EmailView,
  ThreadContainer,
  ThreadHeader,
  Subject,
  Participants,
  ThreadDate,
  ReplySection,
  ReplyButton,
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
  scrollSpeed = 100
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showThread, setShowThread] = useState(false);
  
  const {
    scrollContainerRef,
    isScrolling,
    hasScrolledToEnd,
    startScroll,
    scrollProgress
  } = useEmailScroll(scrollSpeed, onScrollComplete);

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
        }, 500);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [shouldAutoScroll, startScroll]);

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
    <ThreadViewerContainer>
      {/* Gmail-like Sidebar */}
      <Sidebar>
        <Logo>Gmail</Logo>
        <Navigation>
          <ul>
            <li><a href="#" className="active">Inbox</a></li>
            <li><a href="#">Starred</a></li>
            <li><a href="#">Important</a></li>
            <li><a href="#">Sent</a></li>
            <li><a href="#">Drafts</a></li>
            <li><a href="#">All Mail</a></li>
          </ul>
        </Navigation>
      </Sidebar>

      {/* Main Content Area */}
      <MainContent>
        {/* Top Bar */}
        <TopBar>
          <Icon>☰</Icon>
          <SearchBar>
            <input type="search" placeholder="Search Gmail" aria-label="Search" />
          </SearchBar>
          <Icons>
            <Icon>↑</Icon>
            <Icon>✉</Icon>
            <Icon>⚙</Icon>
            <Icon>👤</Icon>
          </Icons>
        </TopBar>

        {/* Email Thread */}
        <EmailView ref={scrollContainerRef}>
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

                {/* Reply Section */}
                <ReplySection>
                  <ReplyButton>Reply</ReplyButton>
                  <ReplyButton style={{ backgroundColor: '#5f6368' }}>Reply all</ReplyButton>
                  <ReplyButton style={{ backgroundColor: '#5f6368' }}>Forward</ReplyButton>
                </ReplySection>
              </ThreadContainer>
            )}
          </AnimatePresence>
        </EmailView>
      </MainContent>

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
    </ThreadViewerContainer>
  );
};

export default EmailThreadViewer;