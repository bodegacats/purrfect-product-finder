
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const ScratchingPage = () => {
  const [showEightPlusOnly, setShowEightPlusOnly] = useState(false);
  const [showNineLivesOnly, setShowNineLivesOnly] = useState(false);

  const scratchingProducts = [
    {
      name: "SmartCat Ultimate Scratching Post",
      category: "Scratching & Furniture",
      rating: 9,
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1581912520430-b4f6ee51d4c1?w=400&h=400&fit=crop",
      description: "Tall, sturdy sisal post that satisfies natural scratching instincts perfectly.",
      isPerfect: true
    },
    {
      name: "Cat Tree King Empire Tower",
      category: "Scratching & Furniture",
      rating: 8,
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=400&h=400&fit=crop",
      description: "Multi-level cat tree with scratching posts, hideouts, and perches."
    },
    {
      name: "PetFusion 3-Sided Vertical Cat Scratcher",
      category: "Scratching & Furniture",
      rating: 8,
      price: "$64.99",
      image: "https://images.unsplash.com/photo-1581912520430-b4f6ee51d4c1?w=400&h=400&fit=crop",
      description: "Innovative design allows scratching from multiple angles with recycled cardboard."
    },
    {
      name: "Bergan Turbo Scratcher Cat Toy",
      category: "Scratching & Furniture",
      rating: 7,
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=400&h=400&fit=crop",
      description: "Interactive scratching pad with ball track for entertainment and exercise."
    },
    {
      name: "TRIXIE Baza Cat Tree",
      category: "Scratching & Furniture",
      rating: 6,
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1581912520430-b4f6ee51d4c1?w=400&h=400&fit=crop",
      description: "Basic cat tree with scratching posts but lacks durability for larger cats."
    },
    {
      name: "Basic Cardboard Scratcher",
      category: "Scratching & Furniture",
      rating: 4,
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=400&h=400&fit=crop",
      description: "Simple cardboard scratcher that needs frequent replacement."
    }
  ];

  const filteredProducts = scratchingProducts.filter(product => {
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
            <span className="text-6xl mr-4">🪑</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-800">
              Scratching & Furniture
            </h1>
            <span className="text-6xl ml-4">🪑</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your furniture while giving your cat the perfect scratching experience! 🐾
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

export default ScratchingPage;
