
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const LitterPage = () => {
  const [showEightPlusOnly, setShowEightPlusOnly] = useState(false);
  const [showNineLivesOnly, setShowNineLivesOnly] = useState(false);

  const litterProducts = [
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
      name: "World's Best Cat Litter Multiple Cat Clumping",
      category: "Litter & Hygiene",
      rating: 8,
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      description: "Natural corn-based litter with outstanding clumping and odor control for multi-cat homes."
    },
    {
      name: "Dr. Elsey's Precious Cat Ultra Unscented Litter",
      category: "Litter & Hygiene",
      rating: 8,
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop",
      description: "Clay-based litter with superior clumping and minimal dust, preferred by veterinarians."
    },
    {
      name: "Arm & Hammer Clump & Seal Platinum Litter",
      category: "Litter & Hygiene",
      rating: 7,
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      description: "Advanced odor control with ARM & HAMMER baking soda and moisture-activated micro-granules."
    },
    {
      name: "Fresh Step Advanced Clumping Litter",
      category: "Litter & Hygiene",
      rating: 6,
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=400&fit=crop",
      description: "Basic clumping litter with decent odor control but lacks premium features."
    },
    {
      name: "Generic Store Brand Clay Litter",
      category: "Litter & Hygiene",
      rating: 3,
      price: "$8.99",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      description: "Budget option with minimal clumping and poor odor control."
    }
  ];

  const filteredProducts = litterProducts.filter(product => {
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
            <span className="text-6xl mr-4">🏠</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-800">
              Litter & Litter Systems
            </h1>
            <span className="text-6xl ml-4">🏠</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect litter solution that keeps your home fresh and your cat happy! 😸
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

export default LitterPage;
