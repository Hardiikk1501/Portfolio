import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Milestone, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  const getTypeBadge = (type) => {
    switch (type) {
      case 'education':
        return { icon: GraduationCap, label: 'Education', color: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40' };
      case 'certification':
        return { icon: Award, label: 'Certification', color: 'border-purple-500/40 text-purple-400 bg-purple-950/40' };
      default:
        return { icon: Milestone, label: 'Milestone', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40' };
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-gray-950/40">
      <div className="glow-orb glow-orb-purple w-96 h-96 bottom-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Journey & Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-primary">Education</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            A chronological timeline of my academic background, specialized certifications, and key development milestones.
          </p>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Center Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 transform sm:-translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const badge = getTypeBadge(item.type);
              const BadgeIcon = badge.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-4 sm:left-1/2 top-0 w-8 h-8 rounded-full bg-gray-950 border-2 border-cyan-400 transform -translate-x-1/2 flex items-center justify-center shadow-lg shadow-cyan-500/40 z-20">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Card Content Container */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                    <div className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 space-y-4">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.color}`}>
                          <BadgeIcon className="w-3.5 h-3.5" />
                          <span>{badge.label}</span>
                        </span>
                        <span className="text-xs font-bold text-gray-400 bg-gray-900/80 px-3 py-1 rounded-full border border-white/5">
                          {item.period}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-300 mt-1">
                          {item.institution}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Key Highlights Bullets */}
                      {item.highlights && (
                        <div className="pt-3 border-t border-white/10 space-y-1.5">
                          {item.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2 text-xs text-gray-400">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
