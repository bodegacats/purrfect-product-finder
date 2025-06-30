
import { Card } from "@/components/ui/card";
import NineLivesRating from "@/components/NineLivesRating";
import NineLivesBadge from "@/components/NineLivesBadge";

const HowRatingWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <span className="text-6xl mr-4">🔬</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              How the 9 Lives Rating Works
            </h2>
            <span className="text-6xl ml-4">🔬</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each product is evaluated across 9 essential categories, earning one "life" for excellence in each area. Think of it as a report card for cat products! 📝
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">1-3</span>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-2">Basic Quality 📝</h3>
            <NineLivesRating rating={2} />
            <p className="text-gray-600 mt-3">
              Products that meet minimum standards but have significant limitations
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">4-8</span>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-2">Recommended 👍</h3>
            <NineLivesRating rating={7} />
            <p className="text-gray-600 mt-3">
              Solid products that excel in most areas with minor compromises
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-200 bg-yellow-50">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-yellow-600">9</span>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-2">Perfect Score 🏆</h3>
            <div className="flex justify-center mb-3">
              <NineLivesBadge />
            </div>
            <NineLivesRating rating={9} />
            <p className="text-gray-600 mt-3">
              Outstanding products that excel in every category we test
            </p>
          </Card>
        </div>

        <div className="bg-navy-50 rounded-2xl p-8 relative">
          <div className="absolute top-4 right-4 text-4xl">🎯</div>
          <h3 className="text-2xl font-bold text-navy-800 text-center mb-8">
            The 9 Essential Categories We Test 📋
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <span className="font-semibold text-navy-800">Safety & Materials 🛡️</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <span className="font-semibold text-navy-800">Durability & Build 🔨</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <span className="font-semibold text-navy-800">Cat Acceptance 😻</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <span className="font-semibold text-navy-800">Ease of Use 👥</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <span className="font-semibold text-navy-800">Value for Money 💰</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <span className="font-semibold text-navy-800">Innovation 💡</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">7</span>
                </div>
                <span className="font-semibold text-navy-800">Customer Support 📞</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
                <span className="font-semibold text-navy-800">Environmental Impact 🌱</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">9</span>
                </div>
                <span className="font-semibold text-navy-800">Long-term Performance 📈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowRatingWorks;
