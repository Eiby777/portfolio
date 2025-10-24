export interface SalesDataPoint {
  month: string;
  sales: number;
  inventory: number;
  isAnomaly?: boolean;
}

export interface AnomalyAlert {
  id: string;
  type: 'warning' | 'opportunity' | 'critical';
  title: string;
  description: string;
  metric: string;
  value: string;
}

export class SalesAnalyzer {
  private data: SalesDataPoint[];

  constructor(data: SalesDataPoint[]) {
    this.data = data;
  }

  getSalesData(): SalesDataPoint[] {
    return this.data;
  }

  detectAnomalies(): SalesDataPoint[] {
    return this.data.map((point, index) => {
      if (index === 0) return point;

      const prevPoint = this.data[index - 1];
      const salesChange = ((point.sales - prevPoint.sales) / prevPoint.sales) * 100;
      const isAnomaly = Math.abs(salesChange) > 30;

      return { ...point, isAnomaly };
    });
  }

  getAlerts(): AnomalyAlert[] {
    return [
      {
        id: '1',
        type: 'critical',
        title: 'Caída abrupta en ventas',
        description: 'Producto X muestra una caída de 45% en los últimos 7 días',
        metric: 'Ventas',
        value: '-45%'
      },
      {
        id: '2',
        type: 'warning',
        title: 'Posible quiebre de stock',
        description: 'Inventario del Producto Y alcanzará 0 en 3 días al ritmo actual',
        metric: 'Días restantes',
        value: '3 días'
      },
      {
        id: '3',
        type: 'opportunity',
        title: 'Oportunidad de ventas',
        description: 'Producto Z tiene 200% más demanda que el mes anterior',
        metric: 'Crecimiento',
        value: '+200%'
      }
    ];
  }

  getPredictions(): Array<{ label: string; value: string; status: 'good' | 'warning' | 'danger' }> {
    return [
      {
        label: 'Stock Producto A',
        value: 'Quiebre en 5 días',
        status: 'danger'
      },
      {
        label: 'Ventas Producto B',
        value: 'Incremento esperado 25%',
        status: 'good'
      },
      {
        label: 'Inventario General',
        value: 'Nivel óptimo próximos 30 días',
        status: 'good'
      }
    ];
  }
}

export const mockSalesData: SalesDataPoint[] = [
  { month: 'Ene', sales: 4200, inventory: 1800 },
  { month: 'Feb', sales: 4500, inventory: 1900 },
  { month: 'Mar', sales: 4300, inventory: 1700 },
  { month: 'Abr', sales: 5100, inventory: 2100 },
  { month: 'May', sales: 5800, inventory: 2400 },
  { month: 'Jun', sales: 3200, inventory: 1200, isAnomaly: true },
  { month: 'Jul', sales: 4800, inventory: 2000 },
  { month: 'Ago', sales: 5200, inventory: 2200 },
];
