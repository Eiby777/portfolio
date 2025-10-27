import styled, { keyframes } from 'styled-components';

// Chatbot enhanced animations
const bubbleFloat = keyframes`
  0% { transform: translate3d(0, 100vh, 0) scale3d(0.6, 0.6, 0.6) rotate(0deg); opacity: 0; filter: blur(6px); }
  5% { transform: translate3d(0, 85vh, 0) scale3d(1, 1, 1) rotate(0deg); opacity: 0.7; filter: blur(0); }
  50% { transform: translate3d(0, 40vh, 0) scale3d(1.05, 1.05, 1.05) rotate(2deg); opacity: 0.85; }
  95% { opacity: 0.75; }
  100% { transform: translate3d(0, -25vh, 0) scale3d(0.85, 0.85, 0.85) rotate(-3deg); opacity: 0; filter: blur(6px); }
`;

const typingDots = keyframes`
  0%, 60%, 100% { transform: translate3d(0, 0, 0); opacity: 0.3; }
  30% { transform: translate3d(0, -8px, 0); opacity: 1; }
`;

const messageIndicator = keyframes`
  0% { transform: scale3d(0, 0, 0); opacity: 0; }
  50% { transform: scale3d(1.15, 1.15, 1); opacity: 1; }
  100% { transform: scale3d(0.9, 0.9, 1); opacity: 0.7; }
`;

const conversationLine = keyframes`
  0% { width: 0; opacity: 0; }
  40% { opacity: 0.6; }
  100% { width: 150px; opacity: 0; }
`;

// Enhanced chatbot components
export const ChatBubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  contain: layout style paint;

  .bubble {
    position: absolute;
    border-radius: 18px;
    background: linear-gradient(135deg, #9933ff, #cc66ff, #ff99ff);
    box-shadow: 0 4px 12px rgba(153, 51, 255, 0.3);
    animation: ${bubbleFloat} 14s infinite ease-in-out;
    will-change: transform, opacity;

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
    will-change: transform, opacity;
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
    will-change: transform, opacity;
  }

  .message-icon:nth-child(8) { top: 30%; left: 20%; animation-delay: 0s; }
  .message-icon:nth-child(9) { top: 60%; left: 70%; animation-delay: 1.5s; }

  .conversation-line {
    position: absolute;
    height: 2px;
    background: linear-gradient(to right, transparent, #cc66ff, transparent);
    animation: ${conversationLine} 4s infinite ease-out;
    will-change: width, opacity;
  }

  .conversation-line:nth-child(10) { top: 35%; left: 15%; animation-delay: 0s; }
  .conversation-line:nth-child(11) { top: 65%; left: 45%; animation-delay: 2s; }
`;