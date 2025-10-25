import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Button from '../../../ui/Button';
import { projects } from '../../../../data/portfolioData';
import { CtaContainer } from '../Styles/LayoutStyles';

const CtaScene: React.FC = () => {
  const project = projects[6];

  return (
    <motion.div
      key="cta-display"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#ffcc00',
          textShadow: '0 0 20px rgba(255, 204, 0, 0.3)'
        }}
      >
        ¡Listo para detectar oportunidades!
      </h2>
      <p
        style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          color: '#ffffff',
          maxWidth: '500px'
        }}
      >
        Has visto cómo la IA identifica anomalías y predice problemas antes de que afecten tu negocio.
      </p>

      <CtaContainer>
        <Button
          variant="primary"
          size="lg"
          onClick={() => window.open(project.demoUrl, '_blank')}
        >
          Ver proyecto completo
          <FaArrowRight />
        </Button>
      </CtaContainer>
    </motion.div>
  );
};

export default CtaScene;
