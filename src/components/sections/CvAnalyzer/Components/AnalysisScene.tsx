import { motion } from 'framer-motion';
import {
  AnimationWrapper,
  Title,
  Description,
  StatusMessage,
} from '../Styles/LayoutStyles';

const AnalysisScene: React.FC = () => {
  const analysisSteps = [
    { label: 'Extracción de habilidades técnicas', delay: 0.2 },
    { label: 'Mapeo de experiencia relevante', delay: 0.5 },
    { label: 'Detección de logros cuantificables', delay: 0.8 },
    { label: 'Cálculo de compatibilidad global', delay: 1.1 },
  ];

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '6px solid rgba(255, 51, 102, 0.2)',
          borderTop: '6px solid #ff3366',
          marginBottom: '2rem'
        }}
      />

      <Title>Analizando 5 candidatos...</Title>
      <Description>
        La IA está procesando los CVs para detectar patrones, medir compatibilidad con el rol, y generar un ranking objetivo.
      </Description>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '2rem',
          textAlign: 'left',
          width: '100%',
          maxWidth: '500px'
        }}
      >
        {analysisSteps.map((step) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: step.delay }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              color: '#ffe6f0'
            }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: step.delay + 0.2 }}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #ff3366 0%, #ff6699 100%)',
                flexShrink: 0
              }}
            />
            <span style={{ fontSize: '1.1rem' }}>{step.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <StatusMessage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        Generando ranking inteligente...
      </StatusMessage>
    </AnimationWrapper>
  );
};

export default AnalysisScene;
