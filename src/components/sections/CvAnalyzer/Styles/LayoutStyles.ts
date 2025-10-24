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
    background: radial-gradient(circle at 70% 30%, rgba(255, 51, 102, 0.12) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle at 100% 100%, rgba(255, 51, 102, 0.08) 0%, transparent 60%);
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

export const AnimationWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: bold;
  color: #ff3366;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: #ffffff;
  margin-bottom: 2rem;
  max-width: 600px;
  position: relative;
  z-index: 2;
  line-height: 1.6;
`;

export const PlayButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #ff3366 0%, #cc2952 100%);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(255, 51, 102, 0.3);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(255, 51, 102, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const StatusMessage = styled(motion.p)`
  font-size: 1.1rem;
  color: #ffffff;
  margin-top: 1.5rem;
  font-weight: 500;
  text-align: center;
`;

export const CtaContainer = styled(motion.div)`
  text-align: center;
  margin-top: 3rem;
`;

export const Card = styled(motion.div)`
  background: rgba(255, 51, 102, 0.08);
  border: 1px solid rgba(255, 51, 102, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 0.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 51, 102, 0.12);
    border-color: rgba(255, 51, 102, 0.3);
  }
`;

export const ProgressBar = styled(motion.div)`
  width: 100%;
  height: 8px;
  background: rgba(255, 51, 102, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem 0;
`;

export const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #ff3366 0%, #ff6699 100%);
  border-radius: 4px;
`;

export const ScoreBadge = styled.div<{ $score: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: ${({ $score }) =>
    $score >= 80
      ? 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)'
      : $score >= 60
      ? 'linear-gradient(135deg, #ffcc00 0%, #ff9900 100%)'
      : 'linear-gradient(135deg, #999999 0%, #666666 100%)'};
  color: ${({ $score }) => ($score >= 60 ? '#000000' : '#ffffff')};
  border-radius: 20px;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;
