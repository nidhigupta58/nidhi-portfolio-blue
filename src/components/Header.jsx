import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { site } from '../data/site'

export default function Header({ dark, setDark }) {
  return (
    <header className="relative z-20 flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight">{site.name}</h1>
        <p className="text-sm opacity-80">{site.role}</p>
      </div>

      <div className="flex items-center gap-4">
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="text-sm underline">LinkedIn</a>
        <button onClick={() => setDark(!dark)} className="p-2 rounded-md hover:bg-white/5">
          {dark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  )
}
