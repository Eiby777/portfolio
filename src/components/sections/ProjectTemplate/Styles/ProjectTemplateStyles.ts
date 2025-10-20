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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
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
  color: rgba(255, 255, 255, 0.8);
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

export const ProblemStatement = styled.div<{ $color: string }>`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border-left: 4px solid ${({ $color }) => $color};
`;

export const ProblemTitle = styled.h3<{ $color: string }>`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ProblemText = styled.p`
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

export const SolutionStatement = styled.div<{ $color: string }>`
  background: ${({ $color }) => `${$color}20`};
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ $color }) => `${$color}50`};
`;

export const SolutionTitle = styled.h3<{ $color: string }>`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ $color }) => `${$color}cc`};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SolutionText = styled.p`
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

export const TechBadge = styled.span<{ $color: string }>`
  background: ${({ $color }) => `${$color}30`};
  color: ${({ $color }) => `${$color}cc`};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${({ $color }) => `${$color}50`};
`;

export const DemoContainer = styled(motion.div)<{ $color: string }>`
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid ${({ $color }) => `${$color}50`};
  backdrop-filter: blur(10px);
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;

export const CtaContainer = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
`;