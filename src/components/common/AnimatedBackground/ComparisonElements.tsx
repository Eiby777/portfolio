import styled, { keyframes } from 'styled-components';

// Quote comparator with enhanced visual effects
const compareBars = keyframes`
  0% { transform: scale3d(0, 1, 1); opacity: 0; }
  20% { opacity: 0.9; }
  80% { opacity: 0.9; }
  100% { transform: scale3d(1, 1, 1); opacity: 0; }
`;

const priceTags = keyframes`
  0% { transform: rotate(0deg) translate3d(0, 0, 0) scale3d(0, 0, 0); opacity: 0; }
  15% { transform: rotate(45deg) translate3d(0, 0, 0) scale3d(1, 1, 1); opacity: 1; }
  85% { opacity: 1; }
  100% { transform: rotate(405deg) translate3d(150px, 0, 0) scale3d(0.5, 0.5, 1); opacity: 0; }
`;

const priceCard = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) scale3d(1, 1, 1); opacity: 0.4; box-shadow: 0 4px 8px rgba(255, 102, 0, 0.2); }
  50% { transform: translate3d(0, -20px, 0) scale3d(1.05, 1.05, 1); opacity: 0.8; box-shadow: 0 12px 24px rgba(255, 102, 0, 0.4); }
`;

const messageIndicator = keyframes`
  0% { transform: scale3d(0, 0, 0); opacity: 0; }
  50% { transform: scale3d(1.15, 1.15, 1); opacity: 1; }
  100% { transform: scale3d(0.9, 0.9, 1); opacity: 0.7; }
`;

// Enhanced comparison components
export const ComparisonElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  contain: layout style paint;

  .bar {
    position: absolute;
    height: 4px;
    background: linear-gradient(to right, #ff6600, #ff9933, #ffcc66);
    border-radius: 2px;
    transform-origin: left center;
    box-shadow: 0 2px 8px rgba(255, 102, 0, 0.3);
    animation: ${compareBars} 5s infinite ease-out;
    will-change: transform, opacity;
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
    will-change: transform, opacity;
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
    will-change: transform, opacity;
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
    will-change: transform, opacity;
  }

  .check-icon:nth-child(10) { top: 30%; left: 75%; animation-delay: 0s; }
  .check-icon:nth-child(11) { top: 70%; left: 80%; animation-delay: 1.5s; }
`;