"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveLink(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileNav = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    setMobileMenuOpen(false);

    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveLink(id);
    }
  };

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#services' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contato', href: '#contact' }
  ];

  if (!isClient) return null;

  return (
    <>
      <nav 
        id="navbar"
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-primary-dark/90 backdrop-blur-sm shadow-md' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.a 
                href="#hero"
                className="text-xl md:text-2xl font-semibold no-underline relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span style={{
                  background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 10
                }}>Álvaro.Dev</span>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple rounded-full shadow-[0_0_10px_rgba(87,226,217,0.7)]"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ 
                    width: "100%", 
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => {
                const isActive = activeLink === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${isActive ? 'text-white font-medium' : 'text-white-muted hover:text-white-soft'}`}>
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple"
                        layoutId="activeNav"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple rounded-full shadow-[0_0_10px_rgba(87,226,217,0.7)]"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ 
                        width: "100%", 
                        opacity: 1,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                className="text-white p-2 focus:outline-none z-50 relative"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45' : '-translate-y-2'}`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <span
                    className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45' : 'translate-y-2'}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden fixed inset-0 w-screen h-screen bg-primary-dark/95 backdrop-blur-lg z-40 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleMobileNav(link.href)}
                  className="text-3xl font-light text-white-muted hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 + index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;