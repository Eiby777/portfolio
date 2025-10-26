import { AnimatePresence } from 'framer-motion';
import AnimationNavigation from '../../ui/AnimationNavigation';
import AnimatedBackground from '../../common/AnimatedBackground';
import { projects } from '../../../data/portfolioData';
import { ProjectContainer, Container } from './Styles/LayoutStyles';
import { useChatbotAnimation } from './Handlers/useChatbotAnimation';
import IntroScene from './Components/IntroScene';
import CustomerQueryScene from './Components/CustomerQueryScene';
import ChatbotResponseScene from './Components/ChatbotResponseScene';
import CtaScene from './Components/CtaScene';

const Chatbot: React.FC = () => {
  const project = projects[2];
  const { phase, isPlaying, start, goToNextPhase, goToPrevPhase, isFirstPhase, isLastPhase } = useChatbotAnimation();

  return (
    <ProjectContainer id="chatbot" $bgColor={project.bgColor}>
      <AnimatedBackground type="chatbot" />
      <Container>
        <AnimatePresence mode="wait">
          {phase === 'intro' && (
            <IntroScene
              key="intro-scene"
              onStart={start}
              isPlaying={isPlaying}
            />
          )}

          {phase === 'customer-query' && (
            <CustomerQueryScene key="customer-query-scene" />
          )}

          {phase === 'chatbot-response' && (
            <ChatbotResponseScene key="chatbot-response-scene" />
          )}

          {phase === 'cta' && (
            <CtaScene key="cta-scene" />
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

export default Chatbot;
