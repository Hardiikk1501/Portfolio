import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, FileText, Download, User, Briefcase, GraduationCap, 
  Code2, Bot, Mail, MapPin, CheckCircle2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo, skillsData, experienceData } from '../../data/portfolioData';

import pic1 from '../../assets/pic1.jpeg';

export default function ResumeModal({ onClose }) {
  const topSkills = [
    ...skillsData.Frontend.slice(0, 5),
    ...skillsData.Backend.slice(0, 5),
    ...skillsData['Cloud & DevOps'],
    ...skillsData['Artificial Intelligence'],
    ...skillsData['Programming Languages'],
    ...skillsData['Professional Skills'],
    ...skillsData['Database'],
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-gray-950/85 backdrop-blur-md"
        />

        {/* Resume Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl my-6 glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-5 sm:p-7 border-b border-white/10 bg-gray-950/80">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Curriculum Vitae</h2>
                <p className="text-xs text-gray-400">Interactive Resume — {personalInfo.name} Parmar</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
     
              <button onClick={onClose} className="p-2.5 rounded-xl bg-gray-800 border border-white/10 text-gray-300 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-5 sm:p-8 space-y-8 overflow-y-auto max-h-[80vh]">

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-indigo-950/60 to-purple-950/60 border border-cyan-500/30">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shrink-0 shadow-xl shadow-cyan-500/20">
               
                <img
                       src={pic1}
                       alt="Hardik"/>
              </div>
              <div className="space-y-1.5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{personalInfo.name} Parmar</h1>
                <p className="text-sm font-semibold text-cyan-300">{personalInfo.title}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 pt-1">
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-cyan-400" />{personalInfo.email}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-purple-400" />{personalInfo.location}</span>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
                    <GithubIcon className="w-3.5 h-3.5" />GitHub
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors">
                    <LinkedinIcon className="w-3.5 h-3.5" />LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-widest">
                <User className="w-4 h-4 text-cyan-400" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed p-4 rounded-xl bg-gray-900/60 border border-white/5">
                {personalInfo.bio} Proficient in integrating Google Gemini API for voice-enabled AI assistants, 
                real-time WebSockets with Socket.IO, Razorpay payment flows, and multi-role dashboard systems. 
                Passionate about shipping production-quality code that combines premium UI/UX with high-performance backend architecture.
              </p>
            </div>

            {/* Core Skills */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Core Technical Skills</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {topSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-white/10 bg-gray-900/70"
                    style={{ color: skill.color }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            
            </div>

            {/* Experience & Education */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-widest">
                <Briefcase className="w-4 h-4 text-emerald-400" />
                <span>Education & Certifications</span>
              </h3>
              <div className="space-y-4">
                {experienceData.map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-gray-900/60 border border-white/5 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <span className="text-xs text-gray-400 bg-gray-800 px-2.5 py-1 rounded-full border border-white/5">{item.period}</span>
                    </div>
                    <p className="text-xs font-semibold text-cyan-300">{item.institution}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                    {item.highlights && (
                      <div className="pt-1.5 flex flex-wrap gap-2">
                        {item.highlights.map((h, hIdx) => (
                          <span key={hIdx} className="flex items-center gap-1 text-[11px] text-emerald-300">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />{h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Highlights */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 uppercase tracking-widest">
                <Bot className="w-4 h-4 text-indigo-400" />
                <span>Key Projects</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/50 to-indigo-950/50 border border-cyan-500/20 space-y-2">
                  <h4 className="text-sm font-bold text-white">AI Virtual Assistant</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">Voice-enabled Gemini AI chatbot with Speech-to-Text, Text-to-Speech, multi-turn conversations, and JWT Auth.</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {['Gemini API', 'React', 'Web Speech API', 'JWT'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/30">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/50 to-emerald-950/50 border border-purple-500/20 space-y-2">
                  <h4 className="text-sm font-bold text-white">Lawyer Appointment System</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">Full MERN SaaS with tri-role dashboards, Razorpay payments, Socket.IO chat, Cloudinary media, and Chart.js analytics.</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {['MERN', 'Razorpay', 'Socket.IO', 'Cloudinary'].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-lg bg-purple-950 text-purple-400 border border-purple-800/30">{t}</span>
                    ))}
                  </div>
                </div>
                 <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/50 to-indigo-950/50 border border-cyan-500/20 space-y-2">
                  <h4 className="text-sm font-bold text-white">AI Powered Portfolio</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">A sleek, responsive portfolio website built with React.js, Tailwind CSS v4, and Vite, featuring interactive components, smooth animations, and a chatbot knowledge base for recruiters.</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {["React.js", "Node.js", "Express.js", "Tailwind CSS v4", "Vite", "Framer Motion", "Chatbot Knowledge Base", "EmailJS"].map(t => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/30">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
