
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
    <Button
      onClick={() => navigate('/chat')}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-orange-500 hover:bg-orange-600 border-2 border-white"
      size="icon"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="sr-only">Chat with AI</span>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20"></div>
    </Button>
  );
};

export default FloatingChatButton;
