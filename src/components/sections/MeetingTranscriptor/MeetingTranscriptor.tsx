import { AnimatePresence } from 'framer-motion';
import AnimationNavigation from '../../ui/AnimationNavigation';
import AnimatedBackground from '../../common/AnimatedBackground';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container } from './Styles/LayoutStyles';
import { useMeetingAnimation } from './Handlers/useMeetingAnimation';
import IntroScene from './Components/IntroScene';
import RecordingScene from './Components/RecordingScene';
import AnalysisScene from './Components/AnalysisScene';
import ResultsScene from './Components/ResultsScene';

const MeetingTranscriptor: React.FC = () => {
  const project = projects[5];
  const { phase, isPlaying, start, goToNextPhase, goToPrevPhase, isFirstPhase, isLastPhase } = useMeetingAnimation();

  return (
    <ProjectContainer id="meeting-transcriptor" $bgColor={project.bgColor}>
      <AnimatedBackground type="meeting" />
      <Container>
        <AnimatePresence mode="wait">
          {phase === 'intro' && <IntroScene key="intro-scene" onStart={start} isPlaying={isPlaying} />}

          {phase === 'recording' && <RecordingScene key="recording-scene" />}

          {phase === 'analysis' && <AnalysisScene key="analysis-scene" />}

          {phase === 'results' && <ResultsScene key="results-scene" showCTA={false} />}

          {phase === 'cta' && <ResultsScene key="cta-scene" showCTA={true} />}
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

export default MeetingTranscriptor;
