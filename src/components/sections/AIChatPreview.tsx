
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const AIChatPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <span className="text-6xl mr-4">💬</span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800">
              We Test Everything So Your Cat Gets the Best
            </h2>
            <span className="text-6xl ml-4">💬</span>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chat with our team of cat experts to get personalized recommendations based on your furry friend's specific needs, quirks, and personality! 🐱💭
          </p>
        </div>

        <Card className="max-w-5xl mx-auto p-12 bg-white border-2 border-dashed border-gray-300 shadow-lg relative">
          <div className="absolute top-4 left-4 text-4xl">😸</div>
          <div className="absolute top-4 right-4 text-4xl">🤖</div>
          <div className="text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Search className="w-12 h-12 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold text-navy-800 mb-4">Cat Expert Chat Coming Soon! 🚀</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our cat-loving team will help you find the perfect products based on your kitty's unique personality, preferences, and needs. No more guessing! 🎯
            </p>
            <div className="bg-gray-100 rounded-lg p-8 max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">😊</span>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm flex-1">
                    <p className="text-gray-700">"My senior cat has arthritis and hates most litter boxes. Any suggestions? 🥺"</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 justify-end">
                  <div className="bg-navy-100 rounded-lg p-4 shadow-sm flex-1 max-w-md">
                    <p className="text-navy-800">"Absolutely! Based on your cat's needs, I recommend low-entry boxes with softer litter... 🐾💙"</p>
                  </div>
                  <div className="w-8 h-8 bg-navy-600 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm">🤓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIChatPreview;
