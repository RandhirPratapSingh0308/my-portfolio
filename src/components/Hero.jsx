import React from 'react';
import { ArrowRight, Mail, MapPin, Briefcase, Award } from 'lucide-react';

const Github = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    width="20" 
    height="20" 
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
    width="20" 
    height="20" 
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

export default function Hero() {
  const handleScrollTo = (id) => {
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
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92svh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary-500/10 dark:bg-primary-500/5 blur-3xl animate-pulse-slow z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-brand-accent/10 dark:bg-brand-accent/5 blur-3xl animate-pulse-slow z-0" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
              <span className="h-2 w-2 absolute rounded-full bg-green-500" />
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 pl-1">Available for New Projects</span>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold tracking-wide text-primary-500 dark:text-primary-400 font-heading">
                Hello, I am
              </h3>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-heading">
                Randhir Pratap <span className="text-gradient dark:text-gradient-dark">Singh</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-slate-200 mt-2 font-heading">
                Front-end Developer
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Result-driven developer with <strong className="font-semibold text-slate-800 dark:text-white">4 years of professional experience</strong>. I specialize in building responsive, high-converting, and user-friendly web applications, with a proven track record in digital marketing and real estate sectors.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleScrollTo('projects')}
                className="group flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide bg-gradient-to-r from-primary-500 to-brand-accent hover:from-primary-600 hover:to-brand-accent text-white shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => handleScrollTo('contact')}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <a 
                href="www.linkedin.com/in/randhir-pratap-singh-b94210213" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 shadow-sm transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/RandhirPratapSingh0308" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-950 dark:hover:text-white hover:scale-110 shadow-sm transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:rps85071@gmail.com"
                aria-label="Send Email"
                className="p-3 rounded-full border border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800 hover:text-brand-accent hover:scale-110 shadow-sm transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Interactive Card Elements Showcase */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8">
            <div className="relative w-80 sm:w-96 aspect-square max-w-full flex items-center justify-center">
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 dark:border-slate-700/60 animate-spin-slow z-0" />
              
              {/* Center Decorative Shape */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-primary-500/25 to-brand-accent/25 dark:from-primary-600/15 dark:to-brand-accent/15 blur-xl z-0" />
              
              {/* Floating Widget 1: Experience */}
              <div className="absolute top-2 left-2 p-4 rounded-2xl glass-light dark:glass-dark border border-white/20 dark:border-slate-800/80 shadow-md animate-float max-w-[170px] z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-primary-500/10 text-primary-500 dark:text-primary-400">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-800 dark:text-white leading-none">4+ Yrs</h4>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Professional Experience</span>
                  </div>
                </div>
              </div>

              {/* Floating Widget 2: Projects / Conversions */}
              <div className="absolute bottom-6 right-2 p-4 rounded-2xl glass-light dark:glass-dark border border-white/20 dark:border-slate-800/80 shadow-md animate-float-delayed max-w-[170px] z-10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-800 dark:text-white leading-none">100+</h4>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Landing Pages Designed</span>
                  </div>
                </div>
              </div>

              {/* Floating Widget 3: Location */}
              <div className="absolute bottom-1/2 left-[-20px] translate-y-1/2 p-3.5 rounded-2xl glass-light dark:glass-dark border border-white/20 dark:border-slate-800/80 shadow-md animate-float max-w-[150px] z-10" style={{ animationDelay: '3s' }}>
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 dark:text-white">Noida, India</h4>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 block font-medium">Primary Location</span>
                  </div>
                </div>
              </div>

              {/* Center Portrait Illustration Overlay (using beautiful CSS shapes) */}
              <div className="absolute w-44 h-44 rounded-3xl bg-gradient-to-br from-primary-500 to-brand-accent p-[2px] shadow-2xl z-0 overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-50 dark:bg-slate-900 rounded-[22px] flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-5xl mb-2">💻</div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-heading">Randhir P. Singh</span>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">Ready to Build</span>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
