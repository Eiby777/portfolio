import { motion } from 'framer-motion';
import { FaEnvelope, FaArrowDown } from 'react-icons/fa';
import Button from '../../ui/Button';
import { personalInfo } from '../../../data/portfolioData';
import { HeroContainer, HeroContent, Greeting, Name, Title, Description, ButtonContainer, ScrollIndicator, FloatingShapes, Shape, ProfileImageContainer } from './Styles/HeroStyles';
import { useTypingAnimation } from './Handlers/useTypingAnimation';
import { useScrollToSection } from './Handlers/useScrollToSection';
import { floatingShapes } from './Models/floatingShapes';

const Hero: React.FC = () => {
  const { displayText } = useTypingAnimation(personalInfo.title);
  const { scrollToSection } = useScrollToSection();

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

      <HeroContent
        as={motion.div}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Freelancer Especializado
        </Greeting>

        <Name
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {personalInfo.name}
        </Name>

        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {displayText}
          <span className="typing-cursor"></span>
        </Title>

        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Freelancer especializado en soluciones de datos y desarrollo de software para empresas dominicanas. Transformo datos en decisiones estratégicas con machine learning y análisis avanzado.
        </Description>

        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
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
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/src/components/sections/Hero/Images/placeholder-profile.jpg"
          alt="Professional profile"
        />
      </ProfileImageContainer>

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
    </HeroContainer>
  );
};

export default Hero;