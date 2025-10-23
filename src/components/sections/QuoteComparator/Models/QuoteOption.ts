export interface CriteriaWeights {
  price: number;
  quality: number;
  delivery: number;
  support: number;
}

export interface QuoteFeature {
  label: string;
  value: string;
}

export interface QuoteScoreSnapshot {
  supplier: string;
  totalScore: number;
  breakdown: {
    price: number;
    quality: number;
    delivery: number;
    support: number;
  };
}

export interface MetricRange {
  min: number;
  max: number;
}

export interface AttributeRanges {
  priceRange: MetricRange;
  deliveryRange: MetricRange;
  qualityRange: MetricRange;
  supportRange: MetricRange;
}

export const DEFAULT_WEIGHTS: CriteriaWeights = {
  price: 0.4,
  quality: 0.3,
  delivery: 0.2,
  support: 0.1,
};

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

export class QuoteOption {
  private readonly supplier: string;
  private readonly basePrice: number;
  private readonly discountPercentage: number;
  private readonly deliveryDays: number;
  private readonly qualityScore: number;
  private readonly supportScore: number;
  private readonly extras: QuoteFeature[];

  constructor(params: {
    supplier: string;
    basePrice: number;
    discountPercentage: number;
    deliveryDays: number;
    qualityScore: number;
    supportScore: number;
    extras: QuoteFeature[];
  }) {
    this.supplier = params.supplier;
    this.basePrice = params.basePrice;
    this.discountPercentage = params.discountPercentage;
    this.deliveryDays = params.deliveryDays;
    this.qualityScore = params.qualityScore;
    this.supportScore = params.supportScore;
    this.extras = params.extras;
  }

  getSupplier(): string {
    return this.supplier;
  }

  getDeliveryDays(): number {
    return this.deliveryDays;
  }

  getQualityScore(): number {
    return this.qualityScore;
  }

  getSupportScore(): number {
    return this.supportScore;
  }

  getExtras(): QuoteFeature[] {
    return this.extras;
  }

  calculateNetPrice(): number {
    const discountAmount = this.basePrice * (this.discountPercentage / 100);
    return Math.round((this.basePrice - discountAmount) * 100) / 100;
  }

  buildScoreSnapshot(weights: CriteriaWeights, ranges: AttributeRanges): QuoteScoreSnapshot {
    const normalizedPrice = this.normalizePrice(ranges.priceRange);
    const normalizedQuality = this.normalizePositiveMetric(this.qualityScore, ranges.qualityRange);
    const normalizedDelivery = this.normalizeInverseMetric(this.deliveryDays, ranges.deliveryRange);
    const normalizedSupport = this.normalizePositiveMetric(this.supportScore, ranges.supportRange);

    const weighted = {
      price: normalizedPrice * weights.price,
      quality: normalizedQuality * weights.quality,
      delivery: normalizedDelivery * weights.delivery,
      support: normalizedSupport * weights.support,
    };

    const totalScore = Object.values(weighted).reduce((acc, value) => acc + value, 0);

    return {
      supplier: this.supplier,
      totalScore: Math.round(totalScore * 10) / 10,
      breakdown: {
        price: Math.round(weighted.price * 10) / 10,
        quality: Math.round(weighted.quality * 10) / 10,
        delivery: Math.round(weighted.delivery * 10) / 10,
        support: Math.round(weighted.support * 10) / 10,
      },
    };
  }

  private normalizePrice(range: MetricRange): number {
    const netPrice = this.calculateNetPrice();
    const distance = range.max - range.min;

    if (distance === 0) {
      return 1;
    }

    return clamp((range.max - netPrice) / distance);
  }

  private normalizePositiveMetric(value: number, range: MetricRange): number {
    const distance = range.max - range.min;
    if (distance === 0) {
      return 1;
    }

    return clamp((value - range.min) / distance);
  }

  private normalizeInverseMetric(value: number, range: MetricRange): number {
    const distance = range.max - range.min;
    if (distance === 0) {
      return 1;
    }

    return clamp((range.max - value) / distance);
  }
}
