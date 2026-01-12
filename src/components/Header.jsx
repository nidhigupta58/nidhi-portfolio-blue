import React from 'react'
import { FiSun, FiMoon, FiLinkedin, FiGithub, FiMail, FiPhone } from 'react-icons/fi'
import { site } from '../data/site'

export default function Header({ dark, setDark }) {
  return (
    <header className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight neon">{site.name}</h1>
        <p className="text-sm opacity-80">{site.role}</p>
        <div className="flex flex-wrap items-center gap-3 mt-2 text-xs opacity-70">
          <a href={`tel:${site.phone}`} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
            <FiPhone className="w-3 h-3" />
            <span>{site.phone}</span>
          </a>
          <span>◇</span>
          <a href={`mailto:${site.email}`} className="flex items-center gap-1 hover:text-blue-400 transition-colors">
            <FiMail className="w-3 h-3" />
            <span>{site.email}</span>
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href={site.linkedin} 
          target="_blank" 
          rel="noreferrer" 
          className="p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin className="w-5 h-5" />
        </a>
        <a 
          href={site.github} 
          target="_blank" 
          rel="noreferrer" 
          className="p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="GitHub"
        >
          <FiGithub className="w-5 h-5" />
        </a>
        <button 
          onClick={() => setDark(!dark)} 
          className="p-2 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  )
}
