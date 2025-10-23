import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InvoiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  position: relative;
`;

export const InvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e0e0e0;
`;

export const InvoiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #001a0d;
`;

export const InvoiceField = styled(motion.div)<{ $hasError?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: ${({ $hasError }) => ($hasError ? 'rgba(234, 67, 53, 0.1)' : 'rgba(0, 255, 136, 0.05)')};
  border-radius: 8px;
  border-left: 3px solid ${({ $hasError }) => ($hasError ? '#ea4335' : '#00ff88')};
`;

export const FieldLabel = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
`;

export const FieldValue = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

export const ValidationBadge = styled(motion.div)<{ $isValid: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ $isValid }) => ($isValid ? 'rgba(52, 168, 83, 0.15)' : 'rgba(234, 67, 53, 0.15)')};
  color: ${({ $isValid }) => ($isValid ? '#34a853' : '#ea4335')};
`;

export const FormatBadge = styled(motion.div)<{ $color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${({ $color }) => $color};
  border-radius: 12px;
  min-width: 120px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const FormatIcon = styled.div`
  font-size: 3rem;
`;

export const FormatLabel = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
`;
