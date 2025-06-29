
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
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
