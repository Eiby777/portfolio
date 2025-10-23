# QuoteComparator Section

## Overview

The **QuoteComparator** section is a fully animated React component that showcases an AI-powered quote comparison system. It demonstrates how artificial intelligence can analyze multiple supplier quotes and provide intelligent recommendations based on customizable criteria.

## Purpose

This section serves as a portfolio project for **Abisay Medina Rosario** to demonstrate his capabilities in:
- Building data-driven AI applications
- Creating engaging animations with Framer Motion
- Implementing object-oriented programming patterns in TypeScript
- Designing complex business logic for decision-making systems

## Features

- **Multi-phase Animation**: Six distinct animated phases guiding users through the quote analysis process
- **Object-Oriented Architecture**: Clean separation of concerns using TypeScript classes
- **Intelligent Scoring**: AI-powered scoring system with customizable weights for different criteria
- **Real-time Comparison**: Interactive comparison table showing all providers side by side
- **Smart Recommendations**: Data-driven recommendations with transparent reasoning
- **Responsive Design**: Fully responsive layout that adapts to different screen sizes

## Architecture

### Folder Structure

```
QuoteComparator/
├── Components/           # Scene components for each animation phase
│   ├── IntroScene.tsx
│   ├── UploadScene.tsx
│   ├── AnalysisScene.tsx
│   ├── ComparisonScene.tsx
│   ├── RecommendationScene.tsx
│   └── CtaScene.tsx
├── Handlers/             # Custom hooks for animation logic
│   └── useQuoteComparatorAnimation.ts
├── Models/               # OOP models and data structures
│   ├── QuotePhase.ts
│   ├── QuoteOption.ts
│   ├── QuoteAnalyzer.ts
│   └── mockQuotes.ts
├── Styles/               # Styled components
│   ├── LayoutStyles.ts
│   ├── QuoteCardStyles.ts
│   └── ComparisonStyles.ts
└── QuoteComparator.tsx   # Main component
```

### Animation Phases

1. **Intro** (4s): Project introduction with feature highlights
2. **Upload** (7s): Animated display of multiple quote cards
3. **Analysis** (9s): Visualization of criteria weights and AI analysis
4. **Comparison** (9s): Side-by-side comparison table with winner highlighting
5. **Recommendation** (7s): Detailed recommendation with justification
6. **CTA** (4s): Call-to-action with link to full project

### OOP Models

#### QuotePhase
Represents a single phase in the animation timeline with validation logic.

#### QuoteAnimationTimeline
Manages the sequence and timing of animation phases using the state pattern.

#### QuoteOption
Encapsulates a single quote with all its attributes and scoring logic. Methods include:
- `calculateNetPrice()`: Computes final price after discounts
- `buildScoreSnapshot()`: Generates normalized scores for comparison
- Normalization methods for different metric types (price, quality, delivery, support)

#### QuoteAnalyzer
Orchestrates the analysis of multiple quotes. Responsibilities:
- Builds metric ranges from all options
- Applies configurable weights to criteria
- Generates ranked snapshots
- Identifies the winning quote

### Scoring Algorithm

The scoring system uses a weighted normalization approach:

1. **Price** (inverse normalization): Lower prices score higher
2. **Quality** (direct normalization): Higher ratings score higher
3. **Delivery** (inverse normalization): Faster delivery scores higher
4. **Support** (direct normalization): Better support scores higher

Default weights:
- Price: 40%
- Quality: 30%
- Delivery: 20%
- Support: 10%

## Styling

The component uses a warm orange color palette:
- Primary: `#ff6600`
- Secondary: `#ff9933`
- Accents: `#ffcc80`, `#ffe0c2`

All components use `styled-components` for CSS-in-JS with Framer Motion integration.

## Key Technologies

- **React 19**: Latest React with TypeScript
- **Framer Motion**: Advanced animations and transitions
- **styled-components**: Dynamic styling
- **TypeScript**: Type-safe OOP patterns
- **Object-Oriented Design**: Encapsulation, abstraction, and clean architecture

## File Size Compliance

All files adhere to the project standard of ≤200 lines (absolute max 300):
- Largest file: QuoteOption.ts (152 lines)
- Average file size: ~100 lines
- Total files: 15

## Integration

The component is integrated into the main App.tsx and appears in the portfolio flow after InvoiceExtractor. It uses the same project data structure defined in `src/data/portfolioData.ts` (Project ID: 3).

## External Links

At the end of the animation, users can click a CTA button that redirects to:
`https://quote-comparator.abisay.dev`

This URL hosts the full, interactive version of the Quote Comparator application.

## Development

To modify animations:
- Adjust phase durations in `useQuoteComparatorAnimation.ts`
- Edit scene components in the `Components/` folder
- Modify scoring logic in `QuoteOption.ts` and `QuoteAnalyzer.ts`

To update mock data:
- Edit `mockQuotes.ts` to add/remove suppliers or change their attributes

## Future Enhancements

Potential improvements for the full application:
- Real-time weight adjustment with sliders
- CSV/Excel import for bulk quote uploads
- Historical comparison tracking
- Multi-currency support
- Custom criteria definition
- Export recommendations as PDF reports
