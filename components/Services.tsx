
import React from 'react';
import { Smartphone, Laptop, Globe, Cpu, Database, Layout } from 'lucide-react';

const services = [
  {
    icon: <Smartphone className="text-pink-500" size={32} />,
    title: "Apps Nativos & Híbridos",
    description: "Desenvolvimento de aplicativos robustos para iOS e Android com performance superior."
  },
  {
    icon: <Globe className="text-purple-500" size={32} />,
    title: "Sistemas Web Progressivos",
    description: "Interfaces modernas e escaláveis que funcionam perfeitamente em qualquer dispositivo."
  },
  {
    icon: <Layout className="text-blue-500" size={32} />,
    title: "Design de UX/UI",
    description: "Experiências memoráveis focadas em usabilidade e conversão de usuários."
  },
  {
    icon: <Database className="text-green-500" size={32} />,
    title: "Backend & Integrações",
    description: "Arquitetura de dados segura e integrações de API para o seu negócio."
  },
  {
    icon: <Cpu className="text-yellow-500" size={32} />,
    title: "Consultoria Técnica",
    description: "Ajudamos você a escolher as melhores tecnologias para o seu projeto escalar."
  },
  {
    icon: <Laptop className="text-red-500" size={32} />,
    title: "Manutenção & Evolução",
    description: "Suporte contínuo para manter seu software sempre atualizado e seguro."
  }
];

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="glass p-8 rounded-3xl hover:border-pink-500/50 transition-all group hover:-translate-y-2 duration-300"
        >
          <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-gray-400 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Services;
