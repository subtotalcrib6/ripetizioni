import React, { useState } from 'react';
import { MessageCircle, Menu, X, Code2, Sun, Moon } from 'lucide-react';

export const WHATSAPP_LINK =
  "https://wa.me/393452590069?text=Ciao%20Matteo,%20ho%20visto%20il%20tuo%20sito%20e%20vorrei%20informazioni%20per%20le%20ripetizioni";

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Chi Sono', href: '#chi-sono' },
    { name: 'Materie & Servizi', href: '#servizi' },
    { name: 'Tariffe', href: '#tariffe' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-blue-100 dark:border-slate-800 shadow-2xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-blue-600 rounded-xl p-1"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#0033aa] dark:bg-blue-600 flex items-center justify-center text-white font-black text-xl tracking-wider shadow-md group-hover:bg-[#002288] dark:group-hover:bg-blue-500 transition-colors shrink-0">
              <Code2 className="w-6 h-6 text-sky-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#002066] dark:text-slate-100 uppercase leading-none">
                Matteo Mazzucco
              </span>
              <span className="text-[11px] font-bold tracking-wider text-blue-600 dark:text-sky-400 uppercase mt-0.5">
                Ripetizioni Informatica • Cisterna & Online
              </span>
            </div>
          </a>

          {/* Center Minimal Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-[#0033aa] dark:hover:text-sky-400 hover:bg-blue-50/80 dark:hover:bg-slate-800/80 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Area (Theme Toggle + WhatsApp Button) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark/Light Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              type="button"
              className="p-2.5 rounded-xl border border-blue-200 dark:border-slate-700 bg-blue-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-sky-300 hover:border-blue-300 dark:hover:border-slate-600 transition-all duration-200 flex items-center justify-center shrink-0 shadow-2xs"
              aria-label={theme === 'dark' ? 'Passa alla modalità chiara' : 'Passa alla modalità scura'}
              title={theme === 'dark' ? 'Modalità Chiara' : 'Modalità Scura'}
              id="header-theme-toggle-btn"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 transform transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 transform transition-transform hover:-rotate-12" />
              )}
            </button>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all transform active:scale-95 hover:scale-[1.02]"
              id="header-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contattami su WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu toggle & Theme button for mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              type="button"
              className="p-2 rounded-xl border border-blue-200 dark:border-slate-700 bg-blue-50/80 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label={theme === 'dark' ? 'Passa alla modalità chiara' : 'Passa alla modalità scura'}
              id="mobile-theme-toggle-btn"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:text-[#0033aa] dark:hover:text-sky-400 hover:bg-blue-50 dark:hover:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-blue-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-blue-100 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-base font-bold text-slate-800 dark:text-slate-200 hover:text-[#0033aa] dark:hover:text-sky-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-4 rounded-xl shadow-md text-center w-full"
              id="mobile-drawer-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Contattami su WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
