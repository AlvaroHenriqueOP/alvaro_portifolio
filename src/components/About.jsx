"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaperPlane, faCode, faRobot, faPaintBrush, faComments } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const [activeTab, setActiveTab] = useState('perfil');
  const [hovered, setHovered] = useState(null);
  
  // Dados para os detalhes pessoais
  const personalDetails = [
    { label: "Localização", value: "Salvador, Bahia - Brasil" },
    { label: "Idiomas", value: "Português (Nativo), Inglês (Avançado)" },
    { label: "Disponível para", value: "Projetos Freelance, Contratação, Colaboração em projetos e Parcerias" }
  ];
  
  // Animações compartilhadas
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Efeitos de hover aprimorados
  const cardHoverVariants = {
    rest: { scale: 1, boxShadow: "0 0 0 rgba(87, 226, 217, 0)" },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 10px 20px rgba(87, 226, 217, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  return (
    <section 
      id="sobre" 
      className="py-12 relative overflow-hidden bg-skills-bg"
    >
      {/* Background elements with animation */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-accent-purple/10 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      
      {/* Elementos de fundo animados - semelhantes aos da seção de habilidades */}
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-accent-purple opacity-30 rounded-full blur-xl animate-pulse"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.2 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 w-48 h-48 bg-accent-blue opacity-30 rounded-full blur-xl animate-pulse" 
        style={{ animationDelay: "1s" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-36 h-36 bg-secondary-light opacity-20 rounded-full blur-xl animate-pulse" 
        style={{ animationDelay: "2s" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      ></motion.div>

      {/* Linhas gradientes decorativas com animação */}
      <motion.div 
        className="absolute left-0 right-0 h-px top-1/4 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      ></motion.div>
      <motion.div 
        className="absolute left-0 right-0 h-px bottom-1/4 bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      ></motion.div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1680px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 xl:mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
                background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                position: 'relative',
                zIndex: 10
              }}>Sobre Mim</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full xl:h-1.5"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "6rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>
        
        <div className="flex flex-col gap-8 xl:gap-10">
          {/* Bio principal com layout de duas colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 xl:gap-10 2xl:gap-12">
            {/* Coluna da esquerda - Bio principal */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-2xl font-bold mb-4 text-white xl:mb-5"
                  variants={itemVariants}
                >
                  Olá, sou <motion.span 
                    className="text-accent-blue"
                    initial={{ color: '#fff' }}
                    animate={{ color: '#0086A8' }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  >Álvaro Henrique</motion.span>
                </motion.h3>
                
                <motion.p 
                  className="text-white/80 text-lg leading-relaxed mb-4 xl:text-lg xl:leading-relaxed xl:mb-5"
                  variants={itemVariants}
                >
                  Sou um desenvolvedor front-end apaixonado por transformar ideias criativas em interfaces digitais modernas e interativas. Meu foco é combinar design atraente com código limpo e eficiente para criar experiências web memoráveis.
                </motion.p>
                
                <motion.p 
                  className="text-white/80 text-lg leading-relaxed mb-4 xl:text-lg xl:leading-relaxed xl:mb-5"
                  variants={itemVariants}
                >
                  Com expertise em React, Next.js e tecnologias modernas de frontend, também aplico meus conhecimentos em inteligência artificial para desenvolver soluções conversacionais avançadas e interfaces mais inteligentes.
                </motion.p>
                
                <motion.p 
                  className="text-white/80 text-lg leading-relaxed xl:text-lg xl:leading-relaxed"
                  variants={itemVariants}
                >
                  Acredito que o futuro da web está na combinação de design centrado no usuário, performance técnica e integração com IA, criando experiências que não apenas funcionem bem, mas também encantem e surpreendam os usuários.
                </motion.p>
              </motion.div>
            </motion.div>
              
            {/* Coluna da direita - Detalhes pessoais */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="bg-primary-medium/20 backdrop-blur-sm rounded-xl p-6 xl:p-7 2xl:p-8 border border-white/5 h-full"
                initial={{ boxShadow: "0 0 0 rgba(94, 61, 219, 0)" }}
                whileInView={{ boxShadow: "0 10px 30px -5px rgba(94, 61, 219, 0.2)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.h3 
                  className="text-xl font-semibold mb-4 text-white xl:text-xl xl:mb-5"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >Detalhes Pessoais</motion.h3>
                
                <div className="space-y-3">
                  {personalDetails.map((detail, index) => (
                    <motion.div 
                      key={index} 
                      className="flex flex-wrap justify-between items-center border-b border-white/10 pb-2"
                      variants={itemVariants}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <span className="text-white/60">{detail.label}:</span>
                      <span className="text-white font-medium">{detail.value}</span>
                    </motion.div>
                  ))}
                </div>
              
                <motion.div 
                  className="mt-6 flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.a 
                    href="/PDFs/Curriculo_Alvaro_Henrique.pdf"
                    download="Curriculo_Alvaro_Henrique.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 text-center bg-gradient-to-r from-accent-purple to-accent-blue hover:opacity-90 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-accent-purple/20 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05, boxShadow: "0 15px 25px -5px rgba(94, 61, 219, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faDownload} />
                    Baixar CV
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    className="w-full sm:w-auto flex-1 text-center bg-primary-dark/50 border border-accent-blue/30 text-white font-semibold py-3 px-4 rounded-lg transition-all hover:border-accent-blue/50 hover:bg-accent-blue/10 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FontAwesomeIcon icon={faPaperPlane} />
                    Contato
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Especialidades */}
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: faCode,
                  color: "text-accent-blue",
                  title: "Desenvolvimento Front-end",
                  text: "Criação de interfaces responsivas e acessíveis com React, Next.js, TailwindCSS, CSS, HTML, JavaScript e outras tecnologias modernas."
                },
                {
                  icon: faRobot,
                  color: "text-accent-purple",
                  title: "Inteligência Artificial",
                  text: "Implementação de modelos de IA para criar experiências interativas mais inteligentes e personalizadas."
                },
                {
                  icon: faPaintBrush,
                  color: "text-secondary-light",
                  title: "UI/UX Design",
                  text: "Design de interfaces focadas na experiência do usuário, com atenção a detalhes visuais e usabilidade."
                },
                {
                  icon: faComments,
                  color: "text-accent-blue",
                  title: "Chatbots",
                  text: "Desenvolvimento de soluções conversacionais inteligentes para automação e melhoria do atendimento."
                }
              ].map((specialty, index) => (
                <motion.div 
                  key={index}
                  className="bg-primary-medium/20 backdrop-blur-sm rounded-xl p-5 border border-white/5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: '0 10px 25px -5px rgba(87, 226, 217, 0.3)',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                  onHoverStart={() => setHovered(index)}
                  onHoverEnd={() => setHovered(null)}
                >
                  <motion.div 
                    className={`text-3xl mb-3 ${specialty.color}`}
                    animate={hovered === index ? 
                      { scale: [1, 1.2, 1], rotate: [0, 5, 0] } : 
                      { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <FontAwesomeIcon icon={specialty.icon} />
                  </motion.div>
                  <h4 className="text-white text-lg font-semibold mb-2">{specialty.title}</h4>
                  <p className="text-white/70">{specialty.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 