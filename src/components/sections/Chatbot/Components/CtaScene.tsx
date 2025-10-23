import { FaArrowRight, FaCheckCircle, FaBolt, FaBookOpen } from 'react-icons/fa';
import {
  AnimationWrapper,
  CtaContainer,
  HighlightCard,
  HighlightTitle,
  HighlightText,
  PrimaryButton,
} from '../Styles/LayoutStyles';

const externalDemoUrl = 'https://abisay-ai-chatbot-demo.vercel.app';

const CtaScene: React.FC = () => {
  return (
    <AnimationWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <CtaContainer>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700 }}>
          Escala tu atención al cliente con IA
        </h2>
        <p style={{ maxWidth: '520px', color: 'rgba(243,232,255,0.78)' }}>
          Entrenamos el chatbot con tus políticas, contratos y manuales para que responda consultas reales en segundos y derive solo los casos críticos al equipo humano.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            width: '100%'
          }}
        >
          <HighlightCard
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HighlightTitle>
              <FaBolt /> Respuestas inmediatas
            </HighlightTitle>
            <HighlightText>
              Orquestación multi-canal con métricas en tiempo real.
            </HighlightText>
          </HighlightCard>

          <HighlightCard
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <HighlightTitle>
              <FaBookOpen /> Aprendizaje continuo
            </HighlightTitle>
            <HighlightText>
              Ajuste automático usando feedback de tus agentes.
            </HighlightText>
          </HighlightCard>

          <HighlightCard
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HighlightTitle>
              <FaCheckCircle /> Compliant por diseño
            </HighlightTitle>
            <HighlightText>
              Registro auditable de cada decisión tomada por la IA.
            </HighlightText>
          </HighlightCard>
        </div>

        <PrimaryButton
          whileHover={{ scale: 1.05, boxShadow: '0 18px 36px rgba(153, 51, 255, 0.45)' }}
          whileTap={{ scale: 0.96 }}
          onClick={() => window.open(externalDemoUrl, '_blank', 'noopener')}
        >
          Ver aplicación completa
          <FaArrowRight />
        </PrimaryButton>

        <p style={{ fontSize: '0.85rem', color: 'rgba(243,232,255,0.55)' }}>
          Incluye dashboard de métricas, entrenamiento incremental y APIs REST.
        </p>
      </CtaContainer>
    </AnimationWrapper>
  );
};

export default CtaScene;
