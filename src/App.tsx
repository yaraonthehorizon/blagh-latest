import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import Hadith from "./pages/Hadith";
import { useState } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import Profile from "./pages/Profile";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import Search from "./components/SearchBar";
import ChildrenCategory from "./pages/ChildrenCategory";
import "@/lib/i18n/init";

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
                <BrowserRouter basename={import.meta.env.VITE_BASE_PATH}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/quran" element={<Quran />} />
                    <Route path="/hadith" element={<Hadith />} />
                    <Route path="/athkar" element={<Athkar />} />
                    <Route path="/knowledge" element={<Knowledge />} />
                    <Route path="/baligh" element={<Baligh />} />
                    <Route path="/children" element={<Children />} />
                    <Route
                      path="/children/:categoryId"
                      element={<ChildrenCategory />}
                    />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <FloatingActionButton />
                  <BottomNav />
                </BrowserRouter>
              </AuthProvider>
            </>
          )}
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
