import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const reveal = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  overflow: hidden;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0;
  padding: 0;
  text-align: left;
  z-index: 2;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    text-align: center;
    order: 2;
    padding-top: 2rem;
    max-width: none;
  }
`;

export const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

export const Title = styled(motion.div)`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #ffffff;
  margin-bottom: 2rem;
  font-weight: 600;

  .typing-cursor {
    display: inline-block;
    width: 3px;
    height: 1.2em;
    background: #667eea;
    margin-left: 2px;
    animation: blink 1s infinite;
  }
`;

export const Description = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #b0b0b0;
  margin-bottom: 3rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #b0b0b0;
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: #ffffff;
  }
`;

export const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;

  /* Parallax effect on scroll */
  transform: translateZ(0);
  will-change: transform;
`;

export const Shape = styled(motion.div)<{ $size: number; $color: string; $top: string; $left: string }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: ${({ $color }) => $color};
  border-radius: 50%;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  opacity: 0.1;
  filter: blur(40px);
`;

export const ProfileImageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 768px) {
      width: 300px;
      height: 200px;
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2));
    border-radius: 30px;
    z-index: -1;
    opacity: 0;
    animation: ${reveal} 1s ease-out 0.5s forwards;
  }
`;

export const AnimationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    max-width: 90vw;
    padding: 0 1rem;
  }
`;

export const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/src/components/sections/Hero/Images/placeholder-hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  z-index: 1;
`;

export const FinalContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  z-index: 3;
  position: relative;
  max-width: 1400px;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0 1rem;
  }
`;
