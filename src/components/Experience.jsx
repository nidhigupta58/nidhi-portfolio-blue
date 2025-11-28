import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Experience</h3>

      <motion.ol
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="border-l border-gray-700/40 pl-4 space-y-6"
      >

        {/* Persist Ventures – Full Stack Engineer */}
        <li>
          <div className="text-sm font-semibold">
            Full Stack Engineer — Persist Ventures
          </div>
          <div className="text-xs opacity-80">Jul 2024 — Jul 2025 · 1 yr 1 mo</div>
          <div className="text-sm opacity-80 mt-1">
            Worked on scalable full-stack development using Symfony, PHP, and
            multiple modern web technologies. Contributed across backend,
            frontend, and system architecture.
          </div>
        </li>

        {/* Persist Ventures – Co-Founder of WeMotions */}
        <li>
          <div className="text-sm font-semibold">
            Co-Founder — WeMotions (Persist Ventures)
          </div>
          <div className="text-xs opacity-80">Apr 2025 — Jul 2025 · 4 mos</div>
          <div className="text-sm opacity-80 mt-1">
            Co-founded and contributed to building product features, UX,
            and development workflows for the WeMotions platform.
          </div>
        </li>

        {/* Silver Oak Health — Internship */}
        <li>
          <div className="text-sm font-semibold">
            Software Product Developer — Silver Oak Health (Internship)
          </div>
          <div className="text-xs opacity-80">Oct 2022 — Jan 2023 · 4 mos</div>
          <div className="text-sm opacity-80 mt-1">
            Developed Laravel-based applications, resolved bugs, improved
            implementation quality, and worked on both frontend and backend
            modules.
          </div>
        </li>

        {/* SISL Infotech — Internship */}
        <li>
          <div className="text-sm font-semibold">
            Software Developer — SISL Infotech (Internship)
          </div>
          <div className="text-xs opacity-80">Oct 2021 — Jan 2022 · 4 mos</div>
          <div className="text-sm opacity-80 mt-1">
            Built a full e-commerce website using HTML, CSS, JavaScript,
            Bootstrap, Vue, and React. Designed responsive UI/UX and optimized
            multi-device performance.
          </div>
        </li>

      </motion.ol>
    </div>
  )
}
