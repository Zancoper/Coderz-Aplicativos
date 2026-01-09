
import React, { useState, useEffect } from 'react';
import { Smartphone, ChevronRight, Users, GraduationCap } from 'lucide-react';

const carouselImages = [
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/3vpe72mmi04j/Screenshot_20260109_161344.jpg",
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/ow4tmr7096jv/Screenshot_20260109_161334.jpg",
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/pkhvz6uz2jxl/Screenshot_20260109_161827.jpg",
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/fjummfhkkgh3/Screenshot_20260109_161406.jpg",
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/uq80373i6kzf/Screenshot_20260109_161751.jpg",
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/s3z1krjt9tb7/Screenshot_20260109_161836.jpg",
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/14h38vnteenm/Screenshot_20260109_161640_Chrome.jpg",
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/kdwxl0zqdr0s/Screenshot_20260109_161424.jpg",
  "https://storage.googleapis.com/flutterflow-io-6f20.appspot.com/projects/gestao-coderz-djrfru/assets/te2wau9rbbu2/Screenshot_20260109_161657.jpg"
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
            Desenvolvimento & Cursos
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Transformando ideias em <span className="text-gradient">experiências digitais.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
            A Coderz Aplicativoss é uma Empresa especialista em criar Apps e Sistemas Low-Code e No-Code de alto impacto e formar desenvolvedores através de treinamentos em nossa Comunidade.
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
              Conhecer Nossos Cursos
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a 
              href="https://comunidade.coderzaplicativos.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                <Users size={20} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Acesse agora</p>
                <p className="text-sm font-bold text-white">comunidade.coderzaplicativos.com.br</p>
              </div>
              <ChevronRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
            </a>

            {/* Info Card - Now moved here next to the access link */}
            <div className="glass p-4 rounded-2xl animate-bounce-slow shadow-2xl border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white shrink-0">
                    <GraduationCap size={20} />
                </div>
                <div className="text-left">
                    <p className="text-[10px] text-gray-400 uppercase font-black leading-none mb-1">Total de Alunos</p>
                    <p className="text-lg font-bold text-white leading-none">+1.700</p>
                </div>
            </div>
          </div>
        </div>

        <div className="flex-1 relative flex justify-center lg:justify-end">
          <div className="relative z-10 w-full max-w-[340px]">
            {/* Mockup visual with Vertical Carousel - Aspect ratio updated for modern phones */}
            <div className="relative glass p-3 rounded-[50px] shadow-2xl border-white/20">
                <div className="relative overflow-hidden rounded-[40px] aspect-[9/19.5] bg-[#0a0515]">
                    {carouselImages.map((img, idx) => (
                        <img 
                            key={idx}
                            src={img} 
                            alt={`App Preview ${idx + 1}`} 
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-100'}`}
                        />
                    ))}
                    
                    {/* Indicators */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                        {carouselImages.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-5 bg-pink-500' : 'w-1 bg-white/20'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-500/10 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
