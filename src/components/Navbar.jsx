import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/70 dark:bg-slate-900/75 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex items-center space-x-2"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-primary-500 to-brand-accent flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
              R
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-slate-800 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
              Randhir<span className="text-primary-500 dark:text-primary-400">.</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-1.5 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-brand-accent animate-scale-up" />
                )}
              </button>
            ))}
          </div>

          {/* Action Area (Theme + CTA Button + Mobile Menu Toggle) */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow"
            >
              {isDarkMode ? <Sun size={18} className="animate-spin-slow" /> : <Moon size={18} />}
            </button>

            {/* Let's Talk CTA (Desktop) */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:flex items-center space-x-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-primary-600 dark:hover:bg-primary-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-sm shadow-slate-900/10"
            >
              <span>Hire Me</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-all cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] p-4 bg-white/95 dark:bg-slate-950/95 border-b border-slate-200/50 dark:border-slate-900/50 shadow-lg backdrop-blur-lg animate-fade-in z-45">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  activeSection === link.id
                    ? 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full mt-2 py-3 rounded-xl text-center text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-primary-500 to-brand-accent text-white shadow-md shadow-primary-500/10"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
