import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaSearch, FaUserCheck, FaTasks, FaArrowRight, FaRegClock } from 'react-icons/fa';
import Button from '../../ui/Button';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container, SectionTitle, SectionSubtitle, ContentGrid, ProjectInfo, ProblemStatement, ProblemTitle, ProblemText, SolutionStatement, SolutionTitle, SolutionText, TechStack, TechBadge, DemoContainer, DemoHeader, EmailInput, AnalyzeButton, ResultsContainer, ResultSection, ResultTitle, ResultContent, DecisionItem, TaskItem, Assignee, CtaContainer } from './Styles/EmailAnalyzerStyles';
// import { useEmailAnalysis } from './Handlers/useEmailAnalysis';
import EmailChatbot from './Components/EmailChatbot';
import EmailThreadAccordion from './Components/EmailThreadAccordion';

const EmailAnalyzer: React.FC = () => {
  const emailContent = `De: juan.perez@empresa.com
Para: equipo@empresa.com
Asunto: Reunión proyecto Q4

Hola equipo,

Quería comentarles sobre la reunión de ayer. Decidimos avanzar con el nuevo diseño propuesto por María.
Necesito que Carlos prepare la documentación para el cliente antes del viernes.
Laura, por favor coordina con el equipo de desarrollo para estimar los tiempos.
La fecha límite para el MVP es el 15 de diciembre.

¿Alguna duda?

Saludos,
Juan`;

  // const { isAnalyzing, showResults, analyzedData, handleAnalyze } = useEmailAnalysis();
  const project = projects[0];

  return (
    <ProjectContainer id="email-analyzer" $bgColor={project.bgColor}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.title}
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {project.description}
        </SectionSubtitle>

        <ContentGrid>
          <ProjectInfo
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ProblemStatement>
              <ProblemTitle>
                <FaSearch />
                Problema
              </ProblemTitle>
              <ProblemText>
                {project.problem}
              </ProblemText>
            </ProblemStatement>

            <SolutionStatement>
              <SolutionTitle>
                <FaEnvelope />
                Solución
              </SolutionTitle>
              <SolutionText>
                {project.solution}
              </SolutionText>
            </SolutionStatement>

            <div>
              <h4 style={{ marginBottom: '1rem', color: '#1a73e8' }}>Tecnologías:</h4>
              <TechStack>
                {project.techStack.map((tech, index) => (
                  <TechBadge key={index}>{tech}</TechBadge>
                ))}
              </TechStack>
            </div>
          </ProjectInfo>

          <DemoContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', gap: '2rem' }}
          >
            <div style={{ flex: 1 }}>
              <EmailThreadAccordion
                threads={[
                  {
                    id: '1',
                    sender: 'juan.perez@empresa.com',
                    subject: 'Reunión proyecto Q4',
                    date: 'hoy',
                    recipients: ['equipo@empresa.com'],
                    body: emailContent,
                    isRead: false,
                    isStarred: false,
                    isImportant: true,
                  },
                ]}
              />
            </div>
            <div style={{ flex: 1 }}>
              <EmailChatbot />
            </div>
          </DemoContainer>
        </ContentGrid>

        <CtaContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(project.demoUrl, '_blank')}
          >
            Ver Proyecto Completo
            <FaArrowRight />
          </Button>
        </CtaContainer>
      </Container>
    </ProjectContainer>
  );
};

export default EmailAnalyzer;