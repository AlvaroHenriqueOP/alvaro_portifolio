"use client"

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
// Importações do Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane, 
  faAddressCard,
  faShareNodes,
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitting: false,
    success: false,
    error: null
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, amount: 0.3 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };
  
  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.name || !formState.email || !formState.message) {
      setFormState(prev => ({ ...prev, error: 'Por favor, preencha todos os campos.' }));
      return;
    }

    setFormState(prev => ({ ...prev, submitting: true, error: null }));

    // IMPORTANTE: Substitua com suas credenciais do EmailJS
    const serviceID = 'service_25ohged';
    const templateID = 'template_7f94hve';
    const publicKey = 'F7AuL3UIwr5aaDQIZ';

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);

      setFormState({
        name: '',
        email: '',
        message: '',
        submitting: false,
        success: true,
        error: null
      });

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setFormState(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormState(prev => ({
        ...prev,
        submitting: false,
        error: 'Ocorreu um erro ao enviar a mensagem. Tente novamente.'
      }));
    }
  };

  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1 
    }
  };

  return (
    <section id="contact" className="py-16 bg-skills-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-accent-purple/10 opacity-80"></div>
      
      {/* Elementos de fundo animados */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent-purple opacity-30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-blue opacity-30 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-secondary-light opacity-20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* Linhas gradientes decorativas */}
      <div className="absolute left-0 right-0 h-px top-1/4 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"></div>
      <div className="absolute left-0 right-0 h-px bottom-1/4 bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl 2xl:max-w-[1536px] 3xl:max-w-[1920px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 xl:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative">
            <span style={{
                background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                position: 'relative',
                zIndex: 10
              }}>Entre em Contato</span>
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 64, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-white-muted text-sm md:text-base max-w-2xl mx-auto mt-3 xl:max-w-3xl 2xl:max-w-4xl xl:text-lg">
            Estou disponível para novos projetos, parcerias e oportunidades. Vamos transformar suas ideias em realidade!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 2xl:gap-16">
          {/* Formulário de contato */}
          <motion.div
            className="bg-primary-medium/30 backdrop-blur-md rounded-xl p-6 md:p-8 xl:p-10 border border-white/5 contact-form shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6 xl:text-2xl" style={{
              background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              position: 'relative',
              zIndex: 10
            }}>Envie uma mensagem</h3>
            
            <form onSubmit={handleSubmit} ref={formRef} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-white-soft text-sm mb-2 xl:text-base">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className={`w-full bg-primary-dark/80 border ${formState.error && 'border-red-500'} rounded-lg px-4 py-3 text-white-soft focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300 placeholder-white-muted/50 xl:px-5 xl:py-4 xl:text-lg`}
                    placeholder="Seu nome"
                  />
                  {formState.error && <p className="text-red-500 text-xs mt-1">{formState.error}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white-soft text-sm mb-2 xl:text-base">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`w-full bg-primary-dark/80 border ${formState.error && 'border-red-500'} rounded-lg px-4 py-3 text-white-soft focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300 placeholder-white-muted/50 xl:px-5 xl:py-4 xl:text-lg`}
                    placeholder="Seu email"
                  />
                  {formState.error && <p className="text-red-500 text-xs mt-1">{formState.error}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white-soft text-sm mb-2 xl:text-base">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                  rows="5"
                  className={`w-full bg-primary-dark/80 border ${formState.error && 'border-red-500'} rounded-lg px-4 py-3 text-white-soft focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-transparent transition-all duration-300 placeholder-white-muted/50 xl:px-5 xl:py-4 xl:text-lg`}
                  placeholder="Como posso ajudar você?"
                />
                {formState.error && <p className="text-red-500 text-xs mt-1">{formState.error}</p>}
              </div>
              
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-lg font-medium relative overflow-hidden group shadow-lg shadow-accent-purple/20"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: '0 10px 25px -5px rgba(var(--accent-purple-rgb), 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formState.submitting}
                >
                  {/* Efeito de brilho animado intensificado */}
                  <motion.div 
                    className="absolute top-0 bottom-0 w-24 h-full bg-white/30 skew-x-20 -left-32 group-hover:left-full transform transition-all duration-1000 pointer-events-none"
                  />
                  
                  {formState.submitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fa-solid fa-spinner fa-spin mr-3"></i>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <span>Enviar Mensagem</span>
                      <i className="fa-solid fa-paper-plane ml-2"></i>
                    </span>
                  )}
                </motion.button>
                
                <AnimatePresence>
                  {formState.success && (
                    <motion.div 
                      className="mt-6 p-4 bg-gradient-to-r from-green-600/20 to-accent-blue/20 border border-green-600/30 rounded-lg text-green-400 text-center backdrop-blur-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          transition={{ duration: 0.5 }}
                          className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-2"
                        >
                          <i className="fa-solid fa-check text-green-400"></i>
                        </motion.div>
                        <span>Mensagem enviada com sucesso! Retornarei em breve.</span>
                      </div>
                    </motion.div>
                  )}
                  
                  {formState.error && (
                    <motion.div 
                      className="mt-6 p-4 bg-gradient-to-r from-red-600/20 to-accent-purple/20 border border-red-600/30 rounded-lg text-red-400 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center justify-center">
                        <motion.div
                          transition={{ duration: 0.5, repeat: 3 }}
                          className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mr-2"
                        >
                          <i className="fa-solid fa-exclamation-triangle text-red-400"></i>
                        </motion.div>
                        <span>{formState.error}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </motion.div>
          
          {/* Informações de Contato */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="bg-gradient-to-b from-primary-dark/90 to-primary-dark/80 p-8 rounded-xl border border-accent-blue/20 shadow-xl shadow-accent-purple/10 backdrop-blur-sm relative overflow-hidden"
              whileHover={{ 
                boxShadow: '0 20px 40px -10px rgba(var(--accent-purple-rgb), 0.3)'
              }}
            >
              {/* Efeito de borda gradiente */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-px bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 rounded-xl opacity-40"></div>
              </div>
              
              {/* Círculos decorativos */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-accent-blue/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-accent-purple/10 rounded-full blur-xl"></div>
              
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="mr-3 text-accent-purple"
                  size="1x"
                />
                <span style={{
                  background: 'linear-gradient(90deg, #57E2D9, #0086A8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>Informações de Contato</span>
              </h3>
              
              <ul className="space-y-6">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-medium/80 flex items-center justify-center mr-4 border border-white/10 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="text-accent-purple text-lg" />
                  </motion.div>
                  <div>
                    <p className="text-secondary-light font-medium mb-1">Email</p>
                    <a 
                      href="mailto:alvaro.hop@hotmail.com" 
                      className="text-white-soft hover:text-secondary-light transition-colors text-base group flex items-center"
                    >
                      alvaro.hop@hotmail.com
                      <i className="fa-solid fa-arrow-right ml-2 opacity-0 group-hover:opacity-100"></i>
                    </a>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
            
            {/* Redes Sociais */}
            <motion.div 
              className="bg-primary-dark/90 p-8 rounded-xl border border-white/10 shadow-xl backdrop-blur-sm relative overflow-hidden"
              whileHover={{ 
                boxShadow: '0 20px 40px -10px rgba(var(--accent-purple-rgb), 0.2)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* Efeito de borda gradiente */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-px bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl opacity-30"></div>
              </div>
              
              <h3 className="text-xl font-bold text-secondary-light mb-6 flex items-center">
                <FontAwesomeIcon
                  icon={faShareNodes}
                  className="mr-3 text-accent-purple"
                  size="1x"
                />
                <span style={{
                  background: 'linear-gradient(90deg, #57E2D9, #7547FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>Redes Sociais</span>
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/alvaro-henrique-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-primary-medium/50 rounded-xl border border-white/5 hover:border-accent-purple/30 transition-all duration-300 group"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 25px -5px rgba(var(--accent-purple-rgb), 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary-dark/80 flex items-center justify-center mb-3 text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300"
                    transition={{ duration: 0.6 }}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
                  </motion.div>
                  <span className="text-white-soft text-sm">LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/AlvaroHenriqueOP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-primary-medium/50 rounded-xl border border-white/5 hover:border-accent-purple/30 transition-all duration-300 group"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 25px -5px rgba(var(--accent-purple-rgb), 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary-dark/80 flex items-center justify-center mb-3 text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300"
                    transition={{ duration: 0.6 }}
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xl" />
                  </motion.div>
                  <span className="text-white-soft text-sm">GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://www.behance.net/alvarohenrique15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-4 bg-primary-medium/50 rounded-xl border border-white/5 hover:border-accent-purple/30 transition-all duration-300 group"
                  whileHover={{ 
                    y: -5, 
                    boxShadow: '0 10px 25px -5px rgba(var(--accent-purple-rgb), 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-primary-dark/80 flex items-center justify-center mb-3 text-accent-purple group-hover:bg-accent-purple group-hover:text-white transition-all duration-300"
                    transition={{ duration: 0.6 }}
                  >
                    <FontAwesomeIcon icon={faBehance} className="text-xl" />
                  </motion.div>
                  <span className="text-white-soft text-sm">Behance</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 