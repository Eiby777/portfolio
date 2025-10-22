import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InitialScreenContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  min-height: 60vh;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  border: 1px solid rgba(0, 102, 255, 0.3);
  backdrop-filter: blur(10px);
`;

export const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
`;

export const PlayButton = styled(motion.button)`
  background: linear-gradient(135deg, #0066ff 0%, #3399ff 100%);
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 102, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;