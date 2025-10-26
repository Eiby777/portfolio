import React from 'react';
import styled, { keyframes } from 'styled-components';

interface AnimatedBackgroundProps {
  type: 'email' | 'invoice' | 'chatbot' | 'quote' | 'cv' | 'meeting' | 'sales';
  colors?: string[];
}

const backgroundGlow = keyframes`
  0% { transform: rotate(0deg) scale(1); opacity: 0.35; }
  50% { transform: rotate(180deg) scale(1.08); opacity: 0.55; }
  100% { transform: rotate(360deg) scale(1); opacity: 0.35; }
`;

const backgroundGradients: Record<AnimatedBackgroundProps['type'], string> = {
  email: 'radial-gradient(circle at 20% 20%, rgba(0, 102, 255, 0.22), transparent 55%), radial-gradient(circle at 75% 65%, rgba(102, 179, 255, 0.18), transparent 65%), linear-gradient(160deg, rgba(0, 30, 85, 0.45), rgba(0, 30, 60, 0.08))',
  invoice: 'radial-gradient(circle at 25% 30%, rgba(0, 255, 136, 0.25), transparent 55%), radial-gradient(circle at 70% 75%, rgba(51, 255, 170, 0.18), transparent 60%), linear-gradient(180deg, rgba(0, 40, 30, 0.4), rgba(0, 25, 18, 0.08))',
  chatbot: 'radial-gradient(circle at 30% 25%, rgba(153, 51, 255, 0.25), transparent 55%), radial-gradient(circle at 80% 75%, rgba(255, 153, 255, 0.18), transparent 65%), linear-gradient(145deg, rgba(35, 0, 55, 0.5), rgba(20, 0, 35, 0.08))',
  quote: 'radial-gradient(circle at 25% 30%, rgba(255, 102, 0, 0.22), transparent 55%), radial-gradient(circle at 75% 70%, rgba(255, 204, 102, 0.18), transparent 65%), linear-gradient(180deg, rgba(60, 20, 0, 0.45), rgba(30, 10, 0, 0.08))',
  cv: 'radial-gradient(circle at 30% 20%, rgba(255, 51, 102, 0.24), transparent 55%), radial-gradient(circle at 78% 70%, rgba(255, 153, 204, 0.18), transparent 60%), linear-gradient(150deg, rgba(60, 0, 20, 0.48), rgba(35, 0, 15, 0.08))',
  meeting: 'radial-gradient(circle at 20% 25%, rgba(0, 255, 255, 0.24), transparent 55%), radial-gradient(circle at 70% 80%, rgba(153, 255, 255, 0.18), transparent 60%), linear-gradient(180deg, rgba(0, 45, 55, 0.45), rgba(0, 25, 30, 0.08))',
  sales: 'radial-gradient(circle at 25% 25%, rgba(255, 204, 0, 0.24), transparent 55%), radial-gradient(circle at 78% 70%, rgba(255, 240, 153, 0.18), transparent 60%), linear-gradient(160deg, rgba(60, 40, 0, 0.45), rgba(30, 20, 0, 0.08))'
};

// EMAIL ANALYZER - Enhanced email flow with network connections
const emailFlow = keyframes`
  0% { transform: translateY(100vh) translateX(0px) rotate(0deg); opacity: 0; filter: blur(4px); }
  10% { opacity: 0.75; filter: blur(0); }
  90% { opacity: 0.75; }
  100% { transform: translateY(-100vh) translateX(80px) rotate(360deg); opacity: 0; filter: blur(6px); }
`;

const emailPulse = keyframes`
  0%, 100% { transform: scale(0.8); opacity: 0.2; box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.6); }
  50% { transform: scale(1.4); opacity: 0.9; box-shadow: 0 0 20px 12px rgba(0, 102, 255, 0); }
`;

