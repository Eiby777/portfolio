import React from 'react';
import { FaPlay } from 'react-icons/fa';
import {
  InitialScreenContainer,
  Title,
  Subtitle,
  PlayButton,
} from '../Styles/InitialScreenStyles';

interface InitialScreenProps {
  /** Callback when play button is clicked */
  onPlayClick: () => void;
  /** Whether the screen should be visible */
  isVisible: boolean;
}

/**
 * Initial screen component with centered text and play button.
 * Displays the title "Analizador de Hilos de Email" with description
 * and a play button that triggers the animation sequence.
 */
const InitialScreen: React.FC<InitialScreenProps> = ({
  onPlayClick,
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <InitialScreenContainer
      initial={{ opacity: 1, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <Title
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        }}
        exit={{
          opacity: 0,
          y: -20,
          transition: { duration: 0.5, ease: "easeIn" }
        }}
      >
        Analizador de Hilos de Email
      </Title>

      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
        }}
        exit={{
          opacity: 0,
          y: -15,
          transition: { duration: 0.5, delay: 0.1, ease: "easeIn" }
        }}
      >
        Experimenta cómo la IA transforma hilos de email complejos
        en insights accionables y respuestas automatizadas.
      </Subtitle>

      <PlayButton
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
          transition: { duration: 0.4, delay: 0.2, ease: "easeIn" }
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        onClick={onPlayClick}
        type="button"
        aria-label="Iniciar demostración"
      >
        <FaPlay />
        Ver Demostración
      </PlayButton>
    </InitialScreenContainer>
  );
};

export default InitialScreen;