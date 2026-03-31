"use client"

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, faBrain, faComments, faMobileScreen, 
  faMagnifyingGlass, faPlug, faPencilRuler, faLaptopCode, faClipboardCheck, 
  faRocket, faPenFancy, faRobot, faNetworkWired, faChartLine, 
  faMagnifyingGlassChart, faKeyboard, faCogs, faHeadset, faCalendarCheck, 
  faLink, faLifeRing, faPalette, faVectorSquare, faHandPointer, faUsers, 
  faSitemap, faDiagramProject, faCodeBranch, faSliders, faHandshake, 
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      id: 'frontend',
      title: 'Front-end',
      icon: faCode,
      color: 'bg-gradient-to-br from-secondary-light/80 to-accent-blue/80',
      textColor: 'text-cyan-300',
      description: 'Desenvolvimento de sistemas web, dashboards e landing pages voltados para performance e taxa de conversão, traduzindo as necessidades do negócio em interfaces interativas de ponta.',
      features: [
        { name: 'Autoria em React e Next.js entregando arquiteturas robustas e escaláveis.', icon: faReact },
        { name: 'UI/UX focado em experiência de usuário impecável e usabilidade perfeita.', icon: faMobileScreen },
        { name: 'Integração completa de APIs e back-ends mantendo a segurança e fluidez dos dados.', icon: faPlug },
        { name: 'Otimização pesada de métricas (SEO/Core Web Vitals) para aumento de conversão.', icon: faMagnifyingGlass }
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Figma', 'Rest APIs'],
      workflow: [
        { text: 'Briefing estratégico para alinhar escopo, regras de negócio e stack de design com o produto final.', icon: faComments },
        { text: 'Estruturação da interface via componentes granulares visando performance e facilidade operacional.', icon: faPencilRuler },
        { text: 'Programação hands-on priorizando código limpo, componentização rigorosa e tempo de carregamento.', icon: faLaptopCode },
        { text: 'Refinamento do Front-end: Validação de quebras e consistência em diferentes viewports e celulares.', icon: faClipboardCheck },
        { text: 'Deploy otimizado (Live) com as chaves em mãos e painel ajustado, pronto para conversões reais.', icon: faRocket }
      ]
    },
    {
      id: 'ai',
      title: 'IA & Automação',
      icon: faBrain,
      color: 'bg-gradient-to-br from-accent-purple/80 to-accent-blue/80',
      textColor: 'text-purple-300',
      description: 'Implementação de modelos baseados em IA e Agentes Autônomos (LLMs) para ganho de escala. Otimizamos gargalos operacionais internos através de inteligência artificial de última geração.',
      features: [
        { name: 'Integração inteligente de Agentes Autônomos em seus fluxos operacionais de empresa.', icon: faPenFancy },
        { name: 'Orquestração de modelos de linguagem e engenharia de prompts avançada (OpenAI/Claude).', icon: faRobot },
        { name: 'Customização de LLMs focada no tom de comunicação oficial da sua própria marca na web.', icon: faNetworkWired },
        { name: 'Análise descritiva/preditiva e automação de planilhas conectadas a inteligências artificiais.', icon: faChartLine }
      ],
      technologies: ['OpenAI API', 'LLMs', 'Prompt Engineering', 'Vector DBs', 'Python'],
      workflow: [
        { text: 'Diagnóstico dos gargalos manuais e avaliação dos fluxos corporativos com alto nível de ociosidade.', icon: faMagnifyingGlassChart },
        { text: 'Modelagem dos scripts iniciais, definindo onde os gatilhos e algoritmos de IA vão operar de fato.', icon: faKeyboard },
        { text: 'Testes e calibração de prompts para prevenir falhas (alucinações) ou dados vazados dos LLMs.', icon: faCogs },
        { text: 'Acoplamento do sistema de IA na arquitetura base (integração via webhook/API com o front-end).', icon: faChartLine },
        { text: 'Produção executiva e testes abertos assegurando que o sistema substitua o esforço humano.', icon: faHandshake }
      ]
    },
    {
      id: 'chatbots',
      title: 'Chatbots & Integ.',
      icon: faComments,
      color: 'bg-gradient-to-br from-secondary-light/80 to-accent-purple/80',
      textColor: 'text-blue-300',
      description: 'Criação de soluções conversacionais avançadas acopladas a integrações de CRM para atendimento contínuo. Qualificação de leads em rotinas fluidas trabalhando em escala 24/7 para sua marca.',
      features: [
        { name: 'Construção robusta de assistentes virtuais de captação que atuam interativamente 24/7.', icon: faHeadset },
        { name: 'Filtro e qualificação inteligente (Inbound) conduzindo o usuário até a conversão e fechamento.', icon: faCalendarCheck },
        { name: 'Orquestração visual de fluxos conversacionais fáceis de adaptar e acompanhar via CRMs de mercado.', icon: faLink },
        { name: 'Integração em ferramentas como WhatsApp, Meta Ads e agendadores nativos do seu negócio.', icon: faLink },
        { name: 'Unificação técnica unindo fluxos de atendimento programado a LLMs extremamente humanizados.', icon: faBrain }
      ],
      technologies: ['Typebot', 'Zendesk', 'Make/n8n', 'APIs REST', 'Flow Design'],
      workflow: [
        { text: 'Auditoria de canais de aquisição para rastrear as dúvidas comuns e principais portas de entrada de Leads.', icon: faSitemap },
        { text: 'Design diagramado da árvore conversacional e mapeamento completo do caminho ideal que o usuário fará.', icon: faDiagramProject },
        { text: 'Implementação de conectores Webhook para ligar a coleta de dados de forma nativa e imediata ao HubSpot.', icon: faCodeBranch },
        { text: 'Simulação tática, ajustes comportamentais e tratamento de erros no funil passivo da IA conversacional.', icon: faSliders },
        { text: 'Operação (Go-Live) de suporte automatizado entregando tickets ativos para a mesa de análise e negócios.', icon: faHandshake }
      ]
    },
    {
      id: 'crm',
      title: 'CRM & Ops',
      icon: faChartLine,
      color: 'bg-gradient-to-br from-accent-blue/80 to-accent-purple/80',
      textColor: 'text-teal-300',
      description: 'Implementação de CRM e Modelagem de Dados para trazer previsibilidade, controle e escala ao processo comercial.',
      features: [
        { name: 'Estruturação de pipelines e funil de vendas (Inbound) para gestão assertiva de leads.', icon: faSitemap },
        { name: 'Parametrização de ponta a ponta do HubSpot adaptada ao seu produto ou serviço.', icon: faCogs },
        { name: 'Criação de automações de follow-up que reduzem drasticamente o trabalho manual.', icon: faRobot },
        { name: 'Painéis e Dashboards de Business Intelligence integrados ao Pipeline.', icon: faChartLine }
      ],
      technologies: ['HubSpot', 'Power BI', 'Integrações', 'Data Analysis', 'Sales Ops'],
      workflow: [
        { text: 'Mapeamento da atual jornada de vendas e identificação de gaps comerciais da empresa.', icon: faMagnifyingGlass },
        { text: 'Configuração dos hubs do CRM (Propriedades, Negócios, Perfis e Regras de Negócio).', icon: faLaptopCode },
        { text: 'Ativação das automações e conexão direta com as plataformas atuais e seu site principal.', icon: faNetworkWired },
        { text: 'Treinamento do time comercial e testes práticos de usabilidade da ferramenta no dia a dia.', icon: faUsers },
        { text: 'Lançamento acompanhado de monitoramento com painel de inteligência (KPIs).', icon: faRocket }
      ]
    }
  ];

  // Variantes para animações
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-16 bg-skills-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary-dark/95 to-accent-purple/10 opacity-80"></div>
      
      {/* Elementos de fundo animados */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent-purple opacity-30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent-blue opacity-30 rounded-full blur-xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-36 h-36 bg-secondary-light opacity-20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* Linhas gradientes decorativas */}
      <div className="absolute left-0 right-0 h-px top-1/4 bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent"></div>
      <div className="absolute left-0 right-0 h-px bottom-1/4 bg-gradient-to-r from-transparent via-accent-purple/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 relative bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple bg-clip-text">
            <span style={{
                background: 'linear-gradient(90deg, #57E2D9, #0086A8, #7547FF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                position: 'relative',
                zIndex: 10
              }}>Meus Serviços</span>
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-secondary-light via-accent-blue to-accent-purple rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-white text-sm max-w-2xl mx-auto">
            Soluções digitais personalizadas para transformar ideias em produtos tecnológicos.
          </p>
        </motion.div>

        {/* Tabs de navegação - botões mais coloridos */}
        <div className="flex flex-wrap justify-center mb-6 gap-2">
          {services.map((service, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              onClick={() => setActiveTab(idx)}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium flex items-center transition-all duration-300 overflow-hidden
                ${activeTab === idx 
                  ? `${service.color.replace('bg-', 'text-primary-dark ')} shadow-lg shadow-accent-purple/20` 
                  : 'bg-primary-dark/80 text-white hover:border-accent-blue/40'
                }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(var(--accent-purple-rgb), 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Background animado no hover */}
              {activeTab !== idx && (
                <motion.div 
                  className={`absolute inset-0 ${service.color} opacity-0`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hovered === idx ? 0.15 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              <motion.div 
                className={`w-6 h-6 rounded-lg flex items-center justify-center mr-2 ${activeTab !== idx ? service.color + ' bg-opacity-30' : ''}`}
                animate={{ 
                  scale: hovered === idx ? 1.2 : 1
                }}
                transition={{ duration: 0.5 }}
              >
                <FontAwesomeIcon icon={service.icon} className={`text-base ${activeTab === idx ? 'text-primary-dark' : service.textColor}`} />
              </motion.div>
              <span className="relative z-10">{service.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Conteúdo do serviço ativo - mais cores e efeitos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-primary-dark/90 to-primary-dark/80 rounded-xl overflow-hidden border border-accent-purple/20 shadow-lg shadow-accent-blue/10 backdrop-blur-sm"
          >
            {/* Efeito de borda gradiente */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-px bg-gradient-to-br from-accent-purple/10 via-transparent to-accent-blue/10 rounded-xl opacity-40"></div>
            </div>
            
            {/* Círculos decorativos */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-purple/15 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-blue/15 rounded-full blur-xl"></div>
            
            <div className="p-4 md:p-6 relative">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Coluna esquerda */}
                <motion.div 
                  className="md:w-1/2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="flex items-center mb-4"
                    variants={itemVariants}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${services[activeTab].color} text-white mr-3 shadow-lg shadow-accent-purple/30`}>
                      <FontAwesomeIcon icon={services[activeTab].icon} className="text-xl" />
                    </div>
                    <h3 className="text-xl font-bold">
                      <span style={{
                        background: 'linear-gradient(90deg, #57E2D9, #7547FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                      }}>
                        {services[activeTab].title}
                      </span>
                    </h3>
                  </motion.div>
                  
                  <motion.p 
                    className="text-white text-sm mb-4"
                    variants={itemVariants}
                  >
                    {services[activeTab].description}
                  </motion.p>
                  
                  <motion.h4 
                    className="text-base font-medium mb-3"
                    variants={itemVariants}
                  >
                    <span style={{
                      background: 'linear-gradient(90deg, #57E2D9, #0086A8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}>
                      O que eu ofereço:
                    </span>
                  </motion.h4>
                  <ul className="space-y-2 mb-4">
                    {services[activeTab].features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        className="flex items-start group"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center ${services[activeTab].color} text-white mr-3 group-hover:scale-110 transition-transform shadow-lg shadow-accent-purple/20`}>
                          <FontAwesomeIcon icon={feature.icon} className="text-xs" />
                        </div>
                        <span className="text-white text-sm pt-1.5">{feature.name}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.h4 
                    className="text-base font-medium mb-3"
                    variants={itemVariants}
                  >
                    <span style={{
                      background: 'linear-gradient(90deg, #0086A8, #7547FF)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}>
                      Tecnologias:
                    </span>
                  </motion.h4>
                  <motion.div 
                    className="flex flex-wrap gap-1.5"
                    variants={itemVariants}
                  >
                    {services[activeTab].technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: idx * 0.05 }}
                        whileHover={{ 
                          scale: 1.1, 
                          boxShadow: '0 5px 15px -5px rgba(var(--accent-purple-rgb), 0.5)',
                          backgroundColor: 'rgba(var(--accent-blue-rgb), 0.2)'
                        }}
                        className="px-2 py-1 bg-primary-medium/80 text-white text-xs rounded-lg border border-accent-purple/20 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
                
                {/* Coluna direita - CTA */}
                <motion.div 
                  className="md:w-1/2 flex flex-col justify-between"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div 
                    className="bg-gradient-to-br from-primary-medium/80 to-primary-dark/80 p-6 rounded-xl border border-accent-blue/20 mb-6 backdrop-blur-sm relative overflow-hidden shadow-lg shadow-accent-purple/10"
                    variants={itemVariants}
                  >
                    {/* Decoração de fundo */}
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-purple/10 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-blue/10 rounded-full blur-xl"></div>
                    
                    <h4 className="text-lg font-medium mb-4">
                      <span style={{
                        background: 'linear-gradient(90deg, #57E2D9, #0086A8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                      }}>
                        Como funciona:
                      </span>
                    </h4>
                    <ol className="space-y-4">
                      {services[activeTab].workflow.map((step, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 + (idx * 0.1) }}
                          className="flex items-center"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className={`w-10 h-10 rounded-full ${services[activeTab].color} flex items-center justify-center mr-4 text-primary-dark shadow-lg shadow-accent-purple/20`}
                            transition={{ duration: 0.5 }}
                          >
                            <FontAwesomeIcon icon={step.icon} />
                          </motion.div>
                          <span className="text-white text-base">{step.text}</span>
                        </motion.li>
                      ))}
                    </ol>
                  </motion.div>
                  
                  <motion.div 
                    className="flex justify-center"
                    variants={itemVariants}
                  >
                    <motion.a
                      href="https://api.whatsapp.com/send/?phone=5511911200307&text=Ol%C3%A1!+Vi+seu+portif%C3%B3lio+e+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px -5px rgba(var(--accent-purple-rgb), 0.6)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-8 py-4 rounded-xl ${services[activeTab].color} text-primary-dark text-base font-medium shadow-xl shadow-accent-blue/30 flex items-center gap-3 overflow-hidden group no-underline`}
                    >
                      {/* Efeito de brilho mais intenso com animação */}
                      <motion.div 
                        className="absolute top-0 bottom-0 w-24 h-full bg-white/30 skew-x-20 -left-32 group-hover:left-full transform transition-all duration-1000 pointer-events-none"
                      />
                      
                      <span className="relative z-10">Solicite um orçamento agora!</span>
                      <i className="fa-solid fa-arrow-right relative z-10"></i>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services; 