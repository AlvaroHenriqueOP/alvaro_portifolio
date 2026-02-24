'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes, faRobot, faUser, faSpinner } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map(msg => ({
              role: msg.sender === 'user' ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: inputMessage }
          ]
        }),
      });

      if (!response.ok) {
        throw new Error('Erro na resposta da API');
      }

      const data = await response.json();
      
      const botMessage = {
        id: Date.now() + 1,
        text: data.response,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('pt-BR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: 'Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.',
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString('pt-BR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMessages([]);
    }
  };

  return (
    <>
      {/* Botão flutuante do chatbot */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#0086A8] to-[#7547FF] hover:from-[#006d8a] hover:to-[#5a35cc] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center group"
        aria-label="Abrir chatbot"
        style={{
          boxShadow: '0 0 20px rgba(0, 134, 168, 0.4), 0 0 20px rgba(117, 71, 255, 0.4)'
        }}
      >
        <FontAwesomeIcon 
          icon={isOpen ? faTimes : faRobot} 
          className="text-xl group-hover:scale-110 transition-transform duration-200" 
        />
      </button>

      {/* Interface do chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-[#0A1116] rounded-2xl shadow-2xl border border-[#57E2D9]/20 flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300 backdrop-blur-sm"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(87, 226, 217, 0.1), 0 0 20px rgba(117, 71, 255, 0.1)'
          }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0086A8] to-[#7547FF] text-white p-4 rounded-t-2xl"
            style={{
              boxShadow: '0 0 20px rgba(0, 134, 168, 0.3), 0 0 20px rgba(117, 71, 255, 0.3)'
            }}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faRobot} className="text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Assistente Virtual</h3>
                <p className="text-sm text-white/80">Como posso ajudar?</p>
              </div>
            </div>
          </div>

          {/* Área de mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#121620] chatbot-messages">
                          {messages.length === 0 && (
                <div className="text-center text-[#57E2D9]/60 py-8">
                  <FontAwesomeIcon icon={faRobot} className="text-4xl text-[#57E2D9]/40 mb-3" />
                  <p className="text-sm text-[#57E2D9]/80">Olá! Sou o assistente virtual do Álvaro. Como posso te ajudar hoje?</p>
                </div>
              )}
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                                 <div
                   className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                     message.sender === 'user'
                       ? 'bg-gradient-to-r from-[#0086A8] to-[#7547FF] text-white'
                       : 'bg-[#151A25] text-[#57E2D9] border border-[#57E2D9]/20'
                   }`}
                   style={message.sender === 'user' ? {
                     boxShadow: '0 0 15px rgba(0, 134, 168, 0.3), 0 0 15px rgba(117, 71, 255, 0.3)'
                   } : {
                     boxShadow: '0 0 10px rgba(87, 226, 217, 0.1)'
                   }}
                 >
                  <p className="text-sm">{message.text}</p>
                                     <p className={`text-xs mt-1 ${
                     message.sender === 'user' ? 'text-white/70' : 'text-[#57E2D9]/60'
                   }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            
                         {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-[#151A25] text-[#57E2D9] border border-[#57E2D9]/20 px-4 py-2 rounded-2xl"
                   style={{
                     boxShadow: '0 0 10px rgba(87, 226, 217, 0.1)'
                   }}>
                   <FontAwesomeIcon icon={faSpinner} className="animate-spin text-[#57E2D9]" />
                   <span className="ml-2 text-sm text-[#57E2D9]/80">Digitando...</span>
                 </div>
               </div>
             )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Área de input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-[#57E2D9]/20 bg-[#0A1116]">
            <div className="flex space-x-2">
                             <input
                 ref={inputRef}
                 type="text"
                 value={inputMessage}
                 onChange={(e) => setInputMessage(e.target.value)}
                 placeholder="Digite sua mensagem..."
                 className="flex-1 px-4 py-2 border border-[#57E2D9]/30 rounded-full focus:outline-none focus:ring-2 focus:ring-[#57E2D9] focus:border-transparent bg-[#151A25] text-[#57E2D9] placeholder-[#57E2D9]/50"
                 disabled={isLoading}
                 style={{
                   boxShadow: '0 0 10px rgba(87, 226, 217, 0.05)'
                 }}
               />
                             <button
                 type="submit"
                 disabled={!inputMessage.trim() || isLoading}
                 className="px-4 py-2 bg-gradient-to-r from-[#0086A8] to-[#7547FF] text-white rounded-full hover:from-[#006d8a] hover:to-[#5a35cc] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
                 style={{
                   boxShadow: '0 0 15px rgba(0, 134, 168, 0.3), 0 0 15px rgba(117, 71, 255, 0.3)'
                 }}
               >
                <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot; 