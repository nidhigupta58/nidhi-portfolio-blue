import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedCounter({ end = 100, duration = 1.5, suffix = '' }) {
  const ref = useRef()
  const isInView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const frames = Math.round(60 * duration)
    const increment = end / frames
    let frame = 0
    const id = setInterval(() => {
      frame++
      start += increment
      if (frame >= frames) {
        setValue(end)
        clearInterval(id)
      } else {
        setValue(Math.round(start))
      }
    }, 1000 / 60)
    return () => clearInterval(id)
  }, [isInView, end, duration])

  return (
    <div ref={ref}>
      <motion.div className="text-3xl font-extrabold">{value}{suffix}</motion.div>
    </div>
  )
}
