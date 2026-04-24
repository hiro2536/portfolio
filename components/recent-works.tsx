"use client"

import Image from "next/image"
import Link from "next/link"
import { RibbonIcon } from "@/components/icons/ribbon-icon"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { worksData, type WorkItem } from "@/lib/data"

export default function RecentWorks() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 })

  // Show only the latest 3 works
  const recentWorks = worksData.slice(0, 3)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground px-8 py-4">
              Recent Works
            </h2>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-primary rounded-2xl" />
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-dashed border-primary/40 rounded-3xl" />
          </div>
          <p className="mt-8 text-muted-foreground">最近の制作物</p>
        </div>

        {/* Works grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            gridVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          {recentWorks.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-8 py-4 
                       bg-secondary text-secondary-foreground rounded-full
                       font-bold text-lg shadow-lg border-2 border-primary
                       transition-all duration-300
                       hover:shadow-xl hover:translate-y-[-2px]
                       active:translate-y-[2px] active:shadow-md"
          >
            <span>全作品を見る</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function WorkCard({ work, index }: { work: WorkItem; index: number }) {
  return (
    <div 
      className="group relative bg-secondary rounded-3xl overflow-hidden 
                 border-4 border-primary shadow-lg
                 transition-all duration-300 
                 hover:shadow-xl hover:translate-y-[-4px]
                 active:translate-y-[2px] active:shadow-md"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Lace border top */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,var(--primary)_8px,var(--primary)_10px,transparent_10px,transparent_16px)] opacity-30" />
      
      {/* Content wrapper with present box feeling */}
      <div className="relative">
        {/* Ribbon decoration at top */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
          <RibbonIcon className="w-20 h-10 text-primary drop-shadow-md" />
        </div>
        
        {/* Image */}
        <div className="relative h-40 bg-muted overflow-hidden mt-4">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Card content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-foreground mb-2">{work.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{work.description}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {work.tags.slice(0, 2).map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-0.5 bg-card text-foreground text-xs font-medium
                           border border-primary/40 rounded-full"
              >
                {tag}
              </span>
            ))}
            {work.tags.length > 2 && (
              <span className="px-2 py-0.5 text-muted-foreground text-xs">
                +{work.tags.length - 2}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
