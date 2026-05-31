import React from 'react';
import { GraduationCap, Calendar, MapPin, Globe } from 'lucide-react';

export default function Education() {
  const academicRecords = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'JECRC University',
      location: 'Jaipur, Rajasthan',
      period: '2021 – 2023',
      details: 'Focused on advanced software engineering methodologies, database design structures, full-stack development patterns, and computational theories.'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA) in Computer Science',
      institution: 'L.S. College (Babasaheb Bhimrao Ambedkar Bihar University)',
      location: 'Muzaffarpur, Bihar',
      period: '2017 – 2020',
      details: 'Acquired strong foundational computer science knowledge including algorithms, data structures, object-oriented concepts, and relational databases.'
    }
  ];

  const languages = [
    { name: 'Hindi', type: 'Native Speaker', level: '100%' },
    { name: 'English', type: 'Professional Proficiency', level: '85%' }
  ];

  return (
    <section id="education" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
            Credentials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Education & Languages
          </h3>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-500 to-brand-accent mx-auto rounded-full" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center space-x-2.5 mb-2">
              <div className="p-2 rounded-xl bg-primary-500/10 text-primary-500">
                <GraduationCap size={20} />
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-heading">
                Academic Qualifications
              </h4>
            </div>

            <div className="space-y-6">
              {academicRecords.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/60 shadow-sm hover:shadow-md hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Visual accent top line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary-500 to-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center space-x-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400">
                      <Calendar size={10} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <MapPin size={11} />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <h5 className="text-base sm:text-lg font-bold text-slate-800 dark:text-slate-100 font-heading mb-1.5 leading-snug">
                    {edu.degree}
                  </h5>
                  <h6 className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 mb-3 font-heading">
                    {edu.institution}
                  </h6>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Languages & Philosophy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center space-x-2.5 mb-2">
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500">
                <Globe size={18} />
              </div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 font-heading">
                Language Capacities
              </h4>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/60 shadow-sm space-y-6">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-end text-xs">
                    <div>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-100 font-heading block">{lang.name}</span>
                      <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">{lang.type}</span>
                    </div>
                    <span className="font-extrabold text-primary-500 dark:text-primary-400 text-sm">{lang.level}</span>
                  </div>
                  
                  {/* Gauge bar indicator */}
                  <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-brand-accent transition-all duration-1000 ease-out absolute left-0 top-0"
                      style={{ width: lang.level }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quick mindset card */}
            <div className="p-6 sm:p-7 rounded-3xl border border-dashed border-slate-350 dark:border-slate-800 bg-white/40 dark:bg-slate-900/10 shadow-sm relative overflow-hidden group">
              <div className="absolute -bottom-6 -right-6 text-7xl opacity-5 dark:opacity-10 pointer-events-none select-none font-bold">🧠</div>
              <h5 className="font-bold text-slate-800 dark:text-slate-200 text-sm font-heading mb-2">My Operational Philosophy</h5>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                "Technical competencies are built on foundation concepts. Continuous self-directed learning bridges the gap between static design specs and highly engaging web assets."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
