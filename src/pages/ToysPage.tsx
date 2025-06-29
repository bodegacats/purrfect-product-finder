
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const ToysPage = () => {
  const [showEightPlusOnly, setShowEightPlusOnly] = useState(false);
  const [showNineLivesOnly, setShowNineLivesOnly] = useState(false);

  const toyProducts = [
    {
      name: "PetSafe SlimCat Interactive Feeder Ball",
      category: "Toys & Entertainment",
      rating: 9,
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=400&h=400&fit=crop",
      description: "Interactive puzzle feeder that provides mental stimulation and slow feeding.",
      isPerfect: true
    },
    {
      name: "Feather Wand Interactive Cat Toy",
      category: "Toys & Entertainment",
      rating: 8,
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop",
      description: "Classic feather wand that triggers hunting instincts and provides exercise."
    },
    {
      name: "Catit Senses 2.0 Circuit Ball Track",
      category: "Toys & Entertainment",
      rating: 8,
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=400&h=400&fit=crop",
      description: "Modular ball track system that keeps cats engaged and entertained for hours."
    },
    {
      name: "Kong Kickeroo Cat Toy",
      category: "Toys & Entertainment",
      rating: 7,
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop",
      description: "Catnip-filled kicker toy perfect for bunny kicks and cuddles."
    },
    {
      name: "Laser Pointer Cat Toy",
      category: "Toys & Entertainment",
      rating: 5,
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=400&h=400&fit=crop",
      description: "Basic laser pointer that provides exercise but may cause frustration without tangible prey."
    },
    {
      name: "Cheap Plastic Mouse Toy",
      category: "Toys & Entertainment",
      rating: 3,
      price: "$2.99",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop",
      description: "Basic plastic toy that breaks easily and provides minimal engagement."
    }
  ];

  const filteredProducts = toyProducts.filter(product => {
    if (showNineLivesOnly) return product.rating === 9;
    if (showEightPlusOnly) return product.rating >= 8;
    return true;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-navy-800">🐱 CatData AI</h1>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <span className="text-6xl mr-4">🧸</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-800">
              Toys & Entertainment
            </h1>
            <span className="text-6xl ml-4">🧸</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your cat mentally stimulated and physically active with engaging toys! 🎾
          </p>
        </div>

        {/* Filters */}
        <ProductFilters
          showEightPlusOnly={showEightPlusOnly}
          showNineLivesOnly={showNineLivesOnly}
          onEightPlusChange={setShowEightPlusOnly}
          onNineLivesChange={setShowNineLivesOnly}
        />

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products match your current filters 😿</p>
            <p className="text-gray-500 mt-2">Try adjusting your filter settings above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToysPage;
