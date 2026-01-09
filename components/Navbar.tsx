
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
        <div className="flex items-center gap-3">
          {/* Logo Recreation based on attached image */}
          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 shadow-lg shadow-blue-900/20">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="16" fill="#0047AB"/>
              <circle cx="50" cy="50" r="32" fill="white"/>
              <path d="M40 38C40 35.7909 41.7909 34 44 34H48L72 50L48 66H44C41.7909 66 40 64.2091 40 62V38Z" fill="#FF1E56"/>
              <path d="M46 44L58 50L46 56V44Z" fill="white"/>
            </svg>
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-white whitespace-nowrap">
            Coderz <span className="text-pink-500">Aplicativos</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
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
            className="px-5 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs md:text-sm font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/20 transition-all active:scale-95 whitespace-nowrap"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
