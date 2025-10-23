import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScaleRight, FaPlay } from 'react-icons/fa';
import { projects } from '../../../../data/portfolioData';
import { AnimationWrapper, Title, Description, PlayButton } from '../Styles/LayoutStyles';

interface IntroSceneProps {
  onStart: () => void;
  isPlaying: boolean;
}

const IntroScene: React.FC<IntroSceneProps> = ({ onStart, isPlaying }) => {
  const project = projects[3];

  const highlights = useMemo(
    () => [
      'Compara múltiples proveedores en segundos',
      'Modela tus criterios y pesos personalizados',
      'Recibe recomendaciones justificadas con IA'
    ],
    []
  );

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,102,0,0.35) 0%, rgba(255,102,0,0) 70%)',
          filter: 'blur(0px)'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '1rem',
          color: '#ff9933',
          fontWeight: 600,
          letterSpacing: '0.08em'
        }}
      >
        <FaBalanceScaleRight />
        Inteligencia Comercial
      </motion.div>

      <Title>{project.title}</Title>
      <Description>{project.description}</Description>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 2rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          color: '#ffe0c2',
          fontSize: '1rem'
        }}
      >
        {highlights.map((item) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{ color: '#ff6600', fontSize: '1.2rem' }}>●</span>
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <PlayButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        disabled={isPlaying}
      >
        <FaPlay />
        Ver análisis guiado
      </PlayButton>
    </AnimationWrapper>
  );
};

export default IntroScene;
