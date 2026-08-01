import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderKanban, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowUpRight,
  Bot,
  CreditCard,
  Radio,
  Layers
} from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { projectsData } from '../../data/portfolioData';

import ProjectDetailModal from '../modals/ProjectDetailModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Featured AI', 'MERN Stack','Mobile App'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24">
      {/* Glow Orb */}
      <div className="glow-orb glow-orb-cyan w-96 h-96 top-1/4 left-1/2 transform -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Major <span className="text-gradient-primary">Projects & AI Innovations</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Explore my featured full-stack applications, voice-enabled Gemini AI tools, and enterprise SaaS platforms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group ${
                  project.isFeatured ? 'ring-1 ring-cyan-500/30' : ''
                }`}
              >
                {/* Top Image Preview & Badges */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-gray-950/80 text-cyan-300 text-xs font-bold border border-cyan-500/40 backdrop-blur-md">
                      {project.badge}
                    </span>
                    {project.isFeatured && (
                      <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg">
                        ⭐ Highlighted
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-cyan-400 font-medium">
                      {project.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features Snippet */}
                    <div className="pt-2 space-y-1.5">
                      {project.features.slice(0, 3).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/10 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-gray-900/80 text-gray-300 text-[11px] font-semibold border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links & Details CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs sm:text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 group/btn"
                      >
                        <span>View Architecture Details</span>
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 border border-white/10 text-gray-300 hover:text-white transition-colors"
                          title="GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-xl bg-cyan-950 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Selected Project Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
