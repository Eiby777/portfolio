import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectContainer = styled.section<{ $bgColor: string }>`
  min-height: 100vh;
  padding: 5rem 0;
  background: ${({ $bgColor }) => $bgColor};
  position: relative;
  overflow: hidden;
  transition: background 0.8s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%, rgba(0, 102, 255, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  color: #ffffff;
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ProjectInfo = styled(motion.div)`
  color: #ffffff;
`;

export const ProblemStatement = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border-left: 4px solid #0066ff;
`;

export const ProblemTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ea4335;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProblemText = styled.p`
  line-height: 1.6;
  color: #ffffff;
`;

export const SolutionStatement = styled.div`
  background: rgba(0, 102, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(0, 102, 255, 0.3);
`;

export const SolutionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a73e8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SolutionText = styled.p`
  line-height: 1.6;
  color: #ffffff;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const TechBadge = styled.span`
  background: rgba(26, 115, 232, 0.2);
  color: #1a73e8;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid rgba(26, 115, 232, 0.3);
`;

export const DemoContainer = styled(motion.div)`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(0, 102, 255, 0.3);
  backdrop-filter: blur(10px);
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

export const DemoHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  color: #1a73e8;
  font-weight: 600;
`;

export const EmailInput = styled.textarea`
  width: 100%;
  min-height: 150px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 102, 255, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  color: #ffffff;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  resize: vertical;
  margin-bottom: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const AnalyzeButton = styled(motion.button)`
  background: linear-gradient(135deg, #0066ff 0%, #3399ff 100%);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ResultsContainer = styled(motion.div)`
  background: rgba(0, 102, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid rgba(0, 102, 255, 0.3);
`;

export const ResultSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ResultTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a73e8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ResultContent = styled.div`
  color: #ffffff;
  line-height: 1.5;
`;

export const DecisionItem = styled.div`
  background: rgba(0, 102, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-left: 3px solid #0066ff;
`;

export const TaskItem = styled.div`
  background: rgba(51, 153, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Assignee = styled.span`
  background: rgba(26, 115, 232, 0.3);
  color: #1a73e8;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

export const CtaContainer = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
`;