
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">🌟</div>
        <div className="absolute bottom-10 right-10 text-6xl">🌟</div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Find Purr-fect Products for Your Cat? 😻
        </h2>
        <p className="text-xl text-navy-200 mb-8">
          Join thousands of cat parents who trust us to find the good stuff (so they can spend more time with their cats!) 🐾
        </p>
        <Button 
          size="lg" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get Started Today! 🚀
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
