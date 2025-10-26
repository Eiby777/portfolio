import { useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimationNavigation from '../../ui/AnimationNavigation';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container } from './Styles/LayoutStyles';
import IntroScene from './Components/IntroScene';
import DataAnalysisScene from './Components/DataAnalysisScene';
import AnomalyDetectionScene from './Components/AnomalyDetectionScene';
import PredictionsScene from './Components/PredictionsScene';
import CtaScene from './Components/CtaScene';
import { useAnomalyAnimation } from './Handlers/useAnomalyAnimation';
import { SalesAnalyzer, mockSalesData } from './Models/SalesData';

const SalesAnomalyDetector: React.FC = () => {
  const project = projects[6];
  const { phase, isPlaying, start, goToNextPhase, goToPrevPhase, isFirstPhase, isLastPhase } = useAnomalyAnimation();

  const salesData = useMemo(() => {
    const analyzer = new SalesAnalyzer(mockSalesData);
    return analyzer.getSalesData();
  }, []);

  return (
    <ProjectContainer id="anomaly-detector" $bgColor={project.bgColor}>
      <Container>
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <IntroScene
              key="intro"
              onStart={start}
              isPlaying={isPlaying}
            />
          )}

          {phase === 'data-analysis' && (
            <DataAnalysisScene key="data-analysis" />
          )}

          {phase === 'anomaly-detection' && (
            <AnomalyDetectionScene key="anomaly-detection" />
          )}

          {phase === 'predictions' && (
            <PredictionsScene
              key="predictions"
              data={salesData}
              onRevealCta={goToNextPhase}
            />
          )}

          {phase === 'cta' && <CtaScene key="cta" />}
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

export default SalesAnomalyDetector;
