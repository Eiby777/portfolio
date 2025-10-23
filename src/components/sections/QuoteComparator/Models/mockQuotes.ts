import { QuoteOption } from './QuoteOption';

export const mockQuoteOptions: QuoteOption[] = [
  new QuoteOption({
    supplier: 'TechSupply RD',
    basePrice: 285000,
    discountPercentage: 8,
    deliveryDays: 5,
    qualityScore: 4.5,
    supportScore: 4.2,
    extras: [
      { label: 'Garantía', value: '2 años' },
      { label: 'Instalación', value: 'Incluida' },
      { label: 'Soporte', value: '24/7' },
    ],
  }),
  new QuoteOption({
    supplier: 'Global Imports SA',
    basePrice: 258000,
    discountPercentage: 5,
    deliveryDays: 12,
    qualityScore: 4.0,
    supportScore: 3.5,
    extras: [
      { label: 'Garantía', value: '1 año' },
      { label: 'Instalación', value: 'No incluida' },
      { label: 'Soporte', value: 'Horario comercial' },
    ],
  }),
  new QuoteOption({
    supplier: 'Dominicana Tech Solutions',
    basePrice: 295000,
    discountPercentage: 10,
    deliveryDays: 3,
    qualityScore: 4.8,
    supportScore: 4.7,
    extras: [
      { label: 'Garantía', value: '3 años' },
      { label: 'Instalación', value: 'Incluida + Capacitación' },
      { label: 'Soporte', value: 'Premium 24/7' },
    ],
  }),
  new QuoteOption({
    supplier: 'Caribbean IT Partners',
    basePrice: 270000,
    discountPercentage: 6,
    deliveryDays: 8,
    qualityScore: 4.3,
    supportScore: 4.0,
    extras: [
      { label: 'Garantía', value: '2 años' },
      { label: 'Instalación', value: 'Incluida' },
      { label: 'Soporte', value: 'Lun-Vie 8am-6pm' },
    ],
  }),
];
