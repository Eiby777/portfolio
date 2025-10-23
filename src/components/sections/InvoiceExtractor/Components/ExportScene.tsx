import { motion } from 'framer-motion';
import { FaFileExcel, FaArrowRight } from 'react-icons/fa';
import { projects } from '../../../../data/portfolioData';
import Button from '../../../ui/Button';
import { AnimationWrapper, CtaContainer } from '../Styles/LayoutStyles';
import {
  ExportButton,
  ProcessingBar,
  ProcessingProgress,
} from '../Styles/ExportStyles';

const externalUrl = 'https://invoice-extractor.abisay.dev';

const ExportScene: React.FC = () => {
  const project = projects[1];
  const accent = project.color;
  const accentBorder = project.secondaryColor;

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          maxWidth: '600px',
          width: '100%'
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: accent,
            textAlign: 'center'
          }}
        >
          Exportación a Excel
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '1.15rem',
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: '1.6'
          }}
        >
          {project.title} convierte cada factura en una fila estructurada lista para análisis contable
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: 'spring',
            stiffness: 110
          }}
          style={{
            background: 'rgba(0, 255, 136, 0.15)',
            border: `3px solid ${accentBorder}`,
            borderRadius: '16px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            width: '100%',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)'
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 4, -4, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            style={{
              fontSize: '4rem',
              color: '#217346'
            }}
          >
            <FaFileExcel />
          </motion.div>

          <div style={{ width: '100%' }}>
            <ProcessingBar>
              <ProcessingProgress
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
              />
            </ProcessingBar>
          </div>

          <ExportButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFileExcel />
            Descargar Excel
          </ExportButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          style={{
            fontSize: '1rem',
            color: '#c8ffde',
            textAlign: 'center',
            marginTop: '1rem'
          }}
        >
          En segundos obtienes datos validados, listos para integrarse con tu flujo financiero
        </motion.p>

        <CtaContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Button
            variant="primary"
            size="lg"
            backgroundColor="linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)"
            color="#001a0d"
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Proyecto Completo
            <FaArrowRight />
          </Button>
        </CtaContainer>
      </motion.div>
    </AnimationWrapper>
  );
};

export default ExportScene;
