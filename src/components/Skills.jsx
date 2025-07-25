"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faBrain, faRobot, faKeyboard, faBolt, 
  faServer, faWind, faSearch, faImage, faBookOpen, faLanguage, faCommentDots, 
  faPlug, faLink, faSitemap, faNetworkWired, faComments, 
  faTerminal, faPaperPlane, faCubes
} from '@fortawesome/free-solid-svg-icons';
import { 
  faReact, faJs, faHtml5, faCss3Alt, faGitAlt, faGithub, faNpm, faFigma 
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Configurações de transição mais rápidas
  const hoverTransition = {
    enter: { duration: 0.1, type: "tween" },
    exit: { duration: 0.03, type: "tween" }
  };
  
  // Transição mais rápida para elementos de ícone
  const iconTransition = {
    duration: 0.05, 
    type: "tween"
  };

  // Categorias de habilidades simplificadas
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Front-End',
      icon: faCode,
      color: 'from-secondary-light/90 to-accent-blue/90',
      skills: [
        { name: 'React', icon: faReact },
        { name: 'Next.js', icon: faBolt },
        { name: 'JavaScript', icon: faJs },
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3Alt },
        { name: 'Vercel', icon: faServer },
        { name: 'Tailwind', icon: faWind }
      ]
    },
    {
      id: 'ia',
      title: 'Inteligência Artificial',
      icon: faBrain,
      color: 'from-accent-purple/90 to-secondary-light/90',
      skills: [
        { name: 'Prompt Engineering', icon: faKeyboard },
        { name: 'LLMs', icon: faBrain },
        { name: 'GPT', icon: faRobot },
        { name: 'Perplexity', icon: faSearch },
        { name: 'Ideogram', icon: faImage },
        { name: 'Notebook LM', icon: faBookOpen },
        { name: 'NLP', icon: faLanguage }
      ]
    },
    {
      id: 'chatbots',
      title: 'Chatbots',
      icon: faRobot,
      color: 'from-secondary-light/90 to-accent-purple/90',
      skills: [
        { name: 'DialogFlow', icon: faCommentDots },
        { name: 'ChatGPT API', icon: faPlug },
        { name: 'Webhook', icon: faLink },
        { name: 'Typebot', icon: faSitemap },
        { name: 'APIs externas', icon: faNetworkWired },
        { name: 'IA Conversacional', icon: faBrain },
        { name: 'UX Conversacional', icon: faComments }
      ]
    }
  ];

  // Encontrar categoria ativa
  const activeCategoryData = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-12 bg-skills-bg relative overflow-hidden">
      {/* Fundo com gradiente */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-accent-purple/10 opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      
      {/* Elementos de fundo animados */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-accent-purple opacity-30 rounded-full blur-xl animate-pulse"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.0 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 w-36 h-36 bg-accent-blue opacity-30 rounded-full blur-xl animate-pulse" 
        style={{ animationDelay: "1s" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.0, delay: 0.3 }}
      ></motion.div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-28 h-28 bg-secondary-light opacity-20 rounded-full blur-xl animate-pulse" 
        style={{ animationDelay: "2s" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.0, delay: 0.4 }}
      ></motion.div>
      
      {/* Linhas gradientes decorativas */}
      <motion.div 
        className="absolute left-0 right-0 h-px top-1/4 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      ></motion.div>
      <motion.div 
        className="absolute left-0 right-0 h-px bottom-1/4 bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.0, delay: 0.4 }}
      ></motion.div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Minhas Habilidades
            </span>
          </motion.h2>
          <motion.div 
            className="w-20 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full mb-2"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "5rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-white-muted text-xs md:text-sm max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Combinando tecnologias modernas com práticas inovadoras para criar soluções digitais que se destacam.
          </motion.p>
        </motion.div>

        {/* Navegação de categorias simples */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {skillCategories.map((category, idx) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 transition-all overflow-hidden ${activeCategory === category.id 
                ? 'text-primary-dark font-medium shadow-md' 
                : 'bg-primary-dark/40 text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              {activeCategory === category.id && (
                <motion.span 
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} -z-10`}
                  layoutId="activeCategory"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <FontAwesomeIcon icon={category.icon} className="mr-2 text-base" />
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Grid de habilidades simplificado */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3"
        >
          {activeCategoryData.skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="bg-primary-dark/30 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center border border-white/5 hover:border-accent-purple/30 transition-all duration-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + (index * 0.08), duration: 0.4 }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 8px 16px -5px rgba(94, 61, 219, 0.2)',
                transition: hoverTransition
              }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full flex items-center justify-center border border-accent-purple/20 mb-2"
                style={{
                  background: `linear-gradient(135deg, rgba(87, 226, 217, 0.1), rgba(94, 61, 219, 0.1))`
                }}
                animate={{ 
                  scale: hoveredSkill === skill.name ? 1.1 : 1,
                  borderColor: hoveredSkill === skill.name ? 'rgba(87, 226, 217, 0.5)' : 'rgba(94, 61, 219, 0.2)'
                }}
                transition={iconTransition}
              >
                <FontAwesomeIcon icon={skill.icon} className={`text-xl ${hoveredSkill === skill.name ? 'text-secondary-light' : 'text-accent-purple'}`} />
              </motion.div>
              <h4 className="text-white-soft text-sm font-medium">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Grid de tecnologias e ferramentas - Simplificado */}
        <motion.div 
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-medium text-base mb-4 text-center">
            <span style={{
              background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Outras Ferramentas & Tecnologias
            </span>
          </h3>
          
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {[
              { name: 'Git', icon: faGitAlt, color: '#F05032' },
              { name: 'GitHub', icon: faGithub, color: '#ffffff' },
              { name: 'VSCode', icon: faCode, color: '#007ACC' },
              { name: 'Figma', icon: faFigma, color: '#F24E1E' },
              { name: 'Terminal', icon: faTerminal, color: '#4CAF50' },
              { name: 'Postman', icon: faPaperPlane, color: '#FF6C37' },
              { name: 'Webpack', icon: faCubes, color: '#8DD6F9' },
              { name: 'NPM', icon: faNpm, color: '#CB3837' }
            ].map((tool, idx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 8px 16px -5px rgba(87, 226, 217, 0.4)',
                  backgroundColor: 'rgba(0, 134, 168, 0.15)',
                  transition: hoverTransition
                }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center justify-center bg-gradient-to-br from-primary-medium/70 to-primary-dark/70 p-3 rounded-lg border border-accent-purple/10 text-center transform transition-all duration-100 hover:border-accent-purple/30"
              >
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-dark/90 to-primary-dark flex items-center justify-center mb-2"
                  transition={{ duration: 0.15, type: "tween" }}
                >
                  <FontAwesomeIcon icon={tool.icon} className="text-lg" style={{ color: tool.color }} />
                </motion.div>
                <span className="text-white text-xs font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 