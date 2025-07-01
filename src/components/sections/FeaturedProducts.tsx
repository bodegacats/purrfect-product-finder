
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const FeaturedProducts = () => {
  const sampleProducts = [
    {
      name: "PetSafe ScoopFree Ultra Self-Cleaning Litter Box",
      category: "Litter & Hygiene",
      rating: 9,
      price: "From $169",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Self-cleaning unit cuts scooping time in half.",
      isPerfect: true
    },
    {
      name: "Hill's Science Diet Indoor Cat Food",
      category: "Food & Nutrition",
      rating: 8,
      price: "From $55",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      description: "High-protein formula supports healthy digestion and weight management."
    },
    {
      name: "FELIWAY Classic Cat Calming Diffuser",
      category: "Health & Wellness",
      rating: 7,
      price: "From $25",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Reduces stress-related behaviors using natural pheromones."
    },
    {
      name: "Whisker City Scratching Post",
      category: "Toys & Enrichment",
      rating: 4,
      price: "From $40",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      description: "Basic sisal post that gets the job done on a budget."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal-900 mb-6">
            Top-Rated Cat Products
          </h2>
          <p className="text-xl text-charcoal-600">
            Products that have earned their stripes and our cats' approval.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {sampleProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
