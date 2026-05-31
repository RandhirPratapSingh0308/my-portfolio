import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Persistent theme checks
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    if (isDarkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-slate-800 dark:text-slate-200 transition-colors duration-300 antialiased font-sans">
      {/* Decorative Blur Ambient Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary-500/5 dark:bg-primary-600/3 blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-accent/5 dark:bg-brand-accent/3 blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Sticky Bar */}
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {/* Core Layout Portals */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Footer Credit & Portals */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
