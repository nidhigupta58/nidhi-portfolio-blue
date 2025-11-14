import React from 'react'

export default function AnimatedBlob({ className='', style={} }) {
  return (
    <div className={'blob ' + className} style={style} aria-hidden>
      <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <g transform="translate(100 100)">
          <path fill="url(#g1)" d="M36.5,-46.6C46.6,-33.9,53.8,-16.9,52.2,-1.3C50.6,14.3,40.2,28.6,28.3,37.6C16.4,46.6,3,50.2,-12.1,53.6C-27.2,57,-45.9,60.2,-55.7,50.9C-65.5,41.6,-66.4,19.9,-64.1,0.4C-61.8,-19.1,-56.3,-38.1,-44.6,-51C-32.9,-63.9,-16.5,-70.7,-0.4,-70.2C15.6,-69.6,31.2,-61.6,36.5,-46.6Z" />
        </g>
      </svg>
    </div>
  )
}
