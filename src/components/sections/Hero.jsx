import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Mail, 
  Cpu, 
  Database, 
  Layers, 
  Zap,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolioData';
import pic from '../../assets/pic.jpeg';

export default function Hero({ onOpenResume, onOpenAiChat }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Glow Orbs Background */}
      <div className="glow-orb glow-orb-cyan w-96 h-96 top-20 left-10" />
      <div className="glow-orb glow-orb-purple w-96 h-96 bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-lg shadow-cyan-950/40"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1 animate-pulse" />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-primary">{personalInfo.name}</span>
              </h1>
              
              {/* Dynamic Role Switcher */}
              <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400"
                >
                  {personalInfo.roles[currentRoleIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Action Buttons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Explore Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center gap-3 transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Talk to AI Assistant */}
              <button
                onClick={onOpenAiChat}
                className="px-6 py-3.5 rounded-xl font-semibold text-cyan-300 glass-card border border-cyan-500/40 hover:bg-cyan-950/60 hover:border-cyan-400 transition-all flex items-center gap-3 shadow-lg shadow-cyan-950/50"
              >
                <Bot className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span>Talk to My AI Assistant</span>
              </button>

             
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gray-900/80 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/40 hover:bg-gray-800 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-gray-900/80 border border-white/10 text-gray-300 hover:text-white hover:border-indigo-500/40 hover:bg-gray-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-gray-900/80 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-gray-800 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>

          </div>

          {/* Right Image / Glowing AI Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer Glowing Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-60 animate-pulse" />
              
              <div className="relative glass-card p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl space-y-6">
                
                {/* Avatar Badge & Profile Card */}
                <div className="relative flex flex-col items-center text-center space-y-4">
                  <div className="relative group w-40 h-40">

  {/* Animated Glow */}
  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-70 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>

  {/* Gradient Border */}
  <div className="relative w-full h-full p-[4px] rounded-full bg-gradient-to-tr from-cyan-900 via-indigo-800 to-purple-500">

    <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-950">

      <img
        src={pic}
        alt="Hardik"
        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
      />

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-full"></div>

    </div>
  </div>

</div>

                  <div>
                    <h2 className="text-xl font-bold text-white">{personalInfo.name} Parmar</h2>
                    <p className="text-sm text-cyan-300 font-medium">{personalInfo.title}</p>
                    <p className="text-xs text-gray-100 mt-1">{personalInfo.location}</p>
                  </div>
                </div>

                {/* Micro Tech Pills */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <div className="p-2.5 rounded-xl bg-gray-900/70 border border-cyan-500/20 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-gray-200 font-semibold"> AI Integration</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-900/70 border border-emerald-500/20 flex items-center gap-2">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-gray-200 font-semibold">MERN Stack</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-900/70 border border-purple-500/20 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-gray-200 font-semibold">Socket.IO</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-gray-900/70 border border-indigo-500/20 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs text-gray-200 font-semibold">Tailwind v4</span>
                  </div>
                </div>

                {/* AI Interactive Banner Card */}
                <div 
                  onClick={onOpenAiChat}
                  className="cursor-pointer p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-indigo-950/80 to-purple-950/80 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300">
                      <Sparkles className="w-5 h-5 animate-spin-slow" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Ask Hardik's Assistant
                      </p>
                      <p className="text-[11px] text-gray-400">Instant answers about skills & projects</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {personalInfo.stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-5 text-center rounded-2xl border border-white/10"
            >
              <p className="text-lg  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-400 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

function ReactIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}
