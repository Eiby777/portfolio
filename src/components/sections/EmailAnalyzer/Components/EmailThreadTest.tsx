import React, { useState } from 'react';
import EmailThreadViewer from './EmailThreadViewer';
import { emailThreadsData } from '../Models/emailThreadsData';
import Button from '../../../ui/Button';

/**
 * Test component for the EmailThreadViewer
 * Provides controls to test the auto-scroll functionality
 */
const EmailThreadTest: React.FC = () => {
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(150);
  
  const handleScrollComplete = () => {
    console.info('Email thread scroll completed');
    setShouldAutoScroll(false);
  };
  
  const handleStartScroll = () => {
    setShouldAutoScroll(true);
  };
  
  const handleStopScroll = () => {
    setShouldAutoScroll(false);
  };
  
  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', height: '100vh' }}>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Button
          variant="primary"
          onClick={handleStartScroll}
          disabled={shouldAutoScroll}
        >
          Start Auto-Scroll
        </Button>
        
        <Button
          variant="secondary"
          onClick={handleStopScroll}
          disabled={!shouldAutoScroll}
        >
          Stop Scroll
        </Button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label>Speed:</label>
          <input
            type="range"
            min="50"
            max="300"
            value={scrollSpeed}
            onChange={(e) => setScrollSpeed(Number(e.target.value))}
            style={{ width: '150px' }}
          />
          <span>{scrollSpeed}px/s</span>
        </div>
      </div>
      
      <div style={{ height: 'calc(100% - 80px)' }}>
        <EmailThreadViewer
          thread={emailThreadsData[0]}
          shouldAutoScroll={shouldAutoScroll}
          onScrollComplete={handleScrollComplete}
          scrollSpeed={scrollSpeed}
        />
      </div>
    </div>
  );
};

export default EmailThreadTest;