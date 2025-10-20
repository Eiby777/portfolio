import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &.scrolled {
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(20px);
  }
`;

const NavContent = styled.div`
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #667eea;
    
    &::after {
      width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled(motion.a)`
  color: #b0b0b0;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const MobileNavLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #667eea;
  }
`;

const MobileSocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

interface NavigationProps {
  sections: Array<{ id: string; label: string }>;
}

const Navigation: React.FC<NavigationProps> = ({ sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05 }
  };

  const mobileMenuVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <>
      <NavContainer className={isScrolled ? 'scrolled' : ''}>
        <NavContent>
          <Logo
            variants={navLinkVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onClick={() => scrollToSection('hero')}
          >
            AM
          </Logo>
          
          <NavLinks>
            {sections.map((section) => (
              <NavLink
                key={section.id}
                variants={navLinkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </NavLink>
            ))}
          </NavLinks>
          
          <SocialLinks>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={navLinkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={navLinkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="mailto:abisaymedinarosario@gmail.com"
              variants={navLinkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
          
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavContent>
      </NavContainer>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <MobileNavLinks>
              {sections.map((section) => (
                <MobileNavLink
                  key={section.id}
                  variants={navLinkVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.label}
                </MobileNavLink>
              ))}
            </MobileNavLinks>
            
            <MobileSocialLinks>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={navLinkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={navLinkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="mailto:abisaymedinarosario@gmail.com"
                variants={navLinkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <FaEnvelope />
              </SocialLink>
            </MobileSocialLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;