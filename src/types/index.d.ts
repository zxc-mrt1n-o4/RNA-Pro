import { SVGProps } from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export interface SocialIcon {
  name: string
  href: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export interface NavigationItem {
  name: string
  href: string
}

export interface ServiceType {
  id: string
  name: string
  description: string
  features: string[]
  image: string
  price: string
}

export interface PropertyType {
  id: string
  name: string
}

export interface Project {
  title: string
  description: string
  category: string
  imageUrl: string
  details: string
  duration: string
} 