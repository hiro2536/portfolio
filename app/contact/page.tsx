import Footer from "@/components/footer"
import { ButterflyIcon } from "@/components/icons/butterfly-icon"
import { KeyIcon } from "@/components/icons/key-icon"
import { StarIcon } from "@/components/icons/star-icon"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      
      <section className="pt-24 pb-20 px-4 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background decorations */}
        <div className="absolute top-32 left-10 opacity-20">
          <ButterflyIcon className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <KeyIcon className="w-20 h-20 text-primary" />
        </div>
        <div className="absolute top-1/2 left-5 opacity-10">
          <StarIcon className="w-8 h-8 text-accent" />
        </div>
        <div className="absolute top-40 right-1/4 opacity-10">
          <StarIcon className="w-6 h-6 text-accent" />
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10 w-full">
          {/* Page title */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground px-8 py-4">
                Contact
              </h1>
              <div className="absolute -top-2 -left-2 -right-2 -bottom-2 border-2 border-primary rounded-2xl" />
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-dashed border-primary/40 rounded-3xl" />
            </div>
            <p className="mt-8 text-muted-foreground">お気軽にご連絡ください</p>
          </div>

          {/* Contact card */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-lg border-4 border-primary">
            {/* Inner lace border */}
            <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-primary/30" />
            
            <div className="relative z-10 text-center">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                ご質問やお仕事のご依頼など、<br className="hidden md:inline" />
                お気軽にお問い合わせください。
              </p>

              {/* Contact buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Email button with key motif */}
                <a
                  href="mailto:example@email.com"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 
                             bg-primary text-primary-foreground rounded-full
                             font-bold text-lg shadow-lg
                             transition-all duration-300
                             hover:shadow-xl hover:translate-y-[-2px]
                             active:translate-y-[2px] active:shadow-md"
                >
                  <KeyIcon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                  <span>メールを送る</span>
                  {/* Decorative dots */}
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full" />
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary rounded-full" />
                </a>

                {/* SNS button with butterfly motif */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 
                             bg-secondary text-secondary-foreground rounded-full
                             font-bold text-lg shadow-lg border-2 border-primary
                             transition-all duration-300
                             hover:shadow-xl hover:translate-y-[-2px]
                             active:translate-y-[2px] active:shadow-md"
                >
                  <ButterflyIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span>X (Twitter)</span>
                  {/* Decorative dots */}
                  <span className="absolute -top-1 -left-1 w-2 h-2 bg-primary rounded-full" />
                  <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full" />
                </a>
              </div>

              {/* GitHub link */}
              <div className="mt-8 pt-8 border-t border-dashed border-primary/30">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
