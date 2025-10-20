export const theme = {
  colors: {
    // Base dark theme
    background: '#0a0a0a',
    surface: '#1a1a1a',
    surfaceLight: '#2a2a2a',
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    textMuted: '#808080',
    
    // Project accent colors
    emailAnalyzer: {
      primary: '#0066ff',
      secondary: '#3399ff',
      background: 'linear-gradient(135deg, #001a33 0%, #003366 50%, #004d99 100%)',
      glow: 'rgba(0, 102, 255, 0.3)'
    },
    
    invoiceExtractor: {
      primary: '#00ff88',
      secondary: '#33ffaa',
      background: 'linear-gradient(135deg, #001a0d 0%, #00331a 50%, #004d26 100%)',
      glow: 'rgba(0, 255, 136, 0.3)'
    },
    
    responseGenerator: {
      primary: '#9933ff',
      secondary: '#cc66ff',
      background: 'linear-gradient(135deg, #1a0033 0%, #330066 50%, #4d0099 100%)',
      glow: 'rgba(153, 51, 255, 0.3)'
    },
    
    quoteComparator: {
      primary: '#ff6600',
      secondary: '#ff9933',
      background: 'linear-gradient(135deg, #331a00 0%, #663300 50%, #994d00 100%)',
      glow: 'rgba(255, 102, 0, 0.3)'
    },
    
    cvAnalyzer: {
      primary: '#ff3366',
      secondary: '#ff6699',
      background: 'linear-gradient(135deg, #330011 0%, #660022 50%, #990033 100%)',
      glow: 'rgba(255, 51, 102, 0.3)'
    },
    
    transcriber: {
      primary: '#00ffff',
      secondary: '#66ffff',
      background: 'linear-gradient(135deg, #001a1a 0%, #003333 50%, #004d4d 100%)',
      glow: 'rgba(0, 255, 255, 0.3)'
    },
    
    anomalyDetector: {
      primary: '#ffcc00',
      secondary: '#ffdd33',
      background: 'linear-gradient(135deg, #331a00 0%, #663300 50%, #994d00 100%)',
      glow: 'rgba(255, 204, 0, 0.3)'
    }
  },
  
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"Fira Code", "Monaco", "Consolas", monospace'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem'
  },
  
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px'
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(255, 255, 255, 0.1)',
    colored: (color: string) => `0 0 30px ${color}`
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '250ms ease-in-out',
    slow: '350ms ease-in-out'
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
};

export default theme;