"use client"

import Link from "next/link"
import { StarIcon } from "@/components/icons/star-icon"
import { WingIcon } from "@/components/icons/wing-icon"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { timelineData } from "@/lib/data"

export default function RecentActivities() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ threshold: 0.1 })

  // Show only the latest 3 activities (reverse order to show newest first)
  const recentActivities = [...timelineData].reverse().slice(0, 3)

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
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
              Recent Activities
            </h2>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-primary rounded-2xl" />
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-dashed border-primary/40 rounded-3xl" />
          </div>
          <p className="mt-8 text-muted-foreground">最近の活動</p>
        </div>

        {/* Timeline */}
        <div 
          ref={timelineRef}
          className={`relative transition-all duration-700 delay-200 ${
            timelineVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-primary/30 rounded-full" />
          
          <div className="space-y-8">
            {recentActivities.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline marker */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10 -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-secondary border-4 border-primary flex items-center justify-center">
                    {item.icon === "star" ? (
                      <StarIcon className="w-3 h-3 text-primary" />
                    ) : (
                      <WingIcon className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div 
                    className="inline-block bg-card p-5 rounded-2xl shadow-md border-2 border-primary/20 
                               transition-all duration-300 hover:shadow-lg hover:border-primary/40"
                  >
                    <span className="text-sm text-accent font-bold">{item.year}</span>
                    <h3 className="text-lg font-bold text-foreground mt-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 
                       bg-secondary text-secondary-foreground rounded-full
                       font-bold text-lg shadow-lg border-2 border-primary
                       transition-all duration-300
                       hover:shadow-xl hover:translate-y-[-2px]
                       active:translate-y-[2px] active:shadow-md"
          >
            <span>経歴一覧を見る</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