const envelopeFloat = keyframes`
  0% { transform: translateY(0) translateX(0) rotateZ(0deg); opacity: 0.35; }
  25% { transform: translateY(-25px) translateX(18px) rotateZ(5deg); opacity: 0.7; }
  50% { transform: translateY(-40px) translateX(-12px) rotateZ(-4deg); opacity: 0.55; }
  75% { transform: translateY(-22px) translateX(20px) rotateZ(3deg); opacity: 0.65; }
  100% { transform: translateY(0) translateX(0) rotateZ(0deg); opacity: 0.35; }
`;

// INVOICE EXTRACTOR - Enhanced scanning with data extraction
const scanLine = keyframes`
  0% { transform: translateY(-100vh); opacity: 0; filter: blur(0px); }
  10% { opacity: 1; }
  50% { filter: blur(2px); }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; filter: blur(0px); }
`;

const documentFloat = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg) scale(0.95); opacity: 0.35; }
  25% { transform: translateY(-20px) rotate(3deg) scale(1.05); opacity: 0.6; }
  50% { transform: translateY(-35px) rotate(-2deg) scale(1.1); opacity: 0.7; }
  75% { transform: translateY(-18px) rotate(2deg) scale(1.02); opacity: 0.55; }
`;

const dataExtract = keyframes`
  0% { transform: scale(0.4) translateX(0); opacity: 0; }
  20% { transform: scale(1) translateX(0); opacity: 0.9; }
  70% { transform: scale(1) translateX(110px); opacity: 0.6; }
  100% { transform: scale(0.2) translateX(220px); opacity: 0; }
`;

const gridPulse = keyframes`
  0%, 100% { opacity: 0.12; }
  50% { opacity: 0.28; }
`;

// CHATBOT - Enhanced chat with conversation flow
const bubbleFloat = keyframes`
  0% { transform: translateY(100vh) scale(0.6) rotate(0deg); opacity: 0; filter: blur(6px); }
  5% { transform: translateY(85vh) scale(1) rotate(0deg); opacity: 0.7; filter: blur(0); }
  50% { transform: translateY(40vh) scale(1.05) rotate(2deg); opacity: 0.85; }
  95% { opacity: 0.75; }
  100% { transform: translateY(-25vh) scale(0.85) rotate(-3deg); opacity: 0; filter: blur(6px); }
`;

const typingDots = keyframes`
  0%, 60%, 100% { transform: translateY(0); opacity: 0.3; }
  30% { transform: translateY(-8px); opacity: 1; }
`;

const messageIndicator = keyframes`
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.15); opacity: 1; }
  100% { transform: scale(0.9); opacity: 0.7; }
`;

const conversationLine = keyframes`
  0% { width: 0; opacity: 0; }
  40% { opacity: 0.6; }
  100% { width: 150px; opacity: 0; }
`;

// QUOTE COMPARATOR - Enhanced comparison with pricing cards
const compareBars = keyframes`
  0% { transform: scaleX(0); opacity: 0; }
  20% { opacity: 0.9; }
  80% { opacity: 0.9; }
  100% { transform: scaleX(1); opacity: 0; }
`;

const priceTags = keyframes`
  0% { transform: rotate(0deg) translateX(0) scale(0); opacity: 0; }
  15% { transform: rotate(45deg) translateX(0) scale(1); opacity: 1; }
  85% { opacity: 1; }
  100% { transform: rotate(405deg) translateX(150px) scale(0.5); opacity: 0; }
`;

const priceCard = keyframes`
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; box-shadow: 0 4px 8px rgba(255, 102, 0, 0.2); }
  50% { transform: translateY(-20px) scale(1.05); opacity: 0.8; box-shadow: 0 12px 24px rgba(255, 102, 0, 0.4); }
`;

// CV ANALYZER - Enhanced profile visualization
const profileCards = keyframes`
  0% { transform: translateY(-150px) rotateY(0deg) scale(0.8); opacity: 0; filter: blur(5px); }
  20% { opacity: 1; filter: blur(0px); }
  80% { opacity: 1; filter: blur(0px); }
  100% { transform: translateY(150px) rotateY(180deg) scale(0.8); opacity: 0; filter: blur(5px); }
