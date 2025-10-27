import React from 'react';
import { EmailParticles } from './EmailElements';
import { ScanLines } from './InvoiceElements';
import { ChatBubbles } from './ChatbotElements';
import { ComparisonElements } from './ComparisonElements';
import { ProfileElements } from './ProfileElements';
import { AudioElements } from './AudioElements';
import { SalesElements } from './SalesElements';

interface AnimatedBackgroundProps {
  type: 'email' | 'invoice' | 'chatbot' | 'quote' | 'cv' | 'meeting' | 'sales';
}

// Helper functions
const createDivElements = (count: number, className: string, keyPrefix: string) =>
  Array.from({ length: count }, (_, index) =>
    React.createElement('div', { key: `${keyPrefix}-${index}`, className })
  );

export const renderAnimation = (type: AnimatedBackgroundProps['type']): React.ReactNode => {
  switch (type) {
    case 'email': {
      const envelopes = createDivElements(4, 'email-envelope', 'email-envelope');
      const pulses = createDivElements(4, 'pulse-dot', 'email-pulse');
      const icons = createDivElements(2, 'floating-icon', 'email-icon');
      return React.createElement(EmailParticles, null, ...envelopes, ...pulses, ...icons);
    }

    case 'invoice': {
      const grid = React.createElement('div', { key: 'grid-overlay', className: 'grid-overlay' });
      const scanLines = createDivElements(3, 'scan-line', 'invoice-scan');
      const docs = createDivElements(3, 'floating-doc', 'invoice-doc');
      const particles = createDivElements(3, 'data-particle', 'invoice-particle');
      return React.createElement(ScanLines, null, grid, ...scanLines, ...docs, ...particles);
    }

    case 'chatbot': {
      const bubbles = createDivElements(4, 'bubble', 'chat-bubble');
      const typingDotsElements = createDivElements(3, 'typing-dot', 'chat-typing-dot');
      const typingIndicator = React.createElement('div', { key: 'typing-indicator', className: 'typing-indicator' }, ...typingDotsElements);
      const indicators = createDivElements(2, 'message-icon', 'chat-message-icon');
      const lines = createDivElements(2, 'conversation-line', 'chat-conversation-line');
      return React.createElement(ChatBubbles, null, ...bubbles, typingIndicator, ...indicators, ...lines);
    }

    case 'quote': {
      const bars = createDivElements(4, 'bar', 'quote-bar');
      const tags = createDivElements(3, 'price-tag', 'quote-tag');
      const cards = createDivElements(2, 'price-card', 'quote-card');
      const checks = createDivElements(2, 'check-icon', 'quote-check');
      return React.createElement(ComparisonElements, null, ...bars, ...tags, ...cards, ...checks);
    }

    case 'cv': {
      const profiles = createDivElements(3, 'profile-card', 'cv-profile');
      const skills = createDivElements(3, 'skill-bar', 'cv-skill');
      const stars = createDivElements(3, 'star-rating', 'cv-star');
      const badges = createDivElements(2, 'badge', 'cv-badge');
      return React.createElement(ProfileElements, null, ...profiles, ...skills, ...stars, ...badges);
    }

    case 'meeting': {
      const waves = createDivElements(8, 'wave-bar', 'meeting-wave');
      const circles = createDivElements(2, 'sound-circle', 'meeting-circle');
      const microphones = createDivElements(2, 'microphone', 'meeting-microphone');
      const snippets = createDivElements(2, 'text-snippet', 'meeting-snippet');
      return React.createElement(AudioElements, null, ...waves, ...circles, ...microphones, ...snippets);
    }

    case 'sales': {
      const anomalies = createDivElements(4, 'anomaly-dot', 'sales-anomaly');
      const lines = createDivElements(2, 'chart-line', 'sales-line');
      const points = createDivElements(4, 'data-point', 'sales-point');
      const arrows = createDivElements(2, 'trend-arrow', 'sales-arrow');
      const alerts = createDivElements(2, 'alert-ring', 'sales-alert');
      return React.createElement(SalesElements, null, ...anomalies, ...lines, ...points, ...arrows, ...alerts);
    }

    default:
      return null;
  }
};