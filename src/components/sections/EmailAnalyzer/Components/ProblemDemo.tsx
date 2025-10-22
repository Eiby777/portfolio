import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailThreadViewer from './EmailThreadViewer';
import { emailThreadsData } from '../Models/emailThreadsData';
import { FaClock, FaUsers, FaReply } from 'react-icons/fa';

interface PainPoint {
  id: string;
  icon: React.ReactNode;
  label: string;
  description: string;
  color: string;
  position: { top: string; left: string };
  delay: number;
}

const ProblemDemo: React.FC = () => {
  const [showPainPoints, setShowPainPoints] = useState(false);
  const [visiblePainPoints, setVisiblePainPoints] = useState<string[]>([]);

  const painPoints: PainPoint[] = [
    {
      id: 'long-thread',
      icon: <FaClock />,
      label: 'Hilo Largo',
      description: '10+ emails en la conversación',
      color: '#ea4335',
      position: { top: '20%', left: '10%' },
      delay: 2000
    },
    {
      id: 'multiple-recipients',
      icon: <FaUsers />,
      label: 'Múltiples Destinatarios',
      description: '5+ personas involucradas',
      color: '#fbbc04',
      position: { top: '35%', left: '85%' },
      delay: 3000
    },
    {
      id: 'complex-replies',
      icon: <FaReply />,
      label: 'Respuestas Complejas',
      description: 'Cadena de respuestas anidadas',
      color: '#34a853',
      position: { top: '60%', left: '15%' },
      delay: 4000
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPainPoints(true);
      // Show pain points sequentially
      painPoints.forEach((point) => {
        setTimeout(() => {
          setVisiblePainPoints(prev => [...prev, point.id]);
        }, point.delay);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
        position: 'relative'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#ea4335',
          textAlign: 'center'
        }}
      >
        Demostración del Problema
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '800px',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          position: 'relative'
        }}
      >
        <EmailThreadViewer
          thread={emailThreadsData[0]}
          shouldAutoScroll={true}
          onScrollComplete={() => {
            console.info('Problem demo email thread scroll completed');
          }}
          scrollSpeed={150}
          maxHeight="50vh"
          enableHeightAnimation={true}
          showTooltips={true}
        />

        {/* Pain Point Indicators */}
        <AnimatePresence>
          {showPainPoints && painPoints.map((point) => (
            <motion.div
              key={point.id}
              initial={{
                opacity: 0,
                scale: 0.8,
                x: -20
              }}
              animate={visiblePainPoints.includes(point.id) ? {
                opacity: 1,
                scale: 1,
                x: 0
              } : {
                opacity: 0,
                scale: 0.8,
                x: -20
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: -20
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut'
              }}
              style={{
                position: 'absolute',
                top: point.position.top,
                left: point.position.left,
                transform: 'translate(-50%, -50%)',
                zIndex: 10
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    `0 0 0 0 ${point.color}40`,
                    `0 0 0 10px ${point.color}00`,
                    `0 0 0 0 ${point.color}40`
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  backgroundColor: 'white',
                  border: `2px solid ${point.color}`,
                  borderRadius: '8px',
                  padding: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.25rem',
                  minWidth: '80px'
                }}
              >
                <div style={{ color: point.color, fontSize: '1.2rem' }}>
                  {point.icon}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: point.color,
                  textAlign: 'center'
                }}>
                  {point.label}
                </div>
                <div style={{
                  fontSize: '0.6rem',
                  color: '#ffffff',
                  textAlign: 'center',
                  lineHeight: '1.2'
                }}>
                  {point.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
        style={{
          marginTop: '2rem',
          fontSize: '1.1rem',
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: '600px'
        }}
      >
        Observa cómo los hilos de email pueden volverse complejos y difíciles de analizar manualmente...
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5, ease: 'easeOut' }}
        style={{
          marginTop: '1rem',
          fontSize: '1rem',
          color: '#ea4335',
          textAlign: 'center',
          maxWidth: '600px',
          fontWeight: '600'
        }}
      >
        El volumen de información y la pérdida de tiempo al revisar conversaciones extensas hace que el trabajo manual sea ineficiente y propenso a errores.
      </motion.p>
    </motion.div>
  );
};

export default ProblemDemo;