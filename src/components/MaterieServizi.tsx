import React, { useState } from 'react';
import { Code2, Network, Cpu, Check, BookOpen, Layers, MessageCircle, Sparkles, Award } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

interface SubjectCard {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  badge: string;
  tags: string[];
  description: string;
  topics: string[];
  waMessage: string;
}

export const MaterieServizi: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects: SubjectCard[] = [
    {
      title: "Informatica",
      subtitle: "Sviluppo Software e Logica",
      icon: Code2,
      badge: "Linguaggi & Algoritmi",
      tags: ["C / C++", "Java", "Python", "SQL", "OOP"],
      description: "Comprensione profonda della logica di programmazione, strutture dati e risoluzione guidata dei progetti ed esercizi pratici di laboratorio.",
      topics: [
        "Linguaggi: C, C++, Java, Python, Web (HTML/CSS/JS/PHP)",
        "Programmazione Orientata agli Oggetti (OOP: Classi, Ereditarietà)",
        "Database e Query SQL (Modello ER, Relazioni, JOIN, DDL/DML)",
        "Algoritmi, vettori, matrici, liste, pile e code",
        "Simulazioni ed esercitazioni per le verifiche di laboratorio"
      ],
      waMessage: "Ciao Matteo! Vorrei fare ripetizioni di Informatica. Quando saresti disponibile?"
    },
    {
      title: "Sistemi e Reti",
      subtitle: "Architetture, Protocolli e IP",
      icon: Network,
      badge: "Infrastrutture & Reti",
      tags: ["Subnetting", "Packet Tracer", "IPv4/IPv6", "VLAN", "TCP/IP"],
      description: "Padronanza completa del calcolo delle sottoreti (Subnetting), modelli architetturali e configurazioni pratiche su Cisco Packet Tracer.",
      topics: [
        "Indirizzamento IP (IPv4, Subnetting, VLSM, CIDR, IPv6)",
        "Modello ISO/OSI e Stack protocollare TCP/IP",
        "Protocolli di rete: HTTP, DNS, DHCP, FTP, TCP/UDP, ARP",
        "Configurazione apparati su Cisco Packet Tracer (Router, Switch, VLAN)",
        "Architetture degli elaboratori, bus e gestione memorie"
      ],
      waMessage: "Ciao Matteo! Vorrei fare ripetizioni di Sistemi e Reti. Possiamo accordarci?"
    },
    {
      title: "TPSIT",
      subtitle: "Sistemi Operativi, Thread e Web",
      icon: Cpu,
      badge: "Tecnologie & Processi",
      tags: ["Thread", "Socket", "Semafori", "Client/Server", "Web"],
      description: "Spiegazione chiara e visuale dei concetti teorici e pratici legati ai sistemi operativi, programmazione concorrente e sviluppo client-server.",
      topics: [
        "Gestione Processi e Thread (Sincronizzazione, Semafori, Mutex)",
        "Programmazione di Rete con Socket (TCP/UDP Client-Server in C/Java)",
        "Sistemi Operativi: Scheduling CPU, Gestione Memoria e Virtuale",
        "Sviluppo Web e protocolli di comunicazione asincroni",
        "I/O, File System, Crittografia e sicurezza dei dati"
      ],
      waMessage: "Ciao Matteo! Vorrei fare ripetizioni di TPSIT. Come possiamo organizzarci?"
    }
  ];

  return (
    <section id="servizi" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>Materie di Indirizzo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#002066] dark:text-slate-100 uppercase tracking-tight font-display">
            MATERIE E SUPPORTO
          </h2>
          <div className="w-20 h-1.5 bg-[#0033aa] dark:bg-sky-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3 Subject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((sub) => {
            const IconComponent = sub.icon;
            const isSelected = selectedSubject === sub.title;

            return (
              <div
                key={sub.title}
                onClick={() => setSelectedSubject(isSelected ? null : sub.title)}
                className={`bg-white dark:bg-slate-900 rounded-3xl border-2 transition-all duration-200 p-6 sm:p-8 flex flex-col justify-between cursor-pointer relative shadow-sm hover:shadow-xl ${
                  isSelected
                    ? 'border-[#0033aa] dark:border-sky-400 ring-4 ring-blue-100 dark:ring-slate-800 scale-[1.02]'
                    : 'border-blue-200/90 dark:border-slate-800 hover:border-[#0033aa] dark:hover:border-sky-400'
                }`}
              >
                <div>
                  {/* Top Header Card */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 flex items-center justify-center text-[#0033aa] dark:text-sky-400 shrink-0 shadow-2xs">
                      <IconComponent className="w-7 h-7 text-[#0033aa] dark:text-sky-400" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider text-blue-700 dark:text-sky-300 bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 px-3 py-1 rounded-full uppercase">
                      {sub.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#002066] dark:text-slate-100 uppercase tracking-wide mb-1">
                    {sub.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-sky-400 mb-4">
                    {sub.subtitle}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {sub.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {sub.description}
                  </p>

                  {/* Topics Covered Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
                      <span>Cosa Impariamo Insieme:</span>
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

                {/* Bottom Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={`https://wa.me/393452590069?text=${encodeURIComponent(sub.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-50 dark:bg-slate-800 hover:bg-[#0033aa] dark:hover:bg-sky-500 text-[#0033aa] dark:text-sky-300 hover:text-white dark:hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Richiedi aiuto in {sub.title}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Required Caption Box Below Cards */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl border-2 border-blue-200/80 dark:border-slate-800 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-md relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Target Scuole Superiori</span>
          </div>

          <p className="text-base sm:text-xl font-bold text-[#002066] dark:text-slate-100 leading-relaxed mb-2 font-display">
            Preparazione mirata per Verifiche di Laboratorio, Recupero Debiti Estivi e Seconda Prova di Maturità ITI
          </p>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Copriamo qualsiasi linguaggio di programmazione, libreria o argomento richiesto dal programma scolastico del tuo professore.
          </p>
        </div>

      </div>
    </section>
  );
};
