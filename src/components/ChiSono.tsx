import React from 'react';
import { User, GraduationCap, Calendar, Target, ShieldCheck, Code2, Network, Cpu } from 'lucide-react';

// Se hai una tua foto inseriscila qui (es. import fotoMatteo from '../assets/matteo.jpg';)
// Altrimenti lasciamo il badge grafico professionale!

export const ChiSono: React.FC = () => {
  return (
    <section id="chi-sono" className="py-16 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>Chi Ti Guiderà</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002066] dark:text-slate-100 uppercase tracking-tight font-display">
            CHI SONO
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-2 rounded-full" />
        </div>

        {/* Styled Card with Subtle Tech Border */}
        <div className="relative rounded-3xl bg-slate-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 p-6 sm:p-10 shadow-xl transition-all">
          
          {/* Subtle Corner Tech Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#0033aa] dark:border-sky-400 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#0033aa] dark:border-sky-400 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#0033aa] dark:border-sky-400 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0033aa] dark:border-sky-400 rounded-br-2xl" />

          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            {/* Left Profile Avatar / Badge Graphic */}
            <div className="shrink-0 flex flex-col items-center text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-[#0033aa] via-blue-800 to-slate-900 dark:from-blue-700 dark:to-slate-950 text-white flex flex-col items-center justify-center p-4 shadow-lg border-2 border-sky-300/40 relative">
                <GraduationCap className="w-14 h-14 text-sky-300 mb-1 drop-shadow" />
                <span className="font-display font-bold text-sm tracking-wider uppercase text-white">Polo Tecnico</span>
                <span className="text-[11px] text-sky-200 font-semibold uppercase">Diplomato 2022/23</span>
                
                {/* Badge Tutor Attivo */}
                <div className="absolute -bottom-3 bg-emerald-500 text-white text-[11px] font-bold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Tutor Attivo</span>
                </div>
              </div>
            </div>

            {/* Right Text Block */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <h3 className="font-display font-bold text-slate-900 dark:text-slate-100 text-xl sm:text-2xl">
                Ciao, sono <span className="text-[#0033aa] dark:text-sky-400">Matteo Mazzucco</span>
              </h3>
              
              <p>
                Ex studente del <strong>Polo Tecnico</strong> (diplomato 2022/23), dal 2023 aiuto studenti delle superiori a superare le difficoltà in <strong>Informatica, TPSIT e Sistemi & Reti</strong>.
              </p>
              
              <p>
                Avendo frequentato la stessa scuola, <strong>conosco esattamente il ritmo dei programmi, cosa chiedono i docenti nei compiti in classe e le insidie delle prove di laboratorio</strong>. Spesso a scuola si corre troppo e i concetti fondamentali restano poco chiari: il mio obiettivo è darti un metodo pratico, spiegarti il codice riga per riga e farti arrivare alle verifiche con la massima sicurezza.
              </p>

              {/* Tag materie chiave */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-100/70 dark:bg-blue-950/60 text-blue-900 dark:text-sky-300 text-xs font-semibold">
                  <Code2 className="w-3.5 h-3.5" /> Informatica
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-100/70 dark:bg-blue-950/60 text-blue-900 dark:text-sky-300 text-xs font-semibold">
                  <Cpu className="w-3.5 h-3.5" /> TPSIT
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-100/70 dark:bg-blue-950/60 text-blue-900 dark:text-sky-300 text-xs font-semibold">
                  <Network className="w-3.5 h-3.5" /> Sistemi e Reti
                </span>
              </div>
            </div>

          </div>

          {/* Quick Info Grid Below Card */}
          <div className="mt-8 pt-6 border-t border-blue-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-slate-800/90 p-4 rounded-xl border border-blue-100/80 dark:border-slate-700/80 shadow-2xs hover:border-blue-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex items-center justify-center gap-2 text-[#0033aa] dark:text-sky-300 font-bold text-sm mb-0.5">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>Focus Polo Tecnico</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Conosco programmi e verifiche</span>
            </div>

            <div className="bg-white dark:bg-slate-800/90 p-4 rounded-xl border border-blue-100/80 dark:border-slate-700/80 shadow-2xs hover:border-blue-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex items-center justify-center gap-2 text-[#0033aa] dark:text-sky-300 font-bold text-sm mb-0.5">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>Esperienza dal 2023</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Decine di ore di lezioni individuali</span>
            </div>

            <div className="bg-white dark:bg-slate-800/90 p-4 rounded-xl border border-blue-100/80 dark:border-slate-700/80 shadow-2xs hover:border-blue-300 dark:hover:border-slate-600 transition-colors">
              <div className="flex items-center justify-center gap-2 text-[#0033aa] dark:text-sky-300 font-bold text-sm mb-0.5">
                <Target className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>Pratica & Laboratorio</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Codice reale e simulazioni d'esame</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
