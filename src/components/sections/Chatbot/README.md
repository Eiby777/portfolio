# Chatbot Section

## Overview
Animated section showcasing a customer service chatbot solution for Dominican companies. The section demonstrates how AI can automatically respond to customer queries based on internal policies and documents.

## Structure

### Models
- **ChatbotPhase.ts**: OOP implementation for animation phase management with timeline controller
- **ChatbotScenario.ts**: Domain models for chat messages with realistic customer service conversation data

### Handlers
- **useChatbotAnimation.ts**: Custom React hook orchestrating the multi-phase animation timeline using the OOP model classes

### Components
- **IntroScene.tsx**: Landing scene with project highlights and call-to-action
- **CustomerQueryScene.tsx**: Shows customer query alongside knowledge base explanation
- **ChatbotResponseScene.tsx**: Animated conversation with typing indicators and progressive message reveal
- **CtaScene.tsx**: Final call-to-action redirecting to external demo app

### Styles
- **LayoutStyles.ts**: Styled-components with purple-themed gradient design matching project color scheme

## Animation Flow
1. **Intro (3.5s)**: Project presentation with feature cards
2. **Customer Query (5s)**: Display initial customer question with knowledge base context
3. **Chatbot Response (12s)**: Progressive conversation with typing indicators
4. **CTA (5s)**: Final pitch with external demo link

## Key Features
- Progressive message reveal with realistic typing delays
- OOP design for phase management and message handling
- Framer Motion animations throughout
- Responsive layout with purple/violet theme
- External demo link: https://abisay-ai-chatbot-demo.vercel.app

## Technical Decisions
- All files kept under 200 lines for maintainability
- OOP classes for domain models (Phase, Message, Scenario, Timeline)
- Functional React components with hooks for UI
- Memoization and cleanup for optimal performance
- Styled-components with theme-consistent color palette
