
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f0720]/80 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - Representing the user's logo style */}
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-700 rounded-xl flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
               <polygon points="23 7 16 12 23 17 23 7"></polygon>
               <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-white">Coderz<span className="text-pink-500">.</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Início</a>
          <a href="#servicos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Serviços</a>
          <a href="#cursos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Cursos</a>
          <a href="#contato" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contato</a>
        </div>

        <div>
          <a 
            href="https://wa.me/5511954669162" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/20 transition-all active:scale-95"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
