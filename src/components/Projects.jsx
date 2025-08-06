"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlay, faArrowUpRightFromSquare, faTimes } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filterCategory, setFilterCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const videoRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  
  const projects = [
    {
      id: 1,
      title: 'Portfólio Social Media',
      category: 'Website',
      description: 'Portfólio responsivo para uma Social Media, com foco em apresentar seus trabalhos de forma visual, profissional e interativa.',
      fullDescription: 'Desenvolvimento de um portfólio responsivo e interativo para a profissional Natalia Gomes, permitindo a exibição de trabalhos em um layout moderno e visualmente atraente. O projeto incluiu animações de transição, filtros de categoria e integração com API para atualização dinâmica de conteúdo.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Figma', 'JavaScript', 'API'],
      media: [
        { type: 'image', src: '/projects/project1/portifolio1.png' },
        { type: 'image', src: '/projects/project1/portifolio2.png' },
        { type: 'image', src: '/projects/project1/portifolio3.png' },
        { type: 'image', src: '/projects/project1/portifolio4.png' },
        { type: 'image', src: '/projects/project1/portifolio5.png' },
        { type: 'image', src: '/projects/project1/portifolio6.png' },
        { type: 'image', src: '/projects/project1/portifolio7.png' },
      ],
      thumbnail: '/projects/project1/portifolio5.png',
      link: 'https://portifolio-natalia.vercel.app/'
    },
    {
      id: 2,
      title: 'Clínica Odontológica',
      category: 'Website',
      description: 'Site para uma clínica odontológica, com foco em apresentar seus serviços, equipe, interior da clínica e agendar consultas.',
      fullDescription: 'Desenvolvi um site para a clínica odontológica fictícia Dental Corp, com foco em apresentar seus serviços, blog, equipe, interior da clínica e agendamento de consultas. O projeto inclui uma interface moderna e responsiva feita com React e Next.JS, com um design minimalista e uma navegação intuitiva. O site possui um sistema de agendamento de consultas, com integração com o calendário Google e também possui um sistema de blog para atualização dinâmica de conteúdo.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'Google Calendar API', 'Google Maps API'],
      media: [
        { type: 'image', src: '/projects/project2/clinica1.png' },
        { type: 'image', src: '/projects/project2/clinica2.png' },
        { type: 'image', src: '/projects/project2/clinica3.png' },
        { type: 'image', src: '/projects/project2/clinica4.png' },
        { type: 'image', src: '/projects/project2/clinica5.png' },
        { type: 'image', src: '/projects/project2/clinica6.png' },
      ],
      thumbnail: '/projects/project2/clinica1.png', 
      link: 'https://projeto-clinica-ten.vercel.app/'
    },
    {
      id: 3,
      title: 'Chatbot de Atendimento',
      category: 'Chatbot',
      description: 'Chatbot de atendimento para uma empresa de energia solar, com foco em tirar dúvidas técnicas, consultar um especialista via API do Zendesk e responder perguntas frequentes.',
      fullDescription: 'Criação de um chatbot não oficial de atendimento para a empresa de energia solar SolFácil, com foco em tirar dúvidas técnicas, consultar um especialista via API do Zendesk e responder perguntas frequentes. O chatbot pode ser integrado com o site da empresa e com o Zendesk para atender as solicitações dos clientes. Foi desenvolvido pelo Typebot com chamadas de APIs para o Zendesk e para coleta de avaliações dos clientes para uma planilha do Google Sheets.',
      technologies: ['Typebot', 'Google Sheets', 'Zendesk API', 'Typebot API', 'WebHook', 'API'],
      media: [
        { type: 'image', src: '/projects/project3/chatbot1.png' },
        { type: 'image', src: '/projects/project3/chatbot2.png' },
        { type: 'image', src: '/projects/project3/chatbot3.png' },
        { type: 'image', src: '/projects/project3/chatbot4.png' },
        { type: 'image', src: '/projects/project3/chatbot5.png' },
        { type: 'image', src: '/projects/project3/chatbot6.png' },
      ],
      thumbnail: '/projects/project3/chatbot1.png',
      link: 'https://typebot.co/bot-solfacil-qodlez0'
    },
  ];

  const filteredProjects = filterCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === filterCategory);

  useEffect(() => {
    setIsClient(true);
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    if (typeof window !== 'undefined') document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    if (videoRef.current) videoRef.current.pause();
    setSelectedProject(null);
    if (typeof window !== 'undefined') document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.media.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentImageIndex]);

  if (!isClient) return null;

  return (
    <section id="projects" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#57E2D9] via-[#0086A8] to-[#7547FF] bg-clip-text text-transparent">
            Meus Projetos
          </span>
        </h2>
        <p className="text-center text-white-soft mb-12 max-w-2xl mx-auto">Explore alguns dos projetos que desenvolvi, abrangendo desde websites e chatbots até automações de processos.</p>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          {['all', 'Website', 'Chatbot', 'Automação'].map(category => (
            <button 
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${filterCategory === category 
                ? 'bg-accent-blue text-white shadow-lg shadow-accent-blue/30'
                : 'bg-white/10 text-white-soft hover:bg-white/20'}`}>
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id} 
              className="bg-secondary-dark rounded-xl overflow-hidden shadow-lg border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-blue/20 cursor-pointer group"
              onClick={() => openModal(project)}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.thumbnail} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className={`transition-transform duration-500 ease-in-out ${hoveredCard === project.id ? 'scale-110' : 'scale-100'}`}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyEkd2eZvvTv5fIjjuQxDmuKqiuNpjg3eBZPHMQgzWnZMPBCNJpjhCo4VXEcmHn9EW9ePHhNJNPJMREH9JoJJ2W8WOvFdG2QYjqCXBGEvUUfxMhJl1MqDHxAYyQCvHahNqH7vKw/0l/bY8e8hVmcMTzjVk+9/WKC4OQAEFz/9k="
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs text-accent-blue bg-accent-blue/10 border border-accent-blue/30">{project.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-[#57E2D9] via-[#0086A8] to-[#7547FF] bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </h3>
                <p className="text-white-soft text-sm mb-4 h-16 overflow-hidden">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="px-2 py-0.5 text-xs rounded-md text-white/80 bg-white/5 border border-white/10">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-start md:items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div 
               className="bg-secondary-dark rounded-2xl max-w-6xl w-full h-auto md:h-[90vh] flex flex-col md:flex-row overflow-hidden shadow-2xl border border-accent-blue/20 mt-16 md:mt-0"
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
               onClick={(e) => e.stopPropagation()}
             >
                {/* Painel de Mídia */}
                <div className="w-full md:w-3/5 h-auto md:h-full flex flex-col bg-black relative">
                  <div className="aspect-video w-full relative flex-grow">
                    <button 
                      className="absolute top-4 right-4 bg-black/60 text-white rounded-full w-10 h-10 z-50 backdrop-blur-sm border border-white/10 shadow-xl flex items-center justify-center hover:bg-accent-blue/30 transition-colors"
                      onClick={closeModal}
                    >
                      <FontAwesomeIcon icon={faTimes} className="text-3xl" />
                    </button>

                    <AnimatePresence mode="wait">
                      {selectedProject.media[currentImageIndex].type === 'image' ? (
                        <motion.div
                          key={`image-${currentImageIndex}`}
                          className="w-full h-full relative"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image 
                            src={selectedProject.media[currentImageIndex].src} 
                            alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            style={{ objectFit: 'contain' }}
                            className="cursor-pointer rounded-lg p-4"
                            quality={80}
                            loading="lazy"
                            onClick={(e) => { e.stopPropagation(); window.open(selectedProject.media[currentImageIndex].src, '_blank'); }}
                          />
                        </motion.div>
                      ) : (
                        <motion.div 
                          key={`video-${currentImageIndex}`}
                          className="w-full h-full flex items-center justify-center"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                        >
                          <video 
                            ref={videoRef}
                            src={selectedProject.media[currentImageIndex].src} 
                            poster={selectedProject.media[currentImageIndex].thumbnail}
                            controls
                            autoPlay
                            className="max-w-full max-h-full object-contain rounded-lg"
                          >
                            Seu navegador não suporta vídeos.
                          </video>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button 
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-12 h-12 backdrop-blur-sm hover:bg-accent-blue/30 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      disabled={selectedProject.media.length <= 1}
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
                    </button>
                    <button 
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-12 h-12 backdrop-blur-sm hover:bg-accent-blue/30 flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      disabled={selectedProject.media.length <= 1}
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
                    </button>
                  </div>

                  <div className="w-full p-3 bg-black/30 border-t border-accent-blue/20 flex justify-center">
                    <div className="flex space-x-3 overflow-x-auto scrollbar-thin scrollbar-thumb-accent-blue/30 scrollbar-track-transparent py-2">
                      {selectedProject.media.map((item, idx) => (
                        <button 
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                          className={`relative flex-shrink-0 h-16 w-28 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${ currentImageIndex === idx ? 'border-2 border-accent-blue shadow-lg shadow-accent-blue/50' : 'border-2 border-transparent opacity-60 hover:opacity-100'}`}
                        >
                          <Image 
                            src={item.type === 'image' ? item.src : item.thumbnail || item.src} 
                            alt={`Miniatura ${idx + 1}`}
                            fill
                            sizes="112px"
                            style={{ objectFit: 'cover' }}
                            quality={60}
                            loading="lazy"
                          />
                          {item.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <FontAwesomeIcon icon={faPlay} className="text-white text-2xl" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Painel de Detalhes */}
                <div className="w-full md:w-2/5 h-auto md:h-full p-6 flex flex-col justify-center bg-primary-dark/50 border-t md:border-t-0 md:border-l border-accent-blue/20">
                  <div className="md:overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-accent-blue/40 md:pr-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-semibold text-accent-blue bg-accent-blue/10 border border-accent-blue/30">
                      {selectedProject.category}
                    </span>
                    <p className="text-white-soft text-base mb-6 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                    <h4 className="text-lg font-semibold text-white mb-3">Tecnologias Utilizadas</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 text-sm rounded-md text-white/80 bg-white/10 border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex-shrink-0 inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-gradient-to-r from-accent-purple via-accent-blue to-accent-purple text-white text-lg font-bold shadow-xl shadow-accent-blue/40 border-2 border-accent-blue/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent-blue/40 relative overflow-hidden group hover:scale-[1.03] hover:shadow-2xl"
                  >
                    <span className="mr-3">Ver Projeto Online</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-base group-hover:animate-pulse" />
                  </a>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;