import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import { site } from './data/site'

export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'min-h-screen text-gray-100' : 'min-h-screen text-gray-900 bg-white'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <Header dark={dark} setDark={setDark} />
        <Hero />

        <main>
          <Projects />

          <section className="mb-12 grid md:grid-cols-2 gap-8 mt-12">
            <Skills />
            <Experience />
          </section>

          <section className="mb-12 grid md:grid-cols-2 gap-8 mt-12">
            <Education />
            <Achievements />
          </section>

          <Contact />
        </main>

        <footer className="pt-12 border-t border-blue-500/20 text-sm opacity-80 mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div>© {new Date().getFullYear()} {site.name}</div>
              <div className="text-xs opacity-60 mt-1">{site.location}</div>
            </div>
            <div className="flex items-center gap-6">
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
              <a href={site.portfolio} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">Portfolio</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
