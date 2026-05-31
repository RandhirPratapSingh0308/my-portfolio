import React, { useState } from 'react';
import { Layout, Server, Database, Sparkles, GitBranch, Compass } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <Layout className="text-primary-500" size={18} />,
      skills: [
        { name: 'React.js', level: '92%' },
        { name: 'JavaScript (ES6+)', level: '90%' },
        { name: 'jQuery', level: '85%' },
        { name: 'HTML5 & CSS3', level: '95%' },
        { name: 'PSD to HTML5', level: '95%' }
      ]
    },
    {
      id: 'backend-db',
      title: 'Backend & Database',
      icon: <Server className="text-emerald-500" size={18} />,
      skills: [
        { name: 'Node.js', level: '60%' },
        { name: 'Express.js', level: '65%' },
        { name: 'MongoDB', level: '55%' }
      ]
    },
    {
      id: 'ui-styling',
      title: 'UI & Styling Frameworks',
      icon: <Sparkles className="text-brand-accent" size={18} />,
      skills: [
        { name: 'Tailwind CSS', level: '90%' },
        { name: 'Bootstrap', level: '95%' }
      ]
    },
    {
      id: 'tools-state',
      title: 'State & Tools',
      icon: <GitBranch className="text-blue-500" size={18} />,
      skills: [
        { name: 'Git & GitHub', level: '88%' },
        { name: 'REST APIs', level: '80%' },
        { name: 'Firebase', level: '50%' }
      ]
    },
    {
      id: 'design',
      title: 'Web Designing',
      icon: <Compass className="text-amber-500" size={18} />,
      skills: [
        { name: 'Figma', level: '90%' },
        { name: 'Photoshop Basics', level: '50%' }
      ]
    },
    {
      id: 'methodologies',
      title: 'Methodologies',
      icon: <Layout className="text-violet-500" size={18} />,
      skills: [
        { name: 'Responsive Web Design', level: '95%' },
        { name: 'Testing & Debugging', level: '90%' },
        { name: 'UI/UX Optimization', level: '90%' }
      ]
    }
  ];

  // Filtering logic
  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
            My Skillset
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Technologies & Frameworks I Leverage
          </h3>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-500 to-brand-accent mx-auto rounded-full" />
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              {cat.title.split(' ')[0]} {/* shortened display name */}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div 
              key={category.id} 
              className="p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40 shadow-sm hover:shadow-md hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-800 dark:text-slate-100 font-heading">
                    {category.title}
                  </h4>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="font-bold text-primary-500 dark:text-primary-400">{skill.level}</span>
                      </div>
                      
                      {/* Interactive visual loading bar */}
                      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-brand-accent transition-all duration-1000 ease-out absolute left-0 top-0"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative subtle text watermark */}
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-300 dark:text-slate-800 text-right mt-6 select-none font-heading">
                {category.id}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
