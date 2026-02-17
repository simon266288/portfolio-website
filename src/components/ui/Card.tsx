import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({ 
  className = '', 
  children, 
  hover = true 
}) => {
  return (
    <div className={`
      bg-background-secondary rounded-2xl overflow-hidden shadow-card 
      ${hover ? 'hover:shadow-lg hover:scale-[1.02]' : ''} 
      transition-all duration-300 border border-border
      ${className}
    `}>
      {children}
    </div>
  )
}
