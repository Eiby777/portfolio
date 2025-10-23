import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { Invoice, sampleInvoiceData } from '../Models/InvoiceData';
import { AnimationWrapper, StatusMessage } from '../Styles/LayoutStyles';
import {
  InvoiceCard,
  InvoiceHeader,
  InvoiceTitle,
  InvoiceField,
  FieldLabel,
  FieldValue,
  ValidationBadge,
} from '../Styles/CardStyles';

const ValidationScene: React.FC = () => {
  const invoice = useMemo(() => {
    const document = new Invoice('Factura Fotográfica');
    sampleInvoiceData.forEach((field, index) => {
      document.addField(`field-${index}`, field);
    });
    return document;
  }, []);

  const fields = invoice.getAllFields();
  const hasErrors = invoice.hasErrors();
  const isValid = invoice.isFullyValidated();

  return (
    <AnimationWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.2rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#00ff88'
        }}
      >
        Validación Automática de Datos
      </motion.h2>

      <InvoiceCard
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <InvoiceHeader>
          <InvoiceTitle>Factura #{new Date().getFullYear()}</InvoiceTitle>
          <ValidationBadge $isValid={!hasErrors}>
            {hasErrors ? <FaExclamationTriangle /> : <FaShieldAlt />}
            {hasErrors ? 'Inconsistencias detectadas' : 'RNC validado'}
          </ValidationBadge>
        </InvoiceHeader>

        {fields.map((field, index) => (
          <InvoiceField
            key={field.label}
            $hasError={field.hasError}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <FieldLabel>{field.label}</FieldLabel>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <FieldValue>{field.value}</FieldValue>
              <ValidationBadge $isValid={!field.hasError && field.validated}>
                {field.hasError ? <FaExclamationTriangle /> : <FaCheckCircle />}
                {field.hasError ? field.errorMessage ?? 'Revisión requerida' : 'OK'}
              </ValidationBadge>
            </div>
          </InvoiceField>
        ))}
      </InvoiceCard>

      <StatusMessage
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {isValid
          ? 'Listo para exportar: todos los campos validados con RNC y reglas fiscales.'
          : 'Errores señalados para corrección antes de exportar.'}
      </StatusMessage>
    </AnimationWrapper>
  );
};

export default ValidationScene;
