"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function ProfileSection() {
  const { ref: profileRef, isVisible: profileVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="profile" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section title with decorative frame */}
        <div 
          ref={profileRef}
          className={`text-center mb-16 transition-all duration-700 ${
            profileVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground px-8 py-4">
              Profile
            </h2>
            {/* Decorative lace border */}
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-primary rounded-2xl" />
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-dashed border-primary/40 rounded-3xl" />
          </div>
        </div>

        {/* Profile card */}
        <div className="relative bg-card rounded-3xl p-8 mb-16 shadow-lg">
          {/* Lace border effect */}
          <div className="absolute inset-0 rounded-3xl border-4 border-primary" />
          <div className="absolute inset-2 rounded-2xl border border-dashed border-primary/30" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Avatar with lace border */}
            <div className="relative">
              <div className="w-42 h-42 md:w-48 md:h-48 rounded-full bg-secondary overflow-hidden border-4 border-primary relative flex items-center justify-center shadow-md">
                <img
                  src="/usako.png"
                  alt="プロフィール画像"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative lace around avatar */}
              <div className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/50 pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-dotted border-accent/40 pointer-events-none" />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">ひろ</h3>
              <p className="text-accent font-medium mb-4">Hiro</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-primary/30">
                  福岡工業大学
                </span>
                <span className="px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-primary/30">
                  情報工学部
                </span>
                <span className="px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-primary/30">
                  情報工学科
                </span>
                <span className="px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm border border-primary/30">
                  3年生
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mt-8 pt-8 border-t border-dashed border-primary/30">
            <p className="text-muted-foreground leading-relaxed text-center md:text-left">
             情報技術研究部（じょぎ）に所属し、ハッカソンやチーム開発に取り組んできました。<br></br>
             使う人に喜んでもらえるサービスを作ることを目指し、現在は個人開発にも挑戦しています！
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
