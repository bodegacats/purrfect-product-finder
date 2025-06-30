
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <span className="text-6xl mr-4">❤️</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              Why Cat Parents Trust CatData AI
            </h2>
            <span className="text-6xl ml-4">❤️</span>
          </div>
          <p className="text-xl text-gray-600">
            We're cat people, just like you! We analyze everything because we want the best for our furry family members 🏠
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-4">Data-Driven Analysis</h3>
            <p className="text-gray-600">
              We aggregate and analyze thousands of reviews, ratings, and data points from across the web to find what truly works for cats and their humans.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-4">Verified Quality</h3>
            <p className="text-gray-600">
              Every recommendation goes through our rigorous 9 Lives Rating System, ensuring only the most consistently praised products make the cut.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">💕</span>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-4">Made by Cat Lovers</h3>
            <p className="text-gray-600">
              Get recommendations based on real user experiences and comprehensive data analysis. We know every cat is unique (and wonderfully weird)!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
