
import { Card } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal-900 mb-6">
            Why Cat Parents Trust CatData AI
          </h2>
          <p className="text-xl text-charcoal-600">
            We're cat people, just like you. We analyze everything because we want the best for our furry family members.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-gray-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-4">Data-Driven Analysis</h3>
            <p className="text-charcoal-600 leading-relaxed">
              We aggregate thousands of reviews and data points to find what truly works for cats.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-gray-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-4">Verified Quality</h3>
            <p className="text-charcoal-600 leading-relaxed">
              Every recommendation goes through our rigorous 9 Lives Rating System for quality assurance.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300 border-gray-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">💕</span>
            </div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-4">Made by Cat Lovers</h3>
            <p className="text-charcoal-600 leading-relaxed">
              Real recommendations from cat parents who know every cat is unique and wonderful.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
