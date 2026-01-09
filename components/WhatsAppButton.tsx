
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5511954669162" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] group"
    >
      <div className="absolute -inset-2 bg-green-500 rounded-full blur opacity-40 group-hover:opacity-60 animate-pulse transition-opacity"></div>
      <div className="relative w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/30 hover:scale-110 transition-transform active:scale-95">
        <MessageCircle size={32} />
      </div>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-white text-black text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Chamar no WhatsApp
      </div>
    </a>
  );
};

export default WhatsAppButton;
