import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ProfileSection from "@/components/profile-section"
import RecentWorks from "@/components/recent-works"
import RecentActivities from "@/components/recent-activities"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProfileSection />
      <RecentWorks />
      <RecentActivities />
      <ContactSection />
      <Footer />
    </main>
  )
}
