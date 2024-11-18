import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom"
import Gallery from "@/components/Gallery/Gallery"
import HeroSection from "@/components/HeroSection/HeroSection"
import NewsLetter from "@/components/NewsLetter/NewsLetter"
import PageSearch from "@/components/PageSearch/PageSearch"

const Home = () => {
  return (
  <div className="px-6 lg:px-20 md:px-10">
    <HeroSection />
    <PageSearch />
    <FeaturedRoom />
    <Gallery />
    <NewsLetter />
  </div>
  )
}

export default Home
