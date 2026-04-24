"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { StarIcon } from "@/components/icons/star-icon"
import { WingIcon } from "@/components/icons/wing-icon"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { timelineData } from "@/lib/data"

export default function AboutPage() {
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page title */}
          <div 
            ref={profileRef}
            className={`text-center mb-16 transition-all duration-700 ${
              profileVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block relative">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground px-8 py-4">
                About
              </h1>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-primary rounded-2xl" />
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-dashed border-primary/40 rounded-3xl" />
            </div>
            <p className="mt-8 text-muted-foreground">プロフィール・経歴</p>
          </div>

          {/* Timeline - Full career history */}
          <div 
            ref={timelineRef}
            className={`relative transition-all duration-700 delay-200 ${
              timelineVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-2xl font-bold text-foreground mb-12 text-center">経歴</h2>
            
            {/* Timeline line - ribbon style */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-24 bottom-0 w-4 bg-primary/20 rounded-full" />
            <div className="absolute left-1/2 transform -translate-x-1/2 top-24 bottom-0 w-1 bg-primary rounded-full" />
            
            <div className="space-y-12 relative">
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div 
                      className="inline-block bg-card p-6 rounded-2xl shadow-md border-2 border-primary/20 
                                 transition-all duration-300 hover:shadow-lg hover:border-primary/40 
                                 hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-sm"
                    >
                      <span className="text-sm text-accent font-bold">{item.year}</span>
                      <h3 className="text-lg font-bold text-foreground mt-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline marker - star or wing */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-secondary border-4 border-primary flex items-center justify-center">
                      {item.icon === "star" ? (
                        <StarIcon className="w-4 h-4 text-primary" />
                      ) : (
                        <WingIcon className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
