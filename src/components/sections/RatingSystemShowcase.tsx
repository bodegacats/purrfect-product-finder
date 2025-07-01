
import NineLivesRating from "@/components/NineLivesRating";

const RatingSystemShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal-900 mb-6">
            The 9 Lives Rating System
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto mb-12">
            Each product is scored on durability, safety and value using our comprehensive 9-Lives system.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-8">
            <div className="text-center">
              <NineLivesRating rating={9} size="lg" showNumeric={false} />
              <p className="mt-3 font-semibold text-charcoal-800">8–9 Lives</p>
              <p className="text-sm text-charcoal-600">9-Lives Certified</p>
            </div>
            <div className="text-center">
              <NineLivesRating rating={7} size="lg" showNumeric={false} />
              <p className="mt-3 font-semibold text-charcoal-800">6–7 Lives</p>
              <p className="text-sm text-charcoal-600">Premium</p>
            </div>
            <div className="text-center">
              <NineLivesRating rating={5} size="lg" showNumeric={false} />
              <p className="mt-3 font-semibold text-charcoal-800">5 Lives</p>
              <p className="text-sm text-charcoal-600">Best Value</p>
            </div>
            <div className="text-center">
              <NineLivesRating rating={3} size="lg" showNumeric={false} />
              <p className="mt-3 font-semibold text-charcoal-800">3–4 Lives</p>
              <p className="text-sm text-charcoal-600">Budget Pick</p>
            </div>
            <div className="text-center">
              <NineLivesRating rating={1} size="lg" showNumeric={false} />
              <p className="mt-3 font-semibold text-charcoal-800">1–2 Lives</p>
              <p className="text-sm text-charcoal-600">Low-durability</p>
            </div>
          </div>

          <div className="text-center text-charcoal-600 max-w-2xl mx-auto">
            <p className="text-sm">
              <strong>1–2 Lives</strong> (low-durability) • <strong>3–4 Lives</strong> (budget pick) • <strong>5 Lives</strong> (best value) • <strong>6–7 Lives</strong> (premium) • <strong>8–9 Lives</strong> (9-Lives Certified)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingSystemShowcase;
