 import AIFeatureds from "@/components/AIFeatureds"
import BrowseCategory from "@/components/BrowseCategory"
import FeaturedListing from "@/components/FeaturedListing"
import HeroSection from "@/components/HeroSection"
import HomeDwellWorks from "@/components/HowDewllWorks"
import Testimonies from "@/components/Testimonials"
import TrustSection from "@/components/TrustSection"
export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustSection />
      <FeaturedListing />
      <HomeDwellWorks />
      <BrowseCategory />
      <Testimonies />
      <AIFeatureds />
      
    </main>
  )
}  