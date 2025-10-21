import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaChevronDown, FaChevronRight, FaStar, FaRegStar } from 'react-icons/fa';

interface EmailThread {
  id: string;
  sender: string;
  subject: string;
  date: string;
  recipients: string[];
  body: string;
  isRead: boolean;
  isStarred: boolean;
  isImportant: boolean;
}

interface EmailThreadAccordionProps {
  threads: EmailThread[];
  onThreadClick?: (threadId: string) => void;
  onStarClick?: (threadId: string) => void;
}

// Gmail-inspired color scheme
const colors = {
  unread: '#ea4335', // Gmail red
  read: '#1a73e8',   // Gmail blue
  starred: '#fbbc04', // Gmail yellow
  important: '#ff6d01', // Gmail orange
  background: 'rgba(255, 255, 255, 0.05)',
  border: 'rgba(255, 255, 255, 0.1)',
  text: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.7)',
};

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const ThreadItem = styled(motion.div)`
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ThreadHeader = styled(motion.div)<{ $isRead: boolean; $isImportant: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${({ $isRead }) => $isRead ? colors.background : 'rgba(234, 67, 53, 0.1)'};
  border: 1px solid ${({ $isRead }) => $isRead ? colors.border : colors.unread};
  border-left: 4px solid ${({ $isImportant }) => $isImportant ? colors.important : colors.read};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ExpandIcon = styled.div<{ $isExpanded: boolean }>`
  margin-right: 0.75rem;
  color: ${colors.textSecondary};
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  transform: ${({ $isExpanded }) => $isExpanded ? 'rotate(90deg)' : 'rotate(0deg)'};
`;

const SenderInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const SenderName = styled.div<{ $isRead: boolean }>`
  font-weight: ${({ $isRead }) => $isRead ? 'normal' : 'bold'};
  color: ${({ $isRead }) => $isRead ? colors.textSecondary : colors.text};
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Subject = styled.div<{ $isRead: boolean }>`
  font-weight: ${({ $isRead }) => $isRead ? 'normal' : 'bold'};
  color: ${({ $isRead }) => $isRead ? colors.textSecondary : colors.text};
  font-size: 0.85rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ThreadMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-left: 1rem;
`;

const DateText = styled.span`
  color: ${colors.textSecondary};
  font-size: 0.8rem;
  white-space: nowrap;
`;

const StarButton = styled.button<{ $isStarred: boolean }>`
  background: none;
  border: none;
  color: ${({ $isStarred }) => $isStarred ? colors.starred : colors.textSecondary};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: ${colors.starred};
  }
`;

const ThreadBody = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${colors.border};
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: hidden;
`;

const BodyContent = styled.div`
  padding: 1.5rem;
`;

const RecipientsSection = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${colors.border};
`;

const RecipientsLabel = styled.span`
  color: ${colors.textSecondary};
  font-size: 0.85rem;
  font-weight: 500;
  margin-right: 0.5rem;
`;

const RecipientsList = styled.span`
  color: ${colors.text};
  font-size: 0.85rem;
`;

const EmailBody = styled.div`
  color: ${colors.text};
  line-height: 1.6;
  font-size: 0.9rem;
  white-space: pre-wrap;
`;

const bodyVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2, delay: 0.1 }
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3 },
      opacity: { duration: 0.2 }
    }
  }
};

/**
 * EmailThreadAccordion component - Displays email threads in a Gmail-like accordion interface
 * @component
 * @description Renders vertical accordion items with email thread content, including sender, recipients, and body text.
 * Features Gmail-inspired colors (red for unread, blue for read), hover effects, and expand/collapse functionality.
 * Integrates with Card UI component and uses motion animations for smooth interactions.
 * @param {EmailThreadAccordionProps} props - Component props
 * @returns {JSX.Element} The email thread accordion component
 */
const EmailThreadAccordion: React.FC<EmailThreadAccordionProps> = ({
  threads,
  onThreadClick,
  onStarClick
}) => {
  const [expandedThreads, setExpandedThreads] = useState<Set<string>>(new Set());

  const toggleThread = (threadId: string) => {
    const newExpanded = new Set(expandedThreads);
    if (newExpanded.has(threadId)) {
      newExpanded.delete(threadId);
    } else {
      newExpanded.add(threadId);
    }
    setExpandedThreads(newExpanded);
    onThreadClick?.(threadId);
  };

  const toggleStar = (threadId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onStarClick?.(threadId);
  };

  return (
    <AccordionContainer>
      {threads.map((thread) => {
        const isExpanded = expandedThreads.has(thread.id);

        return (
          <ThreadItem key={thread.id}>
            <ThreadHeader
              $isRead={thread.isRead}
              $isImportant={thread.isImportant}
              onClick={() => toggleThread(thread.id)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <ExpandIcon $isExpanded={isExpanded}>
                {isExpanded ? <FaChevronDown /> : <FaChevronRight />}
              </ExpandIcon>

              <SenderInfo>
                <SenderName $isRead={thread.isRead}>
                  {thread.sender}
                </SenderName>
                <Subject $isRead={thread.isRead}>
                  {thread.subject}
                </Subject>
              </SenderInfo>

              <ThreadMeta>
                <DateText>{thread.date}</DateText>
                <StarButton
                  $isStarred={thread.isStarred}
                  onClick={(e) => toggleStar(thread.id, e)}
                >
                  {thread.isStarred ? <FaStar /> : <FaRegStar />}
                </StarButton>
              </ThreadMeta>
            </ThreadHeader>

            <AnimatePresence>
              {isExpanded && (
                <ThreadBody
                  variants={bodyVariants}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                >
                  <BodyContent>
                    <RecipientsSection>
                      <RecipientsLabel>Para:</RecipientsLabel>
                      <RecipientsList>
                        {thread.recipients.join(', ')}
                      </RecipientsList>
                    </RecipientsSection>
                    <EmailBody>
                      {thread.body}
                    </EmailBody>
                  </BodyContent>
                </ThreadBody>
              )}
            </AnimatePresence>
          </ThreadItem>
        );
      })}
    </AccordionContainer>
  );
};

export default EmailThreadAccordion;