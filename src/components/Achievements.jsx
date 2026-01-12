import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle } from 'react-icons/fi'

export default function Achievements() {
  const achievements = [
    'Delivered multiple REST APIs tested using Postman',
    'Optimized database queries to improve backend response time',
    'Active GitHub contributor with real-world projects'
  ]

  const certifications = [
    {
      name: 'WebPage Design',
      issuer: 'UPTEC'
    }
  ]

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 neon">Achievements & Certifications</h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiAward className="w-5 h-5 text-blue-400" />
            Achievements
          </h4>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-4 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm opacity-90">{achievement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiAward className="w-5 h-5 text-blue-400" />
            Certifications
          </h4>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card p-4 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{cert.name}</div>
                    <div className="text-sm opacity-70">{cert.issuer}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

