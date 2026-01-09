
import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" rx="16" fill="#0047AB"/>
                  <circle cx="50" cy="50" r="32" fill="white"/>
                  <path d="M40 38C40 35.7909 41.7909 34 44 34H48L72 50L48 66H44C41.7909 66 40 64.2091 40 62V38Z" fill="#FF1E56"/>
                  <path d="M46 44L58 50L46 56V44Z" fill="white"/>
                </svg>
              </div>
              <span className="text-2xl font-black text-white">Coderz<span className="text-pink-500"> Aplicativos</span></span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Desenvolvendo o futuro digital através de aplicativos incríveis e educação de alta qualidade. Transformamos sua visão em realidade mobile.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/coderzaplicativos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-pink-500" />
                <a href="mailto:contato@coderzaplicativos.com.br" className="hover:text-pink-400 transition-colors">contato@coderzaplicativos.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-pink-500" />
                <a href="https://wa.me/5511954669162" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">+55 (11) 95466-9162</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Educação</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#cursos" className="hover:text-pink-400 transition-colors">Todos os Cursos</a></li>
              <li><a href="https://comunidade.coderzaplicativos.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">Comunidade Coderz Aplicativos</a></li>
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
          <p>© 2026 Coderz Aplicativos. Todos os direitos reservados.</p>
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
