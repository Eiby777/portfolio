import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  AnimationWrapper,
  Title,
  Description,
  Card,
} from '../Styles/LayoutStyles';
import { getRankedCandidates, mockJobPosition } from '../Models/candidatesData';
import { InterviewQuestionGenerator } from '../Models/CandidateProfile';

const InterviewScene: React.FC = () => {
  const topCandidate = useMemo(() => getRankedCandidates()[0], []);
  const questionGenerator = useMemo(
    () => new InterviewQuestionGenerator(mockJobPosition),
    []
  );
  const questions = useMemo(
    () => topCandidate.profile.generateInterviewQuestions(questionGenerator),
    [topCandidate, questionGenerator]
  );

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ alignItems: 'stretch' }}
    >
      <Title>Preguntas personalizadas</Title>
      <Description>
        IA generó {questions.length} preguntas estratégicas para {topCandidate.profile.name},
        nuestro candidato #1, enfocadas en sus fortalezas y áreas clave del rol.
      </Description>

      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ marginBottom: '1.5rem' }}
      >
        <h3 style={{ color: '#ff6699', marginBottom: '0.25rem' }}>{topCandidate.profile.name}</h3>
        <p style={{ margin: 0, color: '#ffe6f0' }}>
          {topCandidate.profile.currentRole} · {topCandidate.profile.experience} años de experiencia
        </p>
      </Card>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        {questions.map((question, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
          >
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span
                style={{
                  color: '#ff3366',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}
              >
                {index + 1}.
              </span>
              <p style={{ margin: 0, color: '#ffffff', lineHeight: 1.6 }}>{question}</p>
            </div>
          </Card>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{
          marginTop: '2rem',
          color: '#ffccdd',
          fontSize: '1rem',
          textAlign: 'center'
        }}
      >
        Estas preguntas son generadas dinámicamente basándose en el perfil del candidato y los requisitos del rol.
      </motion.p>
    </AnimationWrapper>
  );
};

export default InterviewScene;
