
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import RatingSystemShowcase from "@/components/sections/RatingSystemShowcase";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import HowRatingWorks from "@/components/sections/HowRatingWorks";
import AIChatPreview from "@/components/sections/AIChatPreview";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RatingSystemShowcase />
      <FeaturedProducts />
      <HowRatingWorks />
      <AIChatPreview />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
