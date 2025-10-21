import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Button from '../../ui/Button';
import { personalInfo } from '../../../data/portfolioData';
import { HeroContainer, HeroContent, Greeting, Name, Title, Description, ButtonContainer, ScrollIndicator, FloatingShapes, Shape, ProfileImageContainer, AnimationContainer, BackgroundImage, FinalContent } from './Styles/HeroStyles';
import { useHeroAnimation } from './Handlers/useHeroAnimation';
import { useScrollToSection } from './Handlers/useScrollToSection';
import { floatingShapes } from './Models/floatingShapes';
import VirtualKeyboard from './Components/VirtualKeyboard';
import SearchInput from './Components/SearchInput';
import LoadingEllipsis from './Components/LoadingEllipsis';

const Hero: React.FC = () => {
  const { phase, searchText, activeKey, isComplete, startAnimation } = useHeroAnimation();
  const { scrollToSection } = useScrollToSection();

  console.log('Hero component render - phase:', phase, 'searchText:', searchText, 'activeKey:', activeKey);

  return (
    <HeroContainer id="hero">
      <FloatingShapes>
        {floatingShapes.map((shape, index) => (
          <Shape
            key={index}
            $size={shape.size}
            $color={shape.color}
            $top={shape.top}
            $left={shape.left}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -30, 30, 0],
            }}
            transition={{
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </FloatingShapes>

      <AnimatePresence mode="wait">
        {phase === 'initial' && (
            <AnimationContainer
              key="initial"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SearchInput value={searchText} onSubmit={startAnimation} />
              <VirtualKeyboard activeKey={activeKey} />
            </AnimationContainer>
          )}

          {phase === 'typing' && (
            <AnimationContainer
              key="typing"
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SearchInput value={searchText} />
              <VirtualKeyboard activeKey={activeKey} />
            </AnimationContainer>
          )}

        {phase === 'loading' && (
          <AnimationContainer
            key="loading"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingEllipsis />
          </AnimationContainer>
        )}

        {phase === 'final' && (
          <FinalContent
            key="final"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <BackgroundImage
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1.5 }}
            />

            <HeroContent
              as={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Greeting
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Freelancer Especializado
              </Greeting>

              <Name
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {personalInfo.name}
              </Name>

              <Title
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                {personalInfo.title}
              </Title>

              <Description
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                Freelancer especializado en soluciones de datos y desarrollo de software para empresas dominicanas. Transformo datos en decisiones estratégicas con machine learning y análisis avanzado.
              </Description>

              <ButtonContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                >
                  Ver Servicios
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                >
                  <FaEnvelope />
                  Solicitar Consulta
                </Button>
              </ButtonContainer>
            </HeroContent>

            <ProfileImageContainer
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <img
                src="/src/components/sections/Hero/Images/placeholder-profile.jpg"
                alt="Professional profile"
              />
            </ProfileImageContainer>
          </FinalContent>
        )}
      </AnimatePresence>

      {isComplete && (
        <ScrollIndicator
          onClick={() => scrollToSection('about')}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
        >
          <FaArrowDown />
          <span>Explorar más</span>
        </ScrollIndicator>
      )}
    </HeroContainer>
  );
};

export default Hero;