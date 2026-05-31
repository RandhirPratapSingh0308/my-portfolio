import React from 'react';
import { Target, Users, Zap, Search } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Target className="text-primary-500" size={24} />,
      title: 'High Conversions',
      desc: 'Expertise in building landing pages that capture quality leads and drive direct sales in real estate.'
    },
    {
      icon: <Zap className="text-brand-accent" size={24} />,
      title: 'Optimized Speed',
      desc: 'Focused on asset optimization, semantic coding, and script minification to reduce bounce rates.'
    },
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: 'Collaboration',
      desc: 'Adept at working alongside design and marketing teams to quickly translate layouts into pixel-perfect code.'
    },
    {
      icon: <Search className="text-amber-500" size={24} />,
      title: 'SEO Friendly',
      desc: 'Structuring HTML/CSS with standard semantic guidelines to score highly in Google Lighthouse metrics.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
            My Background
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Crafting Performance-Driven Web Interfaces
          </h3>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-500 to-brand-accent mx-auto rounded-full" />
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h4 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 font-heading">
              Who is Randhir?
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              I am a result-driven Front-End Developer with <strong className="font-semibold text-slate-800 dark:text-white">4 years of professional experience</strong>. I specialize in building responsive, high-converting, and user-friendly web applications, primarily within the digital marketing and real estate sectors.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              My core capability lies in translating intricate, beautiful design concepts (from tools like <strong className="font-semibold text-slate-800 dark:text-white">Figma and Photoshop</strong>) into neat, maintainable, and interactive codebase. I thrive on web performance optimization, ensuring fast page load speeds that directly lead to higher user retention and increased conversions.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              Additionally, I explore full-stack capabilities, having built robust AI-driven medical workflows using the MERN stack (<strong className="font-semibold text-slate-800 dark:text-white">MongoDB, Express.js, React, Node.js</strong>). I am always looking forward to pushing the boundaries of what modern frontends can achieve.
            </p>

            {/* Quick Contact Box */}
            <div className="p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/60 shadow-sm flex items-center space-x-4">
              <span className="text-3xl">📍</span>
              <div>
                <h5 className="font-bold text-slate-800 dark:text-white text-sm font-heading">Based in Noida, UP, India</h5>
                <p className="text-xs text-slate-500 dark:text-slate-400">Ready to contribute to onsite teams and remote collaborations.</p>
              </div>
            </div>
          </div>

          {/* Right Block: Core Focus Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/60 shadow-sm hover:shadow-md hover:border-primary-500/20 dark:hover:border-primary-500/20 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-2 font-heading">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
