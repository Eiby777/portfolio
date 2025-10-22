import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { projects } from '../../../../data/portfolioData';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

const IntroAnimation: React.FC<{ onPlayClick: () => void }> = ({ onPlayClick }) => {
  const project = projects[0];
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.5 + 0.2,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 5
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
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
        textAlign: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Floating Particles Background */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            opacity: 0
          }}
          animate={{
            x: [`${particle.x}%`, `${particle.x + 10}%`, `${particle.x - 5}%`, `${particle.x}%`],
            y: [`${particle.y}%`, `${particle.y - 15}%`, `${particle.y + 10}%`, `${particle.y}%`],
            opacity: [0, particle.opacity, particle.opacity, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            position: 'absolute',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#1a73e8',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#1a73e8',
          position: 'relative',
          zIndex: 2
        }}
      >
        {project.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          color: '#666',
          maxWidth: '600px',
          position: 'relative',
          zIndex: 2
        }}
      >
        {project.description}
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 8px 16px rgba(26, 115, 232, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: 'easeOut'
        }}
        onClick={onPlayClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          backgroundColor: '#1a73e8',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(26, 115, 232, 0.3)',
          position: 'relative',
          zIndex: 2
        }}
      >
        <FaPlay />
        Ver Demo
      </motion.button>
    </motion.div>
  );
};

export default IntroAnimation;