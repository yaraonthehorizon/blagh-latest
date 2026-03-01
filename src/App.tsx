import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import BottomNav from "@/components/BottomNav";
import Index from "./pages/Index";
import Knowledge from "./pages/Knowledge";
import Baligh from "./pages/Baligh";
import NotFound from "./pages/NotFound";
import { Quran } from "./pages/Quran";
import { Athkar } from "./pages/Athkar";
import { Children } from "./pages/Children";
import { useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import Profile from "./pages/Profile";
import { Hash } from "lucide-react";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          {showSplash ? (
            <SplashScreen onComplete={() => setShowSplash(false)} />
          ) : (
            <>
              <Toaster />
              <Sonner />
              <AuthProvider>
                <HashRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/quran" element={<Quran />} />
                    <Route path="/athkar" element={<Athkar />} />
                    <Route path="/knowledge" element={<Knowledge />} />
                    <Route path="/baligh" element={<Baligh />} />
                    <Route path="/children" element={<Children />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <BottomNav />
                </HashRouter>
              </AuthProvider>
            </>
          )}
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
