import styled from 'styled-components';
import { motion } from 'framer-motion';

export const QuoteCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 153, 51, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  backdrop-filter: blur(6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
`;

export const SupplierName = styled.h3`
  font-size: 1.2rem;
  color: #ff9933;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const PriceTag = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const PriceHighlight = styled.span`
  color: #ffcc80;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const FeatureList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #f5f5f5;
  font-size: 0.95rem;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 102, 0, 0.5) 0%, rgba(255, 153, 51, 0.3) 100%);
    color: #ffffff;
    font-size: 0.7rem;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
`;
