import React from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import AnimatedBlob from './AnimatedBlob'
import profile from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden mb-12">
      <AnimatedBlob className="left-[-100px] top-[-100px] w-[420px] h-[420px] animate-spin" style={{opacity:0.18}} />
      <AnimatedBlob className="right-[-100px] top-[120px] w-[320px] h-[320px] animate-spin" style={{opacity:0.12}} />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="p-4 md:pl-8 md:py-12 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 neon">Hi, I’m {site.name}.</h2>
          <p className="text-lg opacity-80 mb-6 max-w-xl mx-auto md:mx-0">{site.role}. I design and build production-ready web applications with delightful UX and smooth animations.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-5 py-3 rounded-full border border-white/10 backdrop-blur-sm hover:scale-105 transition transform btn-accent">See Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-full bg-white/6 text-white/90 hover:scale-105 transition transform">Contact Me</a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <div className="card p-4">
              <h4 className="text-sm opacity-80">Based in</h4>
              <div className="font-semibold">{site.location}</div>
            </div>
            <div className="card p-4">
              <h4 className="text-sm opacity-80">Available for</h4>
              <div className="font-semibold">Freelance & Full-time</div>
            </div>
          </div>
        </div>

        <motion.div initial={{ scale: 0.95 }} whileHover={{ scale: 1.03 }} className="w-full flex justify-center order-first md:order-last">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden photo-glow">
            <img src={profile} alt="Nidhi" className="w-full h-full object-cover rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
