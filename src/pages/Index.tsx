import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NineLivesRating from "@/components/NineLivesRating";
import NineLivesBadge from "@/components/NineLivesBadge";
import ProductCard from "@/components/ProductCard";

const Index = () => {
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-navy-800">CatData AI</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-navy-600 hover:text-navy-800 transition-colors">Research</a>
              <a href="#" className="text-navy-600 hover:text-navy-800 transition-colors">Categories</a>
              <a href="#" className="text-navy-600 hover:text-navy-800 transition-colors">Reviews</a>
              <a href="#" className="text-navy-600 hover:text-navy-800 transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              Find Cat Products Worth
              <span className="block text-orange-400">All 9 Lives</span>
            </h1>
            <p className="text-xl md:text-2xl text-navy-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our AI analyzes thousands of reviews to recommend only the best products for your feline friends
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-16">
              <div className="flex items-center text-navy-200">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-lg font-medium">50,000+ Products Tested</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-navy-600"></div>
              <div className="flex items-center text-navy-200">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-lg font-medium">Research-Backed Ratings</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-navy-600"></div>
              <div className="flex items-center text-navy-200">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                <span className="text-lg font-medium">Expert Recommendations</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Your Search
              <Search className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* 9 Lives Rating System Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              The 9 Lives Rating System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our signature rating system evaluates products across 9 critical factors that matter most to cats and their owners
            </p>
            
            {/* Rating Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <NineLivesRating rating={9} size="lg" />
                <p className="mt-3 font-semibold text-navy-800">Perfect Score</p>
                <p className="text-sm text-gray-600">Outstanding in every way</p>
              </div>
              <div className="text-center">
                <NineLivesRating rating={7} size="lg" />
                <p className="mt-3 font-semibold text-navy-800">Excellent</p>
                <p className="text-sm text-gray-600">Highly recommended</p>
              </div>
              <div className="text-center">
                <NineLivesRating rating={5} size="lg" />
                <p className="mt-3 font-semibold text-navy-800">Good</p>
                <p className="text-sm text-gray-600">Solid choice with trade-offs</p>
              </div>
              <div className="text-center">
                <NineLivesRating rating={2} size="lg" />
                <p className="mt-3 font-semibold text-navy-800">Poor</p>
                <p className="text-sm text-gray-600">Look for alternatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Top-Rated Cat Products
            </h2>
            <p className="text-xl text-gray-600">
              Products that have earned their stripes in our rigorous testing process
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
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* How 9 Lives Rating Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              How the 9 Lives Rating Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product is evaluated across 9 essential categories, earning one "life" for excellence in each area
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1-3</span>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Basic Quality</h3>
              <NineLivesRating rating={2} />
              <p className="text-gray-600 mt-3">
                Products that meet minimum standards but have significant limitations
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4-8</span>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Recommended</h3>
              <NineLivesRating rating={7} />
              <p className="text-gray-600 mt-3">
                Solid products that excel in most areas with minor compromises
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-yellow-200 bg-yellow-50">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">9</span>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-2">Perfect Score</h3>
              <div className="flex justify-center mb-3">
                <NineLivesBadge />
              </div>
              <NineLivesRating rating={9} />
              <p className="text-gray-600 mt-3">
                Outstanding products that excel in every category we test
              </p>
            </Card>
          </div>

          {/* Rating Categories */}
          <div className="bg-navy-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy-800 text-center mb-8">
              The 9 Essential Categories We Test
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <span className="font-semibold text-navy-800">Safety & Materials</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <span className="font-semibold text-navy-800">Durability & Build</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <span className="font-semibold text-navy-800">Cat Acceptance</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <span className="font-semibold text-navy-800">Ease of Use</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <span className="font-semibold text-navy-800">Value for Money</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">6</span>
                  </div>
                  <span className="font-semibold text-navy-800">Innovation</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">7</span>
                  </div>
                  <span className="font-semibold text-navy-800">Customer Support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">8</span>
                  </div>
                  <span className="font-semibold text-navy-800">Environmental Impact</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">9</span>
                  </div>
                  <span className="font-semibold text-navy-800">Long-term Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Placeholder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              AI-Powered Product Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chat with our AI to get personalized recommendations based on your cat's specific needs, preferences, and lifestyle
            </p>
          </div>

          {/* Large Placeholder for AI Chat */}
          <Card className="max-w-5xl mx-auto p-12 bg-white border-2 border-dashed border-gray-300 shadow-lg">
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="w-12 h-12 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-4">AI Chat Interface Coming Soon</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our advanced AI will analyze your cat's needs and provide personalized product recommendations based on thousands of verified reviews and expert testing data.
              </p>
              <div className="bg-gray-100 rounded-lg p-8 max-w-3xl mx-auto">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                      <p className="text-gray-700">"I need a litter box for a senior cat with arthritis"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 justify-end">
                    <div className="bg-navy-100 rounded-lg p-4 shadow-sm flex-1 max-w-md">
                      <p className="text-navy-800">Based on your cat's needs, I recommend low-entry litter boxes with...</p>
                    </div>
                    <div className="w-8 h-8 bg-navy-600 rounded-full flex-shrink-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Why Cat Owners Trust CatData AI
            </h2>
            <p className="text-xl text-gray-600">
              We combine cutting-edge AI with rigorous testing to help you make the best choices for your cat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Our advanced algorithms analyze thousands of reviews, specifications, and expert opinions to surface the best products.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">Rigorous Testing</h3>
              <p className="text-gray-600">
                Every recommendation is backed by real-world testing and verified user experiences from fellow cat owners.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-navy-800 mb-4">Personalized Results</h3>
              <p className="text-gray-600">
                Get recommendations tailored to your cat's age, breed, health conditions, and personality traits.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find the Perfect Products for Your Cat?
          </h2>
          <p className="text-xl text-navy-200 mb-8">
            Join thousands of cat owners who trust CatData AI for their product research
          </p>
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">CatData AI</h3>
              <p className="text-navy-300">
                The most trusted source for cat product research and recommendations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Research</h4>
              <ul className="space-y-2 text-navy-300">
                <li><a href="#" className="hover:text-white transition-colors">Food & Treats</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Toys & Enrichment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Health & Wellness</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-navy-300">
                <li><a href="#" className="hover:text-white transition-colors">Testing Methodology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Expert Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cat Care Guides</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-navy-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-navy-700 mt-8 pt-8 text-center text-navy-400">
            <p>&copy; 2024 CatData AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
