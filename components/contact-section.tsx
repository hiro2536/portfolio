"use client"

import { StarIcon } from "@/components/icons/star-icon"

export default function ContactSection() {
  return (
    <section id="links" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-5 opacity-10">
        <StarIcon className="w-8 h-8 text-accent" />
      </div>
      <div className="absolute top-20 right-1/4 opacity-10">
        <StarIcon className="w-6 h-6 text-accent" />
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground px-8 py-4">
              Links
            </h2>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-primary rounded-2xl" />
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-dashed border-primary/40 rounded-3xl" />
          </div>
        </div>

        {/* Links card */}
        <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-lg border-4 border-primary">
          {/* Inner lace border */}
          <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-primary/30" />
          
          <div className="relative z-10 text-center flex justify-center items-center py-4">
            {/* GitHub link button */}
            <a
              href="https://github.com/hiro2536"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 
                         bg-primary text-primary-foreground rounded-full
                         font-bold text-lg shadow-lg
                         transition-all duration-300
                         hover:shadow-xl hover:translate-y-[-2px]
                         active:translate-y-[2px] active:shadow-md"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
              {/* Decorative dots */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary rounded-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

