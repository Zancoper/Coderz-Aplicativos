
import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-700 rounded-xl flex items-center justify-center">
                 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                   <polygon points="23 7 16 12 23 17 23 7"></polygon>
                   <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <span className="text-2xl font-black text-white">Coderz<span className="text-pink-500">.</span></span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Desenvolvendo o futuro digital através de aplicativos incríveis e educação de alta qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#servicos" className="hover:text-pink-400 transition-colors">Portfólio</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
              <li><a href="#contato" className="hover:text-pink-400 transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Educação</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#cursos" className="hover:text-pink-400 transition-colors">Todos os Cursos</a></li>
              <li><a href="#cursos" className="hover:text-pink-400 transition-colors">Bootcamp Mobile</a></li>
              <li><a href="#cursos" className="hover:text-pink-400 transition-colors">Full Stack Web</a></li>
              <li><a href="#cursos" className="hover:text-pink-400 transition-colors">Mentoria VIP</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Receba novidades e conteúdos exclusivos sobre tech.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-pink-500"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-pink-500 hover:text-white transition-all">OK</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 Coderz Aplicativos. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
