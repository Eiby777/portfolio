import styled from 'styled-components';

// Main container for the email thread viewer
export const ThreadViewerContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Gmail-like sidebar
export const Sidebar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background-color: #ffffff;
  border-right: 1px solid #dadce0;
  padding: 24px 16px;
  z-index: 10;
`;

export const Logo = styled.div`
  font-family: 'Google Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: #5f6368;
  margin-bottom: 32px;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 8px;
  }
  
  a {
    display: block;
    padding: 8px 0;
    color: #5f6368;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    
    &:hover,
    &.active {
      color: #1a73e8;
    }
  }
`;

// Main content area with top bar
export const MainContent = styled.div`
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const TopBar = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #dadce0;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const SearchBar = styled.div`
  flex: 1;
  max-width: 600px;
  margin: 0 24px;
  
  input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #dadce0;
    border-radius: 24px;
    font-size: 14px;
    background-color: #f1f3f4;
    
    &:focus {
      outline: none;
      border-color: #1a73e8;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 16px;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  background: #5f6368;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  cursor: pointer;
`;

// Email view area
export const EmailView = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #ffffff;
  padding-bottom: 60px;
`;

export const ThreadContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  border-left: 1px solid #dadce0;
  border-right: 1px solid #dadce0;
`;

export const ThreadHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #e8f0fe;
  background-color: #ffffff;
`;

export const Subject = styled.h1`
  font-family: 'Google Sans', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: #202124;
  margin: 0 0 8px;
`;

export const Participants = styled.p`
  font-size: 14px;
  color: #5f6368;
  margin: 0;
`;

export const ThreadDate = styled.p`
  font-size: 12px;
  color: #9aa0a6;
  margin: 4px 0 0;
`;

// Individual email message
export const EmailContainer = styled.div<{ $isRead?: boolean }>`
  border-bottom: 1px solid #f1f3f4;
  position: relative;
  padding: 0;
  background-color: ${props => props.$isRead ? '#ffffff' : '#fcfcfd'};
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const EmailAvatar = styled.div`
  position: absolute;
  left: 24px;
  top: 24px;
  width: 40px;
  height: 40px;
  background-color: #1a73e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 16px;
`;

export const EmailContent = styled.div`
  margin-left: 72px;
  padding: 24px 24px 24px 0;
`;

export const EmailMeta = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 8px;
  font-size: 14px;
`;

export const From = styled.span`
  font-weight: 500;
  color: #202124;
`;

export const ToCc = styled.span`
  color: #5f6368;
`;

export const Date = styled.span`
  margin-left: auto;
  color: #9aa0a6;
  font-size: 12px;
`;

export const EmailBody = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #202124;
  margin-bottom: 16px;
  
  p {
    margin: 0 0 12px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const QuotedText = styled.div`
  border-left: 3px solid #e8eaed;
  background-color: #f8f9fa;
  padding: 16px;
  margin: 16px 0;
  font-size: 13px;
`;

export const QuotedHeader = styled.div`
  font-weight: 500;
  color: #5f6368;
  margin-bottom: 8px;
  font-size: 12px;
`;

// Reply section
export const ReplySection = styled.div`
  background-color: #f1f3f4;
  padding: 24px;
  border-top: 1px solid #dadce0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ReplyButton = styled.button`
  background-color: #1a73e8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-right: 8px;
  
  &:hover {
    background-color: #1557b0;
  }
`;

// Animation variants for framer-motion
export const threadContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const emailVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.3
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Responsive design
export const mediaQueries = {
  mobile: '@media (max-width: 768px)',
  tablet: '@media (max-width: 1024px)'
};