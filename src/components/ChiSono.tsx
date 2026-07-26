import React from 'react';
import { User, GraduationCap, Calendar, Target, ShieldCheck } from 'lucide-react';

export const ChiSono: React.FC = () => {
  return (
    <section id="chi-sono" className="py-16 sm:py-20 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>Presentazione</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002066] dark:text-slate-100 uppercase tracking-tight font-display">
            CHI SONO
          </h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-sky-400 mx-auto mt-2 rounded-full" />
        </div>

        {/* Styled Card with Subtle Tech Border */}
        <div className="relative rounded-3xl bg-slate-50 dark:bg-slate-900 border-2 border-blue-100 dark:border-slate-800 p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all">
          
          {/* Subtle Corner Tech Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#0033aa] dark:border-sky-400 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#0033aa] dark:border-sky-400 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#0033aa] dark:border-sky-400 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#0033aa] dark:border-sky-400 rounded-br-2xl" />

          <div className="flex flex-col md:flex-row gap-8 items-center">
            
            {/* Left Profile Avatar / Badge Graphic */}
            <div className="shrink-0 flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-[#0033aa] to-blue-900 dark:from-blue-700 dark:to-blue-950 text-white flex flex-col items-center justify-center p-4 shadow-md border-2 border-sky-300/50 relative">
                <GraduationCap className="w-12 h-12 text-sky-300 mb-1" />
                <span className="font-display font-bold text-sm tracking-wider uppercase">Polo Tecnico</span>
                <span className="text-[10px] text-sky-200 font-semibold uppercase">Diplomato 2022/23</span>
                <div className="absolute -bottom-3 bg-[#25D366] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Tutor Attivo</span>
                </div>
              </div>
            </div>

            {/* Right Text Block */}
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-slate-900 dark:text-slate-100 text-lg sm:text-xl">
                "Ciao, sono <strong className="text-[#0033aa] dark:text-sky-400 font-bold">Matteo Mazzucco</strong>. Sono un ex studente del Polo Tecnico, diplomato nell'anno scolastico 2022-2023. Dal 2023 do ripetizioni di informatica."
              </p>
              <p>
                "Ho deciso di concentrarmi sui ragazzi della mia stessa scuola perché so per esperienza che a volte i programmi scolastici corrono troppo e alcuni concetti fondamentali vengono tralasciati. Il mio obiettivo è aiutarti a riempire quei vuoti e superare le verifiche senza stress."
              </p>
            </div>

          </div>

          {/* Quick Info Grid Below Card */}
          <div className="mt-8 pt-6 border-t border-blue-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-blue-100/80 dark:border-slate-700 shadow-2xs">
              <div className="flex items-center justify-center gap-2 text-[#0033aa] dark:text-sky-300 font-bold text-sm">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>Ex Studente Polo Tecnico</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Anno Scolastico 2022-2023</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-blue-100/80 dark:border-slate-700 shadow-2xs">
              <div className="flex items-center justify-center gap-2 text-[#0033aa] dark:text-sky-300 font-bold text-sm">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>Esperienza dal 2023</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Oltre 3 anni di lezioni private</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-3.5 rounded-xl border border-blue-100/80 dark:border-slate-700 shadow-2xs">
              <div className="flex items-center justify-center gap-2 text-[#0033aa] dark:text-sky-300 font-bold text-sm">
                <Target className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                <span>Metodo Diretto</span>
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Zero stress per le verifiche</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

