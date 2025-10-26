import styled, { keyframes } from 'styled-components';

interface AnimatedBackgroundProps {
  type: 'email' | 'invoice' | 'chatbot' | 'quote' | 'cv' | 'meeting' | 'sales';
  colors?: string[];
}

// Animaciones para Email Analyzer - Flujo de datos
const emailFlow = keyframes`
  0% { transform: translateY(0px) translateX(0px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
`;

const emailPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.6; }
`;

// Animaciones para Invoice Extractor - Escaneo de documentos
const scanLine = keyframes`
  0% { transform: translateY(-100vh); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
`;

const documentFloat = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
  25% { transform: translateY(-20px) rotate(2deg); }
  75% { transform: translateY(20px) rotate(-2deg); }
`;

// Animaciones para Chatbot - Burbujas de chat
const bubbleFloat = keyframes`
  0% { transform: translateY(100vh) scale(0); opacity: 0; }
  10% { transform: translateY(90vh) scale(1); opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { transform: translateY(-100vh) scale(0.8); opacity: 0; }
`;

const typingDots = keyframes`
  0%, 60%, 100% { opacity: 0.3; }
  30% { opacity: 1; }
`;

// Animaciones para Quote Comparator - Comparación
const compareBars = keyframes`
  0% { transform: scaleX(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: scaleX(1); opacity: 0; }
`;

const priceTags = keyframes`
  0% { transform: rotate(0deg) translateX(0); opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: rotate(360deg) translateX(100px); opacity: 0; }
`;

// Animaciones para CV Analyzer - Perfiles
const profileCards = keyframes`
  0% { transform: translateY(-100px) rotateY(0deg); opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: translateY(100px) rotateY(180deg); opacity: 0; }
`;

const skillBars = keyframes`
  0% { width: 0%; opacity: 0; }
  50% { opacity: 1; }
  100% { width: 100%; opacity: 0; }
`;

// Animaciones para Meeting Transcriptor - Ondas de audio
const audioWaves = keyframes`
  0% { transform: scaleY(0.5); opacity: 0.3; }
  25% { transform: scaleY(1.5); opacity: 1; }
  50% { transform: scaleY(0.8); opacity: 0.6; }
  75% { transform: scaleY(1.2); opacity: 0.8; }
  100% { transform: scaleY(0.5); opacity: 0.3; }
`;

const soundCircles = keyframes`
  0% { transform: scale(0); opacity: 0.8; }
  100% { transform: scale(3); opacity: 0; }
`;

// Animaciones para Sales Anomaly Detector - Alertas y gráficos
const anomalyPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.3; }
  20% { transform: scale(1.1); opacity: 0.8; }
  40% { transform: scale(0.9); opacity: 0.4; }
  60% { transform: scale(1.2); opacity: 1; }
  80% { transform: scale(0.95); opacity: 0.5; }
`;

const chartLines = keyframes`
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
`;

const getAnimationColors = (type: string) => {
  const colorSchemes = {
    email: ['#0066ff', '#3399ff', '#66b3ff', '#99ccff'],
    invoice: ['#00ff88', '#33ffaa', '#66ffcc', '#99ffdd'],
    chatbot: ['#9933ff', '#cc66ff', '#ff99ff', '#ffccff'],
    quote: ['#ff6600', '#ff9933', '#ffcc66', '#ffe699'],
    cv: ['#ff3366', '#ff6699', '#ff99cc', '#ffccee'],
    meeting: ['#00ffff', '#66ffff', '#99ffff', '#ccffff'],
    sales: ['#ffcc00', '#ffdd33', '#ffee66', '#fff099']
  };
  return colorSchemes[type as keyof typeof colorSchemes] || colorSchemes.email;
};

const BackgroundContainer = styled.div<{ type: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

// Email Analyzer - Flujo de emails
const EmailParticles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, #0066ff, #3399ff);
    animation: ${emailFlow} 8s infinite ease-in-out;
  }

  &::before {
    width: 4px;
    height: 20px;
    left: 20%;
    animation-delay: 0s;
  }

  &::after {
    width: 3px;
    height: 15px;
    left: 60%;
    animation-delay: 2s;
  }

  .pulse-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #66b3ff;
    animation: ${emailPulse} 3s infinite ease-in-out;
  }

  .pulse-dot:nth-child(1) { top: 20%; left: 30%; animation-delay: 0s; }
  .pulse-dot:nth-child(2) { top: 60%; left: 70%; animation-delay: 1s; }
  .pulse-dot:nth-child(3) { top: 80%; left: 40%; animation-delay: 2s; }
`;

