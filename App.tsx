
import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  GraduationCap, 
  Rocket, 
  MessageCircle, 
  ChevronRight, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  Phone,
  Send
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Courses from './components/Courses';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-mesh overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="servicos" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Nossos <span className="text-gradient">Serviços</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Combinamos tecnologia de ponta com design centrado no usuário para criar soluções digitais que transformam negócios.
              </p>
            </div>
            <Services />
          </div>
        </section>

        <section id="cursos" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                  Acelere sua <span className="text-gradient">Carreira</span>
                </h2>
                <p className="text-gray-400 text-lg">
                  Nossos cursos são práticos e focados no mercado. Aprenda com quem constrói aplicativos reais todos os dias.
                </p>
              </div>
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                Ver Todos os Cursos <ChevronRight size={20} />
              </button>
            </div>
            <Courses />
          </div>
        </section>

        <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Vamos <span className="text-gradient">Conversar?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Tem uma ideia incrível ou quer elevar o nível técnico da sua equipe? Preencha o formulário ou nos chame no WhatsApp.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">Email</p>
                    <p className="text-lg">coderzaplicativos@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-bold">WhatsApp</p>
                    <p className="text-lg">+55 (11) 95466-9162</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 md:p-10 rounded-3xl">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
