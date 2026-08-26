import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

interface FAQItem {
  question: string;
  answer: string;
  highlight?: boolean;
}

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "È possibile fare una lezione di prova?",
      answer: "Sì, offro una prova iniziale gratuita di 30 minuti online. Serve per conoscerci, visionare insieme gli argomenti in cui trovi difficoltà (programmazione, subnetting, teoria) e stabilire il piano di studio migliore per le tue verifiche.",
      highlight: true
    },
    {
      question: "Come si svolgono le lezioni online?",
      answer: "Le lezioni online si svolgono tramite Google Meet o Discord con condivisione schermo ad alta qualità. Lavoriamo insieme in tempo reale su VS Code (Live Share), simulatori di rete come Cisco Packet Tracer e lavagna digitale. A fine lezione ti lascio sempre gli appunti e il codice commentato riga per riga."
    },
    {
      question: "Quando sei disponibile per le lezioni?",
      answer: "Dal lunedì al venerdì sono disponibile dalle 17:00 fino a sera (perfetto per il doposcuola). Il sabato e la domenica sono disponibile anche durante la giornata per sessioni intensive pre-verifica."
    },
    {
      question: "Fai anche lezioni di gruppo o per compagni di classe?",
      answer: "Certamente! Se sei con un compagno di classe e dovete preparare la stessa verifica o progetto di laboratorio, la tariffa scende a 10€/ora a persona (invece di 15€/ora per la lezione individuale)."
    },
    {
      question: "Mi aiuti anche con i progetti di laboratorio e il recupero del debito?",
      answer: "Assolutamente sì. Non mi limito a spiegare la teoria: scriviamo codice insieme, simuliamo le verifiche pratiche e risolviamo i bug. Preparo anche programmi intensivi estivi per il recupero del debito e per la Seconda Prova dell'Esame di Stato."
    },
    {
      question: "Cosa succede se devo spostare o disdire una lezione?",
      answer: "Nessun problema: basta avvisarmi con un messaggio su WhatsApp (preferibilmente con un po' di preavviso) e riprogrammiamo la lezione nel primo slot libero."
    },
    {
      question: "Quali sono i metodi di pagamento accettati?",
      answer: "Massima comodità e trasparenza: per le lezioni online puoi pagare tramite Satispay, PayPal o Bonifico istantaneo prima della lezione. In presenza puoi saldare direttamente di persona."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>Dubbi e Risposte</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#002066] dark:text-slate-100 uppercase tracking-tight font-display">
            DOMANDE FREQUENTI (FAQ)
          </h2>
          <div className="w-20 h-1.5 bg-[#0033aa] dark:bg-sky-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* Interactive Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white dark:bg-slate-900 rounded-2xl border-2 transition-all duration-200 shadow-xs ${
                  faq.highlight
                    ? 'border-blue-400 dark:border-sky-500 ring-2 ring-blue-400/20'
                    : 'border-blue-200/80 dark:border-slate-800 hover:border-[#0033aa] dark:hover:border-sky-400'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-[#002066] dark:text-slate-100 hover:text-[#0033aa] dark:hover:text-sky-400 transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-[#0033aa] dark:text-sky-400 text-xs font-black flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="flex items-center gap-2">
                      {faq.question}
                      {faq.highlight && (
                        <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[11px] font-bold px-2 py-0.5 rounded-md">
                          <Sparkles className="w-3 h-3" /> Prova Gratuita
                        </span>
                      )}
                    </span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-[#0033aa] dark:text-sky-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#0033aa] dark:bg-sky-400 text-white dark:text-slate-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 bg-slate-50/50 dark:bg-slate-950/50">
                    <p className="sm:pl-10 font-normal text-slate-700 dark:text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Contact Helper */}
        <div className="mt-12 text-center bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-slate-800 shadow-sm">
          <p className="text-slate-700 dark:text-slate-300 font-semibold mb-4 text-base sm:text-lg">
            Hai un'altra domanda o vuoi fissare la lezione di prova?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
            id="faq-bottom-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Scrivimi direttamente su WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
