import React from 'react';
import { MessageCircle, Code2, ArrowUp, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#002066] dark:bg-slate-950 text-white py-12 border-t border-blue-900/80 dark:border-slate-800 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-800/80 dark:border-slate-800">
            
            {/* Left Brand info */}
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Code2 className="w-5 h-5 text-sky-200" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight uppercase text-white">
                  Matteo Mazzucco
                </span>
                <span className="text-xs text-sky-300 font-semibold tracking-wider uppercase">
                  Ripetizioni Informatica • Cisterna di Latina & Online
                </span>
              </div>
            </div>

            {/* Center Quick Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-sky-200 font-semibold" aria-label="Footer Navigation">
              <a href="#chi-sono" className="hover:text-white transition-colors">Chi Sono</a>
              <a href="#servizi" className="hover:text-white transition-colors">Servizi</a>
              <a href="#tariffe" className="hover:text-white transition-colors">Tariffe</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-blue-900/80 dark:bg-slate-800 hover:bg-blue-800 dark:hover:bg-slate-700 text-sky-300 hover:text-white transition-all border border-blue-700/60 dark:border-slate-700 shadow-sm"
              aria-label="Torna all'inizio della pagina"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Copyright & Subtitle */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sky-300/80 font-medium">
            <p>© {currentYear} Matteo Mazzucco • Ripetizioni per Scuole Superiori.</p>
            <p className="flex items-center gap-1.5 text-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Lezioni pratiche di Informatica, TPSIT e Sistemi & Reti</span>
            </p>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (CON PING DISPONIBILE) */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:p-4 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center group"
        aria-label="Contattami su WhatsApp per le lezioni"
        id="floating-whatsapp-btn"
      >
        {/* Pallino verde animato che indica "online/disponibile" */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
        </span>

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        
        {/* Testo espandibile al passaggio del mouse su desktop */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 font-bold text-sm transition-all duration-300">
          Chatta su WhatsApp
        </span>
      </a>
    </>
  );
};
