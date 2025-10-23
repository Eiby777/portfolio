import {
  type CriteriaWeights,
  type QuoteScoreSnapshot,
  type MetricRange,
  type AttributeRanges,
  QuoteOption,
  DEFAULT_WEIGHTS
} from './QuoteOption';

export class QuoteAnalyzer {
  private readonly options: QuoteOption[];
  private readonly weights: CriteriaWeights;
  private readonly ranges: AttributeRanges;

  constructor(options: QuoteOption[], weights: CriteriaWeights = DEFAULT_WEIGHTS) {
    if (options.length === 0) {
      throw new Error('QuoteAnalyzer requires at least one quote option');
    }

    this.options = options;
    this.weights = weights;
    this.ranges = QuoteAnalyzer.buildRanges(options);
  }

  static buildRanges(options: QuoteOption[]): AttributeRanges {
    const prices = options.map((option) => option.calculateNetPrice());
    const deliveries = options.map((option) => option.getDeliveryDays());
    const qualities = options.map((option) => option.getQualityScore());
    const supports = options.map((option) => option.getSupportScore());

    return {
      priceRange: QuoteAnalyzer.buildRange(prices),
      deliveryRange: QuoteAnalyzer.buildRange(deliveries),
      qualityRange: QuoteAnalyzer.buildRange(qualities),
      supportRange: QuoteAnalyzer.buildRange(supports),
    };
  }

  static buildRange(values: number[]): MetricRange {
    const sorted = [...values].sort((a, b) => a - b);
    const min = sorted[0];
    const max = sorted[sorted.length - 1];

    if (min === max) {
      return { min: min - 1, max: max + 1 };
    }

    return { min, max };
  }

  getSnapshots(): QuoteScoreSnapshot[] {
    return this.options
      .map((option) => option.buildScoreSnapshot(this.weights, this.ranges))
      .sort((a, b) => b.totalScore - a.totalScore);
  }

  getWinningSupplier(): QuoteScoreSnapshot {
    return this.getSnapshots()[0];
  }

  getWeights(): CriteriaWeights {
    return this.weights;
  }

  getRanges(): AttributeRanges {
    return this.ranges;
  }
}
