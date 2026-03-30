import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Industria from "./pages/Industria";
import Productos from "./pages/Productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Wellness from "./pages/Wellness";
import Aseguradoras from "./pages/Aseguradoras";
import Cotizar from "./pages/Cotizar";
import Billetera from "./pages/Billetera";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/industria/:slug" element={<Industria />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:slug" element={<ProductoDetalle />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/aseguradoras" element={<Aseguradoras />} />
          <Route path="/cotizar" element={<Cotizar />} />
          <Route path="/billetera" element={<Billetera />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
