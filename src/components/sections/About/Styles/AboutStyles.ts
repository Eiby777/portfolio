import styled from 'styled-components';
import { motion } from 'framer-motion';
import Card from '../../../ui/Card';

export const AboutContainer = styled.section`
  min-height: 100vh;
  padding: 5rem 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 1rem;
  position: relative;
  z-index: 2;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #b0b0b0;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

export const TabButton = styled(motion.button)<{ $active: boolean }>`
  padding: 0.75rem 2rem;
  background: ${({ $active }) => $active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#1a1a1a'};
  color: #ffffff;
  border: 2px solid ${({ $active }) => $active ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${({ $active }) => $active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(102, 126, 234, 0.1)'};
    border-color: #667eea;
    transform: translateY(-2px);
  }
`;

export const ContentContainer = styled.div`
  min-height: 400px;
`;

export const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export const ExperienceCard = styled(Card)`
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
`;

export const EducationCard = styled(Card)`
  border-left: 4px solid;
  border-image: linear-gradient(135deg, #00ff88, #33ffaa) 1;
`;

export const SkillCategory = styled.div`
  margin-bottom: 2rem;
`;

export const SkillCategoryTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillItem = styled.div`
  margin-bottom: 1rem;
`;

export const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const SkillName = styled.span`
  font-weight: 500;
  color: #ffffff;
`;

export const SkillLevel = styled.span`
  color: #b0b0b0;
  font-size: 0.9rem;
`;

export const SkillBar = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`;

export const SkillProgress = styled(motion.div)<{ $level: number }>`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  width: ${({ $level }) => $level}%;
`;

export const TimelineDate = styled.div`
  font-size: 0.9rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const CompanyName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const PositionTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #b0b0b0;
  margin-bottom: 1rem;
`;

export const Location = styled.div`
  font-size: 0.9rem;
  color: #808080;
  margin-bottom: 1rem;
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const AchievementItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #b0b0b0;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #667eea;
    font-weight: bold;
  }
`;

export const InstitutionName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

export const DegreeTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #b0b0b0;
  margin-bottom: 1rem;
`;

export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const DetailItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #b0b0b0;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #00ff88;
    font-weight: bold;
  }
`;