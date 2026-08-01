import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
   
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Bot, 
  CreditCard, 
  Radio, 
  Database,
  Monitor
} from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-gray-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl z-10 max-h-[80vh] flex flex-col"
        >
          {/* Header Image / Graphic */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-gray-950/80 border border-white/20 text-gray-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge */}
            <div className="absolute bottom-6 left-6 sm:left-8 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full bg-cyan-950/90 text-cyan-300 text-xs font-bold border border-cyan-500/40 uppercase tracking-wider">
                  {project.badge}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {project.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar flex-1">
            <p className="text-base sm:text-lg text-cyan-300 font-semibold">
              {project.tagline}
            </p>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Features Checklist Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Key Features & Architecture</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-gray-900/60 border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Technologies Used</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-gray-900 text-cyan-300 text-xs font-semibold border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Interactive Simulator Preview Notice */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/50 via-indigo-950/50 to-purple-950/50 border border-cyan-500/30 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-xs font-bold text-white">Live Application Demo Ready</p>
                  <p className="text-[11px] text-gray-400">Deployed on  high-speed edge infrastructure</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                {/* <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold flex items-center gap-2 border border-white/10"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a> */}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
