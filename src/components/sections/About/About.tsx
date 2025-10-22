import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCode, FaChartLine, FaDatabase, FaBrain } from 'react-icons/fa';
import { PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../../ui/Card';
import { experiences, education } from '../../../data/portfolioData';
import { AboutContainer, Container, SectionTitle, SectionSubtitle, TabContainer, TabButton, ContentContainer, ExperienceGrid, EducationGrid, SkillsGrid, ExperienceCard, EducationCard, SkillCategory, SkillCategoryTitle, TimelineDate, CompanyName, PositionTitle, Location, AchievementsList, AchievementItem, InstitutionName, DegreeTitle, DetailsList, DetailItem } from './Styles/AboutStyles';
import { useTabAnimation } from './Handlers/useTabAnimation';
import { skillsByCategory } from './Models/skillsData';

/**
 * About component - Displays personal information in a tabbed interface
 * @component
 * @description Renders the About section with experience, education, and skills tabs, including interactive charts for skills visualization.
 * Integrates with Card UI component, portfolio data, custom styles, tab animation hook, and skills data model.
 * @returns {JSX.Element} The About section component
 */
const About: React.FC = () => {
   const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'skills'>('experience');
   const { containerVariants, itemVariants } = useTabAnimation();

   /**
    * Icon mapping for skill categories
    * @type {Record<string, React.ComponentType>}
    * @description Maps skill category names to their corresponding React icon components for visual representation
    */
   const categoryIcons: Record<string, React.ComponentType> = {
     'Lenguajes': FaCode,
     'Frontend': FaCode,
     'Data Science': FaChartLine,
     'Backend': FaDatabase,
   };

   /**
    * Transforms skills data into pie chart format
    * @description Converts skillsByCategory object into an array suitable for Recharts PieChart component,
    * including category names, skill counts, and assigned colors for visualization
    * @returns {Array<{name: string, value: number, color: string}>} Data array for pie chart rendering
    */
   const categoryData = Object.entries(skillsByCategory).map(([category, skills]) => ({
     name: category,
     value: skills.length,
     color: category === 'Lenguajes' ? '#667eea' :
            category === 'Frontend' ? '#764ba2' :
            category === 'Data Science' ? '#00ff88' :
            '#ff6600'
   }));

   /**
    * Transforms skills data into radar chart format
    * @description Converts skillsByCategory object into an array suitable for Recharts RadarChart components,
    * organizing skills by category with individual skill names and proficiency levels
    * @returns {Array<{category: string, skills: Array<{name: string, level: number}>}>} Data array for radar chart rendering
    */
   const radarChartData = Object.entries(skillsByCategory).map(([category, skills]) => ({
     category,
     skills: skills.map(skill => ({ name: skill.name, level: skill.level }))
   }));



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
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              style={{ width: '100%' }}
            >
              {/* Pie Chart for Category Distribution */}
              <motion.div
                variants={itemVariants}
                style={{ marginBottom: '3rem' }}
              >
                <Card variant="glass" hover={true} glow={true}>
                  <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#ffffff', fontSize: '1.8rem' }}>
                    Distribución de Habilidades por Categoría
                  </h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      {/**
                       * Pie chart configuration for skills category distribution
                       * @description Renders a pie chart showing the proportion of skills across different categories.
                       * Uses custom colors per category, animated entrance, and percentage labels.
                       * Integrates with ResponsiveContainer for responsive design.
                       */}
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${((percent as number) * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1000}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      {/**
                       * Tooltip configuration for pie chart
                       * @description Provides hover tooltips with dark theme styling matching the overall design.
                       * Displays category information on mouse interaction.
                       */}
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0];
                            return (
                              <div style={{
                                backgroundColor: 'rgba(26, 26, 26, 0.9)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '8px',
                                color: '#ffffff',
                                padding: '8px 12px',
                                fontSize: '14px'
                              }}>
                                {data.name}: {data.value}
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </motion.div>


              {/**
               * Radar Charts for Individual Skill Levels
               * @description Renders radar charts for each skill category, showing individual skill proficiency levels.
               * Each chart includes category icons, responsive design, and consistent dark theme styling.
               * Charts are animated on entrance and include hover tooltips with percentage formatting.
               */}
              <SkillsGrid>
                {radarChartData.map(({ category, skills }) => {
                  const Icon = categoryIcons[category] || FaCode;
                  return (
                    <motion.div key={category} variants={itemVariants}>
                      <SkillCategory>
                        <SkillCategoryTitle>
                          <Icon />
                          {category}
                        </SkillCategoryTitle>
                        <Card variant="glass" hover={true} glow={true} padding="md">
                          <ResponsiveContainer width="100%" height={400}>
                            {/**
                             * Radar chart configuration for individual skill levels
                             * @description Radar chart displaying skill names as axes and proficiency levels as values.
                             * Uses category-specific colors, polar grid, and custom tooltip formatting.
                             * Fixed height for consistent layout.
                             */}
                            <RadarChart
                              data={skills}
                              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                              <PolarGrid stroke="rgba(255, 255, 255, 0.7)" strokeWidth={1} />
                              <PolarAngleAxis
                                dataKey="name"
                                tick={{ fill: '#b0b0b0', fontSize: 12 }}
                              />
                              <PolarRadiusAxis
                                domain={[0, 100]}
                                tick={{ fill: '#ffffff' }}
                              />
                              {/**
                               * Tooltip configuration for radar charts
                               * @description Provides hover tooltips with dark theme styling and percentage formatting.
                               * Shows skill name and level information on mouse interaction.
                               */}
                              <Tooltip
                                content={({ active, payload }) => {
                                  if (active && payload && payload.length) {
                                    const data = payload[0];
                                    return (
                                      <div style={{
                                        backgroundColor: 'rgba(26, 26, 26, 0.9)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                        color: '#ffffff',
                                        padding: '8px 12px',
                                        fontSize: '14px'
                                      }}>
                                        {data.payload.name}: {data.value}%
                                      </div>
                                    );
                                  }
                                  return null;
                                }}
                              />
                              <Radar
                                name="level"
                                dataKey="level"
                                stroke={
                                  category === 'Lenguajes' ? '#667eea' :
                                  category === 'Frontend' ? '#764ba2' :
                                  category === 'Data Science' ? '#00ff88' :
                                  '#ff6600'
                                }
                                fill={
                                  category === 'Lenguajes' ? '#667eea' :
                                  category === 'Frontend' ? '#764ba2' :
                                  category === 'Data Science' ? '#00ff88' :
                                  '#ff6600'
                                }
                                fillOpacity={0.3}
                                strokeWidth={2}
                                animationBegin={0}
                                animationDuration={1000}
                              />
                            </RadarChart>
                          </ResponsiveContainer>
                        </Card>
                      </SkillCategory>
                    </motion.div>
                  );
                })}
              </SkillsGrid>
            </motion.div>
          )}
        </ContentContainer>
      </Container>
    </AboutContainer>
  );
};

export default About;