import React, { useState } from 'react';
import { Euro, Calendar, MapPin, Calculator, MessageCircle, Clock, CheckCircle2, Gift, Users } from 'lucide-react';

export const LogisticaTariffe: React.FC = () => {
  // Interactive Rate Estimator State
  const [dayType, setDayType] = useState<'settimana' | 'weekend'>('settimana');
  const [locationType, setLocationType] = useState<'online' | 'cisterna' | 'fuori'>('online');
  const [hours, setHours] = useState<number>(1);
  const [isTrial, setIsTrial] = useState<boolean>(false);
  const [subject, setSubject] = useState<string>('Informatica');

  // Calculate estimated price
  const calculateRate = () => {
    if (isTrial) return 0;
    if (dayType === 'weekend') return 20;
    if (locationType === 'fuori') return 20;
    return 15; // standard
  };

  const ratePerHour = calculateRate();
  const totalPrice = isTrial ? 0 : ratePerHour * hours;

  // Custom WhatsApp message generator
  const generateCustomWhatsApp = () => {
    const phoneNumber = "393452590069";

    if (isTrial) {
      const trialText = encodeURIComponent(
        `Ciao Matteo! Vorrei prenotare la lezione di prova gratuita di 30 minuti online per ${subject}. Quando saresti disponibile?`
      );
      return `https://wa.me/${phoneNumber}?text=${trialText}`;
    }

    const dayText = dayType === 'settimana' ? 'in settimana' : 'nel weekend';
    const locText =
      locationType === 'online'
        ? 'online'
        : locationType === 'cisterna'
        ? 'a domicilio a Cisterna'
        : 'a domicilio fuori Cisterna';

    const text = encodeURIComponent(
      `Ciao Matteo! Vorrei prenotare ${hours} ora/e di ripetizioni per ${subject} (${dayText}, ${locText}). Possiamo accordarci per giorno e orario?`
    );
    return `https://wa.me/${phoneNumber}?text=${text}`;
  };

  return (
    <section id="tariffe" className="py-16 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Euro className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>Trasparenza Totale</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#002066] dark:text-slate-100 uppercase tracking-tight font-display">
            LOGISTICA E TARIFFE
          </h2>
          <div className="w-20 h-1.5 bg-[#0033aa] dark:bg-sky-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3 Rate Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Card 1: In Settimana */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl border-2 border-blue-200/80 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#0033aa] dark:hover:border-sky-400 transition-all shadow-sm hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0033aa] dark:bg-blue-600 text-white text-[11px] font-bold px-3.5 py-1 rounded-bl-xl uppercase tracking-wider">
              Più Richiesto
            </div>

            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-[#0033aa] dark:text-sky-400 mb-4">
                <Calendar className="w-6 h-6" />
              </div>

              <h3 className="font-display font-bold text-2xl text-[#002066] dark:text-slate-100 uppercase mb-1">
                In Settimana
              </h3>
              
              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display font-black text-4xl text-[#0033aa] dark:text-sky-400">15€</span>
                <span className="text-slate-600 dark:text-slate-400 font-semibold text-base">/ ora</span>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Tariffa standard per lezioni online (Google Meet / Discord) o a domicilio a Cisterna dal lunedì al venerdì.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-blue-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Lun - Ven (dalle 17:00 in poi)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Online o A Domicilio (Cisterna)</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Weekend */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl border-2 border-blue-200/80 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#0033aa] dark:hover:border-sky-400 transition-all shadow-sm hover:shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-[#0033aa] dark:text-sky-400 mb-4">
                <Clock className="w-6 h-6" />
              </div>

              <h3 className="font-display font-bold text-2xl text-[#002066] dark:text-slate-100 uppercase mb-1">
                Weekend
              </h3>

              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display font-black text-4xl text-[#0033aa] dark:text-sky-400">20€</span>
                <span className="text-slate-600 dark:text-slate-400 font-semibold text-base">/ ora</span>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Disponibile sabato e domenica per recuperi intensivi, progetti di laboratorio o urgenze prima della verifica.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-blue-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sabato e Domenica orario flessibile</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Ideale per full-immersion pre-verifica</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Fuori Cisterna */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl border-2 border-blue-200/80 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#0033aa] dark:hover:border-sky-400 transition-all shadow-sm hover:shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-[#0033aa] dark:text-sky-400 mb-4">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="font-display font-bold text-2xl text-[#002066] dark:text-slate-100 uppercase mb-1">
                Fuori Cisterna
              </h3>

              <div className="flex items-baseline gap-1 my-3">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#0033aa] dark:text-sky-400">20€-25€</span>
                <span className="text-slate-600 dark:text-slate-400 font-semibold text-base">/ ora</span>
              </div>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                Per lezioni a domicilio fuori dalla zona centrale di Cisterna (es. Le Castella e comuni vicini).
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-blue-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zone limitrofe (es. Le Castella)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Calcolato in base alla distanza</span>
              </li>
            </ul>
          </div>

        </div>

        {/* PROMO BOX: LEZIONI IN COPPIA */}
        <div className="mb-12 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0033aa] text-white flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-slate-900 dark:text-slate-100 text-base">
                Vuoi fare lezione con un compagno di classe?
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Se studiate lo stesso argomento, la tariffa scende a soli <strong className="text-blue-700 dark:text-sky-300">10€/ora a testa</strong>.
              </p>
            </div>
          </div>
          <span className="text-xs font-bold uppercase tracking-wider bg-white dark:bg-slate-900 border border-blue-200 dark:border-slate-700 px-3 py-1.5 rounded-full text-[#0033aa] dark:text-sky-300 shrink-0">
            Sconto Coppia
          </span>
        </div>

        {/* INTERACTIVE ESTIMATOR & PRE-BUILT WHATSAPP MESSAGE */}
        <div className="bg-gradient-to-br from-[#0033aa] to-blue-950 dark:from-slate-900 dark:to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden border border-blue-800/50 dark:border-slate-800">
          
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-sky-400/20 border border-sky-300/30">
              <Calculator className="w-6 h-6 text-sky-300" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight">
                Calcola la tua Lezione e Prenota
              </h3>
              <p className="text-xs sm:text-sm text-sky-200">
                Seleziona le opzioni: genereremo automaticamente il messaggio WhatsApp già pronto da inviare
              </p>
            </div>
          </div>

          {/* Toggle Lezione di Prova Gratuita */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => setIsTrial(!isTrial)}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                isTrial
                  ? 'bg-emerald-500 border-emerald-300 text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/15 border-white/20 text-sky-100'
              }`}
            >
              <Gift className="w-4 h-4" />
              <span>{isTrial ? '✓ Prova Gratuita Attiva (30 min Online - 0€)' : 'Voglio la Prima Lezione di Prova Gratuita (30 min Online)'}</span>
            </button>
          </div>

          {!isTrial && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              
              {/* Subject Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-200 mb-2">
                  Materia
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-blue-900/80 dark:bg-slate-800 border border-sky-300/40 dark:border-slate-700 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-300"
                >
                  <option value="Informatica (C/C++, Java, OOP, SQL)">Informatica (C/C++, Java, OOP)</option>
                  <option value="Sistemi e Reti (Subnetting, Packet Tracer)">Sistemi e Reti (Subnetting, Packet Tracer)</option>
                  <option value="TPSIT (Socket, Thread, Client-Server)">TPSIT (Socket, Thread)</option>
                </select>
              </div>

              {/* Day Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-200 mb-2">
                  Giorno
                </label>
                <select
                  value={dayType}
                  onChange={(e) => setDayType(e.target.value as 'settimana' | 'weekend')}
                  className="w-full bg-blue-900/80 dark:bg-slate-800 border border-sky-300/40 dark:border-slate-700 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-300"
                >
                  <option value="settimana">In settimana (Lun - Ven)</option>
                  <option value="weekend">Weekend (Sabato / Domenica)</option>
                </select>
              </div>

              {/* Location Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-200 mb-2">
                  Modalità / Luogo
                </label>
                <select
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value as 'online' | 'cisterna' | 'fuori')}
                  className="w-full bg-blue-900/80 dark:bg-slate-800 border border-sky-300/40 dark:border-slate-700 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-300"
                >
                  <option value="online">Online (Google Meet / Discord)</option>
                  <option value="cisterna">A domicilio (Cisterna)</option>
                  <option value="fuori">A domicilio (Fuori Cisterna)</option>
                </select>
              </div>

              {/* Hours Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-sky-200 mb-2">
                  Ore Previste
                </label>
                <select
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full bg-blue-900/80 dark:bg-slate-800 border border-sky-300/40 dark:border-slate-700 rounded-xl py-2.5 px-3 text-white text-sm focus:outline-hidden focus:ring-2 focus:ring-sky-300"
                >
                  <option value={1}>1 Ora</option>
                  <option value={1.5}>1 Ora e mezza</option>
                  <option value={2}>2 Ore</option>
                  <option value={3}>3 Ore (Intensivo pre-verifica)</option>
                </select>
              </div>

            </div>
          )}

          {/* Result Banner */}
          <div className="bg-blue-900/60 dark:bg-slate-800/80 border border-sky-400/30 dark:border-slate-700 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-sky-200 uppercase font-semibold block">
                {isTrial ? 'Offerta Speciale' : 'Preventivo Stimato'}
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  {totalPrice}€
                </span>
                <span className="text-xs text-sky-200">
                  {isTrial ? '(30 minuti online gratuiti)' : `(${ratePerHour}€/ora × ${hours}h)`}
                </span>
              </div>
            </div>

            <a
              href={generateCustomWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base px-7 py-4 rounded-xl shadow-lg transition-all transform active:scale-95 w-full sm:w-auto justify-center hover:scale-[1.02]"
              id="calc-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>{isTrial ? 'Prenota Prova Gratuita' : 'Invia Richiesta su WhatsApp'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
