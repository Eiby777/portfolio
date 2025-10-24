import { motion } from 'framer-motion';
import {
  AnimationWrapper,
  Title,
  Description,
  Card,
  ProgressBar,
  ProgressFill,
} from '../Styles/LayoutStyles';
import { mockJobPosition } from '../Models/candidatesData';

const UploadScene: React.FC = () => {
  const steps = [
    { label: 'CVs recibidos', progress: 100 },
    { label: 'Extracción de habilidades y experiencia', progress: 78 },
    { label: 'Comparación con perfil buscado', progress: 52 },
  ];

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ alignItems: 'stretch' }}
    >
      <Title>Sube CVs y la descripción del rol</Title>
      <Description>
        Un solo upload y la IA se encarga de estandarizar la información para comparar candidatos con el perfil de {mockJobPosition.roleTitle}.
      </Description>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ color: '#ff6699', marginBottom: '0.5rem' }}>Requisitos clave</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ffe6f0', lineHeight: 1.5 }}>
            {mockJobPosition.primarySkills.map((skill) => (
              <li key={skill} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: '#ff3366' }}>▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </Card>

        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 style={{ color: '#ff6699', marginBottom: '0.5rem' }}>Focos estratégicos</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#ffe6f0', lineHeight: 1.5 }}>
            {mockJobPosition.focusAreas.map((area) => (
              <li key={area} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ color: '#ff3366' }}>▹</span>
                {area}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>

      <div style={{ marginTop: '2rem', width: '100%' }}>
        {steps.map((step) => (
          <div key={step.label} style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffe6f0', marginBottom: '0.3rem' }}>
              <span>{step.label}</span>
              <span>{step.progress}%</span>
            </div>
            <ProgressBar>
              <ProgressFill
                initial={{ width: 0 }}
                animate={{ width: `${step.progress}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </ProgressBar>
          </div>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default UploadScene;
