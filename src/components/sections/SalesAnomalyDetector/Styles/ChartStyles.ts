import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ChartContainer = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  padding: 2rem;
  background: rgba(15, 15, 15, 0.85);
  border: 1px solid rgba(255, 204, 0, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

export const ChartTitle = styled.h2`
  font-size: 1.6rem;
  color: #ffcc00;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 320px;
  
  @media (max-width: 768px) {
    height: 280px;
  }
`;

export const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
`;

export const LegendColor = styled.span<{ $color: string }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${({ $color }) => $color};
`;
