import React from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import AnimatedBlob from './AnimatedBlob'
import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden mb-16">
      <AnimatedBlob className="left-[-100px] top-[-100px] w-[420px] h-[420px] animate-spin" style={{opacity:0.18}} />
      <AnimatedBlob className="right-[-100px] top-[120px] w-[320px] h-[320px] animate-spin" style={{opacity:0.12}} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="relative z-10 grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="p-4 md:pl-8 md:py-12 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 neon"
          >
            Hi, I'm {site.name}.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl font-semibold mb-4 text-blue-300"
          >
            {site.role}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base opacity-90 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            {site.summary}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full border border-blue-500/30 backdrop-blur-sm hover:scale-105 hover:border-blue-500/60 transition transform btn-accent font-semibold text-center"
            >
              See Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-white/6 text-white/90 hover:scale-105 hover:bg-white/10 transition transform font-semibold text-center"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <div className="card p-4 hover:border-blue-500/30 transition-colors">
              <h4 className="text-xs opacity-70 mb-1">Location</h4>
              <div className="font-semibold text-sm">{site.location}</div>
            </div>
            <div className="card p-4 hover:border-blue-500/30 transition-colors">
              <h4 className="text-xs opacity-70 mb-1">Available for</h4>
              <div className="font-semibold text-sm">Freelance & Full-time</div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.05 }} 
          className="w-full flex justify-center order-first md:order-last"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden photo-glow">
            <img src={profile} alt="Nidhi Gupta" className="w-full h-full object-cover rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
