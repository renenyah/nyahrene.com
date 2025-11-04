import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop"; 
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VirtualRealityMobility from "./pages/VirtualRealityMobility";
import DesigningTheAfroverse from "./pages/DesigningTheAfroverse";
import SimAI from "./pages/SimAI";
import CheckMate from "./pages/CheckMate";
import AboutMe from "./pages/AboutMe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/virtual-reality-mobility" element={<VirtualRealityMobility />} />
          <Route path="/project/designing-the-afroverse" element={<DesigningTheAfroverse />} />
          <Route path="/project/sim-ai" element={<SimAI />} />
          <Route path="/project/checkmate" element={<CheckMate />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;