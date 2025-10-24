# Sales Anomaly Detector Implementation

## Overview
A new animated section showcasing an AI-powered Sales Anomaly Detection system. This section demonstrates the ability to analyze sales and inventory data, detect unusual patterns, predict stock shortages, and identify business opportunities.

## Project Structure

### Folders Created
```
src/components/sections/SalesAnomalyDetector/
├── Components/
│   ├── IntroScene.tsx          (99 lines)
│   ├── DataAnalysisScene.tsx   (122 lines)
│   ├── AnomalyDetectionScene.tsx (113 lines)
│   ├── PredictionsScene.tsx    (118 lines)
│   └── CtaScene.tsx            (63 lines)
├── Handlers/
│   └── useAnomalyAnimation.ts  (63 lines)
├── Models/
│   ├── AnomalyPhase.ts         (71 lines)
│   └── SalesData.ts            (99 lines)
└── Styles/
    ├── LayoutStyles.ts         (121 lines)
    ├── SceneStyles.ts          (119 lines)
    └── ChartStyles.ts          (53 lines)
```

All files are well under the 200-line limit requirement (absolute maximum 300 lines).

## Object-Oriented Programming
The implementation uses OOP principles with the following classes:

### 1. **AnomalyPhase** (Models/AnomalyPhase.ts)
- Encapsulates phase name and duration
- Validates duration > 0
- Immutable properties with getters

### 2. **AnomalyAnimationTimeline** (Models/AnomalyPhase.ts)
- Manages phase progression and navigation
- Factory method: `createFromDurations()`
- Methods: `getPhase()`, `getNextIndex()`, `isLast()`, `resetIndex()`

### 3. **SalesAnalyzer** (Models/SalesData.ts)
- Analyzes sales data for anomalies
- Methods: `detectAnomalies()`, `getAlerts()`, `getPredictions()`
- Encapsulates business logic for anomaly detection

## Animation Phases

The section includes 5 animated phases:

1. **Intro** (4s)
   - Project title and description
   - Three key highlights
   - Animated glow effect
   - Play button to start

2. **Data Analysis** (9s)
   - Interactive Recharts LineChart
   - Dual-line visualization (sales + inventory)
   - Anomaly markers with red circles
   - Legend showing data types

3. **Anomaly Detection** (10s)
   - Three animated cards with alerts
   - Types: Critical, Warning, Opportunity
   - Color-coded tags and metrics
   - Staggered animation entrance

4. **Predictions** (8s)
   - Three prediction cards
   - Status indicators (good/warning/danger)
   - Animated progress bars
   - Button to advance to CTA

5. **CTA** (no timeout)
   - Final call-to-action
   - Button opens external URL
   - Smooth fade-in animation

## Key Features

### Framer Motion Animations
- Phase transitions with `AnimatePresence`
- Staggered card animations
- Hover effects and micro-interactions
- Scale and fade transitions
- Timeline progress bars

### Data Visualization
- Recharts integration for sales data
- Custom tooltip styling
- Anomaly markers on chart points
- Responsive container sizing
- Dark theme styling

### Color Theme
- Primary: `#ffcc00` (golden yellow)
- Secondary: `#ffdd33`
- Background: Gradient from dark orange to brown
- Glow effects with rgba transparency
- Alert colors: red (critical), yellow (warning), green (opportunity)

### Responsive Design
- Flexible grid layouts
- Clamp() for responsive typography
- Mobile-friendly charts
- Backdrop blur effects
- Glass-morphism cards

## Integration

### App.tsx
Added `SalesAnomalyDetector` import and component to main app flow:
```tsx
import SalesAnomalyDetector from './components/sections/SalesAnomalyDetector';

// Inside MainContent:
<SalesAnomalyDetector />
```

### portfolioData.ts
Updated project #7 demo URL:
```tsx
demoUrl: 'https://abisayai.com/detector-anomalias-ventas'
```

## Technical Stack
- React 19
- TypeScript
- Framer Motion (animations)
- Recharts (data visualization)
- Styled Components (theming)
- React Icons (UI icons)

## Design Patterns
- Custom hooks for animation state management
- Factory pattern for timeline creation
- Component composition
- Separation of concerns (Components/Handlers/Models/Styles)
- Type-safe interfaces

## User Experience
1. User sees intro screen with project highlights
2. Clicks play button to start animation
3. Views historical sales data analysis with anomaly detection
4. Sees specific alerts and business insights
5. Reviews predictive recommendations
6. Clicks button to view full web app demo

## Accessibility
- Semantic HTML structure
- Color contrast ratios
- Keyboard navigation support
- Clear visual hierarchy
- Readable typography

## Performance Considerations
- Memoized components and data
- Efficient animation timings
- Optimized chart rendering
- Lazy component loading via AnimatePresence
- Clean timeout management
