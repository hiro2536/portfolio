"use client"

import { RibbonIcon } from "@/components/icons/ribbon-icon"
import { StarIcon } from "@/components/icons/star-icon"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="relative py-12 px-4 bg-primary text-primary-foreground">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,var(--secondary)_10px,var(--secondary)_12px,transparent_12px,transparent_20px)]" />
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative ribbon */}
        <div className="flex justify-center mb-6">
          <RibbonIcon className="w-20 h-10 text-secondary opacity-60" />
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          <a 
            href="#profile" 
            className="hover:text-secondary transition-colors flex items-center gap-1"
          >
            <StarIcon className="w-3 h-3" />
            <span>Profile</span>
          </a>
          <a 
            href="#works" 
            className="hover:text-secondary transition-colors flex items-center gap-1"
          >
            <StarIcon className="w-3 h-3" />
            <span>Works</span>
          </a>
          <a 
            href="#contact" 
            className="hover:text-secondary transition-colors flex items-center gap-1"
          >
            <StarIcon className="w-3 h-3" />
            <span>Contact</span>
          </a>
        </nav>
        
        {/* Divider */}
        <div className="w-32 h-px bg-primary-foreground/30 mx-auto mb-6" />
        
        {/* Copyright */}
        <p className="text-sm opacity-80">
          &copy; {currentYear} Portfolio. All rights reserved.
        </p>
        <p className="text-xs opacity-60 mt-2">
          Made with love
        </p>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-4 left-8 opacity-20">
        <StarIcon className="w-4 h-4" />
      </div>
      <div className="absolute bottom-6 right-12 opacity-20">
        <StarIcon className="w-3 h-3" />
      </div>
    </footer>
  )
}
