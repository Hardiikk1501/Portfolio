import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticlesBackground from './components/ui/ParticlesBackground';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import AiChatbot from './components/sections/AiChatbot';
import Contact from './components/sections/Contact';
import ResumeModal from './components/modals/ResumeModal';


export default function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);

  // Global keyboard shortcut: Ctrl+K → open AI Chat
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setShowAiModal((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setShowResumeModal(false);
        setShowAiModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">

      {/* Animated Particle Canvas */}
      <ParticlesBackground />

      {/* Aurora Gradient Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% -10%, rgba(6,182,212,0.08) 0%, transparent 70%), radial-gradient(ellipse 70% 50% at 80% 100%, rgba(139,92,246,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Navigation */}
      <Navbar
        onOpenResume={() => setShowResumeModal(true)}
        onOpenAiChat={() => setShowAiModal(true)}
      />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setShowResumeModal(true)}
          onOpenAiChat={() => setShowAiModal(true)}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />

        {/* AI Chatbot — Inline Section */}
        <section id="ai-assistant" className="relative py-24 bg-gray-950/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Live AI Assistant</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Meet My Personal{' '}
                <span className="text-gradient-primary">Gemini AI Assistant</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-400">
                Ask anything about my skills, projects, experience, or how to hire me. Supports voice input & speech output.
              </p>
            </div>
            <div className="h-[680px] max-w-4xl mx-auto relative">
              <AiChatbot />
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <ResumeModal onClose={() => setShowResumeModal(false)} />
        )}
      </AnimatePresence>

      {/* Floating AI Chat Modal (Ctrl+K) */}
      <AnimatePresence>
        {showAiModal && (
          <AiChatbot
            isOpenAsModal
            onCloseModal={() => setShowAiModal(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
