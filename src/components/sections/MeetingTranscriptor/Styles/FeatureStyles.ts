import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Waveform = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.35rem;
  width: 100%;
  margin: 2rem auto 2.5rem auto;
  height: 120px;
`;

export const WaveBar = styled(motion.div)`
  width: 6px;
  background: linear-gradient(180deg, rgba(0, 255, 255, 0.9) 0%, rgba(58, 239, 255, 0.2) 100%);
  border-radius: 6px;
`;

export const TranscriptBox = styled(motion.div)`
  background: rgba(0, 32, 40, 0.65);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: left;
  max-width: 720px;
  margin: 0 auto;
`;

export const TranscriptLine = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

export const Timestamp = styled.span`
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: rgba(102, 255, 255, 0.65);
  margin-top: 0.2rem;
`;

export const Speaker = styled.span`
  font-weight: 600;
  color: #00ffff;
  min-width: 110px;
`;

export const Speech = styled.span`
  color: #f1ffff;
  line-height: 1.5;
`;

export const InsightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 2.5rem 0;
`;

export const InsightCard = styled(motion.div)`
  background: rgba(0, 32, 40, 0.7);
  border: 1px solid rgba(0, 255, 255, 0.18);
  border-radius: 18px;
  padding: 1.5rem;
  text-align: left;
  min-height: 150px;
`;

export const SummaryCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(0, 255, 255, 0.08) 0%, rgba(0, 128, 128, 0.18) 100%);
  border: 1px solid rgba(0, 255, 255, 0.25);
  border-radius: 24px;
  padding: 2rem;
  margin: 0 auto 2rem auto;
  max-width: 820px;
  text-align: left;
`;

export const ActionItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

export const ActionItemCard = styled(motion.div)`
  background: rgba(0, 24, 32, 0.75);
  border: 1px solid rgba(0, 255, 255, 0.16);
  border-radius: 18px;
  padding: 1.4rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const OwnerTag = styled.span`
  font-size: 0.85rem;
  color: #002f36;
  background: rgba(0, 255, 255, 0.85);
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  font-weight: 600;
  align-self: flex-start;
`;

export const DueDateTag = styled.span`
  font-size: 0.75rem;
  color: #8af6ff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;
