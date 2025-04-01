import HeroSection from "@/components/hero-section"
import HowItWorks from "@/components/how-it-works"
import ExpertSection from "@/components/expert-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ef]">
      <HeroSection />
      <HowItWorks />
      <ExpertSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

