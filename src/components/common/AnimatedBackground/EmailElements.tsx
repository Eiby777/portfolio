import styled, { keyframes } from 'styled-components';

// Email animations
const emailFlow = keyframes`
  0% { transform: translate3d(0, 100vh, 0) rotate(0deg); opacity: 0; filter: blur(4px); }
  10% { opacity: 0.75; filter: blur(0); }
  90% { opacity: 0.75; }
  100% { transform: translate3d(80px, -100vh, 0) rotate(360deg); opacity: 0; filter: blur(6px); }
`;

const emailPulse = keyframes`
  0%, 100% { transform: scale3d(0.8, 0.8, 0.8); opacity: 0.2; box-shadow: 0 0 0 0 rgba(0, 102, 255, 0.6); }
  50% { transform: scale3d(1.4, 1.4, 1.4); opacity: 0.9; box-shadow: 0 0 20px 12px rgba(0, 102, 255, 0); }
`;

const envelopeFloat = keyframes`
  0% { transform: translate3d(0, 0, 0) rotateZ(0deg); opacity: 0.35; }
  25% { transform: translate3d(18px, -25px, 0) rotateZ(5deg); opacity: 0.7; }
  50% { transform: translate3d(-12px, -40px, 0) rotateZ(-4deg); opacity: 0.55; }
  75% { transform: translate3d(20px, -22px, 0) rotateZ(3deg); opacity: 0.65; }
  100% { transform: translate3d(0, 0, 0) rotateZ(0deg); opacity: 0.35; }
`;

// Email particles with performance optimizations
export const EmailParticles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  contain: layout style paint;

  .email-envelope {
    position: absolute;
    width: 30px;
    height: 20px;
    border: 2px solid #0066ff;
    border-radius: 4px;
    animation: ${emailFlow} 12s infinite ease-in-out;
    will-change: transform, opacity;
    contain: layout style;

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
    will-change: transform, opacity;
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
    will-change: transform, opacity;
  }

  .floating-icon:nth-child(9) { top: 20%; left: 10%; animation-delay: 0s; }
  .floating-icon:nth-child(10) { top: 60%; left: 80%; animation-delay: 4s; }
`;