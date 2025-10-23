import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaWhatsapp, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { projects } from '../../../../data/portfolioData';
import {
  AnimationWrapper,
  Title,
  Description,
  PrimaryButton,
  GradientOrb,
  HighlightCard,
  HighlightTitle,
  HighlightText,
} from '../Styles/LayoutStyles';

interface IntroSceneProps {
  onStart: () => void;
  isPlaying: boolean;
}

const IntroScene: React.FC<IntroSceneProps> = ({ onStart, isPlaying }) => {
  const project = projects[2];

  const highlights = useMemo(
    () => [
      {
        icon: <FaWhatsapp />,
        title: 'Integración WhatsApp',
        text: 'Respuestas instantáneas a consultas de clientes 24/7'
      },
      {
        icon: <FaEnvelope />,
        title: 'Soporte Email',
        text: 'Gestión automática de tickets basada en tus políticas'
      },
      {
        icon: <FaGlobe />,
        title: 'Chat Web',
        text: 'Widget personalizado para tu página web corporativa'
      }
    ],
    []
  );

  return (
    <AnimationWrapper
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <GradientOrb
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.45, scale: 1.15 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        style={{
          width: '360px',
          height: '360px',
          background: 'radial-gradient(circle, rgba(153, 51, 255, 0.5) 0%, rgba(153, 51, 255, 0) 75%)',
        }}
      />

      <Title>{project.title}</Title>
      <Description>{project.description}</Description>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
          width: '100%',
          marginBottom: '2rem'
        }}
      >
        {highlights.map((item, idx) => (
          <HighlightCard
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
          >
            <HighlightTitle>
              {item.icon}
              {item.title}
            </HighlightTitle>
            <HighlightText>{item.text}</HighlightText>
          </HighlightCard>
        ))}
      </motion.div>

      <PrimaryButton
        whileHover={{ scale: 1.06, boxShadow: '0 16px 32px rgba(153, 51, 255, 0.45)' }}
        whileTap={{ scale: 0.96 }}
        onClick={onStart}
        disabled={isPlaying}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <FaPlay />
        Ver Demo en Acción
      </PrimaryButton>
    </AnimationWrapper>
  );
};

export default IntroScene;
