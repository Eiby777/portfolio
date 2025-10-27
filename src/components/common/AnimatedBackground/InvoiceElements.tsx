import styled, { keyframes } from 'styled-components';

// Invoice scanning with enhanced data extraction
const scanLine = keyframes`
  0% { transform: translate3d(0, -100vh, 0); opacity: 0; filter: blur(0px); }
  10% { opacity: 1; }
  50% { filter: blur(2px); }
  90% { opacity: 1; }
  100% { transform: translate3d(0, 100vh, 0); opacity: 0; filter: blur(0px); }
`;

const documentFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg) scale3d(0.95, 0.95, 0.95); opacity: 0.35; }
  25% { transform: translate3d(0, -20px, 0) rotate(3deg) scale3d(1.05, 1.05, 1.05); opacity: 0.6; }
  50% { transform: translate3d(0, -35px, 0) rotate(-2deg) scale3d(1.1, 1.1, 1.1); opacity: 0.7; }
  75% { transform: translate3d(0, -18px, 0) rotate(2deg) scale3d(1.02, 1.02, 1.02); opacity: 0.55; }
`;

const dataExtract = keyframes`
  0% { transform: scale3d(0.4, 0.4, 1) translate3d(0, 0, 0); opacity: 0; }
  20% { transform: scale3d(1, 1, 1) translate3d(0, 0, 0); opacity: 0.9; }
  70% { transform: scale3d(1, 1, 1) translate3d(110px, 0, 0); opacity: 0.6; }
  100% { transform: scale3d(0.2, 0.2, 1) translate3d(220px, 0, 0); opacity: 0; }
`;

const gridPulse = keyframes`
  0%, 100% { opacity: 0.12; }
  50% { opacity: 0.28; }
`;

// Enhanced scanning components
export const ScanLines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  contain: layout style paint;

  .grid-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background:
      linear-gradient(0deg, transparent 49%, rgba(0, 255, 136, 0.1) 50%, transparent 51%),
      linear-gradient(90deg, transparent 49%, rgba(0, 255, 136, 0.1) 50%, transparent 51%);
    background-size: 50px 50px;
    animation: ${gridPulse} 4s infinite ease-in-out;
    will-change: opacity;
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
    will-change: transform, opacity;
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
    will-change: transform, opacity;

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
    will-change: transform, opacity;
  }

  .data-particle:nth-child(8) { top: 30%; left: 25%; animation-delay: 0s; }
  .data-particle:nth-child(9) { top: 50%; left: 60%; animation-delay: 1.5s; }
  .data-particle:nth-child(10) { top: 70%; left: 40%; animation-delay: 3s; }
`;