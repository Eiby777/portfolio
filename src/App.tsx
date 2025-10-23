import { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navigation from './components/common/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import EmailAnalyzer from './components/sections/EmailAnalyzer';
import InvoiceExtractor from './components/sections/InvoiceExtractor';
import Chatbot from './components/sections/Chatbot';
import QuoteComparator from './components/sections/QuoteComparator';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #0a0a0a;
    color: #ffffff;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #666 0%, #333 100%);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #777 0%, #444 100%);
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: #0a0a0a;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  position: relative;
  width: 100vw;
`;

const navigationSections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' },
];

function App() {
  useEffect(() => {
    // Preload fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Navigation sections={navigationSections} />
        <MainContent>
          <Hero />
          <About />
          <EmailAnalyzer />
          <InvoiceExtractor />
          <Chatbot />
          <QuoteComparator />
          {/* Other sections will be added here */}
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
