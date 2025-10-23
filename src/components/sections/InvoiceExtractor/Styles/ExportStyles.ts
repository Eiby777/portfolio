import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProcessingBar = styled(motion.div)`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 1rem;
`;

export const ProcessingProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #00ff88 0%, #00cc6a 100%);
  border-radius: 4px;
`;

export const ExportButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background: #217346;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #1a5c37;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(33, 115, 70, 0.4);
  }
`;
