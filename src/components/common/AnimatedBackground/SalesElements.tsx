import styled, { keyframes } from 'styled-components';

// Sales anomaly detector with enhanced data visualization
const anomalyPulse = keyframes`
  0%, 100% { transform: scale3d(1, 1, 1); opacity: 0.3; box-shadow: 0 0 0 0 rgba(255, 204, 0, 0.7); }
  20% { transform: scale3d(1.3, 1.3, 1); opacity: 0.9; box-shadow: 0 0 0 10px rgba(255, 204, 0, 0); }
  40% { transform: scale3d(0.95, 0.95, 1); opacity: 0.5; }
  60% { transform: scale3d(1.4, 1.4, 1); opacity: 1; box-shadow: 0 0 0 20px rgba(255, 204, 0, 0); }
  80% { transform: scale3d(1.05, 1.05, 1); opacity: 0.6; }
`;

const chartLines = keyframes`
  0% { transform: translate3d(-100%, 0, 0) scale3d(0.8, 1, 1); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate3d(100%, 0, 0) scale3d(1.2, 1, 1); opacity: 0; }
`;

const dataPoint = keyframes`
  0% { transform: scale3d(0, 0, 0); opacity: 0; }
  30% { transform: scale3d(1.3, 1.3, 1); opacity: 1; }
  70% { transform: scale3d(1, 1, 1); opacity: 1; }
  100% { transform: scale3d(0, 0, 0); opacity: 0; }
`;

const trendArrow = keyframes`
  0% { transform: translate3d(0, 50px, 0) rotate(0deg); opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translate3d(0, -100px, 0) rotate(-10deg); opacity: 0; }
`;

const soundCircles = keyframes`
  0% { transform: scale3d(0, 0, 0); opacity: 0.9; }
  100% { transform: scale3d(4, 4, 1); opacity: 0; }
`;

// Enhanced sales components
export const SalesElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  contain: layout style paint;

  .anomaly-dot {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(circle, #fff099, #ffcc00);
    animation: ${anomalyPulse} 3.5s infinite ease-in-out;
    will-change: transform, opacity;
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
    will-change: transform, opacity;
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
    will-change: transform, opacity;
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
    will-change: transform, opacity;

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
    will-change: transform, opacity;
  }

  .alert-ring:nth-child(13) { top: 20%; left: 50%; animation-delay: 0s; }
  .alert-ring:nth-child(14) { top: 65%; left: 15%; animation-delay: 2s; }
`;