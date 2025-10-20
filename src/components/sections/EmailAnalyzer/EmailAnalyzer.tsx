import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaSearch, FaUserCheck, FaTasks, FaArrowRight, FaRegClock } from 'react-icons/fa';
import Button from '../../ui/Button';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container, SectionTitle, SectionSubtitle, ContentGrid, ProjectInfo, ProblemStatement, ProblemTitle, ProblemText, SolutionStatement, SolutionTitle, SolutionText, TechStack, TechBadge, DemoContainer, DemoHeader, EmailInput, AnalyzeButton, ResultsContainer, ResultSection, ResultTitle, ResultContent, DecisionItem, TaskItem, Assignee, CtaContainer } from './Styles/EmailAnalyzerStyles';
import { useEmailAnalysis } from './Handlers/useEmailAnalysis';

const EmailAnalyzer: React.FC = () => {
  const [emailContent, setEmailContent] = useState(
    `De: juan.perez@empresa.com
Para: equipo@empresa.com
Asunto: Reunión proyecto Q4

Hola equipo,

Quería comentarles sobre la reunión de ayer. Decidimos avanzar con el nuevo diseño propuesto por María.
Necesito que Carlos prepare la documentación para el cliente antes del viernes.
Laura, por favor coordina con el equipo de desarrollo para estimar los tiempos.
La fecha límite para el MVP es el 15 de diciembre.

¿Alguna duda?

Saludos,
Juan`
  );

  const { isAnalyzing, showResults, analyzedData, handleAnalyze } = useEmailAnalysis();
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
              <h4 style={{ marginBottom: '1rem', color: '#3399ff' }}>Tecnologías:</h4>
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
          >
            <DemoHeader>
              <FaEnvelope />
              Demo Interactiva
            </DemoHeader>

            <EmailInput
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              placeholder="Pega el contenido del email aquí..."
            />

            <AnalyzeButton
              onClick={() => handleAnalyze(emailContent)}
              disabled={isAnalyzing || !emailContent.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isAnalyzing ? (
                <>
                  <FaRegClock style={{ animation: 'spin 1s linear infinite' }} />
                  Analizando...
                </>
              ) : (
                <>
                  <FaSearch />
                  Analizar Email
                </>
              )}
            </AnalyzeButton>

            <AnimatePresence>
              {showResults && analyzedData && (
                <ResultsContainer
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ResultSection>
                    <ResultTitle>
                      <FaUserCheck />
                      Decisiones Clave
                    </ResultTitle>
                    <ResultContent>
                      {analyzedData.decisions.map((decision: any, index: number) => (
                        <DecisionItem key={index}>
                          <strong>{decision.text}</strong>
                          <div style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#3399ff' }}>
                            Prioridad: {decision.priority}
                          </div>
                        </DecisionItem>
                      ))}
                    </ResultContent>
                  </ResultSection>

                  <ResultSection>
                    <ResultTitle>
                      <FaTasks />
                      Tareas Pendientes
                    </ResultTitle>
                    <ResultContent>
                      {analyzedData.tasks.map((task: any, index: number) => (
                        <TaskItem key={index}>
                          <span>{task.text}</span>
                          <Assignee>{task.assignee}</Assignee>
                        </TaskItem>
                      ))}
                    </ResultContent>
                  </ResultSection>

                  <ResultSection>
                    <ResultTitle>Resumen Ejecutivo</ResultTitle>
                    <ResultContent>
                      {analyzedData.summary}
                    </ResultContent>
                  </ResultSection>
                </ResultsContainer>
              )}
            </AnimatePresence>
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