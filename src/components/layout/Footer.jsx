import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Sparkles, Bot, Code2, Heart, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'AI Assistant', id: 'ai-assistant' },
    { label: 'Contact', id: 'contact' }
  ];

  const techStack = ['React.js', 'Vite', 'Tailwind CSS v4', 'Framer Motion', 'Gemini API'];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Ambient Glow */}
      <div className="glow-orb glow-orb-cyan w-96 h-48 bottom-0 left-1/2 transform -translate-x-1/2 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-gray-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">H</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-lg text-white">{personalInfo.name}</span>
                <p className="text-xs text-cyan-400 font-semibold">Full Stack & AI Developer</p>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Building scalable MERN stack applications and cutting-edge Google Gemini AI solutions. Open to full-time roles and AI development globally.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a href={personalInfo.github} target="_blank" rel="noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-500/40 transition-all">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"
                className="p-2.5 rounded-xl bg-gray-900 border border-white/10 text-gray-300 hover:text-white hover:border-indigo-500/40 transition-all">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-gray-900 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/40 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for New Opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-gray-400 hover:text-cyan-300 flex items-center gap-2 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">Built With</h4>
            <ul className="space-y-3">
              {techStack.map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-sm text-gray-400">
                  <Code2 className="w-3.5 h-3.5 text-cyan-500/60" />
                  {tech}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                <span>View Source on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
            <span className="text-gray-700">·</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> & 
              <Sparkles className="w-3 h-3 text-cyan-400" />
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="group p-3 rounded-xl bg-gray-900 border border-white/10 hover:border-cyan-500/40 text-gray-400 hover:text-cyan-400 transition-all transform hover:-translate-y-1 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
