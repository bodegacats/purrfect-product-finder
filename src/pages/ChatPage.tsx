
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Sparkles } from "lucide-react";

const ChatPage = () => {
  const conversationStarters = [
    {
      title: "🏆 9 Lives Certified Products",
      prompt: "Show me 9 Lives rated litter boxes",
      category: "Premium"
    },
    {
      title: "🍽️ Senior Cat Nutrition",
      prompt: "Best 8+ Lives food for senior cats",
      category: "Food"
    },
    {
      title: "📊 Product Comparisons",
      prompt: "Compare scratching post ratings",
      category: "Analysis"
    },
    {
      title: "💰 Budget-Friendly Finds",
      prompt: "Show me high-rated affordable cat toys",
      category: "Value"
    },
    {
      title: "🆕 Latest Reviews",
      prompt: "What are the newest 8+ Lives products?",
      category: "New"
    },
    {
      title: "🎯 Specific Problems",
      prompt: "Help me solve my cat's litter box issues",
      category: "Solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-navy-800">🐱 CatData AI</h1>
            </div>
            <div className="hidden md:block">
              <Navigation />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8 h-[calc(100vh-12rem)]">
          {/* Conversation Starters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full p-6">
              <div className="flex items-center mb-6">
                <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
                <h2 className="text-lg font-semibold text-navy-800">Quick Start</h2>
              </div>
              
              <div className="space-y-3">
                {conversationStarters.map((starter, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left h-auto p-3 hover:bg-orange-50 hover:text-orange-700"
                    onClick={() => {
                      // This would trigger the chat widget with the prompt
                      console.log('Starting conversation:', starter.prompt);
                    }}
                  >
                    <div className="w-full">
                      <div className="text-sm font-medium mb-1">{starter.title}</div>
                      <div className="text-xs text-gray-600 font-normal">
                        "{starter.prompt}"
                      </div>
                      <div className="text-xs text-orange-600 mt-1 font-medium">
                        {starter.category}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-navy-50 rounded-lg">
                <h3 className="font-semibold text-navy-800 mb-2">💡 Pro Tips</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ask about specific cat ages or breeds</li>
                  <li>• Compare multiple products at once</li>
                  <li>• Request budget-friendly alternatives</li>
                  <li>• Get detailed 9 Lives breakdowns</li>
                </ul>
              </div>
            </Card>
          </div>

          {/* Chat Widget Area */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b bg-gradient-to-r from-orange-50 to-yellow-50">
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-orange-500 mr-3" />
                  <div>
                    <h1 className="text-2xl font-bold text-navy-800">
                      Chat with CatData AI 🤖
                    </h1>
                    <p className="text-gray-600 mt-1">
                      Get instant product recommendations based on our 9 Lives rating system
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Widget Placeholder */}
              <div className="flex-1 p-6 flex items-center justify-center">
                <div className="text-center max-w-md">
                  <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="w-12 h-12 text-orange-500" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-navy-800 mb-3">
                    AI Chat Widget Loading...
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    This is where your external chat bot will be embedded. 
                    The widget will have full access to our product database and 9 Lives ratings.
                  </p>

                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8">
                    <code className="text-sm text-gray-500">
                      {`<!-- External Chat Widget Integration Point -->`}
                      <br />
                      {`<div id="catdata-chat-widget"></div>`}
                    </code>
                  </div>

                  <p className="text-xs text-gray-500 mt-4">
                    💡 Try the conversation starters on the left to see how the AI can help!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
