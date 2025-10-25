import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import type { DotProps } from 'recharts';
import {
  ChartContainer,
  ChartTitle,
  ChartWrapper,
  ChartLegend,
  LegendItem,
  LegendColor
} from '../Styles/ChartStyles';
import {
  AnimationWrapper,
  Description,
} from '../Styles/LayoutStyles';
import { SalesAnalyzer, mockSalesData } from '../Models/SalesData';

const chartVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const renderAnomalyDot = (props: DotProps) => {
  const { cx, cy, payload } = props as { cx?: number; cy?: number; payload?: { isAnomaly?: boolean } };
  
  if (typeof cx !== 'number' || typeof cy !== 'number') {
    return <g />;
  }

  const isAnomaly = Boolean(payload?.isAnomaly);

  if (!isAnomaly) {
    return <g />;
  }

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={12}
        fill="rgba(255, 107, 107, 0.18)"
      />
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="#ff6b6b"
        stroke="#ffffff"
        strokeWidth={1}
      />
    </g>
  );
};

const DataAnalysisScene: React.FC = () => {
  const analyzer = useMemo(() => new SalesAnalyzer(mockSalesData), []);
  const dataset = useMemo(() => analyzer.detectAnomalies(), [analyzer]);

  return (
    <AnimationWrapper
      key="data-analysis"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ChartContainer
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ChartTitle>Análisis histórico inteligente</ChartTitle>
        <Description style={{ marginBottom: '1.5rem', color: '#fef9e7' }}>
          Visualizamos ventas e inventario para detectar comportamientos fuera de tendencia.
        </Description>

        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={dataset}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" strokeDasharray="4 8" />
              <XAxis dataKey="month" stroke="#ffe57a" tickLine={false} />
              <YAxis stroke="#ffe57a" tickLine={false} />
              <Tooltip
                contentStyle={{
                  background: 'rgba(15, 15, 15, 0.9)',
                  border: '1px solid rgba(255, 204, 0, 0.25)',
                  borderRadius: '12px',
                  color: '#ffffff'
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#ffcc00"
                strokeWidth={3}
                dot={{ r: 4, fill: '#ffcc00' }}
                activeDot={{ r: 6, stroke: '#ffffff', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="inventory"
                stroke="#54ffbd"
                strokeWidth={3}
                dot={{ r: 4, fill: '#54ffbd' }}
                activeDot={{ r: 6, stroke: '#ffffff', strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="isAnomaly"
                stroke="#ff6b6b"
                strokeWidth={0}
                dot={renderAnomalyDot}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartWrapper>

        <ChartLegend>
          <LegendItem>
            <LegendColor $color="#ffcc00" /> Ventas
          </LegendItem>
          <LegendItem>
            <LegendColor $color="#54ffbd" /> Inventario
          </LegendItem>
          <LegendItem>
            <LegendColor $color="#ff6b6b" /> Anomalías
          </LegendItem>
        </ChartLegend>
      </ChartContainer>
    </AnimationWrapper>
  );
};

export default DataAnalysisScene;
