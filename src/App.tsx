import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GroceryPage from "./pages/GroceryPage";
import ClothingPage from "./pages/ClothingPage";
import MensClothingPage from "./pages/MensClothingPage";
import WomensClothingPage from "./pages/WomensClothingPage";
import ChildrensClothingPage from "./pages/ChildrensClothingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/grocery" element={<GroceryPage />} />
          <Route path="/clothing" element={<ClothingPage />} />
          <Route path="/clothing/men" element={<MensClothingPage />} />
          <Route path="/clothing/women" element={<WomensClothingPage />} />
          <Route path="/clothing/children" element={<ChildrensClothingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
