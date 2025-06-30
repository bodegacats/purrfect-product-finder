
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 py-32 lg:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            Find Cat Products Worth
            <span className="block text-orange-400 mt-2">All 9 Lives</span>
          </h1>
          <p className="text-2xl md:text-3xl text-navy-200 mb-16 max-w-4xl mx-auto font-light">
            We analyze thousands of reviews so you only see the winners
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 mb-16 text-navy-200">
            <div className="text-lg font-medium">50,000+ Products Analyzed</div>
            <div className="hidden md:block w-px h-6 bg-navy-600"></div>
            <div className="text-lg font-medium">Data-Driven Reviews</div>
            <div className="hidden md:block w-px h-6 bg-navy-600"></div>
            <div className="text-lg font-medium">Only Winners Make the Cut</div>
          </div>

          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-xl font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Search
            <Search className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
