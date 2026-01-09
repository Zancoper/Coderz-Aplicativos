
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { ContactFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    subject: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating email send to coderzaplicativos@gmail.com
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', email: '', subject: '', description: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-10 animate-fade-in">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
          <Send size={40} />
        </div>
        <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
        <p className="text-gray-400">Obrigado pelo contato. Em breve nossa equipe entrará em contato com você.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-pink-500 font-bold hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Nome Completo</label>
          <input 
            required
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Telefone</label>
          <input 
            required
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(11) 99999-9999"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">E-mail</label>
        <input 
          required
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="seu@email.com"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Assunto</label>
        <input 
          required
          type="text" 
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Como podemos ajudar?"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Descrição</label>
        <textarea 
          required
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Conte-nos mais sobre seu projeto ou dúvida..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-pink-500 transition-colors resize-none"
        ></textarea>
      </div>

      <button 
        disabled={isSubmitting}
        type="submit" 
        className="w-full py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-black rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : (
          <>Enviar Mensagem <Send size={20} /></>
        )}
      </button>
      
      <p className="text-center text-xs text-gray-500">
        Sua mensagem será enviada diretamente para <strong>coderzaplicativos@gmail.com</strong>
      </p>
    </form>
  );
};

export default ContactForm;
