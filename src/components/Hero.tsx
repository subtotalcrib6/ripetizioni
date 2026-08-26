import React from 'react';
import { Home, Laptop, Globe, MessageCircle, Sparkles, CheckCircle2, Gift, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/90 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 font-bold text-xs sm:text-sm tracking-wide uppercase mb-6 shadow-2xs transition-colors">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-sky-400" />
          <span>Informatica • Sistemi e Reti • TPSIT</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#002066] dark:text-slate-100 tracking-tight uppercase mb-4 font-display transition-colors leading-tight max-w-4xl mx-auto">
          Recupera il debito, supera le verifiche e impara a programmare senza stress
        </h1>

        {/* Subheader */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 font-medium">
          Lezioni individuali e pratiche per studenti delle Scuole Superiori (ITI e Liceo Scienze Applicate).
        </p>

        {/* 🌟 NUOVO BLOCCO MODERNO (Senza rombo, angoli morbidi rounded-3xl e bordo glow) */}
        <div className="my-8 max-w-3xl mx-auto">
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-blue-600 via-sky-400 to-blue-600 shadow-xl shadow-blue-500/10">
            <div className="bg-[#002b8c] dark:bg-slate-900 text-white rounded-[22px] p-6 sm:p-10 relative overflow-hidden">
              
              {/* Sfumatura di luce d'atmosfera sullo sfondo */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />

              {/* Header interno della card */}
              <div className="relative z-10 text-center mb-6">
                <span className="inline-block text-xs uppercase tracking-widest font-bold text-sky-300 bg-white/10 dark:bg-slate-800/80 px-3.5 py-1 rounded-full border border-white/10 mb-3">
                  Tariffa Oraria Trasparente
                </span>
                
                <div className="flex items-center justify-center gap-2">
                  <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
                    15€ <span className="text-xl sm:text-2xl font-bold text-sky-200 font-sans tracking-normal">/ ora</span>
                  </h2>
                </div>
              </div>

              {/* Selettore / Box Modalità (A Domicilio vs Online) */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto">
                
                {/* Modalità 1: Domicilio */}
                <div className="bg-white/10 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center gap-3.5 text-left">
                  <div className="w-11 h-11 rounded-xl bg-sky-400/20 border border-sky-300/30 flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5 text-sky-300" />
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-white">A Domicilio</span>
                    <span className="block text-xs text-sky-200">Cisterna di Latina e dintorni</span>
                  </div>
                </div>

                {/* Modalità 2: Online */}
                <div className="bg-white/10 dark:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center gap-3.5 text-left">
                  <div className="w-11 h-11 rounded-xl bg-sky-400/20 border border-sky-300/30 flex items-center justify-center shrink-0">
                    <div className="relative flex items-center justify-center">
                      <Laptop className="w-5 h-5 text-sky-300" />
                      <Globe className="w-2.5 h-2.5 text-sky-200 absolute -top-0.5 -right-0.5" />
                    </div>
                  </div>
                  <div>
                    <span className="block font-bold text-sm text-white">Online</span>
                    <span className="block text-xs text-sky-200">Google Meet / Discord</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* PROMINENT GREEN WHATSAPP BUTTON WITH FREE TRIAL CALLOUT */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          
          {/* Badge Prova Gratuita */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-xs font-bold shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Prima Lezione di Prova Gratuita (30 min online)</span>
          </div>

          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-lg sm:text-xl uppercase tracking-wide px-8 py-4 sm:px-10 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 border-2 border-emerald-300/40"
            id="hero-main-whatsapp-btn"
          >
            <MessageCircle className="w-7 h-7 fill-current shrink-0" />
            <span>Contatta Matteo su WhatsApp</span>
          </a>
          
          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            ⚡ Risposta rapida • Fissa la tua prima lezione senza impegno
          </span>
        </div>

        {/* Key Features Bullet Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs p-3.5 rounded-xl border border-blue-100 dark:border-slate-800 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Ex Studente Polo Tecnico
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs p-3.5 rounded-xl border border-blue-100 dark:border-slate-800 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Preparazione Verifiche e Laboratori
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xs p-3.5 rounded-xl border border-blue-100 dark:border-slate-800 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Programmi Pratici & Codice Reale
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
