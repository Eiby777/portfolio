import { motion, type Variants } from 'framer-motion';
import { FaFileInvoiceDollar, FaTruck, FaStar } from 'react-icons/fa';
import { AnimationWrapper } from '../Styles/LayoutStyles';
import { QuoteCard, SupplierName, PriceTag, PriceHighlight, MetaInfo } from '../Styles/QuoteCardStyles';
import { mockQuoteOptions } from '../Models/mockQuotes';

const UploadScene: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 12
      }
    }
  };

  const options = mockQuoteOptions.slice(0, 4);

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
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#ff9933',
          marginBottom: '2rem',
          textAlign: 'center'
        }}
      >
        Cargando Cotizaciones
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          width: '100%'
        }}
      >
        {options.map((option, index) => {
          const netPrice = option.calculateNetPrice();

          return (
            <QuoteCard
              key={option.getSupplier()}
              variants={cardVariants}
            >
              <SupplierName>
                <FaFileInvoiceDollar />
                {option.getSupplier()}
              </SupplierName>

              <PriceTag>
                DOP ${netPrice.toLocaleString('en-US')}
                <PriceHighlight>Precio neto con descuento</PriceHighlight>
              </PriceTag>

              <MetaInfo>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <FaTruck />
                  {option.getDeliveryDays()} días
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <FaStar style={{ color: '#ffb74d' }} />
                  {option.getQualityScore().toFixed(1)}
                </div>
              </MetaInfo>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: index * 0.4 + 0.5 }}
                style={{
                  height: '3px',
                  background: 'linear-gradient(90deg, #ff6600 0%, #ff9933 100%)',
                  borderRadius: '2px',
                  boxShadow: '0 0 8px rgba(255, 102, 0, 0.6)'
                }}
              />
            </QuoteCard>
          );
        })}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        style={{
          fontSize: '1rem',
          color: '#ffe0c2',
          marginTop: '2rem',
          textAlign: 'center'
        }}
      >
        ✓ {options.length} cotizaciones recibidas y validadas
      </motion.p>
    </AnimationWrapper>
  );
};

export default UploadScene;
