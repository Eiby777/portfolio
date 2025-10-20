export const useTabAnimation = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skillVariants = {
    initial: { width: 0 },
    animate: {
      width: 'var(--level)',
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.2,
      }
    }
  };

  return { containerVariants, itemVariants, skillVariants };
};