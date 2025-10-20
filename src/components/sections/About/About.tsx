import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaChartLine, FaDatabase, FaBrain } from 'react-icons/fa';
import Card from '../../ui/Card';
import { experiences, education, skills } from '../../../data/portfolioData';
import { AboutContainer, Container, SectionTitle, SectionSubtitle, TabContainer, TabButton, ContentContainer, ExperienceGrid, EducationGrid, SkillsGrid, ExperienceCard, EducationCard, SkillCategory, SkillCategoryTitle, SkillItem, SkillHeader, SkillName, SkillLevel, SkillBar, SkillProgress, TimelineDate, CompanyName, PositionTitle, Location, AchievementsList, AchievementItem, InstitutionName, DegreeTitle, DetailsList, DetailItem } from './Styles/AboutStyles';
import { useTabAnimation } from './Handlers/useTabAnimation';
import { skillsByCategory } from './Models/skillsData';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills'>('experience');
  const { containerVariants, itemVariants, skillVariants } = useTabAnimation();

  const categoryIcons: Record<string, React.ComponentType> = {
    'Lenguajes': FaCode,
    'Frontend': FaCode,
    'Data Science': FaChartLine,
    'Backend': FaDatabase,
  };

  return (
    <AboutContainer id="about">
      <Container>
        <SectionTitle
          variants={itemVariants}
          initial="initial"
          animate="animate"
        >
          Sobre Mí
        </SectionTitle>

        <SectionSubtitle
          variants={itemVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          Conoce mi experiencia profesional, formación académica y habilidades técnicas
        </SectionSubtitle>

        <TabContainer>
          <TabButton
            $active={activeTab === 'experience'}
            onClick={() => setActiveTab('experience')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBriefcase />
            Experiencia
          </TabButton>
          <TabButton
            $active={activeTab === 'education'}
            onClick={() => setActiveTab('education')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGraduationCap />
            Educación
          </TabButton>
          <TabButton
            $active={activeTab === 'skills'}
            onClick={() => setActiveTab('skills')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaBrain />
            Habilidades
          </TabButton>
        </TabContainer>

        <ContentContainer>
          {activeTab === 'experience' && (
            <ExperienceGrid>
              {experiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  variant="glass"
                  hover={true}
                  glow={true}
                >
                  <TimelineDate>{exp.startDate} — {exp.endDate}</TimelineDate>
                  <CompanyName>{exp.company}</CompanyName>
                  <PositionTitle>{exp.position}</PositionTitle>
                  <Location>📍 {exp.location}</Location>
                  <AchievementsList>
                    {exp.achievements.map((achievement, index) => (
                      <AchievementItem key={index}>
                        {achievement}
                      </AchievementItem>
                    ))}
                  </AchievementsList>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          )}

          {activeTab === 'education' && (
            <EducationGrid>
              {education.map((edu) => (
                <EducationCard
                  key={edu.id}
                  variant="glass"
                  hover={true}
                  glow={true}
                >
                  <TimelineDate>{edu.startDate} — {edu.endDate}</TimelineDate>
                  <InstitutionName>{edu.institution}</InstitutionName>
                  <DegreeTitle>{edu.degree}</DegreeTitle>
                  <Location>📍 {edu.location}</Location>
                  <DetailsList>
                    {edu.details.map((detail, index) => (
                      <DetailItem key={index}>
                        {detail}
                      </DetailItem>
                    ))}
                  </DetailsList>
                </EducationCard>
              ))}
            </EducationGrid>
          )}

          {activeTab === 'skills' && (
            <SkillsGrid>
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
                const Icon = categoryIcons[category] || FaCode;
                return (
                  <SkillCategory key={category}>
                    <SkillCategoryTitle>
                      <Icon />
                      {category}
                    </SkillCategoryTitle>
                    {categorySkills.map((skill) => (
                      <SkillItem key={skill.name}>
                        <SkillHeader>
                          <SkillName>{skill.name}</SkillName>
                          <SkillLevel>{skill.level}%</SkillLevel>
                        </SkillHeader>
                        <SkillBar>
                          <SkillProgress
                            $level={skill.level}
                            variants={skillVariants}
                            initial="initial"
                            animate="animate"
                          />
                        </SkillBar>
                      </SkillItem>
                    ))}
                  </SkillCategory>
                );
              })}
            </SkillsGrid>
          )}
        </ContentContainer>
      </Container>
    </AboutContainer>
  );
};

export default About;