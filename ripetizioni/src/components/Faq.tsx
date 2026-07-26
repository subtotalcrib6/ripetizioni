import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from './Navbar';

interface FAQItem {
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const faqs: FAQItem[] = [
    {
      question: "Quando sei disponibile?",
      answer: "Sono disponibile dal lunedì al venerdì dalle ore 17:00 in poi fino a sera. Il sabato e la domenica sono disponibile anche durante la giornata (con tariffa weekend)."
    },
    {
      question: "Cosa succede se devo disdire?",
      answer: "Basta chiamarmi o mandarmi un messaggio su WhatsApp e rimandiamo la lezione senza problemi."
    },
    {
      question: "Posso fare una lezione di prova?",
      answer: "Sì, è possibile fare una lezione di prova gratuita di 30 minuti, esclusivamente online."
    },
    {
      question: "Fai anche lezioni di gruppo?",
      answer: "Sì, se l'argomento è lo stesso la tariffa scende a 10€ a persona. Altrimenti rimane la tariffa standard di 15€/ora a persona."
    },
    {
      question: "Come funziona il pagamento?",
      answer: "Il pagamento è anticipato. In presenza si salda all'arrivo, online ci troviamo prima e si effettua il saldo prima di iniziare la spiegazione."
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100/80 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>Domande Frequenti</span>
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
                className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-blue-200 dark:border-slate-800 overflow-hidden transition-all duration-200 shadow-2xs hover:border-[#0033aa] dark:hover:border-sky-400"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-lg sm:text-xl text-[#002066] dark:text-slate-100 hover:text-[#0033aa] dark:hover:text-sky-400 transition-colors focus:outline-hidden focus:bg-blue-50/50 dark:focus:bg-slate-800/50"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700 text-[#0033aa] dark:text-sky-400 text-xs font-black flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{faq.question}</span>
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
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4 bg-slate-50/50 dark:bg-slate-950/50 animate-in fade-in-50 duration-200">
                    <p className="pl-10 font-medium text-slate-800 dark:text-slate-200">
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
          <p className="text-slate-700 dark:text-slate-300 font-semibold mb-4">
            Hai un'altra domanda non presente nella lista?
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
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

