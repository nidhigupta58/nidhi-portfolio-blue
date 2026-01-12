import React from 'react'
import { motion } from 'framer-motion'
import { FiBook } from 'react-icons/fi'

export default function Education() {
  const education = [
    {
      degree: 'MCA in Computer Applications',
      institution: 'Swami Vivekanand Subharti University',
      location: 'Meerut, India',
      period: "Sep '19 — Apr '22",
      description: 'Studied core subjects including Java, Data Structures, DBMS, Web Technologies, Software Engineering, and Operating Systems with practical project experience.'
    },
    {
      degree: 'B.SC in Computer Science, Maths, and Physics',
      institution: 'Lucknow University',
      location: 'Lucknow, India',
      period: "Jul '14 — Mar '18",
      description: 'Focused on programming fundamentals, data structures, algorithms, mathematical problem-solving, and core physics concepts, building a strong analytical and logical foundation for software development.'
    }
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 neon">Education</h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="card p-5 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                <FiBook className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div>
                    <div className="text-lg font-bold">{edu.degree}</div>
                    <div className="text-sm font-semibold text-blue-400">{edu.institution}</div>
                  </div>
                  <div className="text-xs opacity-70">{edu.period}</div>
                </div>
                <div className="text-xs opacity-60 mb-2">{edu.location}</div>
                <div className="text-sm opacity-90 leading-relaxed">{edu.description}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

