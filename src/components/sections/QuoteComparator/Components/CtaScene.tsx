import { motion } from 'framer-motion';
import { FaArrowRight, FaChartLine } from 'react-icons/fa';
import Button from '../../../ui/Button';
import { AnimationWrapper, CtaContainer } from '../Styles/LayoutStyles';

const externalUrl = 'https://quote-comparator.abisay.dev';

const CtaScene: React.FC = () => {

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1
          }}
          style={{
            fontSize: '4rem',
            color: '#ff9933'
          }}
        >
          <FaChartLine />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ff6600'
          }}
        >
          ¿Listo para optimizar tus compras?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '1.2rem',
            color: '#ffe0c2',
            lineHeight: '1.6'
          }}
        >
          Has visto cómo la IA compara cotizaciones, normaliza métricas y recomienda con criterio objetivo.
          Ahorra tiempo y mejora tus decisiones de compra.
        </motion.p>

        <CtaContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            backgroundColor="linear-gradient(135deg, #ff6600 0%, #ff8833 100%)"
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explorar proyecto completo
            <FaArrowRight />
          </Button>
        </CtaContainer>
      </motion.div>
    </AnimationWrapper>
  );
};

export default CtaScene;
