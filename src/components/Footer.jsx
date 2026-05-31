import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

const Github = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={props.className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    width="18" 
    height="18" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={props.className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-50/50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900/50 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Branding */}
          <div className="flex items-center space-x-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-primary-500 to-brand-accent flex items-center justify-center text-white font-black text-sm shadow shadow-primary-500/10">
              R
            </div>
            <span className="font-heading font-extrabold text-base tracking-tight text-slate-800 dark:text-white">
              Randhir<span className="text-primary-500 dark:text-primary-400">.</span>
            </span>
          </div>

          {/* Copyright text */}
          <div className="text-center md:text-left text-xs sm:text-sm text-slate-400 font-light order-3 md:order-2">
            © 2026 Randhir Pratap Singh         </div>

          {/* Actions (Socials + Scroll up) */}
          <div className="flex items-center space-x-4 order-2 md:order-3">
            <div className="flex space-x-3">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:randhirpratapsingh3899@gmail.com"
                aria-label="Email"
                className="text-slate-400 hover:text-brand-accent transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Back to top button */}
            <button
              onClick={handleScrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-900/50 text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
