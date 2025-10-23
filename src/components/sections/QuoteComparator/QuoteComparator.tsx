import { AnimatePresence } from 'framer-motion';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container } from './Styles/LayoutStyles';
import { useQuoteComparatorAnimation } from './Handlers/useQuoteComparatorAnimation';
import IntroScene from './Components/IntroScene';
import UploadScene from './Components/UploadScene';
import AnalysisScene from './Components/AnalysisScene';
import ComparisonScene from './Components/ComparisonScene';
import RecommendationScene from './Components/RecommendationScene';
import CtaScene from './Components/CtaScene';

const QuoteComparator: React.FC = () => {
  const project = projects[3];
  const { phase, isPlaying, start } = useQuoteComparatorAnimation();

  return (
    <ProjectContainer id="quote-comparator" $bgColor={project.bgColor}>
      <Container>
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <IntroScene
              key="intro-scene"
              onStart={start}
              isPlaying={isPlaying}
            />
          )}

          {phase === 'upload' && (
            <UploadScene key="upload-scene" />
          )}

          {phase === 'analysis' && (
            <AnalysisScene key="analysis-scene" />
          )}

          {phase === 'comparison' && (
            <ComparisonScene key="comparison-scene" />
          )}

          {phase === 'recommendation' && (
            <RecommendationScene key="recommendation-scene" />
          )}

          {phase === 'cta' && (
            <CtaScene key="cta-scene" />
          )}
        </AnimatePresence>
      </Container>
    </ProjectContainer>
  );
};

export default QuoteComparator;
