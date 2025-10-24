import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimationWrapper, Description } from '../Styles/LayoutStyles';
import {
  SceneGrid,
  SceneCard,
  CardTitle,
  CardSubtitle,
  MetricValue,
  MetricLabel,
  TimelineBar,
  TimelineProgress
} from '../Styles/SceneStyles';
import { SalesAnalyzer } from '../Models/SalesData';
import type { SalesDataPoint } from '../Models/SalesData';

interface PredictionsSceneProps {
  data: SalesDataPoint[];
  onRevealCta: () => void;
}

const barVariants = {
  hidden: { width: '0%' },
  visible: { width: '100%' }
};

const PredictionsScene: React.FC<PredictionsSceneProps> = ({ data, onRevealCta }) => {
  const analyzer = useMemo(() => new SalesAnalyzer(data), [data]);
  const predictions = useMemo(() => analyzer.getPredictions(), [analyzer]);

  return (
    <AnimationWrapper
      key="predictions"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2rem',
          color: '#ffcc00',
          marginBottom: '0.5rem',
          textAlign: 'center'
        }}
      >
        Predicciones accionables
      </motion.h2>

      <Description style={{ marginBottom: '2rem', color: '#fef9e7' }}>
        Alertas y recomendaciones preventivas basadas en modelos predictivos.
      </Description>

      <SceneGrid>
        {predictions.map((item, index) => (
          <SceneCard
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <CardTitle>{item.label}</CardTitle>
            <CardSubtitle>
              {item.status === 'good' ? 'Sin riesgo inmediato' : 'Requiere acción'}
            </CardSubtitle>

            <MetricValue $status={item.status}>
              <MetricLabel>Resultado esperado</MetricLabel>
              {item.value}
            </MetricValue>

            <TimelineBar>
              <TimelineProgress
                variants={barVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.2, delay: index * 0.2 }}
              />
            </TimelineBar>
          </SceneCard>
        ))}
      </SceneGrid>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ marginTop: '2.5rem' }}
      >
        <motion.button
          onClick={onRevealCta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '0.85rem 1.8rem',
            borderRadius: '999px',
            border: 'none',
            background: 'linear-gradient(135deg, #ffcc00 0%, #ff9900 100%)',
            color: '#331a00',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 12px 24px rgba(255, 204, 0, 0.25)'
          }}
        >
          Ir a la demo completa
        </motion.button>
      </motion.div>
    </AnimationWrapper>
  );
};

export default PredictionsScene;
