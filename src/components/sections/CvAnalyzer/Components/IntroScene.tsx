import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { projects } from '../../../../data/portfolioData';
import {
  AnimationWrapper,
  Title,
  Description,
  PlayButton,
} from '../Styles/LayoutStyles';

interface IntroSceneProps {
  onStart: () => void;
  isPlaying: boolean;
}

const IntroScene: React.FC<IntroSceneProps> = ({ onStart, isPlaying }) => {
  const project = projects[4];

  const highlights = useMemo(
    () => [
      'Filtra automáticamente CVs por palabras clave y habilidades',
      'Genera ranking inteligente con score de compatibilidad',
      'Crea preguntas de entrevista personalizadas para cada candidato'
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
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,51,102,0.35) 0%, rgba(255,51,102,0) 70%)',
          filter: 'blur(0px)'
        }}
      />

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
          color: '#ffccdd',
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
            <span style={{ color: '#ff3366', fontSize: '1.2rem' }}>●</span>
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
        Ver proceso completo
      </PlayButton>
    </AnimationWrapper>
  );
};

export default IntroScene;
