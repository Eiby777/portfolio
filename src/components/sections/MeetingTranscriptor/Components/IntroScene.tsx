import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { projects } from '../../../../data/portfolioData';
import { AnimationWrapper, Title, Description, PlayButton } from '../Styles/LayoutStyles';

interface IntroSceneProps {
  onStart: () => void;
  isPlaying: boolean;
}

const IntroScene: React.FC<IntroSceneProps> = ({ onStart, isPlaying }) => {
  const project = projects[5];

  const highlights = useMemo(
    () => [
      'Transcripción automática con reconocimiento de múltiples voces',
      'Resúmenes ejecutivos con acuerdos alcanzados',
      'Asignación automática de responsables y fechas límite'
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
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: '560px',
          height: '560px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <Title>{project.title}</Title>
      <Description>{project.description}</Description>

      <motion.ul
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 auto 2.5rem auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
          color: '#c8f6ff',
          fontSize: '1rem',
          maxWidth: '560px'
        }}
      >
        {highlights.map((item, idx) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem'
            }}
          >
            <span style={{ color: '#00ffff', fontSize: '1.4rem' }}>●</span>
            {item}
          </motion.li>
        ))}
      </motion.ul>

      <PlayButton
        whileHover={{ scale: 1.05, boxShadow: '0 24px 60px rgba(0, 255, 255, 0.35)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        disabled={isPlaying}
      >
        <FaPlay />
        Ver recorrido inteligente
      </PlayButton>
    </AnimationWrapper>
  );
};

export default IntroScene;
