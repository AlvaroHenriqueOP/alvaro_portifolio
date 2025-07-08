"use client"

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLink, 
  faAddressCard, 
  faEnvelope, 
  faPhone, 
  faLocationDot, 
  faChevronRight, 
  faCopyright,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedinIn, 
  faGithub, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const linkVariants = {
    hover: { scale: 1.1, x: 5 }
  };
  
  const links = [
    { text: "Início", href: "#hero" },
    { text: "Projetos", href: "#projects" },
    { text: "Sobre", href: "#sobre" },
    { text: "Serviços", href: "#services" },
    { text: "Habilidades", href: "#skills" },
    { text: "Contato", href: "#contact" }
  ];
  
  return (
    <footer className="bg-footer-bg relative overflow-hidden border-t border-accent-blue/10">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/98 to-footer-bg opacity-80"></div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"></div>
      
      {/* Elementos gráficos de fundo */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 md:w-56 md:h-56 bg-accent-purple/40 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-1/4 w-24 h-24 md:w-40 md:h-40 bg-accent-blue/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10 max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1920px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 xl:gap-12">
          {/* Seção 1: Logo e sobre */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold mb-4 xl:text-3xl">
                <a href="#hero" className="flex items-center">
                  <span style={{
                    background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}>Álvaro Henrique</span>
                </a>
              </h3>
              
              <p className="text-white-muted mb-6 xl:text-lg">
                Transformando ideias em experiências digitais memoráveis. Desenvolvedor front-end especializado em criar interfaces modernas, responsivas e centradas no usuário.
              </p>
              
              <div className="flex space-x-4 mt-auto">
                <motion.a 
                  href="https://github.com/AlvaroHenriqueOP" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-medium/70 flex items-center justify-center text-white-soft hover:bg-accent-purple hover:text-white transition-all duration-300 xl:w-12 xl:h-12"
                  whileHover={{ y: -3, scale: 1.1, boxShadow: '0 5px 15px rgba(var(--accent-purple-rgb), 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github text-xl"></i>
                </motion.a>
                
                <motion.a 
                  href="https://www.linkedin.com/in/alvaro-henrique-dev/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-medium/70 flex items-center justify-center text-white-soft hover:bg-accent-blue hover:text-white transition-all duration-300 xl:w-12 xl:h-12"
                  whileHover={{ y: -3, scale: 1.1, boxShadow: '0 5px 15px rgba(var(--accent-blue-rgb), 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </motion.a>
                
                <motion.a 
                  href="https://www.instagram.com/alvaro_h_op/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-medium/70 flex items-center justify-center text-white-soft hover:bg-secondary-light hover:text-primary-dark transition-all duration-300 xl:w-12 xl:h-12"
                  whileHover={{ y: -3, scale: 1.1, boxShadow: '0 5px 15px rgba(var(--accent-blue-rgb), 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-instagram text-xl"></i>
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Seção 2: Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold mb-4 xl:text-3xl">
                
                  <span style={{
                    background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>Navegação</span>
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <motion.a 
                      href={link.href}
                      className="text-white-muted hover:text-secondary-light transition-colors duration-300 flex items-center group xl:text-lg"
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-2 text-accent-blue opacity-60 group-hover:opacity-100">&rsaquo;</span>
                      {link.text}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <i className="fa-solid fa-address-card text-accent-purple mr-2"></i>
              <span style={{
                background: 'linear-gradient(90deg, #7547FF, #0086A8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>Contato</span>
            </h4>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start group"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-medium/80 to-primary-dark/80 flex items-center justify-center mr-3 border border-accent-purple/20 group-hover:border-accent-purple/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <i className="fa-solid fa-envelope text-accent-purple"></i>
                </motion.div>
                <a href="mailto:alvaro.hop@hotmail.com" className="text-white hover:text-secondary-light transition-colors duration-300 text-base group flex items-center gap-1">
                  alvaro.hop@hotmail.com
                  <i className="fa-solid fa-arrow-right text-accent-purple text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </a>
              </motion.li>
              <motion.li 
                className="flex items-start group"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary-medium/80 to-primary-dark/80 flex items-center justify-center mr-3 border border-accent-purple/20 group-hover:border-accent-blue/40 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <i className="fa-solid fa-location-dot text-accent-purple"></i>
                </motion.div>
                <span className="text-white text-base">Salvador, BA - Brasil</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-8 border-t border-accent-blue/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm text-center md:text-left mb-4 md:mb-0 flex items-center">
              <i className="fa-regular fa-copyright mr-2 text-accent-purple/60"></i>
              {currentYear} Feito por Álvaro Henrique. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 