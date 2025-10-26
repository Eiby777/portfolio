import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectContainer = styled.section<{ $bgColor: string }>`
  min-height: 100vh;
  padding: 5rem 0;
  background: ${({ $bgColor }) => $bgColor};
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    background: radial-gradient(circle at 20% 30%, rgba(0, 255, 255, 0.15) 0%, transparent 55%);
  }

  &::after {
    background: radial-gradient(circle at 80% 70%, rgba(102, 255, 255, 0.12) 0%, transparent 60%);
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 1rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const AnimationWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  min-height: 60vh;
  padding: 3rem 2rem;
  border-radius: 32px;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(0, 255, 255, 0.18);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: clamp(2.1rem, 5vw, 3.2rem);
  font-weight: 800;
  color: #66ffff;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: clamp(1rem, 2.8vw, 1.2rem);
  color: #e6ffff;
  margin: 0 auto 2rem auto;
  max-width: 640px;
  line-height: 1.6;
`;

export const PlayButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.4rem;
  border-radius: 999px;
  border: none;
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #00ffff 0%, #3aefff 100%);
  color: #00272d;
  box-shadow: 0 18px 40px rgba(0, 255, 255, 0.25);
`;

export const CtaContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 999px;
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  background: linear-gradient(135deg, #00ffff 0%, #66ffff 100%);
  color: #00272d;
  box-shadow: 0 18px 50px rgba(0, 255, 255, 0.25);
`;
