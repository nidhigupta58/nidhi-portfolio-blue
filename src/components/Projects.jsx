import React from 'react'
import { projects } from '../data/projects'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="mb-12 relative z-10">
      <h3 className="text-3xl font-bold mb-6 neon">Selected Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <motion.article key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="card hover:scale-105 transform transition"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold">{proj.title}</h4>
              <div className="text-xs opacity-70">{proj.tags.join(' · ')}</div>
            </div>

            <p className="text-sm opacity-80 mb-4">{proj.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {proj.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded-md border">{t}</span>)}
              </div>

              <div className="flex gap-3">
                <a href={proj.repo} target="_blank" rel="noreferrer" className="underline text-sm flex items-center gap-2"><FiGithub/> Repo</a>
                <a href={proj.live} target="_blank" rel="noreferrer" className="underline text-sm flex items-center gap-2"><FiExternalLink/> Live</a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
