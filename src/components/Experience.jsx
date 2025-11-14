import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Experience</h3>
      <motion.ol initial={{opacity:0}} whileInView={{opacity:1}} className="border-l border-gray-700/40 pl-4 space-y-6">
        <li>
          <div className="text-sm font-semibold">Frontend Developer — Acme Corp</div>
          <div className="text-xs opacity-80">2023 — Present</div>
          <div className="text-sm opacity-80 mt-1">Worked on performance optimizations and component libraries.</div>
        </li>

        <li>
          <div className="text-sm font-semibold">Full Stack Intern — Startup</div>
          <div className="text-xs opacity-80">2021 — 2022</div>
          <div className="text-sm opacity-80 mt-1">Built features end-to-end using React and Laravel.</div>
        </li>
      </motion.ol>
    </div>
  )
}
