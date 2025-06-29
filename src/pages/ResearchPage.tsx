
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, BarChart3, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ResearchPage = () => {
  const researchReports = [
    {
      title: "Why Only 3% of Litter Boxes Earn 9 Lives",
      category: "Litter & Systems",
      date: "December 2024",
      readTime: "8 min read",
      summary: "Our comprehensive analysis of 247 litter boxes reveals the shocking truth about quality standards in the pet industry.",
      icon: <BarChart3 className="w-6 h-6" />,
      slug: "litter-box-study"
    },
    {
      title: "The Great Cat Food Study: Lives Rating Results",
      category: "Food & Nutrition",
      date: "November 2024",
      readTime: "12 min read",
      summary: "We tested 189 cat food products across 9 categories. Here's what we discovered about nutrition quality.",
      icon: <TrendingUp className="w-6 h-6" />,
      slug: "cat-food-study"
    },
    {
      title: "Scratching Post Durability: Which Earn 8+ Lives?",
      category: "Scratching & Furniture",
      date: "October 2024",
      readTime: "6 min read",
      summary: "Our 6-month durability test of 156 scratching posts reveals surprising winners and disappointing failures.",
      icon: <FileText className="w-6 h-6" />,
      slug: "scratching-post-durability"
    }
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
            Research & Studies 📊
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the science behind our 9 Lives rating system. Our independent research helps cat parents make informed decisions.
          </p>
        </div>

        {/* Research Reports Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto mb-12">
          {researchReports.map((report, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      {report.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-navy-800 mb-2">{report.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="bg-navy-100 text-navy-800 px-2 py-1 rounded-full text-xs font-medium">
                          {report.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {report.readTime}
                        </span>
                        <span>{report.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Read Study
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{report.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Methodology CTA */}
        <div className="text-center bg-navy-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-navy-800 mb-4">How Do We Rate Products? 🔬</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Learn about our rigorous 9-category testing methodology that ensures every rating is accurate and reliable.
          </p>
          <Link to="/how-we-rate">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              See Our Methodology
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;
