import React from 'react'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = 'px-8 py-3 font-semibold rounded-lg transition-all duration-200 inline-block'
  
  const variants = {
    primary: 'bg-indigo-500 text-white hover:shadow-lg hover:scale-[1.02]',
    secondary: 'border border-border text-text-secondary hover:bg-white/5 hover:text-text-primary',
  }

  return (
    <a className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
