import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../../ui/Button';
import { projects } from '../../../../data/portfolioData';
import {
  AnimationWrapper,
  Title,
  Description,
  CtaContainer,
} from '../Styles/LayoutStyles';

const FULL_APP_URL = 'https://abisaymedinarosario.github.io/cv-analyzer';

const CtaScene: React.FC = () => {
  const project = projects[4];

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'absolute',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,51,102,0.25) 0%, rgba(255,51,102,0) 70%)'
        }}
      />

      <Title>¿Quieres verlo en acción?</Title>
      <Description>
        Explora la versión completa del {project.title}. Descubre cómo se orquestan las evaluaciones, reportes descargables y dashboards para recruiters.
      </Description>

      <CtaContainer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Button
          variant="primary"
          size="lg"
          onClick={() => window.open(FULL_APP_URL, '_blank')}
        >
          Ver app completa
          <FaArrowRight />
        </Button>
      </CtaContainer>
    </AnimationWrapper>
  );
};

export default CtaScene;
