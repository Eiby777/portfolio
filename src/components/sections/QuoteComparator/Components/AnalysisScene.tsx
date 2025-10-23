import { motion } from 'framer-motion';
import { FaDollarSign, FaMedal, FaShippingFast, FaHeadset } from 'react-icons/fa';
import { AnimationWrapper, Description } from '../Styles/LayoutStyles';
import {
  AnalysisBar,
  AnalysisProgress,
  CriteriaLabel,
  WeightBadge
} from '../Styles/ComparisonStyles';
import { QuoteAnalyzer } from '../Models/QuoteAnalyzer';
import { mockQuoteOptions } from '../Models/mockQuotes';

const iconMap = {
  price: <FaDollarSign />,
  quality: <FaMedal />,
  delivery: <FaShippingFast />,
  support: <FaHeadset />,
};

const AnalysisScene: React.FC = () => {
  const analyzer = new QuoteAnalyzer(mockQuoteOptions);
  const weights = analyzer.getWeights();
  const winning = analyzer.getWinningSupplier();
  const winningOption =
    mockQuoteOptions.find((option) => option.getSupplier() === winning.supplier) ||
    mockQuoteOptions[0];

  const weightEntries = Object.entries(weights) as Array<[
    keyof typeof weights,
    number
  ]>;

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.4rem',
          fontWeight: 'bold',
          color: '#ffcc80',
          marginBottom: '1rem'
        }}
      >
        Analizando tus criterios
      </motion.h2>

      <Description>
        Optimiza la decisión según lo que más importa a tu empresa. Los pesos se pueden ajustar en tiempo real
      </Description>

      <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {weightEntries.map(([key, value]) => {
          const label = key === 'price'
            ? 'Precio'
            : key === 'quality'
              ? 'Calidad'
              : key === 'delivery'
                ? 'Entrega'
                : 'Soporte';

          return (
            <div key={key}>
              <CriteriaLabel>
                <span style={{ color: '#ff9933', fontSize: '1.35rem' }}>
                  {iconMap[key]}
                </span>
                {label}
                <WeightBadge>{(value * 100).toFixed(0)}%</WeightBadge>
              </CriteriaLabel>
              <AnalysisBar
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <AnalysisProgress
                  $color="linear-gradient(90deg, rgba(255, 102, 0, 0.7) 0%, rgba(255, 153, 51, 0.9) 100%)"
                  initial={{ width: '0%' }}
                  animate={{ width: `${value * 100}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </AnalysisBar>
            </div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          marginTop: '2rem',
          background: 'rgba(255, 102, 0, 0.15)',
          border: '1px solid rgba(255, 153, 51, 0.5)',
          borderRadius: '12px',
          padding: '1.5rem',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          maxWidth: '520px'
        }}
      >
        <span style={{ fontWeight: 600, color: '#ffdd9a', letterSpacing: '0.05em' }}>
          IA Insights
        </span>
        <p style={{ fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>
          {winning.supplier} lidera la evaluación con una puntuación global de {winning.totalScore.toFixed(1)}.
          Destaca por su combinación de precio competitivo y entrega acelerada en solo {winningOption.getDeliveryDays()} días.
        </p>
      </motion.div>
    </AnimationWrapper>
  );
};

export default AnalysisScene;
