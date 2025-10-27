import styled, { keyframes } from 'styled-components';

// Meeting transcriptor with enhanced audio visualization
const audioWaves = keyframes`
  0% { transform: scale3d(1, 0.3, 1); opacity: 0.3; }
  15% { transform: scale3d(1, 1.8, 1); opacity: 1; }
  30% { transform: scale3d(1, 0.5, 1); opacity: 0.5; }
  45% { transform: scale3d(1, 1.4, 1); opacity: 0.9; }
  60% { transform: scale3d(1, 0.7, 1); opacity: 0.6; }
  75% { transform: scale3d(1, 1.6, 1); opacity: 0.95; }
  100% { transform: scale3d(1, 0.3, 1); opacity: 0.3; }
`;

const soundCircles = keyframes`
  0% { transform: scale3d(0, 0, 0); opacity: 0.9; }
  100% { transform: scale3d(4, 4, 1); opacity: 0; }
`;

const microphonePulse = keyframes`
  0%, 100% { transform: scale3d(1, 1, 1); opacity: 0.4; }
  50% { transform: scale3d(1.15, 1.15, 1); opacity: 0.9; }
`;

const textSnippet = keyframes`
  0% { transform: translate3d(-100px, 0, 0); opacity: 0; }
  20% { opacity: 0.8; }
  80% { opacity: 0.8; }
  100% { transform: translate3d(300px, 0, 0); opacity: 0; }
`;

// Enhanced audio components with centered and lowered wave-bars
export const AudioElements = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    contain: layout style paint;

    .wave-bar {
        position: absolute;
        width: 4px;
        background: linear-gradient(to top, #00ffff, #66ffff, #99ffff);
        border-radius: 2px;
        box-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
        animation: ${audioWaves} 2.5s infinite ease-in-out;
        will-change: transform, opacity;
    }

    /* Centered and lowered wave-bars - moved 11% to right to center group and 12% down to lower position */
    .wave-bar:nth-child(1) { left: 36%; height: 35px; top: 84%; animation-delay: 0s; }
    .wave-bar:nth-child(2) { left: 40%; height: 50px; top: 80%; animation-delay: 0.15s; }
    .wave-bar:nth-child(3) { left: 44%; height: 42px; top: 84%; animation-delay: 0.3s; }
    .wave-bar:nth-child(4) { left: 48%; height: 58px; top: 80%; animation-delay: 0.45s; }
    .wave-bar:nth-child(5) { left: 52%; height: 45px; top: 84%; animation-delay: 0.6s; }
    .wave-bar:nth-child(6) { left: 56%; height: 52px; top: 80%; animation-delay: 0.75s; }
    .wave-bar:nth-child(7) { left: 60%; height: 38px; top: 84%; animation-delay: 0.9s; }
    .wave-bar:nth-child(8) { left: 64%; height: 55px; top: 80%; animation-delay: 1.05s; }

    .sound-circle {
        position: absolute;
        border: 2px solid #99ffff;
        border-radius: 50%;
        animation: ${soundCircles} 5s infinite ease-out;
        will-change: transform, opacity;
    }

    .sound-circle:nth-child(9) {
        width: 25px;
        height: 25px;
        top: 50%;
        left: 15%;
        animation-delay: 0s;
    }
    .sound-circle:nth-child(10) {
        width: 20px;
        height: 20px;
        top: 20%;
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
        will-change: transform, opacity;

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

    .microphone:nth-child(11) { top: 65%; left: 30%; animation-delay: 0s; }
    .microphone:nth-child(12) { top: 15%; left: 75%; animation-delay: 1.5s; }

    .text-snippet {
        position: absolute;
        height: 2px;
        background: linear-gradient(to right, transparent, #ccffff, #66ffff, transparent);
        border-radius: 1px;
        animation: ${textSnippet} 6s infinite ease-in-out;
        will-change: transform, opacity;
    }

    .text-snippet:nth-child(13) { top: 60%; left: -100px; width: 80px; animation-delay: 0s; }
    .text-snippet:nth-child(14) { top: 30%; left: -100px; width: 60px; animation-delay: 3s; }
`;