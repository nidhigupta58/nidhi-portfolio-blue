import React from 'react'
import { skills } from '../data/skills'
import AnimatedCounter from './AnimatedCounter'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Skills & Stats</h3>

      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-full md:w-1/2">
            {skills.map((s,i) => (
              <motion.div key={s.name} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:i*0.08}} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{s.name}</span>
                  <span className="text-sm opacity-80">{s.level}%</span>
                </div>
                <div className="w-full bg-white/6 rounded-full h-3 overflow-hidden">
                  <div style={{width: s.level + '%'}} className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE — DYNAMIC STATS */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">

            <div className="card flex flex-col items-start p-4">
              <AnimatedCounter end={stats.projects} suffix="+" />
              <div className="text-sm opacity-80">Projects completed</div>
            </div>

            <div className="card flex flex-col items-start p-4">
              <AnimatedCounter end={stats.experience} suffix=" yrs" />
              <div className="text-sm opacity-80">Experience</div>
            </div>

            <div className="card flex flex-col items-start p-4">
              <AnimatedCounter end={stats.commits} suffix="+" />
              <div className="text-sm opacity-80">Commits</div>
            </div>

            <div className="card flex flex-col items-start p-4">
              <AnimatedCounter end={stats.tools} suffix="+" />
              <div className="text-sm opacity-80">Tools used</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
