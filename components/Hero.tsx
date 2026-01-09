
import React from 'react';
import { Smartphone, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[150px] -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            Tech Development & Academy
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Transformando ideias em <span className="text-gradient">experiências digitais.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
            A Coderz Aplicativos é especialista em criar apps de alto impacto e formar os desenvolvedores do futuro através de treinamentos intensivos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#contato" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-extrabold rounded-2xl hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center gap-2 group shadow-xl shadow-white/5"
            >
              Começar um Projeto <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#cursos" 
              className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Conhecer Cursos
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="text-sm font-bold text-gray-400">Trusted by:</div>
            <div className="flex gap-6">
              <span className="text-xl font-bold">TECH.</span>
              <span className="text-xl font-bold">CORE.</span>
              <span className="text-xl font-bold">CLOUD.</span>
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 w-full max-w-[500px] mx-auto">
            {/* Mockup visual */}
            <div className="relative glass p-4 rounded-[40px] shadow-2xl border-white/20">
                <img 
                    src="https://picsum.photos/seed/app/800/1000" 
                    alt="App Preview" 
                    className="rounded-[30px] w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 glass p-6 rounded-3xl animate-bounce-slow">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <Smartphone size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400">Usuários Ativos</p>
                            <p className="text-lg font-bold">+15.000</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background geometric shapes */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/20 rounded-full -z-10"></div>
            <div className="absolute top-1/2 -left-10 w-20 h-20 bg-purple-500/20 rotate-45 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
