
import NineLivesRating from "@/components/NineLivesRating";

const RatingSystemShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <span className="text-6xl mr-4">⭐</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              The 9 Lives Rating System
            </h2>
            <span className="text-6xl ml-4">⭐</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our signature rating system evaluates products across 9 critical factors that matter most to cats and their humans 🤝
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <NineLivesRating rating={9} size="lg" />
              <p className="mt-3 font-semibold text-navy-800">Perfect Score 🏆</p>
              <p className="text-sm text-gray-600">Outstanding in every way</p>
            </div>
            <div className="text-center">
              <NineLivesRating rating={7} size="lg" />
              <p className="mt-3 font-semibold text-navy-800">Excellent 👍</p>
              <p className="text-sm text-gray-600">Highly recommended</p>
            </div>
            <div className="text-center">
              <NineLivesRating rating={5} size="lg" />
              <p className="mt-3 font-semibold text-navy-800">Good 👌</p>
              <p className="text-sm text-gray-600">Solid choice with trade-offs</p>
            </div>
            <div className="text-center">
              <NineLivesRating rating={2} size="lg" />
              <p className="mt-3 font-semibold text-navy-800">Meh 😐</p>
              <p className="text-sm text-gray-600">Look for alternatives</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingSystemShowcase;
