import React from 'react'
import { site } from '../data/site'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="mb-12 relative z-10">
      <h3 className="text-3xl font-bold mb-6 neon">Get in touch</h3>

      <motion.form
        initial={{opacity:0, y:8}}
        whileInView={{opacity:1, y:0}}
        className="max-w-xl w-full"
        onSubmit={(e) => {
          e.preventDefault()
          const form = new FormData(e.target)
          const name = form.get('name')
          const email = form.get('email')
          const message = form.get('message')
          window.location.href = `mailto:${site.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n' + email)}`
        }}
      >
        <div className="grid gap-3 md:grid-cols-2">
          <input name="name" required placeholder="Your name" className="px-3 py-3 rounded-md border bg-white/3" />
          <input name="email" required placeholder="Your email" type="email" className="px-3 py-3 rounded-md border bg-white/3" />
        </div>

        <textarea name="message" required placeholder="Message" className="w-full px-3 py-3 rounded-md border mt-3 min-h-[140px] bg-white/3" />

        <div className="flex items-center gap-3 mt-3">
          <button type="submit" className="px-5 py-3 rounded-full btn-accent shadow-lg">Send message</button>
          <a href="https://github.com/nidhigupta58/nidhigupta58/blob/main/Nidhi%20Gupta.pdf" className="text-sm underline">Download CV</a>
        </div>
      </motion.form>
    </section>
  )
}
