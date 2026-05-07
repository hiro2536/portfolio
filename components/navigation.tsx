"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { RibbonIcon } from "@/components/icons/ribbon-icon"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-sm shadow-lg border-b-2 border-primary/30" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Home link */}
          <Link 
            href="/"
            className="flex items-center gap-2 group"
          >
            <RibbonIcon className="w-8 h-4 text-primary transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-foreground">Hiro's Portfolio</span>
          </Link>

          {/* Navigation links */}
          <div className="flex items-center gap-2 md:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 md:px-4 py-2 text-base md:text-lg font-medium rounded-full
                           transition-all duration-300
                           hover:bg-secondary/50
                           active:scale-95
                           ${pathname === item.href 
                             ? "text-foreground bg-secondary" 
                             : "text-muted-foreground hover:text-foreground"
                           }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative lace border when scrolled */}
      {isScrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,var(--primary)_6px,var(--primary)_8px,transparent_8px,transparent_12px)] opacity-40" />
      )}
    </nav>
  )
}
