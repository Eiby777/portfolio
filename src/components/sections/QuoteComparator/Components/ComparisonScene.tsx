import { motion } from 'framer-motion';
import { AnimationWrapper } from '../Styles/LayoutStyles';
import { ComparisonGrid, ComparisonRow, RowHeader, CellValue, WinnerBadge } from '../Styles/ComparisonStyles';
import { QuoteAnalyzer } from '../Models/QuoteAnalyzer';
import { mockQuoteOptions } from '../Models/mockQuotes';

const ComparisonScene: React.FC = () => {
  const analyzer = new QuoteAnalyzer(mockQuoteOptions);
  const rankings = analyzer.getSnapshots();
  const winner = rankings[0];

  const rows = [
    {
      label: 'Proveedor',
      data: mockQuoteOptions.map((option) => option.getSupplier())
    },
    {
      label: 'Precio Neto',
      data: mockQuoteOptions.map((option) => `$${option.calculateNetPrice().toLocaleString('en-US')}`)
    },
    {
      label: 'Entrega',
      data: mockQuoteOptions.map((option) => `${option.getDeliveryDays()} días`)
    },
    {
      label: 'Calificación',
      data: mockQuoteOptions.map((option) => `${option.getQualityScore().toFixed(1)} / 5.0`)
    },
    {
      label: 'Puntuación IA',
      data: rankings.map((score) => `${score.totalScore.toFixed(1)}`)
    }
  ];

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
          marginBottom: '0.5rem'
        }}
      >
        Tabla Comparativa
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: '1.1rem',
          color: '#ffe0c2',
          marginBottom: '2rem',
          textAlign: 'center'
        }}
      >
        Todos los proveedores, métricas normalizadas y puntajes generados por IA
      </motion.p>

      <ComparisonGrid
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {rows.map((row, rowIndex) => (
          <ComparisonRow
            key={row.label}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: rowIndex * 0.15 }}
          >
            <RowHeader>{row.label}</RowHeader>
            {row.data.map((value, cellIndex) => {
              const supplierName = mockQuoteOptions[cellIndex].getSupplier();
              const isWinner = rowIndex === rows.length - 1 && supplierName === winner.supplier;

              return (
                <CellValue
                  key={`${rowIndex}-${cellIndex}`}
                  $isWinner={isWinner}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: rowIndex * 0.15 + cellIndex * 0.08 }}
                >
                  {value}
                  {isWinner && (
                    <WinnerBadge
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
                    >
                      ★ MEJOR
                    </WinnerBadge>
                  )}
                </CellValue>
              );
            })}
          </ComparisonRow>
        ))}
      </ComparisonGrid>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        style={{
          fontSize: '0.95rem',
          color: '#ffc080',
          marginTop: '1.5rem',
          textAlign: 'center'
        }}
      >
        * Los puntajes consideran pesos definidos para precio, calidad, entrega y soporte
      </motion.p>
    </AnimationWrapper>
  );
};

export default ComparisonScene;
