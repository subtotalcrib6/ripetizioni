import React, { useState, useEffect } from 'react';
import { CircuitBackground } from './components/CircuitBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ChiSono } from './components/ChiSono';
import { MaterieServizi } from './components/MaterieServizi';
import { LogisticaTariffe } from './components/LogisticaTariffe';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative font-sans transition-colors duration-300">
      {/* Background Tech Circuit Traces */}
      <CircuitBackground />

      {/* Main Sticky Header */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      {/* Main Landing Content */}
      <main className="grow relative z-10">
        <Hero />
        <ChiSono />
        <MaterieServizi />
        <LogisticaTariffe />
        <Faq />
      </main>

      {/* Footer & Floating WhatsApp CTA */}
      <Footer />
    </div>
  );
}

