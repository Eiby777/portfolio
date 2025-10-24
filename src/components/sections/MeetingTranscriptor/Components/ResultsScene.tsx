import { useMemo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AnimationWrapper, Title, Description, CtaContainer, PrimaryButton } from '../Styles/LayoutStyles';
import { SummaryCard, ActionItemsGrid, ActionItemCard, OwnerTag, DueDateTag } from '../Styles/FeatureStyles';
import { MeetingArtifactsFactory } from '../Models/MeetingData';

const ResultsScene: React.FC = () => {
  const summary = useMemo(() => MeetingArtifactsFactory.createExecutiveSummary(), []);
  const actionItems = useMemo(() => MeetingArtifactsFactory.createActionItems(), []);

  return (
    <AnimationWrapper
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <Title>Minutas listas para compartir</Title>
      <Description>
        Entregamos resúmenes ejecutivos claros con acuerdos clave y responsables asignados en cuestión de segundos.
        Listos para enviar al equipo.
      </Description>

      <SummaryCard
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 style={{ color: '#66ffff', fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 700 }}>
          Resumen Ejecutivo
        </h3>
        {summary.overview.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.2 }}
            style={{ color: '#e6ffff', marginBottom: '0.8rem', lineHeight: 1.5 }}
          >
            {paragraph}
          </motion.p>
        ))}

        <h4 style={{ color: '#8af6ff', fontSize: '1rem', margin: '1.5rem 0 0.8rem 0', fontWeight: 600 }}>
          Acuerdos Principales
        </h4>
        <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#c8f6ff', lineHeight: 1.5 }}>
          {summary.agreements.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.15 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </SummaryCard>

      <ActionItemsGrid>
        {actionItems.map((item, index) => (
          <ActionItemCard
            key={item.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
          >
            <DueDateTag>Entrega: {item.dueDate}</DueDateTag>
            <p style={{ color: '#e6ffff', fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 }}>
              {item.description}
            </p>
            <OwnerTag>{item.owner.displayLabel}</OwnerTag>
          </ActionItemCard>
        ))}
      </ActionItemsGrid>

      <CtaContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <p style={{ color: '#8af6ff', fontSize: '1rem', maxWidth: '520px', textAlign: 'center' }}>
          Descubre la demo interactiva completa y transforma tus reuniones en decisiones accionables de inmediato.
        </p>
        <PrimaryButton
          whileHover={{ scale: 1.05, boxShadow: '0 24px 60px rgba(0, 255, 255, 0.35)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://transcriptor-demo.abisay.dev', '_blank', 'noopener')}
        >
          Probar versión completa
          <FaArrowRight />
        </PrimaryButton>
      </CtaContainer>
    </AnimationWrapper>
  );
};

export default ResultsScene;
