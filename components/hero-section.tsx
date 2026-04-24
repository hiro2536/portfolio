"use client"

import { RibbonIcon } from "@/components/icons/ribbon-icon"
import { StarIcon } from "@/components/icons/star-icon"
import { CrossIcon } from "@/components/icons/cross-icon"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[repeating-linear-gradient(90deg,transparent,transparent_20px,rgba(178,223,252,0.3)_20px,rgba(178,223,252,0.3)_22px)]">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-60">
        <StarIcon className="w-8 h-8 text-primary" />
      </div>
      <div className="absolute top-20 right-20 opacity-40">
        <CrossIcon className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-50">
        <CrossIcon className="w-5 h-5 text-primary" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-60">
        <StarIcon className="w-10 h-10 text-primary" />
      </div>
      
      {/* Main content with decorative frame */}
      <div className="relative z-10 text-center px-4">
        {/* Top ribbon */}
        <div className="flex justify-center mb-8">
          <RibbonIcon className="w-48 h-24 text-secondary" />
        </div>
        
        {/* Decorative frame */}
        <div className="relative inline-block p-8 md:p-12">
          {/* Frame corners */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary rounded-br-2xl" />
          
          {/* Lace border effect */}
          <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-xl" />
          
          <div className="relative z-10">
            <p className="text-sm md:text-base text-muted-foreground mb-4 tracking-widest">Welcome to my Portfolio</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              ひろのポートフォリオ
            </h1>
            
            {/* Scroll indicator */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex flex-col items-center gap-2 transition-transform duration-300 hover:translate-y-1 active:scale-95"
              >
                <span className="text-sm text-muted-foreground">Scroll</span>
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
                  <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom ribbon */}
        <div className="flex justify-center mt-8">
          <RibbonIcon className="w-32 h-16 text-secondary transform rotate-180" />
        </div>
      </div>
      
      {/* Background dots pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-2 h-2 bg-primary rounded-full top-[15%] left-[25%]" />
        <div className="absolute w-2 h-2 bg-primary rounded-full top-[35%] right-[30%]" />
        <div className="absolute w-2 h-2 bg-primary rounded-full bottom-[25%] left-[35%]" />
        <div className="absolute w-2 h-2 bg-primary rounded-full bottom-[40%] right-[20%]" />
        <div className="absolute w-1.5 h-1.5 bg-accent rounded-full top-[60%] left-[15%]" />
        <div className="absolute w-1.5 h-1.5 bg-accent rounded-full top-[25%] right-[15%]" />
      </div>
    </section>
  )
}
