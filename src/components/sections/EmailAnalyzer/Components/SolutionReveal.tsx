import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedChatbot from './AnimatedChatbot';
import GmailIcon from './GmailIcon';
import { FaBrain } from 'react-icons/fa';

const SolutionReveal: React.FC = () => {
  const [showAIBadge, setShowAIBadge] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAIBadge(true);
    }, 3000);

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
        padding: '2rem'
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
          color: '#34a853',
          textAlign: 'center'
        }}
      >
        La Solución con IA
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem'
        }}
      >
        {/* Gmail Icon Transformation */}
        <motion.div
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0.3, opacity: 0 }}
          transition={{ duration: 2, delay: 1, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            zIndex: 10
          }}
        >
          <GmailIcon
            autoStart={true}
            autoStartDelay={1000}
            onTransformComplete={() => console.info('Solution reveal transform completed')}
            onDisappearComplete={() => console.info('Solution reveal disappear completed')}
            size={80}
            emailContent="Transformando email en insights..."
            isVisible={true}
          />
        </motion.div>

        {/* AI Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={showAIBadge ? {
            opacity: 1,
            scale: 1,
            y: 0
          } : {
            opacity: 0,
            scale: 0.5,
            y: -20
          }}
          transition={{
            duration: 0.8,
            delay: 2.5,
            ease: 'easeOut'
          }}
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 15,
            background: 'linear-gradient(135deg, #34a853, #4285f4)',
            borderRadius: '50px',
            padding: '0.75rem 1.5rem',
            boxShadow: '0 8px 24px rgba(52, 168, 83, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <FaBrain style={{ color: 'white', fontSize: '1.2rem' }} />
          </motion.div>
          <span style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.9rem',
            letterSpacing: '0.5px'
          }}>
            AI-Powered Analysis
          </span>
        </motion.div>

        {/* Chatbot */}
        <motion.div
          initial={{ opacity: 0, filter: 'saturate(0.2) brightness(0.8)' }}
          animate={{ opacity: 1, filter: 'saturate(1) brightness(1)' }}
          transition={{ duration: 2, delay: 2, ease: 'easeInOut' }}
          style={{
            flex: 1,
            maxWidth: '400px'
          }}
        >
          <AnimatedChatbot
            autoStart={true}
            autoStartDelay={2500}
            onFlowComplete={() => console.info('Solution reveal flow completed')}
            isVisible={true}
          />
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 3, ease: 'easeOut' }}
        style={{
          marginTop: '2rem',
          fontSize: '1.1rem',
          color: '#ffffff',
          textAlign: 'center',
          maxWidth: '600px'
        }}
      >
        La IA transforma hilos complejos de email en insights accionables al instante.
      </motion.p>
    </motion.div>
  );
};

export default SolutionReveal;