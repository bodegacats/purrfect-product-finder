
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingChatButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Don't show the button on the chat page itself
  if (location.pathname === '/chat') {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-lg shadow-lg p-3 mb-3 max-w-xs">
        <p className="text-sm text-charcoal-600 mb-2">
          <strong>Not sure where to start?</strong>
        </p>
        <p className="text-xs text-charcoal-500">
          Chat with our AI—tell us about your cat's habits, and get tailored picks in seconds.
        </p>
      </div>
      <Button
        onClick={() => navigate('/chat')}
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-500 hover:bg-orange-600 border-2 border-white"
        size="icon"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Chat with AI</span>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20"></div>
      </Button>
    </div>
  );
};

export default FloatingChatButton;
