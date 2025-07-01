
import { Search, ArrowRight, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Products Your Cat Can
              <span className="block text-orange-500 mt-2">Rely On—Every Time</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Our AI assistant recommends litter boxes, food, toys and more—each scored on durability, safety and value using our 9-Lives system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Cat's Test Drive
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="border-gray-300 text-gray-300 hover:text-charcoal-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Browse Top Rated Products
                <Grid3X3 className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 text-gray-300">
              <div className="text-sm font-medium">Over 10,000 products analyzed</div>
              <div className="text-sm font-medium">Based on 50,000+ reviews</div>
              <div className="text-sm font-medium">Updated daily</div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full">
              <div className="bg-white rounded-lg p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🤖</span>
                  </div>
                  <div className="text-sm font-medium text-charcoal-700">CatData AI Assistant</div>
                </div>
                <div className="text-sm text-charcoal-600 mb-3">
                  "I need a litter box that's easy to clean for my two indoor cats..."
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-sm text-charcoal-800">
                    Perfect! Based on your needs, I recommend the PetSafe ScoopFree Ultra (9/9 Lives) - it's self-cleaning and handles multiple cats beautifully.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
