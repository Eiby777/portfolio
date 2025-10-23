import { motion } from 'framer-motion';
import { invoiceFormats } from '../Models/InvoiceData';
import { AnimationWrapper, StatusMessage } from '../Styles/LayoutStyles';
import { FormatBadge, FormatIcon, FormatLabel } from '../Styles/CardStyles';

const FormatsScene: React.FC = () => {
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
          fontSize: '2.2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#00ff88'
        }}
      >
        Soporta Múltiples Formatos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          fontSize: '1.1rem',
          color: '#ffffff',
          marginBottom: '3rem',
          maxWidth: '600px'
        }}
      >
        Sin importar el formato de tu factura, nuestro sistema OCR avanzado puede procesarla
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}
      >
        {invoiceFormats.map((format, index) => (
          <motion.div
            key={format.id}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6 + index * 0.2,
              type: 'spring',
              stiffness: 100
            }}
          >
            <FormatBadge $color={format.color}>
              <FormatIcon>{format.icon}</FormatIcon>
              <FormatLabel>{format.label}</FormatLabel>
            </FormatBadge>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        style={{
          background: 'rgba(0, 255, 136, 0.1)',
          padding: '1.5rem 2rem',
          borderRadius: '12px',
          border: '2px solid rgba(0, 255, 136, 0.3)',
          maxWidth: '500px'
        }}
      >
        <motion.p
          style={{
            color: '#00ff88',
            fontSize: '1rem',
            fontWeight: 600,
            margin: 0
          }}
        >
          ✓ OCR de alta precisión para cualquier calidad de imagen
        </motion.p>
        <motion.p
          style={{
            color: '#ffffff',
            fontSize: '0.95rem',
            margin: '0.5rem 0 0 0'
          }}
        >
          Incluso facturas borrosas, con ángulos incorrectos o con sellos
        </motion.p>
      </motion.div>

      <StatusMessage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        Ahora veamos cómo validamos los datos extraídos...
      </StatusMessage>
    </AnimationWrapper>
  );
};

export default FormatsScene;
