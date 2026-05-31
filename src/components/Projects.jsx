import React, { useState } from 'react';
import { ExternalLink, Layers, CheckCircle2, X } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'clinic-ai',
      title: 'Clinic Management System using AI',
      category: 'ai',
      categoryLabel: 'AI & Full-Stack',
      summary: 'Secure role-based full-stack clinic app featuring AI-backed scheduling algorithms and validation workflows.',
      description: 'A comprehensive medical workflow portal engineered to streamline clinical patient pathways and optimize administrative control structures.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Firebase'],
      bullets: [
        'Secure role-based access control with granular permission layers (Admin / Sub-Admin).',
        'Automated patient appointment scheduling utilizing intelligent scheduling buffers.',
        'Streamlined clinical workflows with digital record-keeping for faster medical billing.',
        'Custom validation window logic to check patient eligibility cycles automatically.'
      ]
    },
    {
      id: 'hospital-ai',
      title: 'Hospital Management System using AI',
      category: 'ai',
      categoryLabel: 'AI & Full-Stack',
      summary: 'Robust hospital portal managing dynamic IPD/OPD modules, multi-department labs, and payment ledgers.',
      description: 'A heavy-duty enterprise management platform resolving multi-layered operational workflows for modern medical departments.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'State Management', 'Tailwind CSS'],
      bullets: [
        'Integrated IPD/OPD modules representing patient flows from admissions to discharge.',
        'Dynamic clinical dashboards representing lab testing workflows and automated notifications.',
        'Complex schemas mapping multi-department medical staff schedules with shift-handover logs.',
        'Secure billing integrations tracking patient payments and clinic expense registers.'
      ]
    },
    {
      id: 'real-estate-ui',
      title: 'Landing Page Design for Real Estate',
      category: 'ui',
      categoryLabel: 'Real Estate & UI',
      summary: 'High-converting, optimized real estate landing pages tailored for lead generation campaigns.',
      description: 'Speed-optimized, responsive, pixel-perfect frontend layouts designed using advanced landing page layouts to trigger maximum leads.',
      tech: ['Figma', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'UX Optimization'],
      bullets: [
        'Designed detailed, modern, and wireframed UI layouts from scratch in Figma.',
        'Transformed design prototypes into high-performance, pixel-perfect semantic frontend pages.',
        'A/B tested form alignment, button visual weights, and fields to optimize conversion ratios.',
        'Minimized loading speeds by compressions and lazy-loading of high-resolution property banners.'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 dark:text-primary-400 font-heading">
            My Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Featured Projects & Implementations
          </h3>
          <div className="h-1.5 w-16 bg-gradient-to-r from-primary-500 to-brand-accent mx-auto rounded-full" />
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: 'AI & Full-Stack' },
            { id: 'ui', label: 'Real Estate & UI' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-50/40 dark:bg-slate-900/25 shadow-sm hover:shadow-md hover:border-primary-500/20 dark:hover:border-primary-500/20 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Category Banner Pill */}
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-200/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 font-heading group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h4>

                {/* Summary */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-3">
                  {project.summary}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.slice(0, 4).map((t, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white dark:bg-slate-800 text-slate-400 border border-slate-200/50 dark:border-slate-800/50">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* View Details Button */}
              <div className="pt-6 mt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center space-x-1.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wide border border-slate-900 dark:border-white hover:bg-slate-900 dark:hover:bg-white text-slate-900 dark:text-white hover:text-white dark:hover:text-slate-950 transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  <span>Project Details</span>
                  <ExternalLink size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detailed Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 sm:p-8 shadow-2xl animate-scale-up">
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-950 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                
                {/* Header info */}
                <div className="space-y-2">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-primary-500/10 text-primary-600 dark:text-primary-400">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-heading pr-8 leading-snug">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="h-[1px] w-full bg-slate-200/60 dark:bg-slate-800/60" />

                {/* Narrative Details */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-heading">Project Overview</h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Accomplishments Bullet Points */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-heading flex items-center space-x-1.5">
                    <Layers size={14} />
                    <span>Technical Architecture & Accomplishments</span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {selectedProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 size={16} className="text-primary-500 dark:text-primary-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-[1px] w-full bg-slate-200/60 dark:bg-slate-800/60" />

                {/* Detailed Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-heading">Utilized Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-800/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    Close Window
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
