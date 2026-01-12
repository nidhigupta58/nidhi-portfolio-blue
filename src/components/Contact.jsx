import React from 'react'
import { site } from '../data/site'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="mb-12 relative z-10">
      <h3 className="text-3xl font-bold mb-8 neon">Get in touch</h3>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="card p-5 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <FiMail className="w-5 h-5 text-blue-400" />
              <h4 className="font-semibold">Email</h4>
            </div>
            <a href={`mailto:${site.email}`} className="text-sm opacity-90 hover:text-blue-400 transition-colors">
              {site.email}
            </a>
          </div>

          <div className="card p-5 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <FiPhone className="w-5 h-5 text-blue-400" />
              <h4 className="font-semibold">Phone</h4>
            </div>
            <a href={`tel:${site.phone}`} className="text-sm opacity-90 hover:text-blue-400 transition-colors">
              {site.phone}
            </a>
          </div>

          <div className="card p-5 hover:border-blue-500/30 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <FiMapPin className="w-5 h-5 text-blue-400" />
              <h4 className="font-semibold">Location</h4>
            </div>
            <p className="text-sm opacity-90">{site.location}</p>
            <p className="text-xs opacity-70 mt-1">{site.address}</p>
          </div>
        </motion.div>

        <motion.form
          initial={{opacity:0, y:8}}
          whileInView={{opacity:1, y:0}}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-6"
          onSubmit={(e) => {
            e.preventDefault()
            const form = new FormData(e.target)
            const name = form.get('name')
            const email = form.get('email')
            const message = form.get('message')
            window.location.href = `mailto:${site.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n' + email)}`
          }}
        >
          <div className="grid gap-3 md:grid-cols-2 mb-3">
            <input 
              name="name" 
              required 
              placeholder="Your name" 
              className="px-4 py-3 rounded-md border border-white/10 bg-white/5 focus:bg-white/10 focus:border-blue-500/50 focus:outline-none transition-colors" 
            />
            <input 
              name="email" 
              required 
              placeholder="Your email" 
              type="email" 
              className="px-4 py-3 rounded-md border border-white/10 bg-white/5 focus:bg-white/10 focus:border-blue-500/50 focus:outline-none transition-colors" 
            />
          </div>

          <textarea 
            name="message" 
            required 
            placeholder="Your message" 
            className="w-full px-4 py-3 rounded-md border border-white/10 bg-white/5 focus:bg-white/10 focus:border-blue-500/50 focus:outline-none transition-colors mt-3 min-h-[140px] resize-none" 
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
            <button 
              type="submit" 
              className="px-6 py-3 rounded-full btn-accent shadow-lg hover:scale-105 transition-transform font-semibold"
            >
              Send message
            </button>
            <a 
              href="https://github.com/nidhigupta58/nidhigupta58/blob/main/Nidhi%20Gupta.pdf" 
              target="_blank"
              rel="noreferrer"
              className="text-sm underline hover:text-blue-400 transition-colors"
            >
              Download CV
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
