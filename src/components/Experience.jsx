import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 neon">Experience</h3>

      <motion.ol
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-l border-blue-500/30 pl-6 space-y-8"
      >
        {/* Persist Ventures */}
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#031226]"></div>
          <div className="card p-5 hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <div className="text-lg font-bold">Co-Founder || Full-stack Developer</div>
                <div className="text-sm font-semibold text-blue-400">Persist Ventures</div>
              </div>
              <div className="text-xs opacity-70">Jul '24 — Jul '25</div>
            </div>
            <div className="text-xs opacity-60 mb-2">California, United States</div>
            <div className="text-sm opacity-90 leading-relaxed">
              Worked on both backend and frontend technologies, building their WebApp in ReactJS, and worked on Symfony PHP backend, and built lots of REST APIs.
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">PHP</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Symfony</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">NextJS</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">ReactJS</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Redux</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">REST APIs</span>
            </div>
          </div>
        </motion.li>

        {/* Silver Oak Health */}
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#031226]"></div>
          <div className="card p-5 hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <div className="text-lg font-bold">Software Product Developer</div>
                <div className="text-sm font-semibold text-blue-400">Silver Oak Health</div>
              </div>
              <div className="text-xs opacity-70">Oct '22 — Jan '23</div>
            </div>
            <div className="text-xs opacity-60 mb-2">Bangalore, India</div>
            <div className="text-sm opacity-90 leading-relaxed">
              Designed backend using Laravel, managed database operations using DBeaver & MySQL, integrated REST APIs, and frontend using HTML, CSS, JS.
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Laravel</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">PHP</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">MySQL</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">REST API</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Bootstrap</span>
            </div>
          </div>
        </motion.li>

        {/* SISL Infotech */}
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-blue-500 border-2 border-[#031226]"></div>
          <div className="card p-5 hover:border-blue-500/30 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <div className="text-lg font-bold">Software Developer</div>
                <div className="text-sm font-semibold text-blue-400">SISL Infotech</div>
              </div>
              <div className="text-xs opacity-70">Oct '21 — Jan '22</div>
            </div>
            <div className="text-xs opacity-60 mb-2">New Delhi, India</div>
            <div className="text-sm opacity-90 leading-relaxed">
              E-Commerce Website: developed responsive UI with Vue.js and ReactJS, implemented auto-sliding cards, multi-page form flows, and authentication, built the Contact Page, and integrated SocialLinks.
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Vue.js</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">ReactJS</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">HTML</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">CSS</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">Bootstrap</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">jQuery</span>
            </div>
          </div>
        </motion.li>
      </motion.ol>
    </div>
  )
}