`;

const skillBars = keyframes`
  0% { transform: scaleX(0); opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { transform: scaleX(1); opacity: 0; }
`;

const starRating = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  40% { transform: scale(1.2) rotate(180deg); opacity: 1; }
  60% { transform: scale(1) rotate(360deg); opacity: 1; }
  100% { transform: scale(0) rotate(540deg); opacity: 0; }
`;

const badgeFloat = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
  50% { transform: translateY(-30px) rotate(10deg); opacity: 0.9; }
`;

// MEETING TRANSCRIPTOR - Enhanced audio visualization
const audioWaves = keyframes`
  0% { transform: scaleY(0.3); opacity: 0.3; }
  15% { transform: scaleY(1.8); opacity: 1; }
  30% { transform: scaleY(0.5); opacity: 0.5; }
  45% { transform: scaleY(1.4); opacity: 0.9; }
  60% { transform: scaleY(0.7); opacity: 0.6; }
  75% { transform: scaleY(1.6); opacity: 0.95; }
  100% { transform: scaleY(0.3); opacity: 0.3; }
`;

const soundCircles = keyframes`
  0% { transform: scale(0); opacity: 0.9; }
  100% { transform: scale(4); opacity: 0; }
`;

const microphonePulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.15); opacity: 0.9; }
`;

const textSnippet = keyframes`
  0% { transform: translateX(-100px); opacity: 0; }
  20% { opacity: 0.8; }
  80% { opacity: 0.8; }
  100% { transform: translateX(300px); opacity: 0; }
`;

// SALES ANOMALY DETECTOR - Enhanced data visualization
const anomalyPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.3; box-shadow: 0 0 0 0 rgba(255, 204, 0, 0.7); }
  20% { transform: scale(1.3); opacity: 0.9; box-shadow: 0 0 0 10px rgba(255, 204, 0, 0); }
  40% { transform: scale(0.95); opacity: 0.5; }
  60% { transform: scale(1.4); opacity: 1; box-shadow: 0 0 0 20px rgba(255, 204, 0, 0); }
  80% { transform: scale(1.05); opacity: 0.6; }
`;

const chartLines = keyframes`
  0% { transform: translateX(-100%) scaleX(0.8); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(100%) scaleX(1.2); opacity: 0; }
`;

const dataPoint = keyframes`
  0% { transform: scale(0); opacity: 0; }
  30% { transform: scale(1.3); opacity: 1; }
  70% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
`;

const trendArrow = keyframes`
  0% { transform: translateY(50px) rotate(0deg); opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translateY(-100px) rotate(-10deg); opacity: 0; }
`;

const BackgroundContainer = styled.div<{ $type: AnimatedBackgroundProps['type'] }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
  background: ${({ $type }) => backgroundGradients[$type]};
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    inset: -35%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
    mix-blend-mode: screen;
    animation: ${backgroundGlow} 24s linear infinite;
    opacity: 0.6;
  }
`;

// EMAIL ANALYZER - Enhanced email particles
const EmailParticles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .email-envelope {
    position: absolute;
    width: 30px;
    height: 20px;
    border: 2px solid #0066ff;
    border-radius: 4px;
    animation: ${emailFlow} 12s infinite ease-in-out;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      height: 50%;
      border: 2px solid #3399ff;
      border-bottom: none;
      transform: rotateX(180deg);
      border-radius: 4px 4px 0 0;
    }
  }

  .email-envelope:nth-child(1) { left: 15%; animation-delay: 0s; }
  .email-envelope:nth-child(2) { left: 40%; animation-delay: 3s; }
  .email-envelope:nth-child(3) { left: 65%; animation-delay: 6s; }
  .email-envelope:nth-child(4) { left: 85%; animation-delay: 9s; }

  .pulse-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle, #66b3ff, #0066ff);
    animation: ${emailPulse} 4s infinite ease-in-out;
  }

  .pulse-dot:nth-child(5) { top: 15%; left: 25%; animation-delay: 0s; }
  .pulse-dot:nth-child(6) { top: 40%; left: 50%; animation-delay: 1.3s; }
  .pulse-dot:nth-child(7) { top: 65%; left: 75%; animation-delay: 2.6s; }
  .pulse-dot:nth-child(8) { top: 85%; left: 30%; animation-delay: 3.9s; }

  .floating-icon {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0066ff, #99ccff);
    animation: ${envelopeFloat} 8s infinite ease-in-out;
  }

  .floating-icon:nth-child(9) { top: 20%; left: 10%; animation-delay: 0s; }
  .floating-icon:nth-child(10) { top: 60%; left: 80%; animation-delay: 4s; }
