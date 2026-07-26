import React, { useState } from 'react';
import { Code2, Network, Cpu, Check, BookOpen, Layers } from 'lucide-react';

interface SubjectCard {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  topics: string[];
  badge: string;
}

export const MaterieServizi: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects: SubjectCard[] = [
    {
      title: "Informatica",
      subtitle: "Sviluppo software e logica",
      icon: Code2,
      badge: "Linguaggi e Algoritmi",
      description: "Comprensione profonda della logica di programmazione, strutture dati e risoluzione degli esercizi pratici di laboratorio.",
      topics: [
        "Linguaggi: C, C++, Java, Python, HTML/CSS/JavaScript",
        "Programmazione Orientata agli Oggetti (OOP)",
        "Database e Query SQL (Relazioni, JOIN, ER)",
        "Algoritmi, vettori, matrici e strutture dati",
        "Esercitazioni per verifiche di laboratorio"
      ]
    },
    {
      title: "Sistemi e Reti",
      subtitle: "Architetture, protocolli e IP",
      icon: Network,
      badge: "Infrastrutture e Reti",
      description: "Padronanza del calcolo delle sottoreti, modelli architetturali e protocolli di comunicazione indispensabili per le verifiche scritte e orali.",
      topics: [
        "Indirizzamento IP (IPv4, Subnetting, VLSM, CIDR)",
        "Modello ISO/OSI e Stack TCP/IP",
        "Protocolli: HTTP, DNS, DHCP, FTP, TCP/UDP",
        "Configurazione di apparati di rete e Packet Tracer",
        "Architetture degli elaboratori e memorie"
      ]
    },
    {
      title: "TPSIT",
      subtitle: "Sistemi operativi, processi e web",
      icon: Cpu,
      badge: "Tecnologie e Processi",
      description: "Spiegazione chiara dei concetti teorici e pratici legati ai sistemi operativi, gestione della concorrenza e sviluppo di applicazioni web.",
      topics: [
        "Gestione Processi e Thread (Sincronizzazione, Semafori)",
        "Sistemi Operativi e Gestione della Memoria",
        "Programmazione di Rete con Socket (Client/Server)",
        "Progettazione Web (HTML5, CSS3, JavaScript, Client-side)",
        "I/O, File System e Scheduling della CPU"
      ]
    }
  ];

  return (
    <section id="servizi" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>Materie Scolastiche</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#002066] dark:text-slate-100 uppercase tracking-tight font-display">
            MATERIE E SUPPORTO
          </h2>
          <div className="w-20 h-1.5 bg-[#0033aa] dark:bg-sky-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3 Clean White Cards with Blue Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((sub) => {
            const IconComponent = sub.icon;
            const isSelected = selectedSubject === sub.title;

            return (
              <div
                key={sub.title}
                onClick={() => setSelectedSubject(isSelected ? null : sub.title)}
                className={`bg-white dark:bg-slate-900 rounded-2xl border-2 transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between cursor-pointer relative shadow-sm hover:shadow-xl ${
                  isSelected
                    ? 'border-[#0033aa] dark:border-sky-400 ring-4 ring-blue-100 dark:ring-slate-800 scale-[1.02]'
                    : 'border-blue-200/90 dark:border-slate-800 hover:border-[#0033aa] dark:hover:border-sky-400'
                }`}
              >
                <div>
                  {/* Top Header Card */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 flex items-center justify-center text-[#0033aa] dark:text-sky-400 shrink-0 shadow-2xs">
                      <IconComponent className="w-7 h-7 text-[#0033aa] dark:text-sky-400" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider text-blue-700 dark:text-sky-300 bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 px-3 py-1 rounded-full uppercase">
                      {sub.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-2xl text-[#002066] dark:text-slate-100 uppercase tracking-wide mb-1">
                    {sub.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-sky-400 mb-4">
                    ({sub.subtitle})
                  </p>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {sub.description}
                  </p>

                  {/* Topics Covered Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                      <span>Argomenti Trattati:</span>
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {sub.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Badge Note */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                  <span className="text-xs font-bold text-[#0033aa] dark:text-sky-400 hover:underline inline-flex items-center gap-1">
                    <span>Supporto teorico e di laboratorio</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Caption Box Below Cards */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl border-2 border-blue-200 dark:border-slate-800 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-md">
          <p className="text-base sm:text-lg font-bold text-[#002066] dark:text-slate-100 leading-relaxed">
            "Esclusivamente per studenti delle scuole superiori. Copriamo qualsiasi argomento e linguaggio di programmazione richiesto dal tuo programma."
          </p>
        </div>

      </div>
    </section>
  );
};

