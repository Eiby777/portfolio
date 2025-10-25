import { useMemo, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCheckCircle } from 'react-icons/fa';
import { AnimationWrapper, Title, Description } from '../Styles/LayoutStyles';
import { InsightGrid, InsightCard } from '../Styles/FeatureStyles';

class InsightProcessor {
  private insights: Array<{ icon: ReactNode; label: string; detail: string }>;

  constructor() {
    this.insights = [
      {
        icon: <FaBrain size={28} color="#00ffff" />,
        label: 'Extracción de decisiones',
        detail: 'Detectamos compromisos y acciones acordadas por NLP avanzado'
      },
      {
        icon: <FaCheckCircle size={28} color="#00ffff" />,
        label: 'Identificación de responsables',
        detail: 'Vinculamos automáticamente tareas con personas mencionadas'
      },
      {
        icon: <FaBrain size={28} color="#00ffff" />,
        label: 'Análisis de temas clave',
        detail: 'Agrupamos discusiones por temas relevantes del negocio'
      }
    ];
  }

  getInsights(): typeof this.insights {
    return [...this.insights];
  }
}

const AnalysisScene: React.FC = () => {
  const processor = useMemo(() => new InsightProcessor(), []);
  const insights = processor.getInsights();

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Procesamiento inteligente</Title>
      <Description>
        Nuestro modelo de IA analiza cada línea transcrita para encontrar decisiones, acuerdos y puntos pendientes de
        manera automática.
      </Description>

      <motion.div
        style={{
          width: '120px',
          height: '120px',
          margin: '2rem auto',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.4) 0%, transparent 70%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <FaBrain size={50} color="#00ffff" />
      </motion.div>

      <InsightGrid>
        {insights.map((insight, index) => (
          <InsightCard
            key={insight.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
          >
            <div style={{ marginBottom: '0.8rem' }}>{insight.icon}</div>
            <h4
              style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: '#66ffff',
                marginBottom: '0.5rem'
              }}
            >
              {insight.label}
            </h4>
            <p style={{ fontSize: '0.9rem', color: '#c8f6ff', lineHeight: '1.4' }}>{insight.detail}</p>
          </InsightCard>
        ))}
      </InsightGrid>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        style={{
          marginTop: '2rem',
          fontSize: '1rem',
          color: '#8af6ff',
          fontWeight: '500'
        }}
      >
        Generando resumen ejecutivo y action items...
      </motion.p>
    </AnimationWrapper>
  );
};

export default AnalysisScene;
