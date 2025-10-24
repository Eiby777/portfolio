import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SceneGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
`;

export const SceneCard = styled(motion.div)`
  background: rgba(15, 15, 15, 0.85);
  border: 1px solid rgba(255, 204, 0, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  text-align: left;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -40%;
    right: -20%;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 204, 0, 0.25) 0%,
      rgba(255, 204, 0, 0) 70%
    );
    pointer-events: none;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: #ffdd33;
  margin: 0;
`;

export const CardSubtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
`;

export const MetricValue = styled.div<{ $status?: 'good' | 'warning' | 'danger' }>`
  margin-top: 1.2rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ $status }) => {
    switch ($status) {
      case 'good':
        return '#54ffbd';
      case 'warning':
        return '#ffcc00';
      case 'danger':
        return '#ff6b6b';
      default:
        return '#ffffff';
    }
  }};
`;

export const MetricLabel = styled.span`
  display: block;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.25rem;
`;

export const SectionTag = styled.span<{ $variant?: 'warning' | 'opportunity' | 'critical' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 999px;
  color: #0f0f0f;
  background: ${({ $variant }) => {
    switch ($variant) {
      case 'warning':
        return 'linear-gradient(135deg, #ffcc00 0%, #ff9900 100%)';
      case 'opportunity':
        return 'linear-gradient(135deg, #54ffbd 0%, #29d888 100%)';
      case 'critical':
        return 'linear-gradient(135deg, #ff6b6b 0%, #ff3b3b 100%)';
      default:
        return 'linear-gradient(135deg, #ffdd33 0%, #ff9900 100%)';
    }
  }};
`;

export const TimelineBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
`;

export const TimelineProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(135deg, #ffcc00 0%, #ff9900 100%);
`;
