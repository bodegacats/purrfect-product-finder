
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const FeaturedProducts = () => {
  const sampleProducts = [
    {
      name: "PetSafe ScoopFree Ultra Self-Cleaning Litter Box",
      category: "Litter & Hygiene",
      rating: 9,
      price: "$169.95",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Revolutionary self-cleaning technology with crystal litter that absorbs odors for weeks.",
      isPerfect: true
    },
    {
      name: "Hill's Science Diet Indoor Cat Food",
      category: "Food & Nutrition",
      rating: 8,
      price: "$54.99",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      description: "Precisely balanced nutrition for indoor cats with natural fiber for healthy digestion."
    },
    {
      name: "FELIWAY Classic Cat Calming Diffuser",
      category: "Health & Wellness",
      rating: 7,
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Clinically proven to reduce stress-related behaviors in cats using natural pheromones."
    },
    {
      name: "Whisker City Scratching Post",
      category: "Toys & Enrichment",
      rating: 5,
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      description: "Basic sisal scratching post that gets the job done but lacks premium features."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <span className="text-6xl mr-4">🏅</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              Top-Rated Cat Products
            </h2>
            <span className="text-6xl ml-4">🏅</span>
          </div>
          <p className="text-xl text-gray-600">
            Products that have earned their stripes (and our cats' approval!) 🐾
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold"
          >
            View All Products 📱
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
