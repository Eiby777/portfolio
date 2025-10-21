import { AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaSearch, FaArrowRight } from 'react-icons/fa';
import Button from '../../ui/Button';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container, SectionTitle, SectionSubtitle, ContentGrid, ProjectInfo, ProblemStatement, ProblemTitle, ProblemText, SolutionStatement, SolutionTitle, SolutionText, TechStack, TechBadge, DemoContainer, CtaContainer } from './Styles/EmailAnalyzerStyles';
// import { useEmailAnalysis } from './Handlers/useEmailAnalysis';
import AnimatedChatbot from './Components/AnimatedChatbot';
import EmailThreadViewer from './Components/EmailThreadViewer';
import GmailIcon from './Components/GmailIcon';
import InitialScreen from './Components/InitialScreen';
import { emailThreadsData } from './Models/emailThreadsData';
import { useEmailAnalyzerAnimation } from './Handlers/useEmailAnalyzerAnimation';

const EmailAnalyzer: React.FC = () => {
  // const { isAnalyzing, showResults, analyzedData, handleAnalyze } = useEmailAnalysis();
  const project = projects[0];

  // Animation controller
  const {
    phase,
    onTransitionComplete,
    onEmailThreadComplete,
    onTransformComplete,
    onChatbotAppearComplete,
    onIconFadeComplete,
    onChatbotActiveComplete,
  } = useEmailAnalyzerAnimation();

  return (
    <ProjectContainer id="email-analyzer" $bgColor={project.bgColor}>
      <Container>
        <AnimatePresence mode="wait">
          {phase === 'initial' && (
            <InitialScreen
              key="initial-screen"
              isVisible={phase === 'initial'}
              onPlayClick={onTransitionComplete}
            />
          )}

          {phase !== 'initial' && (
            <>
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
                  <div style={{ flex: 1, position: 'relative' }}>
                    <EmailThreadViewer
                      thread={emailThreadsData[0]}
                      shouldAutoScroll={phase === 'email-thread'}
                      onScrollComplete={() => {
                        console.info('Email thread scroll completed');
                        onEmailThreadComplete();
                      }}
                      scrollSpeed={150}
                    />

                    {/* Gmail Icon Transformation */}
                    {(phase === 'transform' || phase === 'chatbot-appear' || phase === 'icon-fade') && (
                      <GmailIcon
                        autoStart={phase === 'transform'}
                        autoStartDelay={0}
                        onTransformComplete={() => {
                          console.info('Gmail icon transformation completed');
                          onTransformComplete();
                        }}
                        onDisappearComplete={() => {
                          console.info('Gmail icon disappearing completed');
                          onIconFadeComplete();
                        }}
                        size={48}
                        emailContent="Email thread content transforming..."
                        isVisible={phase !== 'icon-fade'}
                      />
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <AnimatedChatbot
                      autoStart={phase === 'chatbot-active'}
                      autoStartDelay={0}
                      onColorTransitionComplete={() => {
                        console.info('Color transition completed');
                        onChatbotAppearComplete();
                      }}
                      onFlowComplete={() => {
                        console.info('Automated flow completed');
                        onChatbotActiveComplete();
                      }}
                      isVisible={phase === 'chatbot-appear' || phase === 'icon-fade' || phase === 'chatbot-active'}
                    />
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
            </>
          )}
        </AnimatePresence>
      </Container>
    </ProjectContainer>
  );
};

export default EmailAnalyzer;