// Invoice Extractor - Escaneo
const ScanLines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .scan-line {
    position: absolute;
    width: 2px;
    height: 100px;
    background: linear-gradient(to bottom, transparent, #00ff88, transparent);
    left: ${() => Math.random() * 80 + 10}%;
    animation: ${scanLine} 6s infinite linear;
  }

  .scan-line:nth-child(1) { animation-delay: 0s; }
  .scan-line:nth-child(2) { animation-delay: 2s; left: 30%; }
  .scan-line:nth-child(3) { animation-delay: 4s; left: 60%; }

  .floating-doc {
    position: absolute;
    width: 30px;
    height: 40px;
    border: 2px solid #33ffaa;
    background: rgba(0, 255, 136, 0.1);
    animation: ${documentFloat} 8s infinite ease-in-out;
  }

  .floating-doc:nth-child(4) { top: 20%; left: 20%; animation-delay: 0s; }
  .floating-doc:nth-child(5) { top: 70%; left: 60%; animation-delay: 3s; }
`;

// Chatbot - Burbujas
const ChatBubbles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .bubble {
    position: absolute;
    border-radius: 20px;
    background: linear-gradient(135deg, #9933ff, #ff99ff);
    animation: ${bubbleFloat} 10s infinite ease-in-out;
  }

  .bubble:nth-child(1) {
    width: 40px;
    height: 30px;
    left: 15%;
    animation-delay: 0s;
  }

  .bubble:nth-child(2) {
    width: 30px;
    height: 25px;
    left: 50%;
    animation-delay: 3s;
  }

  .bubble:nth-child(3) {
    width: 35px;
    height: 28px;
    left: 75%;
    animation-delay: 6s;
  }

  .typing-dots {
    position: absolute;
    bottom: 30%;
    left: 40%;
  }

  .typing-dots::before,
  .typing-dots::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #cc66ff;
    animation: ${typingDots} 1.5s infinite ease-in-out;
  }

  .typing-dots::before { left: 0; }
  .typing-dots::after { left: 10px; animation-delay: 0.3s; }
`;

// Quote Comparator - Comparación
const ComparisonElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .bar {
    position: absolute;
    height: 3px;
    background: linear-gradient(to right, #ff6600, #ffcc66);
    transform-origin: left center;
    animation: ${compareBars} 4s infinite ease-out;
  }

  .bar:nth-child(1) { top: 25%; left: 10%; width: 60%; animation-delay: 0s; }
  .bar:nth-child(2) { top: 50%; left: 20%; width: 40%; animation-delay: 1.5s; }
  .bar:nth-child(3) { top: 75%; left: 15%; width: 50%; animation-delay: 3s; }

  .price-tag {
    position: absolute;
    width: 25px;
    height: 25px;
    border: 2px solid #ff9933;
    transform: rotate(45deg);
    animation: ${priceTags} 8s infinite linear;
  }

  .price-tag:nth-child(4) { top: 20%; left: 30%; animation-delay: 0s; }
  .price-tag:nth-child(5) { top: 60%; left: 60%; animation-delay: 4s; }
`;

// CV Analyzer - Perfiles
const ProfileElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .profile-card {
    position: absolute;
    width: 40px;
    height: 50px;
    border: 2px solid #ff6699;
    border-radius: 8px;
    background: rgba(255, 51, 102, 0.1);
    animation: ${profileCards} 10s infinite ease-in-out;
  }

  .profile-card:nth-child(1) { top: 15%; left: 25%; animation-delay: 0s; }
  .profile-card:nth-child(2) { top: 55%; left: 65%; animation-delay: 5s; }

  .skill-bar {
    position: absolute;
    height: 4px;
    background: linear-gradient(to right, #ff3366, #ff99cc);
    border-radius: 2px;
    animation: ${skillBars} 6s infinite ease-out;
  }

  .skill-bar:nth-child(3) { top: 30%; left: 10%; width: 80%; animation-delay: 0s; }
  .skill-bar:nth-child(4) { top: 70%; left: 40%; width: 60%; animation-delay: 3s; }
`;

// Meeting Transcriptor - Audio
const AudioElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .wave-bar {
    position: absolute;
    width: 3px;
    background: linear-gradient(to top, #00ffff, #66ffff);
    border-radius: 2px;
    animation: ${audioWaves} 2s infinite ease-in-out;
  }

  .wave-bar:nth-child(1) { left: 30%; height: 30px; top: 40%; animation-delay: 0s; }
  .wave-bar:nth-child(2) { left: 35%; height: 40px; top: 35%; animation-delay: 0.2s; }
  .wave-bar:nth-child(3) { left: 40%; height: 35px; top: 37%; animation-delay: 0.4s; }
  .wave-bar:nth-child(4) { left: 45%; height: 45px; top: 33%; animation-delay: 0.6s; }
  .wave-bar:nth-child(5) { left: 50%; height: 38px; top: 36%; animation-delay: 0.8s; }

  .sound-circle {
    position: absolute;
    border: 2px solid #99ffff;
    border-radius: 50%;
    animation: ${soundCircles} 4s infinite ease-out;
  }

  .sound-circle:nth-child(6) { 
    width: 20px; 
    height: 20px; 
    top: 60%; 
    left: 20%; 
    animation-delay: 0s; 
  }
  .sound-circle:nth-child(7) { 
    width: 15px; 
    height: 15px; 
    top: 30%; 
    left: 70%; 
    animation-delay: 2s; 
  }
`;

// Sales Anomaly Detector - Alertas
const SalesElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .anomaly-dot {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ffcc00;
    animation: ${anomalyPulse} 3s infinite ease-in-out;
  }

  .anomaly-dot:nth-child(1) { top: 20%; left: 30%; animation-delay: 0s; }
  .anomaly-dot:nth-child(2) { top: 60%; left: 60%; animation-delay: 1s; }
  .anomaly-dot:nth-child(3) { top: 80%; left: 40%; animation-delay: 2s; }

  .chart-line {
    position: absolute;
    height: 2px;
    background: linear-gradient(to right, #ffdd33, #fff099);
    animation: ${chartLines} 8s infinite linear;
  }

  .chart-line:nth-child(4) { top: 40%; width: 100%; animation-delay: 0s; }
  .chart-line:nth-child(5) { top: 25%; width: 100%; animation-delay: 4s; }
`;

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ type }) => {
  const renderAnimation = () => {
    switch (type) {
      case 'email':
        return (
          <EmailParticles>
            <div className="pulse-dot" />
            <div className="pulse-dot" />
            <div className="pulse-dot" />
          </EmailParticles>
        );
      
      case 'invoice':
        return (
          <ScanLines>
            <div className="scan-line" />
            <div className="scan-line" />
            <div className="scan-line" />
            <div className="floating-doc" />
            <div className="floating-doc" />
          </ScanLines>
        );
      
      case 'chatbot':
        return (
          <ChatBubbles>
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
            <div className="typing-dots" />
          </ChatBubbles>
        );
      
      case 'quote':
        return (
          <ComparisonElements>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
            <div className="price-tag" />
            <div className="price-tag" />
          </ComparisonElements>
        );
      
      case 'cv':
        return (
          <ProfileElements>
            <div className="profile-card" />
            <div className="profile-card" />
            <div className="skill-bar" />
            <div className="skill-bar" />
          </ProfileElements>
        );
      
      case 'meeting':
        return (
          <AudioElements>
            <div className="wave-bar" />
            <div className="wave-bar" />
            <div className="wave-bar" />
            <div className="wave-bar" />
            <div className="wave-bar" />
            <div className="sound-circle" />
            <div className="sound-circle" />
          </AudioElements>
        );
      
      case 'sales':
        return (
          <SalesElements>
            <div className="anomaly-dot" />
            <div className="anomaly-dot" />
            <div className="anomaly-dot" />
            <div className="chart-line" />
            <div className="chart-line" />
          </SalesElements>
        );
      
      default:
        return null;
    }
  };

  return (
    <BackgroundContainer type={type}>
      {renderAnimation()}
    </BackgroundContainer>
  );
};

export default AnimatedBackground;
