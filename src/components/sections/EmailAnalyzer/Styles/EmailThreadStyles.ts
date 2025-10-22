import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ThreadContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const ThreadHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const Subject = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #202124;
  margin: 0;
  line-height: 1.4;
`;

export const Participants = styled.div`
  font-size: 0.9rem;
  color: #5f6368;
  margin: 0;
`;

export const ThreadDate = styled.div`
  font-size: 0.8rem;
  color: #5f6368;
  margin: 0;
`;

export const EmailContainer = styled(motion.div)<{ $isRead: boolean }>`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #f0f0f0;
  background: ${({ $isRead }) => $isRead ? '#ffffff' : '#f8f9fa'};
  transition: background-color 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }
`;

export const EmailAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

export const EmailContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const EmailMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

export const From = styled.div`
  font-weight: 600;
  color: #202124;
  font-size: 0.9rem;
`;

export const ToCc = styled.div`
  color: #5f6368;
  font-size: 0.8rem;
  flex: 1;
`;

export const Date = styled.div`
  color: #5f6368;
  font-size: 0.8rem;
  white-space: nowrap;
`;

export const EmailBody = styled.div`
  color: #202124;
  line-height: 1.5;
  font-size: 0.9rem;

  p {
    margin: 0.5rem 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const QuotedText = styled.div`
  border-left: 3px solid #dadce0;
  padding-left: 1rem;
  margin-top: 1rem;
  color: #5f6368;
  font-size: 0.85rem;
`;

export const QuotedHeader = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #5f6368;
`;

export const threadContainerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
};