`;

// INVOICE EXTRACTOR - Enhanced scanning
const ScanLines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .grid-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(0deg, transparent 49%, rgba(0, 255, 136, 0.1) 50%, transparent 51%),
      linear-gradient(90deg, transparent 49%, rgba(0, 255, 136, 0.1) 50%, transparent 51%);
    background-size: 50px 50px;
    animation: ${gridPulse} 4s infinite ease-in-out;
  }

  .grid-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%, rgba(0, 255, 170, 0.2), transparent 70%);
    mix-blend-mode: screen;
  }

  .scan-line {
    position: absolute;
    width: 3px;
    height: 150px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(0, 255, 136, 0.3),
      #00ff88,
      rgba(0, 255, 136, 0.3),
      transparent
    );
    box-shadow: 0 0 20px #00ff88;
    animation: ${scanLine} 7s infinite linear;
  }

  .scan-line:nth-child(2) { left: 20%; animation-delay: 0s; }
  .scan-line:nth-child(3) { left: 45%; animation-delay: 2.3s; }
  .scan-line:nth-child(4) { left: 70%; animation-delay: 4.6s; }

  .floating-doc {
    position: absolute;
    width: 40px;
    height: 55px;
    border: 2px solid #33ffaa;
    border-radius: 4px;
    background: linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(51, 255, 170, 0.2));
    animation: ${documentFloat} 10s infinite ease-in-out;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 8px;
      right: 8px;
      height: 2px;
      background: #66ffcc;
      border-radius: 1px;
    }
    
    &::before { top: 12px; }
    &::after { top: 20px; width: 60%; }
  }

  .floating-doc:nth-child(5) { top: 15%; left: 15%; animation-delay: 0s; }
  .floating-doc:nth-child(6) { top: 55%; left: 55%; animation-delay: 5s; }
  .floating-doc:nth-child(7) { top: 75%; left: 30%; animation-delay: 7s; }

  .data-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #99ffdd;
    border-radius: 50%;
    animation: ${dataExtract} 5s infinite ease-out;
  }

  .data-particle:nth-child(8) { top: 30%; left: 25%; animation-delay: 0s; }
  .data-particle:nth-child(9) { top: 50%; left: 60%; animation-delay: 1.5s; }
  .data-particle:nth-child(10) { top: 70%; left: 40%; animation-delay: 3s; }
`;

