import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ComparisonGrid = styled(motion.div)`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ComparisonRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 150px repeat(4, 1fr);
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 100px 1fr 1fr;
    overflow-x: auto;
  }
`;

export const RowHeader = styled.div`
  font-weight: 600;
  color: #ff9933;
  text-align: left;
  padding: 0.5rem;
  font-size: 0.95rem;
`;

export const CellValue = styled(motion.div)<{ $isWinner?: boolean }>`
  background: ${({ $isWinner }) =>
    $isWinner
      ? 'linear-gradient(135deg, rgba(255, 102, 0, 0.3) 0%, rgba(255, 153, 51, 0.2) 100%)'
      : 'rgba(255, 255, 255, 0.04)'};
  border: ${({ $isWinner }) => ($isWinner ? '2px solid #ff9933' : '1px solid rgba(255, 255, 255, 0.1)')};
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  font-size: 0.9rem;
  color: ${({ $isWinner }) => ($isWinner ? '#ffffff' : 'rgba(255, 255, 255, 0.85)')};
  font-weight: ${({ $isWinner }) => ($isWinner ? '700' : '500')};
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  backdrop-filter: blur(4px);
`;

export const WinnerBadge = styled(motion.div)`
  position: absolute;
  top: -8px;
  right: -8px;
  background: linear-gradient(135deg, #ff6600 0%, #ff8833 100%);
  color: #ffffff;
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(255, 102, 0, 0.4);
`;

export const AnalysisBar = styled(motion.div)`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

export const AnalysisProgress = styled(motion.div)<{ $color: string }>`
  height: 100%;
  background: ${({ $color }) => $color};
  border-radius: 4px;
  box-shadow: 0 0 12px ${({ $color }) => $color};
`;

export const CriteriaLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const WeightBadge = styled.span`
  background: rgba(255, 102, 0, 0.2);
  color: #ff9933;
  font-size: 0.8rem;
  padding: 0.15rem 0.5rem;
  border-radius: 12px;
  font-weight: 600;
`;
