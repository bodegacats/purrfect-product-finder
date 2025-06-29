
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import NineLivesBadge from "@/components/NineLivesBadge";

const NineLivesCertifiedPage = () => {
  const perfectProducts = [
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
      name: "Hill's Science Diet Adult Indoor Cat Food",
      category: "Food & Nutrition",
      rating: 9,
      price: "$54.99",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop",
      description: "Precisely balanced nutrition for indoor cats with natural fiber for healthy digestion.",
      isPerfect: true
    },
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
      name: "PetSafe SlimCat Interactive Feeder Ball",
      category: "Toys & Entertainment",
      rating: 9,
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=400&h=400&fit=crop",
      description: "Interactive puzzle feeder that provides mental stimulation and slow feeding.",
      isPerfect: true
    }
  ];

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
            <span className="text-6xl mr-4">🏆</span>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-800">
              9 Lives Certified Products
            </h1>
            <span className="text-6xl ml-4">🏆</span>
          </div>
          <div className="flex justify-center mb-6">
            <NineLivesBadge size="lg" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These exceptional products earned perfect scores across all 9 categories we test. They represent the absolute best in cat products! 🌟
          </p>
        </div>

        {/* Perfect Score Badge Showcase */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 mb-12 border-2 border-yellow-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-4">What Makes a Product 9 Lives Certified? 🤔</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">
              Only products that achieve excellence in ALL 9 categories earn this prestigious certification. These products represent the pinnacle of cat product design and functionality.
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-sm">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="font-semibold text-navy-800">🛡️ Safety & Materials</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="font-semibold text-navy-800">🔨 Durability & Build</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="font-semibold text-navy-800">😻 Cat Acceptance</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="font-semibold text-navy-800">👥 Ease of Use</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="font-semibold text-navy-800">💰 Value for Money</span>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <span className="font-semibold text-navy-800">💡 Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {perfectProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-navy-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-navy-800 mb-4">Can't Decide? 🤷‍♀️</h3>
          <p className="text-lg text-gray-700 mb-6">
            Any of these 9 Lives Certified products will make your cat (and you) happy. They've all earned perfect scores for a reason!
          </p>
          <p className="text-gray-600">
            <em>These products represent less than 1% of all cat products we've tested. 📊</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NineLivesCertifiedPage;
