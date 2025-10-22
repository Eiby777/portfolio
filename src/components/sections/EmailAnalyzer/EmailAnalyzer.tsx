import { AnimatePresence, motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../ui/Button';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container, CtaContainer } from './Styles/EmailAnalyzerStyles';
import { useSimplifiedAnimation } from './Handlers/useSimplifiedAnimation';
import IntroAnimation from './Components/IntroAnimation';
import ProblemDemo from './Components/ProblemDemo';
import SolutionReveal from './Components/SolutionReveal';

const EmailAnalyzer: React.FC = () => {
  const project = projects[0];
  const { phase, startAnimation } = useSimplifiedAnimation();

  return (
    <ProjectContainer id="email-analyzer" $bgColor={project.bgColor}>
      <Container>
        <AnimatePresence mode="wait">
          {phase === 'introduction' && (
            <IntroAnimation
              key="intro-animation"
              onPlayClick={startAnimation}
            />
          )}

          {phase === 'problem-demo' && (
            <ProblemDemo key="problem-demo" />
          )}

          {phase === 'solution-reveal' && (
            <SolutionReveal key="solution-reveal" />
          )}

          {phase === 'cta-display' && (
            <motion.div
              key="cta-display"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                padding: '2rem',
                textAlign: 'center'
              }}
            >
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: '#1a73e8'
              }}>
                ¡Listo para Explorar!
              </h2>
              <p style={{
                fontSize: '1.2rem',
                marginBottom: '2rem',
                color: '#ffffff',
                maxWidth: '500px'
              }}>
                Has visto cómo la IA transforma hilos complejos de email en insights accionables.
              </p>

              <CtaContainer>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(project.demoUrl, '_blank')}
                >
                  Ver Proyecto Completo
                  <FaArrowRight />
                </Button>
              </CtaContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </ProjectContainer>
  );
};

export default EmailAnalyzer;