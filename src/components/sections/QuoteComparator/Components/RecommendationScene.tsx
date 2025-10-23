import { motion } from 'framer-motion';
import { FaLightbulb, FaCheckCircle } from 'react-icons/fa';
import { AnimationWrapper } from '../Styles/LayoutStyles';
import { QuoteAnalyzer } from '../Models/QuoteAnalyzer';
import { mockQuoteOptions } from '../Models/mockQuotes';

const RecommendationScene: React.FC = () => {
  const analyzer = new QuoteAnalyzer(mockQuoteOptions);
  const winner = analyzer.getWinningSupplier();
  const winningOption = mockQuoteOptions.find((option) => option.getSupplier() === winner.supplier);

  if (!winningOption) {
    return null;
  }

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 153, 51, 0.35)',
          padding: '2.5rem',
          maxWidth: '680px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.35)',
          position: 'relative'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: '#ff9933',
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: '0.75rem'
          }}
        >
          <FaLightbulb />
          Recomendación Inteligente
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '2.3rem',
            fontWeight: 700,
            color: '#ffffff'
          }}
        >
          Elegimos {winner.supplier}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontSize: '1.1rem',
            color: '#ffe0c2',
            marginTop: '0.75rem',
            lineHeight: 1.6
          }}
        >
          Con una puntuación total de {winner.totalScore.toFixed(1)}, destaca por su balance entre precio, entrega acelerada y soporte premium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            marginTop: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {winningOption.getExtras().map((extra) => (
            <div
              key={extra.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(255, 102, 0, 0.12)',
                borderRadius: '12px',
                padding: '0.75rem 1rem',
                color: '#ffffff'
              }}
            >
              <FaCheckCircle style={{ color: '#ffcc80', fontSize: '1.2rem' }} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#ffdd9a' }}>{extra.label}</span>
                <span style={{ fontSize: '0.95rem' }}>{extra.value}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </AnimationWrapper>
  );
};

export default RecommendationScene;
