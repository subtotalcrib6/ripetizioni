import React from 'react';
import { MessageCircle, Code2, ArrowUp } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#002066] dark:bg-slate-950 text-white py-12 border-t border-blue-900 dark:border-slate-800 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-blue-800/80 dark:border-slate-800">
            
            {/* Left Brand info */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5 text-sky-200" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg tracking-tight uppercase text-white">
                  Matteo Mazzucco
                </span>
                <span className="text-xs text-sky-300 font-semibold tracking-wider uppercase">
                  Ripetizioni Informatica • Cisterna di Latina
                </span>
              </div>
            </div>

            {/* Center Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-sky-200 font-semibold">
              <a href="#chi-sono" className="hover:text-white transition-colors">Chi Sono</a>
              <a href="#servizi" className="hover:text-white transition-colors">Servizi</a>
              <a href="#tariffe" className="hover:text-white transition-colors">Tariffe</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-blue-900/80 dark:bg-slate-800 hover:bg-blue-800 dark:hover:bg-slate-700 text-sky-300 hover:text-white transition-all border border-blue-700/60 dark:border-slate-700"
              aria-label="Torna all'inizio della pagina"
              id="back-to-top-btn"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

          {/* Copyright notice */}
          <div className="pt-8 text-center text-xs text-sky-300/80 font-medium">
            <p>© 2026 Matteo Mazzucco. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON ON BOTTOM RIGHT */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center group animate-bounce"
        aria-label="Contattami su WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 font-bold text-sm transition-all duration-300">
          WhatsApp
        </span>
      </a>
    </>
  );
};
