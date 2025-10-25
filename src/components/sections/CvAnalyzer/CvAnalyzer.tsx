import { AnimatePresence } from 'framer-motion';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container } from './Styles/LayoutStyles';
import { useCvAnimation } from './Handlers/useCvAnimation';
import IntroScene from './Components/IntroScene';
import UploadScene from './Components/UploadScene';
import AnalysisScene from './Components/AnalysisScene';
import RankingScene from './Components/RankingScene';
import InterviewScene from './Components/InterviewScene';
import CtaScene from './Components/CtaScene';

const CvAnalyzer: React.FC = () => {
  const project = projects[4];
  const { phase, isPlaying, start } = useCvAnimation();

  return (
    <ProjectContainer id="cv-analyzer" $bgColor={project.bgColor}>
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

          {phase === 'ranking' && (
            <RankingScene key="ranking-scene" />
          )}

          {phase === 'interview' && (
            <InterviewScene key="interview-scene" />
          )}

          {phase === 'cta' && (
            <CtaScene key="cta-scene" />
          )}
        </AnimatePresence>
      </Container>
    </ProjectContainer>
  );
};

export default CvAnalyzer;
