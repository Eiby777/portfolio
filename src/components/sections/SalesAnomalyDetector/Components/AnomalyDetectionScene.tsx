import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaLightbulb, FaTimesCircle } from 'react-icons/fa';
import { AnimationWrapper, Description } from '../Styles/LayoutStyles';
import {
  SceneGrid,
  SceneCard,
  CardHeader,
  CardTitle,
  CardSubtitle,
  MetricValue,
  MetricLabel,
  SectionTag
} from '../Styles/SceneStyles';
import { SalesAnalyzer, mockSalesData } from '../Models/SalesData';

const AnomalyDetectionScene: React.FC = () => {
  const analyzer = useMemo(() => new SalesAnalyzer(mockSalesData), []);
  const alerts = useMemo(() => analyzer.getAlerts(), [analyzer]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <FaTimesCircle size={24} color="#ff6b6b" />;
      case 'warning':
        return <FaExclamationTriangle size={24} color="#ffcc00" />;
      case 'opportunity':
        return <FaLightbulb size={24} color="#54ffbd" />;
      default:
        return null;
    }
  };

  return (
    <AnimationWrapper
      key="anomaly-detection"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2rem',
          color: '#ffcc00',
          marginBottom: '0.5rem',
          textAlign: 'center'
        }}
      >
        Detección de Anomalías
      </motion.h2>

      <Description style={{ marginBottom: '2rem', color: '#fef9e7' }}>
        El sistema identifica patrones críticos que requieren atención inmediata.
      </Description>

      <SceneGrid>
        {alerts.map((alert, index) => (
          <SceneCard
            key={alert.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <CardHeader>
              {getIcon(alert.type)}
              <SectionTag $variant={alert.type}>{alert.type.toUpperCase()}</SectionTag>
            </CardHeader>

            <CardTitle>{alert.title}</CardTitle>
            <CardSubtitle>{alert.description}</CardSubtitle>

            <MetricValue
              $status={
                alert.type === 'opportunity' ? 'good' : 
                alert.type === 'critical' ? 'danger' : 
                'warning'
              }
            >
              <MetricLabel>{alert.metric}</MetricLabel>
              {alert.value}
            </MetricValue>
          </SceneCard>
        ))}
      </SceneGrid>
    </AnimationWrapper>
  );
};

export default AnomalyDetectionScene;
