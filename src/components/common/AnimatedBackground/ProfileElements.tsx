import styled, { keyframes } from 'styled-components';

// CV analyzer with enhanced profile visualization
const profileCards = keyframes`
  0% { transform: translate3d(0, -150px, 0) rotateY(0deg) scale3d(0.8, 0.8, 0.8); opacity: 0; filter: blur(5px); }
  20% { opacity: 1; filter: blur(0px); }
  80% { opacity: 1; filter: blur(0px); }
  100% { transform: translate3d(0, 150px, 0) rotateY(180deg) scale3d(0.8, 0.8, 0.8); opacity: 0; filter: blur(5px); }
`;

const skillBars = keyframes`
  0% { transform: scale3d(0, 1, 1); opacity: 0; }
  30% { opacity: 1; }
  70% { opacity: 1; }
  100% { transform: scale3d(1, 1, 1); opacity: 0; }
`;

const starRating = keyframes`
  0% { transform: scale3d(0, 0, 0) rotate(0deg); opacity: 0; }
  40% { transform: scale3d(1.2, 1.2, 1) rotate(180deg); opacity: 1; }
  60% { transform: scale3d(1, 1, 1) rotate(360deg); opacity: 1; }
  100% { transform: scale3d(0, 0, 0) rotate(540deg); opacity: 0; }
`;

const badgeFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); opacity: 0.5; }
  50% { transform: translate3d(0, -30px, 0) rotate(10deg); opacity: 0.9; }
`;

// Enhanced profile components
export const ProfileElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  contain: layout style paint;

  .profile-card {
    position: absolute;
    width: 50px;
    height: 65px;
    border: 2px solid #ff6699;
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(255, 51, 102, 0.15), rgba(255, 153, 204, 0.1));
    box-shadow: 0 4px 12px rgba(255, 51, 102, 0.2);
    animation: ${profileCards} 12s infinite ease-in-out;
    will-change: transform, opacity;

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
    will-change: transform, opacity;
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
    will-change: transform, opacity;
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
    will-change: transform, opacity;
  }

  .badge:nth-child(10) { top: 35%; left: 80%; animation-delay: 0s; }
  .badge:nth-child(11) { top: 65%; left: 10%; animation-delay: 3.5s; }
`;