export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  link: string
}

export interface Skill {
  name: string
  level: number
  icon: string
}

export interface Experience {
  year: string
  position: string
  company: string
}

export interface ContactInfo {
  icon: React.ReactNode
  label: string
  value: string
}

export interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

export interface NavItem {
  name: string
  href: string
}
