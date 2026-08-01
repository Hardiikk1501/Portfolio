import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCheck, 
  Sparkles, 
  Code2, 
  Layers, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Target, 
  Compass, 
  Terminal,
  Milestone
} from 'lucide-react';
import { aboutContent, personalInfo } from '../../data/portfolioData';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: UserCheck },
    { id: 'vision', label: 'AI Vision', icon: Sparkles },
    { id: 'philosophy', label: 'Architecture Philosophy', icon: Terminal }
  ];

  return (
    <section id="about" className="relative py-24 bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafting Scalable Code & <span className="text-gradient-primary">Intelligent AI Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Learn more about my background, career milestones, and my mission in full-stack web and AI application engineering.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center p-1.5 glass-card rounded-2xl border border-white/10 max-w-xl w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="aboutActiveTab"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-400/40 rounded-xl"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10">
          <AnimatePresence mode="wait">
            
            {/* Story Tab */}
            {activeTab === 'story' && (
              <motion.div
                key="story"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <span>Full Stack Developer with an AI Advantage</span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base">
  I'm <strong className="text-cyan-300">{personalInfo.name}</strong>, an aspiring Full Stack & AI Developer from India who enjoys building scalable web applications and intelligent software solutions. My development journey began with learning programming fundamentals before moving into full-stack development with the MERN stack.
</p>
                    <p className="text-gray-400 leading-relaxed text-base">
  Along the way, I've developed projects including an Exam Management System, an Online Lawyer Appointment & Management Platform, and a Voice-Powered AI Virtual Assistant using Google Gemini. These experiences strengthened my skills in React, Node.js, Express.js, MongoDB, REST APIs, authentication, real-time communication, cloud deployment, and AI integration.
</p>
<p className="text-gray-400 leading-relaxed text-base">
  Today, my goal is to become a professional AI Engineer and Full Stack Developer by combining modern web technologies with Large Language Models, AI automation, and intelligent multi-agent systems to create impactful products for users worldwide.
</p>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-gray-900/80 border border-cyan-500/20">
                      <Target className="w-6 h-6 text-cyan-400 mb-2" />
                      <p className="text-xs text-gray-400">Core Focus</p>
                      <p className="text-sm font-bold text-white">AI-Powered Full Stack Development</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-900/80 border border-purple-500/20">
                      <Compass className="w-6 h-6 text-purple-400 mb-2" />
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-sm font-bold text-white">India (Global Remote)</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-900/80 border border-emerald-500/20">
                      <Sparkles className="w-6 h-6 text-emerald-400 mb-2" />
                      <p className="text-xs text-gray-400">Specialization</p>
                      <p className="text-sm font-bold text-white">MERN • AI • LLM Integration</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-900/80 border border-indigo-500/20">
                      <Milestone className="w-6 h-6 text-indigo-400 mb-2" />
                      <p className="text-xs text-gray-400">Milestones</p>
                      <p className="text-sm font-bold text-white">3+ Production Projects</p>
                    </div>
                  </div>
                </div>

                {/* Timeline Journey */}
                <div className="pt-6 border-t border-white/10 space-y-6">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Milestone className="w-5 h-5 text-cyan-400" />
                    <span>Career Journey Timeline</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {aboutContent.journey.map((item, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-gray-900/60 border border-white/5 space-y-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-bold border border-cyan-800/40">
                          {item.year}
                        </span>
                        <h5 className="text-base font-bold text-white">{item.title}</h5>
                        <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Vision Tab */}
            {activeTab === 'vision' && (
              <motion.div
                key="vision"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="max-w-3xl space-y-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-cyan-400" />
                    <span>Pioneering the Next Era of AI-Driven Web Apps</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                    Artificial Intelligence is redefining software development, and I want to be part of that transformation. My focus is on building practical AI-powered applications by combining MERN Stack with Large Language Models, voice interfaces, automation, and intelligent workflows.
                  </p>
                  <p className="text-gray-400 leading-relaxed text-base">
                   I enjoy integrating technologies such as Google Gemini, Speech Recognition, Text-to-Speech, and AI APIs into modern web applications to create experiences that are fast, interactive, and genuinely useful.
                </p>
                <p className='text-gray-300'>
                  My long-term vision is to develop intelligent SaaS products and multi-agent AI systems capable of solving real-world problems at scale.
                </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-2">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-base font-bold text-white">Google Gemini Integration</h4>
                    <p className="text-xs text-gray-300">Prompt engineering, streaming responses, and contextual chat memory.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-purple-950/40 border border-purple-500/30 space-y-2">
                    <Zap className="w-6 h-6 text-purple-400" />
                    <h4 className="text-base font-bold text-white">Voice & Multimodal UI</h4>
                    <p className="text-xs text-gray-300">Web Speech API speech recognition and natural text-to-speech audio outputs.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    <h4 className="text-base font-bold text-white">AI Workflow Automation</h4>
                    <p className="text-xs text-gray-300">Automating repetitive business processes and real-time content analysis.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Philosophy Tab */}
            {activeTab === 'philosophy' && (
              <motion.div
                key="philosophy"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="max-w-3xl space-y-4">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <Terminal className="w-6 h-6 text-indigo-400" />
                    <span>Clean Code, High Performance & Scalable Systems</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-base">
                   I believe exceptional software is built through clean architecture, maintainable code, scalability, and an outstanding user experience. Every project I develop follows best practices in performance optimization, reusable components, responsive design, secure authentication, and modern development workflows.

                   Rather than simply writing code, I focus on building reliable products that solve real problems and continue to evolve as technology advances.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {aboutContent.pillars.map((pillar, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-gray-900/60 border border-white/10 flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                        <Layers className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                        <p className="text-xs text-gray-400 leading-relaxed">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
