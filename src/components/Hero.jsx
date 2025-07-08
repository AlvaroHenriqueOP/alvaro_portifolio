"use client"

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  
  // Array de habilidades para o efeito de digitação (sem Desenvolvedor Front-End, que será fixo)
  const skills = ['Especialista em IA', 'Designer UX/UI', 'Especialista em Chatbots'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Efeito para inicialização e rastreamento do mouse para animações interativas
  useEffect(() => {
    setIsMounted(true);
    setIsClient(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Inicializar o tamanho da janela
    handleResize();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Efeito de digitação
  useEffect(() => {
    if (!isMounted) return;
    
    // Verificação de segurança para evitar erros
    if (!skills || skills.length === 0) return;
    
    // Garantir que o índice está dentro dos limites do array
    const safeIndex = Math.min(currentSkillIndex, skills.length - 1);
    const currentSkill = skills[safeIndex];
    
    // Verificação adicional para garantir que currentSkill existe
    if (!currentSkill) return;
    
    // Velocidades de digitação/apagamento
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;
    
    // Digitando texto
    if (!isDeleting && displayText.length < currentSkill.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentSkill.substring(0, displayText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } 
    // Pausa depois de completar a digitação
    else if (!isDeleting && displayText === currentSkill) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      
      return () => clearTimeout(timeout);
    } 
    // Apagando texto
    else if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentSkill.substring(0, displayText.length - 1));
      }, deletingSpeed);
      
      return () => clearTimeout(timeout);
    } 
    // Muda para a próxima habilidade
    else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      
      // Pequena pausa antes de começar a próxima palavra
      const timeout = setTimeout(() => {}, 200);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, currentSkillIndex, skills, isMounted]);
  
  // Posição relativa do mouse para animações interativas
  const getRelativeMousePosition = useMemo(() => {
    if (!isMounted || windowSize.width === 0 || windowSize.height === 0) {
      return { x: 0.5, y: 0.5 };
    }
    
    return {
      x: mousePosition.x / windowSize.width,
      y: mousePosition.y / windowSize.height
    };
  }, [mousePosition, windowSize, isMounted]);

  // Gerar nós de rede para animação do background
  const networkNodes = useMemo(() => {
    if (!isClient) return [];
    const nodeCount = Math.min(Math.floor((windowSize.width || 1000) / 100), 15);
    return Array.from({ length: nodeCount }).map((_, i) => {
      const xPos = 5 + Math.random() * 90; // 5-95% da largura
      const yPos = 5 + Math.random() * 90; // 5-95% da altura
      const size = 3 + Math.random() * 5;
      
      return {
        id: i,
        position: { x: xPos, y: yPos },
        size,
        pulseDelay: i * 0.2,
        connections: [] // Será preenchido depois
      };
    });
  }, [windowSize.width, isClient]);

  // Criar conexões entre os nós próximos
  const networkConnections = useMemo(() => {
    if (!isClient) return [];
    const connections = [];
    const maxDistance = 30; // Distância máxima em % para criar conexão
    
    // Para cada nó, conectar com outros nós próximos
    for (let i = 0; i < networkNodes.length; i++) {
      const nodeA = networkNodes[i];
      
      for (let j = i + 1; j < networkNodes.length; j++) {
        const nodeB = networkNodes[j];
        
        // Calcular distância entre os nós (% da tela)
        const dx = nodeA.position.x - nodeB.position.x;
        const dy = nodeA.position.y - nodeB.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          connections.push({
            id: `${i}-${j}`,
            from: i,
            to: j,
            distance,
            opacity: 0.1 + Math.random() * 0.3,
            animationDelay: (i + j) * 0.1
          });
          
          nodeA.connections.push(j);
          nodeB.connections.push(i);
        }
      }
    }
    
    return connections;
  }, [networkNodes, isClient]);

  // Gerar partículas de dados flutuantes para efeito tecnológico
  const dataParticles = useMemo(() => {
    if (!isClient) return [];
    const count = 8;
    return Array.from({ length: count }).map((_, i) => {
      return {
        id: i,
        startPosition: {
          x: Math.random() * 100,
          y: Math.random() * 100
        },
        speed: 15 + Math.random() * 25,
        size: 1 + Math.random() * 2,
        opacity: 0.3 + Math.random() * 0.3,
        color: i % 3 === 0 
          ? "rgba(117, 71, 255, 0.5)" // accent-purple
          : i % 2 === 0 
            ? "rgba(0, 134, 168, 0.5)" // accent-blue
            : "rgba(87, 226, 217, 0.4)" // secondary-light
      };
    });
  }, [isClient]);

  // Variantes para as animações
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05, 
      boxShadow: "0px 10px 25px -5px rgba(var(--accent-purple-rgb), 0.5)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      boxShadow: "0px 5px 15px -5px rgba(var(--accent-purple-rgb), 0.3)",
      transition: { duration: 0.1 }
    }
  };

  // Renderização condicional para evitar hydration error
  if (!isClient) return null;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-primary-dark py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 4xl:px-20">
      {/* Background com nova animação elaborada */}
      <div className="absolute inset-0 bg-primary-dark">
        {/* Camada base com gradiente sutil animado */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(117, 71, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Grid digital com efeito de profundidade */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(87, 226, 217, 0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(87, 226, 217, 0.12) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '100px 100px']
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity
            }}
          />
          
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 134, 168, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 134, 168, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px']
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </div>

        {/* Rede de nós conectados - efeito interativo */}
        <div className="absolute inset-0">
          {networkNodes.map((node) => (
            <motion.div
              key={`node-${node.id}`}
              className="absolute rounded-full"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                width: `${node.size}px`,
                height: `${node.size}px`,
                backgroundColor: node.connections.length > 3 
                  ? 'rgba(87, 226, 217, 0.7)' 
                  : node.connections.length > 1 
                    ? 'rgba(0, 134, 168, 0.7)'
                    : 'rgba(117, 71, 255, 0.7)',
                transform: `translate(-50%, -50%)`,
                boxShadow: node.connections.length > 3 
                  ? '0 0 8px rgba(87, 226, 217, 0.5)' 
                  : node.connections.length > 1 
                    ? '0 0 6px rgba(0, 134, 168, 0.5)'
                    : '0 0 5px rgba(117, 71, 255, 0.5)',
                zIndex: 2
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3 + Math.random(),
                repeat: Infinity,
                delay: node.pulseDelay,
                ease: "easeInOut"
              }}
            />
          ))}
          
          {networkConnections.map((connection) => {
            const nodeA = networkNodes[connection.from];
            const nodeB = networkNodes[connection.to];
            
            // Calcular ângulo e distância para desenhar a linha
            const dx = nodeB.position.x - nodeA.position.x;
            const dy = nodeB.position.y - nodeA.position.y;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            const length = Math.sqrt(dx * dx + dy * dy);
            
            return (
              <motion.div
                key={`connection-${connection.id}`}
                className="absolute origin-left"
                style={{
                  left: `${nodeA.position.x}%`,
                  top: `${nodeA.position.y}%`,
                  height: '1px',
                  width: `${length}%`,
                  transform: `translate(0, 0) rotate(${angle}deg)`,
                  background: `linear-gradient(90deg, 
                    rgba(${nodeA.connections.length > 3 ? '87, 226, 217' : nodeA.connections.length > 1 ? '0, 134, 168' : '117, 71, 255'}, ${connection.opacity}), 
                    rgba(${nodeB.connections.length > 3 ? '87, 226, 217' : nodeB.connections.length > 1 ? '0, 134, 168' : '117, 71, 255'}, ${connection.opacity})
                  )`,
                  zIndex: 1,
                  opacity: 0
                }}
                animate={{
                  opacity: [0, connection.opacity, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: connection.animationDelay,
                  ease: "easeInOut"
                }}
              />
            );
          })}
          
          {/* Efeito de fluxo de dados nas linhas */}
          {networkConnections.map((connection) => {
            const nodeA = networkNodes[connection.from];
            const nodeB = networkNodes[connection.to];
            
            // Mesmos cálculos de ângulo e comprimento para alinhamento
            const dx = nodeB.position.x - nodeA.position.x;
            const dy = nodeB.position.y - nodeA.position.y;
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            const length = Math.sqrt(dx * dx + dy * dy);
            
            return (
              <motion.div
                key={`data-flow-${connection.id}`}
                className="absolute origin-left h-1 w-2 rounded-full"
                style={{
                  left: `${nodeA.position.x}%`,
                  top: `${nodeA.position.y}%`,
                  transform: `translate(0, 0) rotate(${angle}deg)`,
                  background: nodeA.connections.length > 2 
                    ? 'rgba(87, 226, 217, 0.8)' 
                    : 'rgba(117, 71, 255, 0.8)',
                  boxShadow: nodeA.connections.length > 2
                    ? '0 0 4px rgba(87, 226, 217, 0.5)'
                    : '0 0 4px rgba(117, 71, 255, 0.5)',
                  zIndex: 3,
                  opacity: 0
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  x: ['0%', `${length}%`]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: connection.animationDelay + 1,
                  repeatDelay: 7,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>
        
        {/* Partículas de dados flutuantes */}
        {dataParticles.map((particle) => (
          <motion.div
            key={`data-particle-${particle.id}`}
            className="absolute rounded-full"
            style={{
              left: `${particle.startPosition.x}%`,
              top: `${particle.startPosition.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              zIndex: 1
            }}
            animate={{
              y: [0, -particle.speed, 0],
              x: [0, particle.id % 2 === 0 ? particle.speed/2 : -particle.speed/2, 0],
              opacity: [0, particle.opacity, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: particle.id * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Container principal com os conteúdos */}
      <div className="container z-10 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 2xl:gap-12 4xl:gap-16 max-w-7xl mx-auto 4xl:max-w-5xl 5xl:max-w-6xl">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left xl:space-y-7">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold leading-tight"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="block">Me chamo</span>
            <span 
              className="bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple bg-clip-text text-transparent"
              style={{
                background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Álvaro Henrique
              </span>
            </motion.h1>
          
          {/* Desenvolvedor Front-End como texto fixo */}
          <motion.div
            className="text-2xl md:text-3xl font-bold text-accent-blue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Desenvolvedor Front-End
          </motion.div>
          
          {/* Outras competências com efeito de digitação */}
          <motion.div
            className="text-xl md:text-2xl text-white-muted"
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="mr-2">Também</span>
            <span className="inline-block h-8 w-auto min-w-[180px] relative xl:h-9 2xl:h-10">
              <span className="text-accent-blue font-medium">{displayText}</span>
              <span className="absolute bottom-0 right-0 h-full w-1 bg-accent-blue animate-blink"></span>
            </span>
          </motion.div>
            
          <motion.p 
            className="text-white-soft max-w-lg mx-auto md:mx-0 xl:max-w-xl 2xl:max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Transformando ideias em experiências digitais memoráveis. 
            Especializado em desenvolvimento front-end, inteligência artificial, criação de chatbots e interfaces interativas.
          </motion.p>
            
          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start xl:gap-5"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#projects"
              className="px-6 py-3.5 bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-xl font-medium flex items-center gap-3 shadow-lg shadow-accent-purple/20 relative overflow-hidden group xl:px-7 xl:py-3.5 2xl:text-base"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <i className="fa-solid fa-arrow-right relative z-10"></i>
            </motion.a>
              
            <motion.a 
              href="#contact"
              className="px-6 py-3.5 bg-primary-medium/50 text-white border border-accent-blue/30 rounded-xl hover:border-accent-blue/50 transition-all font-medium flex items-center gap-3 xl:px-7 xl:py-3.5 2xl:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contato</span>
              <i className="fa-solid fa-envelope"></i>
            </motion.a>
          </motion.div>
        </div>
        
        {/* Hero Image/Avatar */}
        <motion.div 
          className="md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 xl:w-[22rem] xl:h-[22rem] 2xl:w-[24rem] 2xl:h-[24rem]">
            {/* Efeito de moldura */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue via-transparent to-accent-purple p-1 animate-slow-spin">
              <div className="absolute inset-0 rounded-full bg-primary-dark"></div>
            </div>
            
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-accent-purple/30">
              <Image
                src="/profile/foto_perfil.jpg"
                alt="Álvaro Henrique"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Emblemas flutuantes */}
            <motion.div
              className="absolute -top-4 -right-4 bg-primary-dark p-3 rounded-full border border-accent-blue/30 shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <i className="fa-solid fa-code text-xl text-accent-blue"></i>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-primary-dark p-3 rounded-full border border-accent-purple/30 shadow-lg"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <i className="fa-solid fa-robot text-xl text-accent-purple"></i>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p className="text-white-muted text-sm mb-2 xl:text-base">Rolar para explorar</p>
        <motion.div
          className="w-6 h-10 border-2 border-white-muted rounded-full flex justify-center items-start p-1 xl:w-7 xl:h-12"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1.5 h-3 bg-white-muted rounded-full xl:w-2 xl:h-4"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 