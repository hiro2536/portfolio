"use client"

import Image from "next/image"
import { RibbonIcon } from "@/components/icons/ribbon-icon"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const worksData = [
  {
    id: 1,
    title: "Task Management App",
    description: "シンプルで使いやすいタスク管理アプリケーション。ドラッグ&ドロップでタスクの並び替えが可能。",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "リアルタイムで天気情報を表示するダッシュボード。美しいUIと直感的な操作性。",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "API", "Chart.js"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "このポートフォリオサイト。ゴシック×かわいいをテーマにデザイン。",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 4,
    title: "Chat Application",
    description: "リアルタイムチャット機能を持つWebアプリケーション。WebSocketを使用。",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Socket.io", "Node.js"]
  }
]

export default function WorksSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="works" className="py-20 px-4 bg-background">
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
              最近の作品
            </h2>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-primary rounded-2xl" />
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-dashed border-primary/40 rounded-3xl" />
          </div>
          <p className="mt-8 text-muted-foreground">制作した作品たち</p>
        </div>

        {/* Works grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${
            gridVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          {worksData.map((work, index) => (
            <WorkCard key={work.id} work={work} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function WorkCard({ work, index }: { work: typeof worksData[0]; index: number }) {
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
      
      {/* Frill border bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,var(--primary)_8px,var(--primary)_10px,transparent_10px,transparent_16px)] opacity-30" />
      
      {/* Content wrapper with present box feeling */}
      <div className="relative">
        {/* Ribbon decoration at top */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
          <RibbonIcon className="w-24 h-12 text-primary drop-shadow-md" />
        </div>
        
        {/* Image */}
        <div className="relative h-48 bg-muted overflow-hidden mt-4">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        </div>
        
        {/* Card content */}
        <div className="p-6 pt-8">
          <h3 className="text-xl font-bold text-foreground mb-3">{work.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{work.description}</p>
          
          {/* Tags as ribbons */}
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag, index) => (
              <span 
                key={index}
                className="relative px-4 py-1 bg-card text-foreground text-xs font-medium
                           border-2 border-primary/40 rounded-full
                           before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:-translate-x-1
                           before:w-2 before:h-2 before:bg-accent before:rounded-full
                           after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:translate-x-1
                           after:w-2 after:h-2 after:bg-accent after:rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
    </div>
  )
}
