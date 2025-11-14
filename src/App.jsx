import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  const [dark, setDark] = useState(true)

  return (
    <div className={dark ? 'min-h-screen text-gray-100' : 'min-h-screen text-gray-900 bg-white'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <Header dark={dark} setDark={setDark} />
        <Hero />

        <main>
          <Projects />

          <section className="mb-12 grid md:grid-cols-2 gap-8 mt-8">
            <Skills />
            <Experience />
          </section>

          <Contact />
        </main>

        <footer className="pt-12 border-t border-gray-800/40 text-sm opacity-80 mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">© {new Date().getFullYear()} Nidhi Gupta</div>
            <div className="flex items-center gap-4">
              <a href="#" className="underline">Privacy</a>
              <a href="#" className="underline">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
