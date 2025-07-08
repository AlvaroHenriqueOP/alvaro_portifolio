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
      
      // Detectar a seção ativa com base na posição de rolagem
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

  // Navegação suave no mobile e fechamento do menu
  const handleMobileNav = (href) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);

    // Fecha o menu imediatamente
    setMobileMenuOpen(false);

    // Faz o scroll suave até a seção escolhida, se existir
    if (element) {
      const yOffset = -80; // compensa a altura do navbar fixo
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

  // Renderização condicional para evitar hydration error
  if (!isClient) return null;

  return (
    <nav 
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-primary-dark/90 backdrop-blur-sm shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
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

          {/* Links de navegação desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => {
              const isActive = activeLink === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm transition-colors duration-200 relative rounded-md overflow-hidden ${
                    isActive ? 'text-white font-medium' : 'text-white-muted hover:text-white-soft'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -3,
                    transition: { duration: 0.2 } 
                  }}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Barrinha de destaque ativa */}
                  {isActive && (
                    <motion.span 
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple"
                      layoutId="activeNav"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Barrinha de destaque no hover */}
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

          {/* Botão do menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-white p-2 focus:outline-none"
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-45' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 w-6 h-0.5 bg-white transition-transform duration-300 ${
                    mobileMenuOpen ? '-rotate-45' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto py-3 px-4">
              {navLinks.map((link, index) => {
                const isActive = activeLink === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleMobileNav(link.href)}
                    className={`block py-2 relative overflow-hidden ${
                      isActive ? 'text-white font-medium' : 'text-white-muted hover:text-white-soft'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    whileHover={{ 
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Barrinha de destaque ativa */}
                    {isActive && (
                      <motion.span 
                        className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple"
                        layoutId="activeNavMobile"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Barrinha de destaque no hover */}
                    <motion.span 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple rounded-full shadow-[0_0_10px_rgba(87,226,217,0.7)]"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ 
                        width: "40%", 
                        opacity: 1,
                        transition: { duration: 0.2 }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 