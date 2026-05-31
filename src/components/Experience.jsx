import React from 'react';
import { Calendar, Briefcase, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'GTF Technologies',
      role: 'Front-end Developer',
      period: '03/2024 – Present',
      location: 'Noida, India',
      highlights: [
        'Manage and maintain multiple high-traffic websites for a premier real estate digital marketing firm.',
        'Develop new features and enhance existing web components using React.js, ensuring highly responsive, visually appealing, and intuitive user interfaces.',
        'Optimize web application performance and cross-browser compatibility to improve user retention and SEO rankings.',
        'Collaborate closely with design and marketing teams to quickly deploy landing pages that align with lead generation goals.'
      ]
    },
    {
      company: 'Social Cults',
      role: 'Front-end Developer',
      period: '01/2023 – 02/2024',
      location: 'Noida, India',
      highlights: [
        'Engineered and optimized high-converting, fully responsive landing pages dedicated to real estate marketing campaigns.',
        'Implemented modern CSS frameworks and JavaScript to create interactive user experiences that significantly boosted user engagement and lead capture forms.',
        'Conducted routine testing and debugging to ensure seamless functionality across mobile, tablet, and desktop devices.'
      ]
    },
    {
      company: 'Digital Rubix',
      role: 'Front-end Developer',
      period: '12/2021 – 10/2022',
      location: 'Noida, India',
      highlights: [
        'Developed tailored real estate landing pages, collaborating with cross-functional teams to showcase properties effectively and increase conversions.',
        'Transformed PSD designs into semantic, clean, and interactive HTML5/CSS3/JavaScript code.',
        'Streamlined frontend assets and scripts to minimize page load times, directly improving user engagement metrics.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
            My Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Professional Career Timeline
          </h3>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-500 to-brand-accent mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-[1px]" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Dot */}
                  <div className="absolute left-4 md:left-1/2 top-2 h-5 w-5 rounded-full bg-gradient-to-tr from-primary-500 to-brand-accent border-4 border-slate-50 dark:border-slate-900 shadow-md -translate-x-1/2 z-10 hover:scale-125 transition-transform" />

                  {/* Empty spacer for desktop symmetry */}
                  <div className="hidden md:block w-1/2" />

                  {/* Experience Card */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-8">
                    <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/60 shadow-sm hover:shadow-md hover:border-primary-500/25 dark:hover:border-primary-500/25 hover:-translate-y-0.5 transition-all duration-300">
                      
                      {/* Meta Information */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary-500/10 text-primary-600 dark:text-primary-400">
                          <Calendar size={10} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-xs text-slate-400">
                          <MapPin size={11} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Header details */}
                      <div className="space-y-1 mb-4">
                        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 font-heading">
                          {exp.company}
                        </h4>
                        <h5 className="text-sm font-semibold text-primary-500 dark:text-primary-400 flex items-center space-x-1.5 font-heading">
                          <Briefcase size={13} />
                          <span>{exp.role}</span>
                        </h5>
                      </div>

                      {/* Accomplishments Bullets */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                        {exp.highlights.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2">
                            <span className="text-primary-500 dark:text-primary-400 mt-1 select-none font-bold">✓</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
