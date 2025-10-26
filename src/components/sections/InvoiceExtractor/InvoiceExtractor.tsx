import { AnimatePresence } from 'framer-motion';
import AnimationNavigation from '../../ui/AnimationNavigation';
import AnimatedBackground from '../../common/AnimatedBackground';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container } from './Styles/LayoutStyles';
import { useInvoiceAnimation } from './Handlers/useInvoiceAnimation';
import IntroScene from './Components/IntroScene';
import FormatsScene from './Components/FormatsScene';
import ValidationScene from './Components/ValidationScene';
import ExportScene from './Components/ExportScene';

const InvoiceExtractor: React.FC = () => {
  const project = projects[1];
  const { phase, isPlaying, start, goToNextPhase, goToPrevPhase, isFirstPhase, isLastPhase } = useInvoiceAnimation();

  return (
    <ProjectContainer id="invoice-extractor" $bgColor={project.bgColor}>
      <AnimatedBackground type="invoice" />
      <Container>
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <IntroScene
              key="intro-scene"
              onStart={start}
              isPlaying={isPlaying}
            />
          )}

          {phase === 'formats' && (
            <FormatsScene key="formats-scene" />
          )}

          {phase === 'validation' && (
            <ValidationScene key="validation-scene" />
          )}

          {phase === 'export' && (
            <ExportScene key="export-scene" />
          )}
        </AnimatePresence>
      </Container>
      
      {isPlaying && (
        <AnimationNavigation
          primaryColor={project.color}
          secondaryColor={project.secondaryColor}
          onNext={goToNextPhase}
          onPrev={goToPrevPhase}
          isFirstPhase={isFirstPhase}
          isLastPhase={isLastPhase}
        />
      )}
    </ProjectContainer>
  );
};

export default InvoiceExtractor;
