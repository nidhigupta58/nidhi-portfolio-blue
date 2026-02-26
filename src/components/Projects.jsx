import React from 'react'
import { projects } from '../data/projects'
import { FiGithub, FiExternalLink, FiBriefcase } from 'react-icons/fi'
import { motion } from 'framer-motion'
import ReadMore from './ReadMore'

export default function Projects() {
  return (
    <section id="projects" className="mb-12 relative z-10">
      <h3 className="text-3xl font-bold mb-8 neon">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {projects.map((proj, i) => (
          <motion.article 
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="card hover:scale-[1.02] hover:border-blue-500/30 transform transition-all duration-300 flex flex-col h-full"
          >
            <div className="mb-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="font-bold text-lg text-blue-300">{proj.title}</h4>
              </div>
              {proj.company && (
                <div className="flex items-center gap-2 text-sm opacity-80 mb-3">
                  <FiBriefcase className="w-4 h-4" />
                  <span>{proj.company}</span>
                </div>
              )}
            </div>

            <ReadMore limit={150} className="mb-4 text-sm opacity-90 leading-relaxed">
              {proj.description}
            </ReadMore>

            <div className="mt-auto pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map(t => (
                  <span 
                    key={t} 
                    className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {proj.repo && proj.repo !== '#' && (
                  <a 
                    href={proj.repo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {proj.live && proj.live !== '#' && (
                  <a 
                    href={proj.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
