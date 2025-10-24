import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  AnimationWrapper,
  Title,
  Description,
  Card,
  ScoreBadge,
} from '../Styles/LayoutStyles';
import { getRankedCandidates, mockJobPosition } from '../Models/candidatesData';

const RankingScene: React.FC = () => {
  const rankedCandidates = useMemo(() => getRankedCandidates().slice(0, 3), []);

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ alignItems: 'stretch' }}
    >
      <Title>Ranking inteligente listo</Title>
      <Description>
        Priorizamos candidatos según compatibilidad con el rol, impacto medible y alineación con tus focos estratégicos.
      </Description>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        {rankedCandidates.map(({ profile, score }, index) => {
          const summary = profile.calculateMatch(mockJobPosition);

          return (
            <Card
              key={profile.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ color: '#ff6699', marginBottom: '0.25rem' }}>
                    #{index + 1} {profile.name}
                  </h3>
                  <p style={{ margin: 0, color: '#ffe6f0' }}>{profile.currentRole} · {profile.location}</p>
                </div>
                <ScoreBadge $score={score}>{score}</ScoreBadge>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0', color: '#ffe6f0', lineHeight: 1.6 }}>
                {summary.highlights.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.5rem' }}>
                    <span style={{ color: '#ff3366' }}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  color: '#ffccdd',
                  fontSize: '0.95rem'
                }}
              >
                {profile.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill.name}
                    style={{
                      padding: '0.35rem 0.8rem',
                      borderRadius: '999px',
                      background: 'rgba(255, 102, 153, 0.15)',
                      border: '1px solid rgba(255, 102, 153, 0.35)'
                    }}
                  >
                    {skill.name} · {skill.level}
                  </span>
                ))}
              </motion.div>

              <p style={{ marginTop: '1rem', color: '#ffffff', fontWeight: 500 }}>
                {summary.focusAlignment}
              </p>
            </Card>
          );
        })}
      </motion.div>
    </AnimationWrapper>
  );
};

export default RankingScene;
