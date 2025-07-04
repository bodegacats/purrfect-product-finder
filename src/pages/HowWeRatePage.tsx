import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Hammer, Heart, Users, DollarSign, Lightbulb, CheckCircle, BarChart3, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import NineLivesRating from "@/components/NineLivesRating";

const HowWeRatePage = () => {
  const ratingCategories = [
    {
      name: "Safety & Materials",
      icon: <Shield className="w-6 h-6" />,
      description: "Review mentions of materials, safety concerns, and health-related feedback",
      weight: "Critical",
      color: "text-red-600"
    },
    {
      name: "Durability & Build Quality",
      icon: <Hammer className="w-6 h-6" />,
      description: "Long-term user reports, durability mentions, and construction quality feedback",
      weight: "High",
      color: "text-orange-600"
    },
    {
      name: "Cat Acceptance & Enjoyment",
      icon: <Heart className="w-6 h-6" />,
      description: "User reports of cat behavior, preferences, and product engagement",
      weight: "Critical",
      color: "text-red-600"
    },
    {
      name: "Ease of Use (Human)",
      icon: <Users className="w-6 h-6" />,
      description: "User feedback on setup, maintenance, and overall experience",
      weight: "Medium",
      color: "text-blue-600"
    },
    {
      name: "Value for Money",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Price-to-quality ratio analysis from user reviews and market comparison",
      weight: "Medium",
      color: "text-green-600"
    },
    {
      name: "Innovation & Design",
      icon: <Lightbulb className="w-6 h-6" />,
      description: "User mentions of unique features, design quality, and problem-solving capabilities",
      weight: "Low",
      color: "text-purple-600"
    }
  ];

  const ratingScale = [
    { lives: 9, label: "9 Lives Certified", description: "Perfect in all categories", color: "text-yellow-500" },
    { lives: 8, label: "Excellent Choice", description: "Outstanding with minor flaws", color: "text-green-500" },
    { lives: 7, label: "Very Good", description: "Solid option with few issues", color: "text-green-500" },
    { lives: 6, label: "Good", description: "Decent but with noticeable flaws", color: "text-orange-500" },
    { lives: 5, label: "Average", description: "Meets basic needs", color: "text-orange-500" },
    { lives: 4, label: "Below Average", description: "Some significant issues", color: "text-orange-500" },
    { lives: 3, label: "Poor", description: "Major flaws present", color: "text-red-500" },
    { lives: 2, label: "Very Poor", description: "Serious problems", color: "text-red-500" },
    { lives: 1, label: "Avoid", description: "Significant safety or quality concerns", color: "text-red-500" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-navy-800">🐱 CatData AI</Link>
            </div>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            How We Rate Products 🔬
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our 9 Lives rating system combines comprehensive data analysis, review aggregation, and expert evaluation to give you the most accurate product ratings.
          </p>
        </div>

        {/* Rating Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy-800 mb-8 text-center">Our 6 Rating Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ratingCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color} bg-opacity-10`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-navy-800">{category.name}</CardTitle>
                      <span className={`text-sm font-medium ${category.color}`}>
                        {category.weight} Weight
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rating Scale */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy-800 mb-8 text-center">Understanding the 9 Lives Scale</h2>
          <div className="grid gap-4 max-w-4xl mx-auto">
            {ratingScale.map((rating, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <NineLivesRating rating={rating.lives} size="sm" />
                      <div>
                        <h3 className="font-bold text-navy-800">{rating.label}</h3>
                        <p className="text-gray-600 text-sm">{rating.description}</p>
                      </div>
                    </div>
                    {rating.lives === 9 && (
                      <Trophy className="w-6 h-6 text-yellow-500" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Analysis Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy-800 mb-8 text-center">Our Analysis Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-navy-800">Data Aggregation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We collect and analyze thousands of reviews, ratings, and user feedback from multiple sources across the web.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <CheckCircle className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-navy-800">Review Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Advanced algorithms filter out fake reviews and identify genuine user experiences to ensure data accuracy.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <Trophy className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-navy-800">Expert Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team of cat experts and data analysts evaluate patterns and trends to create final ratings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Credibility Section */}
        <div className="bg-navy-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-navy-800 mb-4">Why Trust Our Ratings? 🤔</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-navy-800 mb-2">Independent Analysis</h4>
              <p className="text-gray-700">We analyze public data objectively without brand partnerships or sponsored content influencing our ratings.</p>
            </div>
            <div>
              <h4 className="font-bold text-navy-800 mb-2">Expert Team</h4>
              <p className="text-gray-700">Our team includes data scientists, veterinarians, and experienced cat parents who understand what matters.</p>
            </div>
            <div>
              <h4 className="font-bold text-navy-800 mb-2">Transparent Methodology</h4>
              <p className="text-gray-700">Every aspect of our analysis process is documented and our methodology is completely transparent.</p>
            </div>
            <div>
              <h4 className="font-bold text-navy-800 mb-2">Continuous Updates</h4>
              <p className="text-gray-700">We regularly update ratings as new reviews and data become available to keep our recommendations current.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeRatePage;
