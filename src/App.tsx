import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LitterPage from "./pages/LitterPage";
import FoodPage from "./pages/FoodPage";
import ScratchingPage from "./pages/ScratchingPage";
import ToysPage from "./pages/ToysPage";
import NineLivesCertifiedPage from "./pages/NineLivesCertifiedPage";
import ChatPage from "./pages/ChatPage";
import NotFound from "./pages/NotFound";
import FloatingChatButton from "./components/FloatingChatButton";
import ResearchPage from "./pages/ResearchPage";
import HowWeRatePage from "./pages/HowWeRatePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/litter" element={<LitterPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/scratching" element={<ScratchingPage />} />
          <Route path="/toys" element={<ToysPage />} />
          <Route path="/nine-lives-certified" element={<NineLivesCertifiedPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/how-we-rate" element={<HowWeRatePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingChatButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
