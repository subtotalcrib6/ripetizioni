import React from 'react';
import { Home, Laptop, Globe, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-circuit-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/90 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 font-semibold text-xs sm:text-sm tracking-wide uppercase mb-6 shadow-xs transition-colors">
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-sky-400" />
          <span>Informatica • Sistemi e Reti • TPSIT</span>
        </div>

        {/* Subheader / Target Audience Note */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002066] dark:text-slate-100 tracking-tight uppercase mb-8 font-display transition-colors">
          Ripetizioni Specializzate per Studenti delle Scuole Superiori
        </h1>

        {/* KEY VISUAL ELEMENT: Flyer Geometric Dark Blue Block with Tech Chamfer Corners */}
        <div className="my-8 max-w-3xl mx-auto transform transition-all hover:scale-[1.01]">
          <div className="relative p-1 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 tech-box-chamfer-lg shadow-2xl">
            <div className="bg-[#0033aa] text-white px-6 py-10 sm:py-14 sm:px-12 tech-box-chamfer-lg relative overflow-hidden flex flex-col items-center justify-center">
              
              {/* Subtle tech grid background inside hero box */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Main Headline Inside Flyer Block */}
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-white drop-shadow-md text-center leading-none">
                RIPETIZIONI A 15€/ORA
              </h2>

              {/* Decorative Tech Cyan Line */}
              <div className="w-24 sm:w-36 h-1 bg-[#38bdf8] my-6 rounded-full shadow-sm" />

              {/* Location & Modality Info with House & Laptop/Globe icons separated by a thin line */}
              <div className="w-full max-w-xl bg-blue-950/40 backdrop-blur-xs rounded-2xl border border-sky-400/30 p-4 sm:p-6 mt-2">
                <p className="text-sky-200 font-display font-semibold text-lg sm:text-2xl uppercase tracking-widest mb-4">
                  A CASA TUA O ONLINE
                </p>

                <div className="flex items-center justify-center gap-4 sm:gap-8 text-white">
                  {/* House / At Home Option */}
                  <div className="flex items-center gap-2.5 sm:gap-3 text-left">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 border border-sky-300/40 flex items-center justify-center shrink-0">
                      <Home className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="block font-bold text-sm sm:text-base text-white">A domicilio</span>
                      <span className="block text-xs sm:text-sm text-sky-200">Zona Cisterna</span>
                    </div>
                  </div>

                  {/* Thin Divider Line */}
                  <div className="w-px h-10 bg-sky-400/40 shrink-0" />

                  {/* Laptop + Globe / Online Option */}
                  <div className="flex items-center gap-2.5 sm:gap-3 text-left">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 border border-sky-300/40 flex items-center justify-center shrink-0">
                      <div className="relative flex items-center justify-center">
                        <Laptop className="w-5 h-5 sm:w-6 sm:h-6 text-sky-300 stroke-[1.75]" />
                        <Globe className="w-3 h-3 text-sky-200 absolute -top-1 -right-1" />
                      </div>
                    </div>
                    <div>
                      <span className="block font-bold text-sm sm:text-base text-white">Online</span>
                      <span className="block text-xs sm:text-sm text-sky-200">Discord / Google Meet</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* PROMINENT GREEN WHATSAPP BUTTON BELOW THE BLUE BLOCK */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black text-lg sm:text-xl uppercase tracking-wide px-8 py-4 sm:px-10 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 animate-pulse-whatsapp border-2 border-emerald-300/40"
            id="hero-main-whatsapp-btn"
          >
            <MessageCircle className="w-7 h-7 fill-current shrink-0" />
            <span>Contatta Matteo su WhatsApp</span>
          </a>
          <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            Risposta rapida entro poche ore • Riservato a studenti delle scuole superiori
          </span>
        </div>

        {/* Key Features Bullet Row */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xs p-3.5 rounded-xl border border-blue-100 dark:border-slate-800 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Ex Studente Polo Tecnico
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xs p-3.5 rounded-xl border border-blue-100 dark:border-slate-800 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Preparazione Verifiche e Orali
            </span>
          </div>
          <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/90 backdrop-blur-xs p-3.5 rounded-xl border border-blue-100 dark:border-slate-800 shadow-2xs">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-sky-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
              Programmi personalizzati
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
