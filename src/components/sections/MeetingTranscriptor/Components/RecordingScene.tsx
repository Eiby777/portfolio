import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimationWrapper, Title, Description } from '../Styles/LayoutStyles';
import {
  Waveform,
  WaveBar,
  TranscriptBox,
  TranscriptLine,
  Timestamp,
  Speaker,
  Speech
} from '../Styles/FeatureStyles';
import { MeetingArtifactsFactory } from '../Models/MeetingData';

const RecordingScene: React.FC = () => {
  const transcript = useMemo(() => MeetingArtifactsFactory.createTranscriptSample(), []);
  const entries = transcript.getEntries();
  const waveformHeights = useMemo(
    () => Array.from({ length: 32 }, (_, index) => 20 + Math.sin(index) * 40 + Math.random() * 40),
    []
  );

  return (
    <AnimationWrapper
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6 }}
    >
      <Title>Captura y transcribe en segundos</Title>
      <Description>
        Detectamos múltiples voces, limpiamos el audio y convertimos cada intervención en texto estructurado en tiempo real.
      </Description>

      <Waveform>
        {waveformHeights.map((height, index) => (
          <WaveBar
            key={index}
            initial={{ height: height * 0.2 }}
            animate={{ height }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: index * 0.03,
              ease: 'easeInOut'
            }}
          />
        ))}
      </Waveform>

      <TranscriptBox
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {entries.map((entry, idx) => (
          <motion.div
            key={`${entry.timestamp}-${idx}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + idx * 0.15 }}
          >
            <TranscriptLine>
              <Timestamp>{entry.timestamp}</Timestamp>
              <Speaker>{entry.speaker}</Speaker>
              <Speech>{entry.text}</Speech>
            </TranscriptLine>
          </motion.div>
        ))}
      </TranscriptBox>
    </AnimationWrapper>
  );
};

export default RecordingScene;
