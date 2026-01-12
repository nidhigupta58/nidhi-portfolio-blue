import React, { useState } from 'react'

export default function ReadMore({ children, limit = 150, className = '' }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (children.length <= limit) {
    return <p className={`text-sm opacity-90 ${className}`}>{children}</p>
  }

  return (
    <div>
      <p className={`text-sm opacity-90 mb-2 ${className}`}>
        {isExpanded ? children : `${children.substring(0, limit)}...`}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}