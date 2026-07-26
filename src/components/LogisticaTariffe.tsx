import React, { useState } from 'react';
import { Euro, Calendar, MapPin, Calculator, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';

export const LogisticaTariffe: React.FC = () => {
  // Interactive Rate Estimator State
  const [dayType, setDayType] = useState<'settimana' | 'weekend'>('settimana');
  const [locationType, setLocationType] = useState<'online' | 'cisterna' | 'fuori'>('online');
  const [hours, setHours] = useState<number>(1);
  const [subject, setSubject] = useState<string>('Informatica');

  // Calculate estimated price
  const calculateRate = () => {
    if (dayType === 'weekend') return 20;
    if (locationType === 'fuori') return 20;
    return 15; // standard
  };

  const ratePerHour = calculateRate();
  const totalPrice = ratePerHour * hours;

  // Custom WhatsApp message generator
  const generateCustomWhatsApp = () => {
    const dayText = dayType === 'settimana' ? 'in settimana' : 'nel weekend';
    const locText =
      locationType === 'online'
        ? 'online (Discord)'
        : locationType === 'cisterna'
        ? 'a domicilio a Cisterna'
        : 'a domicilio fuori Cisterna';

    const text = encodeURIComponent(
      `Ciao Matteo, vorrei prenotare ${hours} ora/e di ripetizioni per ${subject} (${dayText}, ${locText}). Possiamo accordarci per i dettagli?`
    );
    return `https://wa.me/393452590069?text=${text}`;
  };

  return (
    <section id="tariffe" className="py-16 sm:py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-[#0033aa] dark:text-sky-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Euro className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
            <span>Trasparenza Totale</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#002066] dark:text-slate-100 uppercase tracking-tight font-display">
            LOGISTICA E TARIFFE
          </h2>
          <div className="w-20 h-1.5 bg-[#0033aa] dark:bg-sky-400 mx-auto mt-3 rounded-full" />
        </div>

        {/* 3 Rate Option Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: In Settimana */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-blue-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#0033aa] dark:hover:border-sky-400 transition-all shadow-sm hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#0033aa] dark:bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Popolare
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-[#0033aa] dark:text-sky-400 mb-4">
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
                Tariffa standard per lezioni online (tramite Discord) o a domicilio a Cisterna dal lunedì al venerdì.
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-blue-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Lun - Ven (dalle 17:00 in poi)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Online (Discord) o A Domicilio</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Weekend */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-blue-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#0033aa] dark:hover:border-sky-400 transition-all shadow-sm hover:shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-[#0033aa] dark:text-sky-400 mb-4">
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
                Disponibile anche il sabato e la domenica con tariffa weekend per recuperi intensivi o urgenze prima delle verifiche.
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-blue-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Sabato e Domenica tutto il giorno</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Ideale per preparazioni u.m.</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Fuori Cisterna */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-blue-200 dark:border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-[#0033aa] dark:hover:border-sky-400 transition-all shadow-sm hover:shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-[#0033aa] dark:text-sky-400 mb-4">
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
                Per lezioni a domicilio fuori dalla zona di Cisterna (es. Le Castella) la tariffa varia in base alla distanza.
              </p>
            </div>

            <ul className="space-y-2 pt-4 border-t border-blue-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zone limitrofe (es. Le Castella)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Calcolato in base ai chilometri</span>
              </li>
            </ul>
          </div>

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
                Seleziona le opzioni per generare automaticamente il tuo messaggio WhatsApp
              </p>
            </div>
          </div>

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
                <option value="Informatica">Informatica</option>
                <option value="Sistemi e Reti">Sistemi e Reti</option>
                <option value="TPSIT">TPSIT</option>
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
                <option value="online">Online (Discord / Meet)</option>
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
                <option value={3}>3 Ore (Intensivo)</option>
              </select>
            </div>

          </div>

          {/* Result Banner */}
          <div className="bg-blue-900/60 dark:bg-slate-800/80 border border-sky-400/30 dark:border-slate-700 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-sky-200 uppercase font-semibold block">Preventivo Stimato</span>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  {totalPrice}€
                </span>
                <span className="text-xs text-sky-200">
                  ({ratePerHour}€/ora × {hours}h)
                </span>
              </div>
            </div>

            <a
              href={generateCustomWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg transition-all transform active:scale-95 w-full sm:w-auto justify-center"
              id="calc-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>Invia Richiesta su WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