// CHATBOT - Enhanced chat bubbles
const ChatBubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .bubble {
    position: absolute;
    border-radius: 18px;
    background: linear-gradient(135deg, #9933ff, #cc66ff, #ff99ff);
    box-shadow: 0 4px 12px rgba(153, 51, 255, 0.3);
    animation: ${bubbleFloat} 14s infinite ease-in-out;
    
    &::before {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 20px;
      width: 12px;
      height: 12px;
      background: inherit;
      border-radius: 2px;
      transform: rotate(45deg);
    }
  }

  .bubble:nth-child(1) {
    width: 50px;
    height: 35px;
    left: 10%;
    animation-delay: 0s;
  }

  .bubble:nth-child(2) {
    width: 40px;
    height: 28px;
    left: 35%;
    animation-delay: 3.5s;
  }

  .bubble:nth-child(3) {
    width: 55px;
    height: 38px;
    left: 60%;
    animation-delay: 7s;
  }

  .bubble:nth-child(4) {
    width: 45px;
    height: 32px;
    left: 85%;
    animation-delay: 10.5s;
  }

  .typing-indicator {
    position: absolute;
    display: flex;
    gap: 4px;
    bottom: 25%;
    left: 40%;
  }

  .typing-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #cc66ff;
    animation: ${typingDots} 1.4s infinite ease-in-out;
  }

  .typing-dot:nth-child(1) { animation-delay: 0s; }
  .typing-dot:nth-child(2) { animation-delay: 0.2s; }
  .typing-dot:nth-child(3) { animation-delay: 0.4s; }

  .message-icon {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle, #ffccff, #9933ff);
    animation: ${messageIndicator} 3s infinite ease-in-out;
  }

  .message-icon:nth-child(8) { top: 30%; left: 20%; animation-delay: 0s; }
  .message-icon:nth-child(9) { top: 60%; left: 70%; animation-delay: 1.5s; }

  .conversation-line {
    position: absolute;
    height: 2px;
    background: linear-gradient(to right, transparent, #cc66ff, transparent);
    animation: ${conversationLine} 4s infinite ease-out;
  }

  .conversation-line:nth-child(10) { top: 35%; left: 15%; animation-delay: 0s; }
  .conversation-line:nth-child(11) { top: 65%; left: 45%; animation-delay: 2s; }
`;

// QUOTE COMPARATOR - Enhanced comparison
const ComparisonElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .bar {
    position: absolute;
    height: 4px;
    background: linear-gradient(to right, #ff6600, #ff9933, #ffcc66);
    border-radius: 2px;
    transform-origin: left center;
    box-shadow: 0 2px 8px rgba(255, 102, 0, 0.3);
    animation: ${compareBars} 5s infinite ease-out;
  }

  .bar:nth-child(1) { top: 20%; left: 10%; width: 70%; animation-delay: 0s; }
  .bar:nth-child(2) { top: 40%; left: 15%; width: 50%; animation-delay: 1.5s; }
  .bar:nth-child(3) { top: 60%; left: 20%; width: 60%; animation-delay: 3s; }
  .bar:nth-child(4) { top: 80%; left: 12%; width: 65%; animation-delay: 4.5s; }

  .price-tag {
    position: absolute;
    width: 28px;
    height: 28px;
    border: 3px solid #ff9933;
    border-radius: 4px;
    transform: rotate(45deg);
    background: linear-gradient(135deg, rgba(255, 102, 0, 0.2), rgba(255, 204, 102, 0.3));
    animation: ${priceTags} 10s infinite linear;
  }

  .price-tag:nth-child(5) { top: 15%; left: 25%; animation-delay: 0s; }
  .price-tag:nth-child(6) { top: 50%; left: 55%; animation-delay: 3.3s; }
  .price-tag:nth-child(7) { top: 75%; left: 35%; animation-delay: 6.6s; }

  .price-card {
    position: absolute;
    width: 35px;
    height: 45px;
    border: 2px solid #ffcc66;
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(255, 102, 0, 0.15), rgba(255, 204, 102, 0.05));
    animation: ${priceCard} 6s infinite ease-in-out;
  }

  .price-card:nth-child(8) { top: 25%; right: 20%; animation-delay: 0s; }
  .price-card:nth-child(9) { top: 65%; right: 15%; animation-delay: 3s; }

  .check-icon {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #ff9933;
    animation: ${messageIndicator} 3s infinite ease-in-out;
  }

  .check-icon:nth-child(10) { top: 30%; left: 75%; animation-delay: 0s; }
  .check-icon:nth-child(11) { top: 70%; left: 80%; animation-delay: 1.5s; }
`;

// CV ANALYZER - Enhanced profile visualization
const ProfileElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .profile-card {
    position: absolute;
    width: 50px;
    height: 65px;
    border: 2px solid #ff6699;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(255, 51, 102, 0.15), rgba(255, 153, 204, 0.1));
    box-shadow: 0 4px 12px rgba(255, 51, 102, 0.2);
    animation: ${profileCards} 12s infinite ease-in-out;
    
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #ff6699;
    }
  }

  .profile-card:nth-child(1) { top: 10%; left: 20%; animation-delay: 0s; }
  .profile-card:nth-child(2) { top: 45%; left: 50%; animation-delay: 4s; }
  .profile-card:nth-child(3) { top: 70%; left: 70%; animation-delay: 8s; }

  .skill-bar {
    position: absolute;
    height: 5px;
    background: linear-gradient(to right, #ff3366, #ff6699, #ff99cc);
    border-radius: 3px;
    box-shadow: 0 2px 6px rgba(255, 51, 102, 0.3);
    transform-origin: left center;
    animation: ${skillBars} 7s infinite ease-out;
  }

  .skill-bar:nth-child(4) { top: 25%; left: 15%; width: 45%; animation-delay: 0s; }
  .skill-bar:nth-child(5) { top: 50%; left: 35%; width: 35%; animation-delay: 2.3s; }
  .skill-bar:nth-child(6) { top: 75%; left: 25%; width: 40%; animation-delay: 4.6s; }

  .star-rating {
    position: absolute;
    width: 14px;
    height: 14px;
    background: #ff6699;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    animation: ${starRating} 5s infinite ease-in-out;
  }

  .star-rating:nth-child(7) { top: 20%; left: 75%; animation-delay: 0s; }
  .star-rating:nth-child(8) { top: 55%; left: 15%; animation-delay: 1.6s; }
  .star-rating:nth-child(9) { top: 80%; left: 60%; animation-delay: 3.2s; }

  .badge {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #ffccee;
    background: radial-gradient(circle, #ff99cc, #ff3366);
    animation: ${badgeFloat} 7s infinite ease-in-out;
  }

  .badge:nth-child(10) { top: 35%; left: 80%; animation-delay: 0s; }
  .badge:nth-child(11) { top: 65%; left: 10%; animation-delay: 3.5s; }
`;

// MEETING TRANSCRIPTOR - Enhanced audio visualization
const AudioElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .wave-bar {
    position: absolute;
    width: 4px;
    background: linear-gradient(to top, #00ffff, #66ffff, #99ffff);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
    animation: ${audioWaves} 2.5s infinite ease-in-out;
  }

  .wave-bar:nth-child(1) { left: 25%; height: 35px; top: 45%; animation-delay: 0s; }
  .wave-bar:nth-child(2) { left: 29%; height: 50px; top: 38%; animation-delay: 0.15s; }
  .wave-bar:nth-child(3) { left: 33%; height: 42px; top: 42%; animation-delay: 0.3s; }
  .wave-bar:nth-child(4) { left: 37%; height: 58px; top: 35%; animation-delay: 0.45s; }
  .wave-bar:nth-child(5) { left: 41%; height: 45px; top: 40%; animation-delay: 0.6s; }
  .wave-bar:nth-child(6) { left: 45%; height: 52px; top: 37%; animation-delay: 0.75s; }
  .wave-bar:nth-child(7) { left: 49%; height: 38px; top: 44%; animation-delay: 0.9s; }
  .wave-bar:nth-child(8) { left: 53%; height: 55px; top: 36%; animation-delay: 1.05s; }

  .sound-circle {
    position: absolute;
    border: 2px solid #99ffff;
    border-radius: 50%;
    animation: ${soundCircles} 5s infinite ease-out;
  }

  .sound-circle:nth-child(9) { 
    width: 25px; 
    height: 25px; 
    top: 55%; 
    left: 15%; 
    animation-delay: 0s; 
  }
  .sound-circle:nth-child(10) { 
    width: 20px; 
    height: 20px; 
    top: 25%; 
    left: 65%; 
    animation-delay: 2.5s; 
  }

  .microphone {
    position: absolute;
    width: 18px;
    height: 24px;
    border: 2px solid #66ffff;
    border-radius: 8px 8px 0 0;
    animation: ${microphonePulse} 3s infinite ease-in-out;
    
    &::before {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 6px;
      border: 2px solid #66ffff;
      border-top: none;
      border-radius: 0 0 10px 10px;
    }
  }

  .microphone:nth-child(11) { top: 70%; left: 30%; animation-delay: 0s; }
  .microphone:nth-child(12) { top: 20%; left: 75%; animation-delay: 1.5s; }

  .text-snippet {
    position: absolute;
    height: 2px;
    background: linear-gradient(to right, transparent, #ccffff, #66ffff, transparent);
    border-radius: 1px;
    animation: ${textSnippet} 6s infinite ease-in-out;
  }

  .text-snippet:nth-child(13) { top: 65%; left: -100px; width: 80px; animation-delay: 0s; }
  .text-snippet:nth-child(14) { top: 35%; left: -100px; width: 60px; animation-delay: 3s; }
`;

// SALES ANOMALY DETECTOR - Enhanced data visualization
const SalesElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .anomaly-dot {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, #fff099, #ffcc00);
    animation: ${anomalyPulse} 3.5s infinite ease-in-out;
  }

  .anomaly-dot:nth-child(1) { top: 15%; left: 25%; animation-delay: 0s; }
  .anomaly-dot:nth-child(2) { top: 45%; left: 55%; animation-delay: 1.2s; }
  .anomaly-dot:nth-child(3) { top: 70%; left: 35%; animation-delay: 2.4s; }
  .anomaly-dot:nth-child(4) { top: 35%; left: 70%; animation-delay: 3.6s; }

  .chart-line {
    position: absolute;
    height: 3px;
    background: linear-gradient(to right, transparent, #ffdd33, #fff099, #ffdd33, transparent);
    border-radius: 2px;
    box-shadow: 0 0 8px rgba(255, 204, 0, 0.4);
    animation: ${chartLines} 10s infinite linear;
  }

  .chart-line:nth-child(5) { top: 30%; width: 100%; animation-delay: 0s; }
  .chart-line:nth-child(6) { top: 55%; width: 100%; animation-delay: 5s; }

  .data-point {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #ffee66;
    background: rgba(255, 204, 0, 0.3);
    animation: ${dataPoint} 4s infinite ease-in-out;
  }

  .data-point:nth-child(7) { top: 25%; left: 20%; animation-delay: 0s; }
  .data-point:nth-child(8) { top: 50%; left: 45%; animation-delay: 1s; }
  .data-point:nth-child(9) { top: 75%; left: 65%; animation-delay: 2s; }
  .data-point:nth-child(10) { top: 40%; left: 80%; animation-delay: 3s; }

  .trend-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid #ffdd33;
    animation: ${trendArrow} 6s infinite ease-in-out;
    
    &::before {
      content: '';
      position: absolute;
      bottom: -20px;
      left: -3px;
      width: 6px;
      height: 20px;
      background: #ffdd33;
    }
  }

  .trend-arrow:nth-child(11) { top: 80%; left: 30%; animation-delay: 0s; }
  .trend-arrow:nth-child(12) { top: 80%; left: 60%; animation-delay: 3s; }

  .alert-ring {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #ffcc00;
    animation: ${soundCircles} 4s infinite ease-out;
  }

  .alert-ring:nth-child(13) { top: 20%; left: 50%; animation-delay: 0s; }
  .alert-ring:nth-child(14) { top: 65%; left: 15%; animation-delay: 2s; }
`;

const createDivElements = (count: number, className: string, keyPrefix: string) =>
  Array.from({ length: count }, (_, index) =>
    React.createElement('div', { key: `${keyPrefix}-${index}`, className })
  );

const renderAnimation = (type: AnimatedBackgroundProps['type']): React.ReactNode => {
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

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ type }) =>
  React.createElement(BackgroundContainer, { $type: type }, renderAnimation(type));

export default AnimatedBackground;
