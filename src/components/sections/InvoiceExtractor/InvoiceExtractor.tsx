import { AnimatePresence } from 'framer-motion';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container } from './Styles/LayoutStyles';
import { useInvoiceAnimation } from './Handlers/useInvoiceAnimation';
import IntroScene from './Components/IntroScene';
import FormatsScene from './Components/FormatsScene';
import ValidationScene from './Components/ValidationScene';
import ExportScene from './Components/ExportScene';

const InvoiceExtractor: React.FC = () => {
  const project = projects[1];
  const { phase, isPlaying, start } = useInvoiceAnimation();

  return (
    <ProjectContainer id="invoice-extractor" $bgColor={project.bgColor}>
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
    </ProjectContainer>
  );
};

export default InvoiceExtractor;
