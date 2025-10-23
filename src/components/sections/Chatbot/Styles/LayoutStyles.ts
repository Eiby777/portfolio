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
    inset: 0;
    background: radial-gradient(circle at 60% 30%, rgba(153, 51, 255, 0.14) 0%, transparent 60%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle at 0% 100%, rgba(204, 102, 255, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
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
  padding: clamp(1.5rem, 4vw, 3rem);
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1100px;
  border-radius: 1.5rem;
  background: rgba(12, 0, 20, 0.55);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(153, 51, 255, 0.35);
  box-shadow: 0 24px 48px rgba(10, 0, 20, 0.45);
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #f3e8ff;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgba(243, 232, 255, 0.85);
  margin-bottom: 2rem;
  max-width: 640px;
  position: relative;
  z-index: 2;
  line-height: 1.7;
`;

export const GradientOrb = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(0px);
  opacity: 0.6;
`;

export const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  color: #120021;
  background: linear-gradient(135deg, #cc66ff 0%, #9933ff 100%);
  box-shadow: 0 12px 24px rgba(153, 51, 255, 0.35);
`;

export const SceneContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.5rem, 4vw, 3rem);
  width: 100%;
  text-align: left;
  margin-top: clamp(1.5rem, 3vw, 3rem);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1.2rem, 3vw, 1.8rem);
  border-radius: 1rem;
  background: rgba(153, 51, 255, 0.12);
  border: 1px solid rgba(153, 51, 255, 0.3);
  color: #f3e8ff;
`;

export const HighlightTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #e9d5ff;
`;

export const HighlightText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(243, 232, 255, 0.78);
`;

export const MessageBubble = styled(motion.div)<{ $author: string }>`
  align-self: ${({ $author }) => ($author === 'customer' ? 'flex-start' : 'flex-end')};
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  background: ${({ $author }) =>
    $author === 'customer'
      ? 'rgba(70, 33, 107, 0.85)'
      : 'linear-gradient(135deg, rgba(204, 102, 255, 0.9) 0%, rgba(153, 51, 255, 0.85) 100%)'};
  color: ${({ $author }) => ($author === 'customer' ? '#f3e8ff' : '#120021')};
  max-width: 320px;
  font-size: 0.95rem;
  line-height: 1.6;
  border: 1px solid rgba(153, 51, 255, 0.2);
  box-shadow: 0 12px 24px rgba(18, 0, 33, 0.35);
`;

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const PersonaTag = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(243, 232, 255, 0.6);
`;

export const EvidenceCard = styled(motion.div)`
  border-radius: 1rem;
  padding: clamp(1.2rem, 3vw, 1.8rem);
  background: rgba(18, 0, 33, 0.75);
  border: 1px solid rgba(204, 102, 255, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: rgba(243, 232, 255, 0.86);
`;

export const CtaContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  color: #f8f6ff;
`;
