import { AnimatePresence } from 'framer-motion';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container } from './Styles/LayoutStyles';
import { useMeetingAnimation } from './Handlers/useMeetingAnimation';
import IntroScene from './Components/IntroScene';
import RecordingScene from './Components/RecordingScene';
import AnalysisScene from './Components/AnalysisScene';
import ResultsScene from './Components/ResultsScene';

const MeetingTranscriptor: React.FC = () => {
  const project = projects[5];
  const { phase, isPlaying, start } = useMeetingAnimation();

  return (
    <ProjectContainer id="meeting-transcriptor" $bgColor={project.bgColor}>
      <Container>
        <AnimatePresence mode="wait">
          {phase === 'intro' && <IntroScene key="intro-scene" onStart={start} isPlaying={isPlaying} />}

          {phase === 'recording' && <RecordingScene key="recording-scene" />}

          {phase === 'analysis' && <AnalysisScene key="analysis-scene" />}

          {(phase === 'results' || phase === 'cta') && <ResultsScene key="results-scene" />}
        </AnimatePresence>
      </Container>
    </ProjectContainer>
  );
};

export default MeetingTranscriptor;
