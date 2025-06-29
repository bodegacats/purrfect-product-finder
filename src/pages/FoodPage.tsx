
import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const FoodPage = () => {
  const [showEightPlusOnly, setShowEightPlusOnly] = useState(false);
  const [showNineLivesOnly, setShowNineLivesOnly] = useState(false);

  const foodProducts = [
    {
      name: "Hill's Science Diet Adult Indoor Cat Food",
      category: "Food & Nutrition",
      rating: 9,
      price: "$54.99",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      description: "Precisely balanced nutrition for indoor cats with natural fiber for healthy digestion.",
      isPerfect: true
    },
    {
      name: "Royal Canin Indoor Adult Dry Cat Food",
      category: "Food & Nutrition",
      rating: 8,
      price: "$48.99",
      image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=400&h=400&fit=crop",
      description: "Tailored nutrition for indoor cats with optimal protein and fiber blend."
    },
    {
      name: "Blue Buffalo Wilderness High Protein",
      category: "Food & Nutrition",
      rating: 8,
      price: "$42.99",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      description: "Grain-free, high-protein recipe inspired by the diet of wild cats."
    },
    {
      name: "Purina Pro Plan Indoor Care",
      category: "Food & Nutrition",
      rating: 7,
      price: "$36.99",
      image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=400&h=400&fit=crop",
      description: "Complete nutrition with prebiotics for digestive health and hairball control."
    },
    {
      name: "Iams ProActive Health Indoor",
      category: "Food & Nutrition",
      rating: 6,
      price: "$28.99",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      description: "Affordable option with basic nutrition but lacks premium ingredients."
    },
    {
      name: "Generic Store Brand Cat Food",
      category: "Food & Nutrition",
      rating: 4,
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=400&h=400&fit=crop",
      description: "Budget cat food with minimal nutritional benefits and fillers."
    }
  ];

  const filteredProducts = foodProducts.filter(product => {
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
            <span className="text-6xl mr-4">🍽️</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-800">
              Food & Nutrition
            </h1>
            <span className="text-6xl ml-4">🍽️</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fuel your feline friend with nutrition that supports their health and happiness! 🥘
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

export default FoodPage;
