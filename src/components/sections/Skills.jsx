import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Code2, 
  Database, 
  Bot, 
  Shield, 
  Cloud, 
  Wrench, 
  Sparkles,
  Zap,
  CheckCircle2,
  FileCode,
  Palette,
  Server,
  Network,
  Radio,
  GitBranch,
  MessageSquareText,
  Wand2,
  Mic,
  Volume2,
  Workflow,
  KeyRound,
  Flame,
  Triangle,
  HardDrive,
  Image,
  GitCommit,
  Send,
  Terminal,
  CreditCard,
  BarChart3,
  
} from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    Frontend: Code2,
    Backend: Server,
    Database: Database,
    'AI Technologies': Bot,
    Authentication: Shield,
    'Cloud & DevOps': Cloud,
    'Tools & Others': Wrench,
    
  };

  const categories = ['All', ...Object.keys(skillsData)];

  const getIconComponent = (iconName) => {
    const iconMap = {
      Code2, Zap, Palette, FileCode, Sparkles, Layout: Code2,
      Server, Cpu, Network, Radio, Database, GitBranch,
      Bot, MessageSquareText, Wand2, Mic, Volume2, Workflow,
      KeyRound, Flame, Shield, Triangle, Cloud, HardDrive, Image,
      GitCommit, Send, Terminal, CreditCard, BarChart3
    };
    const Comp = iconMap[iconName] || Cpu;
    return <Comp className="w-5 h-5" />;
  };

  const filteredCategories = selectedCategory === 'All'
    ? Object.entries(skillsData)
    : [[selectedCategory, skillsData[selectedCategory]]];

  return (
    <section id="skills" className="relative py-24">
      {/* Background glow orb */}
      <div className="glow-orb glow-orb-cyan w-80 h-80 top-1/3 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive <span className="text-gradient-primary">Skills Matrix</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            A comprehensive overview of my technical capabilities across modern frontend frameworks, backend architecture, databases, and AI technologies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat !== 'All' && categoryIcons[cat] && (
                  <span className="opacity-80">
                    {React.createElement(categoryIcons[cat], { className: 'w-4 h-4' })}
                  </span>
                )}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {filteredCategories.map(([catName, skills]) => {
            const CatIcon = categoryIcons[catName] || Cpu;
            return (
              <div key={catName} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{catName}</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-800 text-gray-400 font-semibold">
                    {skills.length} Skills
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="glass-card glass-card-hover p-5 rounded-2xl border border-white/10 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2.5 rounded-xl border border-white/10"
                            style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                          >
                            {getIconComponent(skill.icon)}
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-base">{skill.name}</h4>
                           
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
